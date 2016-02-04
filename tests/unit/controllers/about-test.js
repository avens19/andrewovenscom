import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:about', 'Unit | Controller | about', {
});

test('it calculates lastItemIndex to be model.count-1', function(assert) {
  let controller = this.subject({
    model: ['fe', 'fi', 'fo', 'fum']
  });
  assert.equal(controller.get('lastItemIndex'), 3);
});
