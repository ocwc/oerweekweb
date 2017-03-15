import Ember from 'ember';

let TabDate = Ember.Object.extend({
  value: '',
  text: '',
  isActive: false
});

export default Ember.Component.extend({
  dates: Ember.A([
      TabDate.create({value: '2017-03-27', text: 'Monday, 27.3.',     isActive: true}),
      TabDate.create({value: '2017-03-28', text: 'Tuesday, 28.3.',    isActive: false}),
      TabDate.create({value: '2017-03-29', text: 'Wednesday, 29.3.',  isActive: false}),
      TabDate.create({value: '2017-03-30', text: 'Thursday, 30.3.',  isActive: false}),
      TabDate.create({value: '2017-03-31', text: 'Friday, 31.3.',    isActive: false}),
  ]),
  event_type: 'local',

  actions: {
    selectDate(selectedTab) {
      this.get('dates').setEach('isActive', false);
      selectedTab.set('isActive', true);

      this.sendAction('selectDate', selectedTab, this.get('event_type'));
    }
  }
});
