# react-redux-bolerplate

Ready to use boilerplate project with React Redux and Webpack 

## Requirements:
- Tools: text editor like Sublime Text
- NodeJS v6.2.2
- Npm v3.9.5

## Project stup:

Once all requirements is setup, run these command to setup project depedences:

```
cd path\to\project
npm install
```

## Development

For development, the environment designed to serving end to end from testing, linting and automatically reload, all in one command:

```
npm run start
```

## Building

For build project to deploy, run this command

```
npm run build
```

## Testing

Running all test cases:

```
npm run test
```

You can also run all test cases in watch mode

```
npm run test:watch
```

## Style guide

This project follow AirBnB ES6/React style guide. If you need more information about the rules, follow the reference bellow

[AirBnB Style Guide for ES6](https://github.com/airbnb/javascript#ecmascript-6-styles)  
[AirBnB Style Guide for React](https://github.com/airbnb/javascript/tree/master/react)

## Project structure

```

dist/                   // Deployed artifacts
src/ 
  actions/              // Declare all actions in application
    actionTypes.js      // Store constants for all action types
  api/                  // Mock api for development purpose 
  components/           // All React components goes here
    templates/          // Quick template contain boilerplate code for Stateless and Redux container components
    App.js              // Application root components
  reducers/             // Declare all reducers in application
    index.js            // Root reducers
    initialState.js     // Declare initial states
  selectors/            // Contain all maping/transforming logic that will be utilize in components logic
  store/                // Redux store declaration
  styles/               // Stylesheet codes goes here
  tools/                // Infrastructure scripts
    build.js            // Compiles all sources in /src folder to deployable package into /dist
    buildHtml.js        // Generate html to /dist on when compiles
    distServer.js       // Minimal express server serves compiled code in /dist
    srcServer.js        // Minimal express server serves code in /src for development
    startMessage.js     // A simple message indicate development server is starting
    testSetup.js        // Infrastructure setup test environment for React
webpack.config.dev.js   // Webpack configuration script in development mode
webpack.config.prod.js  // Webpack configuration script in production mode 
```

# License

(MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.