import Ember from 'ember';
import ResourceControllerMixin from '../../../mixins/resource-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | resource controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let ResourceControllerObject = Ember.Object.extend(ResourceControllerMixin);
  let subject = ResourceControllerObject.create();
  assert.ok(subject);
});
