import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    formSubmit() {
      let model = this.get('model');
      // const { model, validations } = this.get('model').validate();
      // this.get('model').validate();
      //

      model.validate().then(({
        model,
        validations
      }) => {
        console.log('isValid', validations.get('isValid'));
        console.log('errors', validations.get('errors'));
        console.log(model.validations.attrs);
        if (validations.get('isValid')) {
          this.setProperties({
            showAlert: false,
            isRegistered: true,
            showCode: false
          });
        } else {
          this.set('showAlert', true);
        }
        this.set('didValidate', true);
      }, (errors) => {

      });
    }
  }
});
