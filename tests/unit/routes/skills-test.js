import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:skills', 'Unit | Route | skills', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it makes a store request to get all skills', function(assert) {
  assert.expect(2);
  let route = this.subject({
    store: {
      findAll: (model) => {
        assert.equal(model, 'skill');
        return Ember.RSVP.resolve(['foo']);
      }
    }
  });
  route.model().then((model) => {
    assert.deepEqual(model, ['foo']);
  });
});
