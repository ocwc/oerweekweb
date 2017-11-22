import { gt } from '@ember/object/computed';
import { computed } from '@ember/object';
import Component from '@ember/component';
import _ from 'lodash/lodash';

export default Component.extend({
  showPageNextMargin: computed('page', 'pageCount', function() {
    let page = this.get('page'),
        pageCount = this.get('pageCount');

    if ( page + 2 < pageCount ) {
      return true;
    }
  }),

  showPagePrevMargin: computed('page', 'pageCount', function() {
    let page = this.get('page');

    if ( page - 2 > 2 ) {
      return true;
    }
  }),

  hasPreviousPage: gt('page', 1),
  hasNextPage: computed('page', 'pageCount', function() {
    return this.get('page') < this.get('pageCount');
  }),

  getPreviousPages: computed('page', function() {
    let page = this.get('page');
    if ( page > 1 ) {
      return _.range(_.max([page - 2, 1]), page);
    }
  }),

  getNextPages: computed('page', 'pageCount', function() {
    let page = this.get('page'),
        pageCount = this.get('pageCount');

    var showNumPages = _.max([3, 6 - page]);

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
