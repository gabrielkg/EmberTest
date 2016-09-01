import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("params to mapview/maps route:");
    console.log(params);
    var maps = params["maps"].split("/");
    for (var i=0; i < maps.length; i++) {
      this.get('store').findRecord('map', maps[i]);
    }
    return this.get('store').findRecord('map', params["map_id"]);
  }
});
