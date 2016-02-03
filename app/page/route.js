import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('page', { slug: params.page_slug })
    .then(function(pages) {
      return pages.get('firstObject');
    });
  },

  titleToken: function(model) {
    return model.get('title');
  },
});
