import Ember from 'ember';

export default Ember.Component.extend({
  didUpdateAttrs() {
    this._super(...arguments);

    try {
      let offset_top = this.$().closest('.container').offset().top;

      Ember.$('body').animate({
        scrollTop: offset_top
      });
    } catch (e) {
      
    }
  }
});
