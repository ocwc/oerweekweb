// import Ember from 'ember';
import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

var Validations = buildValidations({
  firstname: [
    validator('presence', true),
  ],
  lastname: [
    validator('presence', true),
  ],
  email: [
    validator('presence', true),
  ],
  country: [
    validator('presence', true),
  ],
  city: [
    validator('presence', true),
  ],
  language: [
    validator('presence', true),
  ],
  contributiontype: [
    validator('presence', true),
  ]
}, {
  debounce: 500
});

export default DS.Model.extend(Validations, {
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  institution: DS.attr('string'),
  email: DS.attr('string'),
  country: DS.attr('string'),
  city: DS.attr('string'),
  language: DS.attr('string'),
  contributiontype: DS.attr('string'),

  localeventtype: DS.attr('string'),
  title: DS.attr('string'),
  facilitator: DS.attr('string'),
  description: DS.attr('string'),
  datetime: DS.attr('string'),
  timezone: DS.attr('string'),
  directions: DS.attr('string'),
  archive: DS.attr('boolean')
});
