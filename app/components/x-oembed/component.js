import $ from 'jquery';
import Component from '@ember/component';
import {inject as service} from '@ember/service';


export default Component.extend({
  fastboot: service(),

  _insertScript(src) {
    let insertedNode;
    let script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.src = src;
    insertedNode = document.getElementsByTagName('head')[0].appendChild(script);
    return insertedNode;
  },

  didInsertElement() {
    this._super(...arguments);

    if (this.get('fastBoot.isFastBoot')) {
      if (this.$('.twitter-tweet').length > 0) {
        this._insertedNode = this._insertScript('//platform.twitter.com/widgets.js');
      } else if (this.$('.instagram-media').length > 0) {
        this._insertedNode = this._insertScript('//platform.instagram.com/en_US/embeds.js');
        if (typeof window.instgrm !== 'undefined') {
          window.instgrm.Embeds.process();
        }
      }
    }
  }
  ,

  willClearRender: function () {
    this._super(...arguments);
    if (this._insertedNode) {
      $(this._insertedNode).remove();
    }
  }
});
