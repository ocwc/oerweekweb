import Ember from 'ember';
import _ from 'lodash';

export default Ember.Component.extend({
  showPageNextMargin: Ember.computed('page', 'pageCount', function() {
    let page = this.get('page'),
        pageCount = this.get('pageCount');

    if ( page + 2 < pageCount ) {
      return true;
    }
  }),

  showPagePrevMargin: Ember.computed('page', 'pageCount', function() {
    let page = this.get('page');

    if ( page - 2 > 2 ) {
      return true;
    }
  }),

  hasPreviousPage: Ember.computed.gt('page', 1),
  hasNextPage: Ember.computed('page', 'pageCount', function() {
    return this.get('page') < this.get('pageCount');
  }),

  getPreviousPages: Ember.computed('page', function() {
    let page = this.get('page');
    if ( page > 1 ) {
      return _.range(_.max([page - 2, 1]), page);
    }
  }),

  getNextPages: Ember.computed('page', 'pageCount', function() {
    let page = this.get('page'),
        pageCount = this.get('pageCount'),
        showNumPages = _.max([3, 6 - page]);

    return _.range(page+1, _.min([page+showNumPages, pageCount+1]));
  }),

  actions: {
    previousPage: function() {
      this.sendAction('previousPage');
    },
    nextPage: function() {
      this.sendAction('nextPage');
    }

  }
});
