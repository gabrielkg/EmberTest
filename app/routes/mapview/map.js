import Ember from 'ember';

export default Ember.Route.extend({

  parentController: Ember.computed( function() {
    return this.controllerFor('mapview');
  }),

  setupController: function(controller, model) {
    this._super(controller, model);
  },

  model(params) {
    console.log("params to mapview/map route:");
    console.log(params);
    this.get('parentController').set('selected', [params.map_id]);
    return this.get('store').findRecord('map', params.map_id);
  }
});
