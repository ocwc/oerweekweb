import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeSubmissionStatus(model, postStatus) {
      model.set('postStatus', postStatus);
      model.save();
    }
  }
});
