import DRFSerializer from './drf';

export default DRFSerializer.extend({
    serialize(/* snapshot, options*/) {
      var json = this._super(...arguments);
      json.data.attributes.datetime = moment(json.data.attributes.datetime).format();

      return json;
    }
});
