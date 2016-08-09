import Ember from 'ember';

export default Ember.Controller.extend({
  wizard: {
    'intro': false,
    'basic': false,
    'video': false
  },

  didValidate: false,

  actions: {
    nextPage(prop) {
      console.log(prop);

      if ( prop === 'intro' ) {
        this.set(`wizard.${prop}`, true);
      } else {
        var model = this.get('model');

        model.validate().then(({
          model,
          validations
        }) => {
          console.log(validations.get('isValid'));
          if (validations.get('isValid')) {
            this.set(`wizard.${prop}`, true);
          }
          this.set('didValidate', true);
        });
      };
    },

    formSubmit() {

    }
  }
});
