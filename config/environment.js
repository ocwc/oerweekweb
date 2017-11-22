/* eslint-env node */
'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'oerweekweb',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    typekit: {
      kitId: 'nyd6mie',
    },
    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: ['all'],
        config: {
          id: 'UA-4248822-6'
        }
      },
    ],

    fastboot: {
      hostWhitelist: [/^localhost:\d+$/]
    },
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    };

    // ENV.APP.API_HOST = 'http://localhost:8000';
    ENV.APP.API_HOST = 'https://api.openeducationweek.org';
    ENV.APP.API_NAMESPACE = 'api';

    ENV['ember-simple-auth'] = {
      authorizer: 'authorizer:token',
      crossOriginWhitelist: [process.env.API_HOST],
    }

    ENV['ember-simple-auth-token'] = {
      serverTokenEndpoint: 'http://localhost:8000/api-token-auth/',
      serverTokenRefreshEndpoint: 'http://localhost:8000/api-token-refresh/',
      refreshAccessTokens: true,
      // timeFactor: 7200,
      // refreshLeeway: 900,

      tokenPropertyName: 'token',
      authorizationPrefix: 'JWT ',
      authorizationHeaderName: 'Authorization',
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://api.openeducationweek.org';
    ENV.APP.API_NAMESPACE = 'api';

    ENV['ember-simple-auth'] = {
      authorizer: 'authorizer:token',
      crossOriginWhitelist: [process.env.API_HOST]
    }

    ENV['ember-simple-auth-token'] = {
      serverTokenEndpoint: 'https://api.openeducationweek.org/api-token-auth/',
      serverTokenRefreshEndpoint: 'https://api.openeducationweek.org/api-token-refresh/',
      refreshAccessTokens: true,
      timeFactor: 7200,
      refreshLeeway: 300,

      tokenPropertyName: 'token',
      authorizationPrefix: 'JWT ',
      authorizationHeaderName: 'Authorization',
    }
  }

  return ENV;
};
