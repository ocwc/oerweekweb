export function initialize(/* application */) {
  if (Ember.Debug) {
      Ember.Debug.registerDeprecationHandler((message, options, next) => {
          if (options && options.until && options.until !== '2.0.0') {
              return;
          }
          next(message, options);
      });
  }
}

export default {
  name: 'application/main',
  initialize
};
