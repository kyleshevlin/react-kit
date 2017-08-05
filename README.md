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
- [eslint](http://eslint.org/) to get a JavaScript linter
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) for configuring out linting
- [prettier](https://github.com/prettier/prettier) for auto formatting our code
- [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) to get a development server

## Usage

Clone the repo, using your own project name
```
git clone https://github.com/kyleshevlin/react-kit <project-name>
cd <project-name>
```

If Yarn is not already installed globally on your machine, install it.
```
npm install -g yarn
```

Now we can run a script to do some initial setup of your project.
```
yarn run setup:new
```
This script does the following:
* Removes previous `.git` directory and README
* Installs all dependencies with Yarn
* Initializes a new git repo
* Touches a README file and adds some text to the file for you to edit, with a reminder to also edit your `package.json` file with your new project's information

Now, we can start the app in two ways. First, we can build the app into a `build/` directory:
```
yarn build
```

Or we can start it using `webpack-dev-server` at `http://localhost:8080`:
```
yarn start
```
