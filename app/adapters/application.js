import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://dav127.it.csiro.au:1776/api/v1'
});