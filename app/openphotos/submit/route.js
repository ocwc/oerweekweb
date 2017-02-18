import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('openphoto');
  },

  actions: {
    createOpenPhoto: function() {
      this.get('controller').get('model').save();
      this.get('controller').set('isSubmitted', true);
    }
  }
});
