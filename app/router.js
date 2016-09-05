import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('mapview', function() {
    this.route('map', { path: "map/:map_id" });
    // Wildcard route
    this.route('maps', { path: "maps/:map_id/*maps" });
  });
  this.route('markers');
});

export default Router;
