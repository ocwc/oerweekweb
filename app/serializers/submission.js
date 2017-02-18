import DRFSerializer from './drf';

export default DRFSerializer.extend({
    serialize(/* snapshot, options*/) {
      var json = this._super(...arguments);
      json.datetime = moment(new Date(json.datetime)).format();

      return json;
    }
});
