import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('submission', {
      'datetime': new Date(2017, 2, 27) // also update date in controller.resetSubmission();
    });
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.resetData(controller);
  },

  resetController(controller, isExiting) {
    this._super(controller, isExiting);

    if (isExiting) {
      var model = controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
