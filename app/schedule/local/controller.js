import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['selectedDate'],
  selectedDate: '2016-03-07',

  filteredEvent: computed('selectedDate', 'model', function(){
    return this.store.query('event', {
      'event_type': 'local',
      'page_size': 99,
      'date': this.get('selectedDate')
    });
  })
});
