import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['selectedDate'],
  selectedDate: '2016-03-07',

  filteredEvent: Ember.computed('selectedDate', 'model', function(){
    return this.store.query('event', {
      'event_type': 'local',
      'page_size': 99,
      'date': this.get('selectedDate')
    });
  })
});
