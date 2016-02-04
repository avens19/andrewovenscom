import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contact', 'Unit | Model | contact', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
