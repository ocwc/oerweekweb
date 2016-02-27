import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-schedule-action-tabs', 'Integration | Component | x schedule action tabs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{x-schedule-action-tabs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#x-schedule-action-tabs}}
      template block text
    {{/x-schedule-action-tabs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
