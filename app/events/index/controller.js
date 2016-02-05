import Ember from 'ember';
import ResourceControllerMixin from '../../mixins/resource-controller';

export default Ember.Controller.extend(ResourceControllerMixin, {
  modelName: 'event',
});
