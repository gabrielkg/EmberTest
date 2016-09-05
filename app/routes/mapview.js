import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("params to mapview route:");
    console.log(params);
    // Get all available maps.
    return this.get('store').findAll('map');
  }
});
