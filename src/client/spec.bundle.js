import angular from 'angular';
import mocks from 'angular-mocks';

// Use the context method on `require` which Webpack created
let context = require.context('./client/app', true, /\.spec\.js/);

// Get all files, for each file, call the context function
context.keys().forEach(context);
