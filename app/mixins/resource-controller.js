import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: ['page'],
  years: ['2015', '2016'],
  yearselected: '2016',

  page: 1,
  pageCount: Ember.computed('filteredResources.content.meta.count', function(){
    if ( this.get('filteredResources.content.meta.count') ) {
      return Math.ceil(this.get('filteredResources.content.meta.count') / 9);
    }
  }),

  filteredResources: Ember.computed('yearselected', 'page', 'model', function() {
    let page = this.get('page'),
        year = this.get('yearselected');

    return this.store.query(this.get('modelName'), {page, year});
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
    },

    selectYear(year) {
      this.set('yearselected', year);
      this.set('page', 1);
    }

  }
});
