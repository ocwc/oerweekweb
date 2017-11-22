import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  session: service('session'),

  actions: {
    authenticate() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

        console.log(this.getProperties('identification', 'password'));
      this.get('session').authenticate(authenticator, credentials);
    },
  }
});
