import Response from 'ember-cli-mirage/response';

export default function() {
  this.namespace = 'http://localhost:8000/api';

  this.post('submissions', function(schema, request) {
    let attrs = JSON.parse(request.requestBody); //.data.attributes;

    if ( attrs.firstname === 'John') {
      return {
        'id': 1,
        'firstname': 'John',
        'lastname': attrs.lastName
      };
    } else {
      return new Response(400, {}, {
        "firstname":["First name must be John"]
      });
    }
  });
}
