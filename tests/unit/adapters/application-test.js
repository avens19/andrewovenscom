import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:application', 'Unit | Adapter | application', {
});

test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});

test('it adds .json to the built URL', function(assert) {
  let adapter = this.subject();
  assert.equal(adapter.buildURL('foo'), '/api/foos.json');
});
