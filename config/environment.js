/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'oerweekweb',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    //
    ENV.APP.API_HOST = 'http://localhost:8000';
    ENV.APP.API_NAMESPACE = 'api';

    ENV['ember-simple-auth'] = {
      authorizer: 'authorizer:token',
      crossOriginWhitelist: [process.env.API_HOST],
    }

    ENV['ember-simple-auth-token'] = {
      serverTokenEndpoint: 'http://localhost:8000/api-token-auth/',
      serverTokenRefreshEndpoint: 'http://localhost:8000/api-token-refresh/',
      refreshAccessTokens: true,
      timeFactor: 7200,
      refreshLeeway: 300,

      tokenPropertyName: 'token',
      authorizationPrefix: 'JWT ',
      authorizationHeaderName: 'Authorization',
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
