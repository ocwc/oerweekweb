import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-schedule-table-online', 'Integration | Component | x schedule table online', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{x-schedule-table-online}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#x-schedule-table-online}}
      template block text
    {{/x-schedule-table-online}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
