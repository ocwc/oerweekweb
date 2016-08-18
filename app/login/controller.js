import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

        console.log(this.getProperties('identification', 'password'));
      this.get('session').authenticate(authenticator, credentials);
    },
  }
});
