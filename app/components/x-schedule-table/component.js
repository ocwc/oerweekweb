import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({
  didUpdateAttrs() {
    this._super(...arguments);

    try {
      let offset_top = this.$().closest('.container').offset().top;

      $('body').animate({
        scrollTop: offset_top
      });
    } catch (e) {
      console.log(e);
    }
  }
});
