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
  contributionType: [
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
  contributionType: DS.attr('string'),
  videoType: DS.attr('string')
});
