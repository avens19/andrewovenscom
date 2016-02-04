import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-button', 'Integration | Component | nav button', {
  integration: true
});

test('it renders a navbutton div with the specified link class', function(assert) {
  this.render(hbs`{{nav-button link='moo'}}`);

  assert.equal(this.$('div.navbutton.moo').length, 1);
});
