import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:work', 'Unit | Route | work', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it makes a store request to get all projects', function(assert) {
  assert.expect(2);
  let route = this.subject({
    store: {
      findAll: (model) => {
        assert.equal(model, 'project');
        return Ember.RSVP.resolve(['foo']);
      }
    }
  });
  route.model().then((model) => {
    assert.deepEqual(model, ['foo']);
  });
});
