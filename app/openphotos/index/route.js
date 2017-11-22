import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    approveOpenPhoto: function(openphoto) {
      openphoto.set('status', 'approved');
      openphoto.save();
    }
  }
});
