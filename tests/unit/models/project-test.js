import { moduleForModel, test } from 'ember-qunit';

moduleForModel('project', 'Unit | Model | project', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});
