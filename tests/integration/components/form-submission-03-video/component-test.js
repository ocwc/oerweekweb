import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-submission-03-video', 'Integration | Component | form submission 03 video', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-submission-03-video}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-submission-03-video}}
      template block text
    {{/form-submission-03-video}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
