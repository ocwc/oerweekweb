import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  metrics: Ember.inject.service(),

  redirects: {
    'what-is-open-education': '/page/what-is-open-education',
  },

  willTransition() {
    this._super(...arguments);
    window.scrollTo(0,0);
  },

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    Ember.run.scheduleOnce('afterRender', this, () => {
      const page = document.location.pathname;
      const title = this.getWithDefault('currentRouteName', 'unknown');

      Ember.get(this, 'metrics').trackPage({ page, title });
    });
  },
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
  this.route('resources', function() {
    this.route('resource', {
      path: ':resource_slug'
    });
  });
  this.route('events', function() {
    this.route('event', {
      path: ':event_slug'
    });
  });
  this.route('picture-yourself-open', function() {
    this.route('submit');
  });

  this.route('not-found', { path: '/*path' });
  this.route('schedule', function() {
    this.route('online');
    this.route('local');
  });
  this.route('open-education-initiatives');
});

export default Router;
