import Ember from 'ember';

export default Ember.Controller.extend({
  selected: [],
  availableMaps: [],
  init() {
    console.log("mapview controller init");
    this.selected = [];
  }
});
