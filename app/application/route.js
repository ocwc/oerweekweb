import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
   tokens = Ember.makeArray(tokens);
   tokens.push('Open Education Week');
   return tokens.join(' | ');
  },
  headTags: [{
      type: 'meta',
      attrs: {
        property: 'prerender-status-code',
        content: '404'
      }
    },
  ],
});
