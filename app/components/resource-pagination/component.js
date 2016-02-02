import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    previousPage: function() {
      this.sendAction('previousPage');
    },
    nextPage: function() {
      this.sendAction('nextPage');
    }

  }
});
