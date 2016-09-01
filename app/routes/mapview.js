import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("params to mapview route:");
    console.log(params);
    return this.get('store').findAll('map');
  }
});
