import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  isHomepage: Ember.computed.equal('currentRouteName', 'index'),
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
