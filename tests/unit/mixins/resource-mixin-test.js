import Ember from 'ember';
import ResourceMixinMixin from '../../../mixins/resource-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | resource mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ResourceMixinObject = Ember.Object.extend(ResourceMixinMixin);
  let subject = ResourceMixinObject.create();
  assert.ok(subject);
});
