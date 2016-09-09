import Ember from 'ember';

export default Ember.Controller.extend({
  selected: [],
  init() {
    console.log("mapview controller init");
    this.selected = [];
  }
});
