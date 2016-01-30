import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('openphoto', function() {});
  this.route('openphotos', function() {
    this.route('submit');
  });
  this.route('login');
  this.route('styleguide');
  this.route('submit');

  this.route('page', {
    path: '/page/:page_slug'
  });
});

export default Router;
