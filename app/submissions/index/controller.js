import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  queryParams: ['postStatus'],
  postStatus: null,

  filteredSubmissions: computed('postStatus', 'model.@each.postStatus', function() {
    let postStatus = this.get('postStatus');
    let submissions = this.get('model');

    if (postStatus) {
      return submissions.filterBy('postStatus', postStatus);
    } else {
      return submissions;
    }
  })
});
