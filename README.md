# Angular-redux Template

This project is meant to serve as a template for projects based on Angular with the state
maintained in a Redux store.
The poroject was span off of the angular-redux project: `https://github.com/angular-redux`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## What's in here

The template includes the following:


1. Two components each having a reducer and a root reducer in app.reducer.ts. The intention here is NOT to have a reducer for each component in the projct, rather only for main components, generally the ones representing major parts of the app. For example complete tabs

2. A router for selecting between the components

3. Both components dispaly how to perform async actions with state changes. The counter component has a timer set when clicking the '+' button, and the users component performs an ajax call

4. An example test for the users reducer

## How to use

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


