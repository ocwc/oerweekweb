import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize(snapshot, options) {
    var json = this._super(...arguments);
    console.log(json);

    json.data.datetime = moment(json.data.datetime).format();

    console.log(json);

    return json
  }
});
