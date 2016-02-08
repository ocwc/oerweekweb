import Ember from 'ember';
export default Ember.Component.extend({
  _insertScript(src) {
    var insertedNode;

    var script    = document.createElement('script');
    script.type   = 'text/javascript';
    script.async  = true;
    script.src    = src;
    insertedNode = document.getElementsByTagName('head')[0].appendChild(script);
    return insertedNode;
  },

  didInsertElement() {
    this._super(...arguments);

    if ( this.$('.twitter-tweet').length > 0 ) {
      this._insertedNode = this._insertScript('//platform.twitter.com/widgets.js');
    } else if ( this.$('.instagram-media').length > 0 ) {
      this._insertedNode = this._insertScript('//platform.instagram.com/en_US/embeds.js');
      if ( typeof window.instgrm !== 'undefined' ) {
        window.instgrm.Embeds.process();
      }
    }
  },

  willClearRender: function() {
    this._super(...arguments);
    if ( this._insertedNode ) {
      Ember.$(this._insertedNode).remove();
    }
  }
});
