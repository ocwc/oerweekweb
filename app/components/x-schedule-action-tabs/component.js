import { A } from '@ember/array';
import Component from '@ember/component';
import EmberObject from '@ember/object';

let TabDate = EmberObject.extend({
  value: '',
  text: '',
  isActive: false
});

export default Component.extend({
  dates: A([
      TabDate.create({value: '2016-03-07', text: 'Monday, 7.3',     isActive: true}),
      TabDate.create({value: '2016-03-08', text: 'Tuesday, 8.3',    isActive: false}),
      TabDate.create({value: '2016-03-09', text: 'Wednesday, 9.3',  isActive: false}),
      TabDate.create({value: '2016-03-10', text: 'Thursday, 10.3',  isActive: false}),
      TabDate.create({value: '2016-03-11', text: 'Friday, 11.3',    isActive: false}),
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
