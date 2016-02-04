import Ember from 'ember';

export default Ember.Controller.extend({
  lastItemIndex: Ember.computed('model.length', function() {
    return this.get('model.length') - 1;
  })
});
