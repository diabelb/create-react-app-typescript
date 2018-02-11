# `react-scripts-redux-ts` [![npm version](https://badge.fury.io/js/react-scripts-redux-ts.svg)](https://badge.fury.io/js/react-scripts-redux-ts) [![Build Status](https://travis-ci.org/diabelb/create-react-app-typescript-redux.svg?branch=master)](https://travis-ci.org/diabelb/create-react-app-typescript-redux)

![Setup](https://thumbs.gfycat.com/BlueFrightenedBlackbird-size_restricted.gif)

Create React apps (with Typescript and Redux) with no build configuration.

 * [Getting Started](#tldr) – How to create a new app.
 * [User Guide](https://github.com/wmonk/create-react-app-typescript/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with react scripts ts.
 * [Redux Actions with Typescript](https://github.com/piotrwitek/react-redux-typescript-guide) - How to create redux actions and reducers in Typescript

_Do you know react and want to try out typescript? Or do you know typescript and want to try out react?_ Get all the benefits from `create-react-app` but you use typescript! 🚀

## Setup

Install create-react-app
```sh
$ npm install -g create-react-app
```
Run react-scripts-redux-ts installation
```sh
$ create-react-app my-app --scripts-version=react-scripts-redux-ts
```

Run my-app
```sh
$ cd my-app/
$ npm start
```
## Code Generators
#### Component generator
You can easily generate 3 types of component - stateful, stateful-redux and stateless.

Just run command:
```sh
$ npm run create:component
```
Answer simple questions:
```sh
? What's your component name? test/Test
? What's your component type? stateful-redux
```

And done ;)
```sh
Loaded templates: _templates
       added: src/components/test/Test.tsx
       added: src/__tests__/components/test/Test.test.tsx
```
#### Redux store item generator
To generate redux store item just run:

```sh
npm run store:create:item
```

and answer question:
```sh
? What's your store item's name? user
```

it'll create and update several files
```sh
Loaded templates: _templates
       added: src/store/actions/user/userActions.ts
      inject: src/store/actions/index.ts
      inject: src/store/actions/index.ts
       added: src/store/reducers/user/userReducer.ts
      inject: src/store/reducers/index.ts
      inject: src/store/reducers/index.ts
      inject: src/store/reducers/index.ts
       added: src/__tests__/store/reducers/user/userReducer.test.ts
      inject: src/store/reducers/initialState.ts
```

## Changelog

### 1.2.0
* Added component and redux store generators

### 1.1.1
* Added support for CSS Modules using the explicit file naming convention [name].module.css

### 1.0.5
* Added action, reducer and reducer's test example

### 1.0.4
* Fixed problems with tests and dependencies

### 1.0.0
* Initial commit
