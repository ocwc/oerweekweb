import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  localDate: '2016-03-07',
  onlineDate: '2016-03-07',

  filteredLocalEvent: computed('localDate', 'model', function(){
    return this.store.query('event', {
      'event_type': 'local',
      'page_size': 99,
      'date': this.get('localDate')
    });
  }),

  filteredOnlineEvent: computed('onlineDate', 'model', function(){
    return this.store.query('event', {
      'event_type': 'online',
      'page_size': 99,
      'date': this.get('onlineDate')
    });
  }),

  slicedOpenPhoto: computed('model', function(){
    return this.get('model').slice(0, 3);
  }),

  actions: {
    selectDate(selectedTab, event_type) {
      if ( event_type === 'online') {
          this.set('onlineDate', selectedTab.get('value'));
      } else {
          this.set('localDate', selectedTab.get('value'));
      }
    }
  }
});
