import { makeArray } from '@ember/array';
import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
   tokens = makeArray(tokens);
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
