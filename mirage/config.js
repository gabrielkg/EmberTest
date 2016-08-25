export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.get('/maps', function() {
    return {
			data: [{
        type: 'maps',
        id: 1,
        attributes: {
          name: 'Chinese Spring x Renan',
          size: 10
        }
      }, {
        type: 'maps',
        id: 2,
        attributes: {
          name: 'MAGIC CSIRO 8-way',
          size: 41
        }
      }]
    };
  });
}
