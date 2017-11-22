import Route from '@ember/routing/route';

export default Route.extend({
  redirect: function (params) {

    if (params.path !== 'not-found') {
      return this.transitionTo('page', params.path);
    }

    var url = this.router.location.formatURL('/not-found');
    if (window.location.pathname !== url) {
      this.transitionTo('/not-found');
    }
  }
});
