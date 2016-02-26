import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  title: DS.attr('string'),
  post_type: DS.attr('string'),
  post_status: DS.attr('string'),
  post_id: DS.attr('number'),
  slug: DS.attr('string'),
  content: DS.attr('string'),
  content_excerpt: DS.attr('string'),
  contact: DS.attr('string'),
  institution: DS.attr('string'),
  form_language: DS.attr('string'),
  license: DS.attr('string'),
  link: DS.attr('string'),
  categories: DS.attr(),
  tags: DS.attr(),
  image_url: DS.attr('string'),
  country: DS.attr('string'),
  city: DS.attr('string'),
  event_time: DS.attr('string'),
  event_type: DS.attr('string'),
  event_source_datetime: DS.attr('string'),
  event_source_timezone: DS.attr('string')
});
