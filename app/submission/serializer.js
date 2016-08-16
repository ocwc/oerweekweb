import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize(/* snapshot, options*/) {
    var json = this._super(...arguments);
    json.data.attributes.datetime = moment(json.data.attributes.datetime).format();

    return json;
  }
});
