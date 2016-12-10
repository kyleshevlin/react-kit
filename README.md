<img src="http://i.imgur.com/b5Ole4s.png" height="100" />
---
A minimalistic kit to bootstrap a React application with a set of preconfigured tools.

## Included tools
- [yarn](https://github.com/yarnpkg/yarn) a powerful package manager
- [react](https://facebook.github.io/react/) (obviously)
- [redux](http://redux.js.org/) library to manage the data flow
- [redux-thunk](https://github.com/gaearon/redux-thunk) get an asynchronous data flow for Redux
- [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) for debugging your Redux state
- [webpack](https://webpack.github.io/docs/) as module bundler

### Loaders
- [babel-loader](https://github.com/babel/babel-loader) to use Ecmascript features and transpile JSX
- [sass-loader](https://github.com/jtangelder/sass-loader) to compile Sass files
- [postcss-loader](https://github.com/postcss/postcss-loader) to process compiled CSS

### Others
- [eslint](http://eslint.org/) to get a Javascript linter
- [standard](https://github.com/feross/standard) JavaScript styleguide
- [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) to get a development server

## Usage
```
git clone https://github.com/kyleshevlin/react-kit <project-name>
cd <project-name>
```
Clones the React Kit repository to a directory and go into it.

```
npm install -g yarn
```
Installs the [yarn](https://github.com/yarnpkg/yarn) package manager.

```
yarn run setup:new
```
* Removes previous `.git` directory and README
* Installs all dependencies with Yarn
* Initializes a new git repo
* Touches a README file and adds some text to the file for you to edit, with a reminder to also edit your `package.json` file with your new project's information

```
yarn build
```
Builds your project into the `build/` directory.

```
yarn start
```
Starts a development server running on `http://localhost:8080`.
**Caution**: do not use this command for production.
