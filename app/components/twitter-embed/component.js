import Component from '@ember/component';

export default Component.extend({
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
