/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

// BEGIN-SNIPPET validated-input
import { oneWay, alias, not, notEmpty, and } from '@ember/object/computed';

import Component from '@ember/component';
import { isEmpty } from '@ember/utils';
import { defineProperty, computed } from '@ember/object';

export default Component.extend({
  classNames: ['validated-input'],
  classNameBindings: ['showErrorClass:has-error', 'isValid:has-success', 'valuePath'],
  model: null,
  value: null,
  type: 'text',
  valuePath: '',
  placeholder: '',
  validation: null,
  isTyping: false,

  init() {
    this._super(...arguments);
    var valuePath = this.get('valuePath');
    defineProperty(this, 'validation', oneWay(`model.validations.attrs.${valuePath}`));
    defineProperty(this, 'value', alias(`model.${valuePath}`));
  },

  notValidating: not('validation.isValidating'),
  didValidate: oneWay('targetObject.didValidate'),
  hasContent: notEmpty('value'),
  isValid: and('hasContent', 'validation.isValid', 'notValidating'),
  isInvalid: oneWay('validation.isInvalid'),
  showErrorClass: and('notValidating', 'showMessage', 'hasContent', 'validation'),
  showErrorMessage: computed('validation.isDirty', 'isInvalid', 'didValidate', function() {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid');
  }),

  showWarningMessage: computed('validation.isDirty', 'validation.warnings.[]', 'isValid', 'didValidate', function() {
    return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isValid') && !isEmpty(this.get('validation.warnings'));
  }),

  actions: {
    valueChanged(val) {
      this.get('model').set(this.get('valuePath'), val);
      this.set('selected', val);
    },
    radioChanged(val) {
      this.get('model').set(this.get('valuePath'), val);
    }
  }

});
// END-SNIPPET
