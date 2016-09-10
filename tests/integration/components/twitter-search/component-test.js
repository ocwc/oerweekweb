import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twitter-search', 'Integration | Component | twitter search', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{twitter-search}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#twitter-search}}
      template block text
    {{/twitter-search}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
