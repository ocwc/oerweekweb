## Module Report
### Unknown Global

**Global**: `Ember.Debug`

**Location**: `app/initializers/application/main.js` at line 4

```js

export function initialize(/* application */) {
  if (Ember.Debug) {
      Ember.Debug.registerDeprecationHandler((message, options, next) => {
          if (options && options.until && options.until !== '2.0.0') {
```
