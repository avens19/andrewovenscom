import { moduleFor, test } from 'ember-qunit';
import DS from 'ember-data';

moduleFor('serializer:application', 'Unit | Serializer | application', {
});

test('it is a subclass of JSONSerializer', function(assert) {
  assert.ok(DS.JSONSerializer.prototype.isPrototypeOf(this.subject()));
});
