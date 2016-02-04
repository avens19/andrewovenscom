import { moduleForModel, test } from 'ember-qunit';

moduleForModel('aboutme', 'Unit | Model | aboutme', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
