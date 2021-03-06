import Application from '@ember/application';
import { run } from '@ember/runloop';
import ApplicationMainInitializer from '../../../../initializers/application/main';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | application/main', {
  beforeEach() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ApplicationMainInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
