import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("params to mapview/map route:");
    console.log(params);
    return this.get('store').findRecord('map', params.map_id);
  }
});
