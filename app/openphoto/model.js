import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  country: DS.attr('string'),
  city: DS.attr('string'),
  status: DS.attr('string'),

  post_status: DS.attr('string'),
  post_id: DS.attr('number'),
  slug: DS.attr('string'),
  content: DS.attr('string'),

  lat: DS.attr(),
  lng: DS.attr(),
  address: DS.attr('string')
});
