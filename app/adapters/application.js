import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  buildURL: function() {
    let url = this._super(...arguments);
    return `${url}.json`;
  }
});
