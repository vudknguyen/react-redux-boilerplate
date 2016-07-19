// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors'; // eslint-disable-line no-unused-vars

// This assures the Babel dev config (hot reloading) doesn't apply
process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via webpack. This will take a moment...'.blue); // eslint-disable-line max-len

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // If we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written in /dist. Cheer!!!'.green); // eslint-disable-line max-len

  return 0;
});
