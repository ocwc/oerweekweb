import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['selectedDate'],
  selectedDate: '2017-03-27',

  filteredEvent: Ember.computed('selectedDate', 'model', function(){
    return this.store.query('event', {
      'event_type': 'online',
      'page_size': 99,
      'date': this.get('selectedDate')
    });
  })
});
