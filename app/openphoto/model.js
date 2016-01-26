import DS from 'ember-data';
// import EmberValidations from 'ember-validations';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  country: DS.attr('string'),
  city: DS.attr('string'),
  status: DS.attr('string'),

  // validations: {
  //   title: { presence: true},
  //   url: { presence: true, length: { minimum: 10 }},
  // },
});
