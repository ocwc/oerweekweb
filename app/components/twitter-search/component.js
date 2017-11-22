import $ from 'jquery';
import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import ENV from 'oerweekweb/config/environment';

export default Component.extend({
  ajax: service(),
  tweets: [],
  hasTwttr: false,

  _insertScript(src) {
    var insertedNode;

    var script    = document.createElement('script');
    script.type   = 'text/javascript';
    script.async  = true;
    script.src    = src;
    insertedNode = document.getElementsByTagName('head')[0].appendChild(script);
    return insertedNode;
  },

  init() {
    this._super(...arguments);
    let host = ENV.APP.API_HOST,
        self = this;

    this.get('ajax').request(`${host}/api/twitter/`).then(response => {
      self.set('tweets', response);
    });
  },

  checkForTwttr() {
    if ( typeof window.twttr === typeof undefined ) {
      later(this, this.checkForTwttr, 500);
    } else {
      this.set('hasTwttr', true);
    }
  },

  willInsertElement() {
    this._super(...arguments);
    this._insertedNode = this._insertScript('//platform.twitter.com/widgets.js');
    this.checkForTwttr();
  },

  willClearRender: function() {
    this._super(...arguments);
    if ( this._insertedNode ) {
      $(this._insertedNode).remove();
    }
  }

});
