import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-submission-02-basic', 'Integration | Component | form submission 02 basic', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-submission-02-basic}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-submission-02-basic}}
      template block text
    {{/form-submission-02-basic}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
