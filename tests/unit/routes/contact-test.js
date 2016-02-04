import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:contact', 'Unit | Route | contact', {
});

test('it makes a store request to get all contacts', function(assert) {
  assert.expect(2);
  let route = this.subject({
    store: {
      findAll: (model) => {
        assert.equal(model, 'contact');
        return Ember.RSVP.resolve(['foo']);
      }
    }
  });
  route.model().then((model) => {
    assert.deepEqual(model, ['foo']);
  });
});
