import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials);
    },
  }
});
