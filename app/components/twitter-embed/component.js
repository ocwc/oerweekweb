import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    this._super(...arguments);
    let tweet = this.get('tweet');

    let self = this;
    twttr.ready(
      function(twttr) {
        twttr.widgets.createTweet(
          tweet.id_str,
          self.get('element'),
          {
            theme: 'light'
          }
        );
      }
    );
  }
});
