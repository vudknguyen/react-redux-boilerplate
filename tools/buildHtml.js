import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors'; // eslint-disable-line no-unused-vars

/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (errRead, markup) => {
  if (errRead) {
    console.log(errRead.red);
    return;
  }

  const $ = cheerio.load(markup);

  // Since a seperate css is only utilize in production build,
  // Need to dynamically 
  $('head').prepend('<link rel="stylesheet" type="text/css" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (errWrite) => {
    if (errWrite) {
      console.log(errWrite.red);
      return;
    }

    console.log('index.html written to /dist'.green);
  });
});
