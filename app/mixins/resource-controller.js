import Ember from 'ember';
import _ from 'lodash/lodash';

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

  hasPreviousPage: Ember.computed.gt('page', 1),
  hasNextPage: Ember.computed('page', 'pageCount', function() {
    return this.get('page') < this.get('pageCount');
  }),

  filteredResources: Ember.computed('yearselected', 'page', 'model', function() {
    let page = this.get('page'),
        year = this.get('yearselected');

    return this.store.query(this.get('modelName'), {page, year});
  }),

  getPreviousPages: Ember.computed('page', function() {
    let page = this.get('page');
    if ( page > 1 ) {
      return _.range(_.max([page - 2, 1]), page);
    }
  }),

  getNextPages: Ember.computed('page', 'pageCount', function() {
    let page = this.get('page'),
        pageCount = this.get('pageCount');

    return _.range(page+1, _.min([page+3, pageCount+1]));
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
