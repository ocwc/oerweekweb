import Ember from 'ember';
import ResourceControllerMixin from '../../mixins/resource-controller';

export default Ember.Controller.extend(ResourceControllerMixin, {
  filteredResources: Ember.computed('page', 'model', function() {
    let page = this.get('page');
    return this.store.query('event', {page: page});
  }),
});
