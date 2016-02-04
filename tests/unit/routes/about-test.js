import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:about', 'Unit | Route | about', {
});

test('it makes a store request to get all aboutmes', function(assert) {
  assert.expect(2);
  let route = this.subject({
    store: {
      findAll: (model) => {
        assert.equal(model, 'aboutme');
        return Ember.RSVP.resolve(['foo']);
      }
    }
  });
  route.model().then((model) => {
    assert.deepEqual(model, ['foo']);
  });
});
