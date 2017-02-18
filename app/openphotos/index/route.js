import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    approveOpenPhoto: function(openphoto) {
      openphoto.set('status', 'approved');
      openphoto.save();
    }
  }
});
