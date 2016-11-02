<img src="http://i.imgur.com/b5Ole4s.png" height="100" />
---
A minimalistic kit to bootstrap a React application with a set of pre-configured tools.

## Included tools
- [yarn](https://github.com/yarnpkg/yarn) a powerful package manager
- [react](https://facebook.github.io/react/) (obviously)
- [redux](http://redux.js.org/) library to manage the data flow
- [redux-thunk](https://github.com/gaearon/redux-thunk) get an asynchronous data flow for redux
- [webpack](https://webpack.github.io/docs/) as module bundler

### Loaders
- [babel-loader](https://github.com/babel/babel-loader) to use Ecmascript features and transpile JSX
- [sass-loader](https://github.com/jtangelder/sass-loader) to compile sass files
- [ejs-loader](https://github.com/okonet/ejs-loader) to customize the generated `index.html` file

### Others
- [eslint](http://eslint.org/) to get a Javascript linter
- [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) to get a development server
- [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) to generate an `index.html` file automatically

## Usage
```
git clone https://github.com/mathieubrochard/react-kit <project-name>
cd <project-name>
```
Clone the React Kit repository to a directory and go into it.

```
rm -rf .git .gitignore README.md LICENCE
```
Clean your directory from all git files, readme and license.

```
npm install -g yarn
```
Installs the [yarn](https://github.com/yarnpkg/yarn) package manager.

```
yarn build
```
Builds your project into the `build/` directory.

```
yarn start
```
Starts a development server running on `http://localhost:8080`.  
**Caution**: do not use this command for production.
