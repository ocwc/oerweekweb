import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('submission', {
      // 'datetime': 'Mon Mar 27 2017 15:00:00 GMT+0200 (CEST)'
      'datetime': new Date(2017, 2, 27)
    });
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      var model = controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
