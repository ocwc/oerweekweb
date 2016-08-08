import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord('submission');
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
