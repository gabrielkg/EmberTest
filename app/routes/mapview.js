import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("params to mapview route:");
    console.log(params);
    // Get all available maps.
    var maps = this.get('store').findAll('map');
    this.controllerFor("mapview").set("availableMaps", maps);
    return maps;
  }
});
