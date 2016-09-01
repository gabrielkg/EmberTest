import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("params to mapview route:");
    console.log(params);
    if (!params.map_id) {
      console.log("no map to view");
      return this.get('store').findAll('map');
    }
    else {
      return this.get('store').findRecord('map', params.map_id);
    }
  }
});
