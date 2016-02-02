import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: ['page'],

  page: 1,
  pageCount: Ember.computed('filteredResources.content.meta.count', function(){
    if ( this.get('filteredResources.content.meta.count') ) {
      return Math.ceil(this.get('filteredResources.content.meta.count') / 9);
    }
  }),

  hasPreviousPage: Ember.computed.gt('page', 1),
  hasNextPage: Ember.computed('page', 'pageCount', function() {
    return this.get('page') < this.get('pageCount');
  }),

  filteredResources: Ember.computed('page', 'model', function() {
    let page = this.get('page');
    return this.store.query('resource', {page: page});
  }),

  actions: {
    previousPage: function() {
      this.decrementProperty('page');

      this.transitionToRoute({
        queryParams: {
          page: this.get('page')
        }
      });
    },

    nextPage: function(){
      this.transitionToRoute({
        queryParams: {
          page: this.incrementProperty('page')
        }
      });
    }
  }
});
