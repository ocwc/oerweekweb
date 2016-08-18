import DRFAdapter from './drf';
import Inflector from 'ember-inflector';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const inflector = Inflector.inflector;
inflector.uncountable('submission');

export default DRFAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
});
