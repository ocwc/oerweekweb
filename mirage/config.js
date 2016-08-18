import Response from 'ember-cli-mirage/response';

export default function() {
  this.namespace = 'http://localhost:8000/api';

  this.post('submission', function(schema, request) {
    let attrs = JSON.parse(request.requestBody);
    return new Response(200, {}, attrs);
  });
}
