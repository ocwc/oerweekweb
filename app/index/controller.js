import Ember from 'ember';

export default Ember.Controller.extend({
  localDate: '2017-03-27',
  onlineDate: '2017-03-27',

  filteredLocalEvent: Ember.computed('localDate', 'model', function(){
    return this.store.query('event', {
      'event_type': 'local',
      'page_size': 99,
      'date': this.get('localDate')
    });
  }),

  filteredOnlineEvent: Ember.computed('onlineDate', 'model', function(){
    return this.store.query('event', {
      'event_type': 'online',
      'page_size': 99,
      'date': this.get('onlineDate')
    });
  }),

  slicedOpenPhoto: Ember.computed('model', function(){
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
