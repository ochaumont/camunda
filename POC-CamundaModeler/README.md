
# SmartDeploy Workbench

## Summary

This is the documentation for the SmartDeploy Workbench codebase.

Any questions please speak to [Stuart Pretorius](mailto://stuart.pretorius@airbus.com) on the SmartDeploy Team.

## Resources

The following project resources are available :

* [JIRA](http://stark:8080/jira/secure/Dashboard.jspa)
* [BitBucket](http://stark:7990/projects/SD/repos/smartdeployevolutionui/browse)
* [Confluence](http://stark:8090/confluence/display/SD)

## Available Build Tasks

Using the [Yarn Package Manager](https://yarnpkg.com) the following commands are available to run build process tasks :

### Development Server

Using [Angular CLI](https://cli.angular.io) the following commands will start up a development server with hot reloading.

```javascript
// Document the application source code
$ yarn server:development
```

### Compile

Using [Angular CLI](https://cli.angular.io) the following commands will compile the application code.

```javascript
// Build unminified code for a development environment
$ yarn build:development

// Build minified code for a production environment
$ yarn build:production
```

### Documentation Generation

Using [JSDoc 3](http://usejsdoc.org) with the [DocStrap Template](https://github.com/docstrap/docstrap) and [CompoDoc](https://github.com/compodoc/compodoc) we can generate documentation for both the build process and SmartDeploy application frontend source code using the following commands.

```javascript
// Document the application source code
$ yarn document:application

// Document the build process source code
$ yarn document:tasks
```

### Error Checking

Using [ESLint](http://eslint.org"), [TSLint](http://palantir.github.io/tslint) and [Sass Lint](https://github.com/sasstools/sass-lint) static error and style checking tools we are able to scan both the application and build JavaScript and TypeScript source code and stylesheets for errors.

```javascript
// Error check the application source code
$ yarn lint:application

// Error check the application stylesheets code
$ yarn lint:stylesheets

// Error check the build process source code
$ yarn lint:tasks
```

### SonarQube Quality
Run the [SonarQube](https://sonarqube.org) scanner and quality check our code locally and push the report to our [SonarQube Server](http://stark:9000).

```javascript
// Run SonarQube Scanner
$ yarn sonar:scanner
```

### Security Checking

Using [RetireJS](https://github.com/RetireJS/retire.js) we can scan our node and JavaScript dependency packages for any known 
vulnerability issues.

```javascript
// Run the dependency vulnerability scanner
$ yarn security:dependencies

// Generate a security dependency report
$ yarn security:dependencies --report
```

### Unit Test Coverage

Using [Istanbul](https://istanbul.js.org), [Karma](https://karma-runner.github.io/2.0/) and  [Jasmine](https://jasmine.github.io) we can run unit tests and generate coverage and results reports.

```javascript
// Unit test coverage check the application source code
$ yarn test:unit

// Run the unit tests in watch mode
$ yarn test:unit --watch
```

### Functional Tests

Using [Protractor](https://protractortest.org) we can run end to end tests.

```javascript
// Run the functional tests
$ yarn test:functional

// Run a specific suite of functional tests
$ yarn test:functional --suite=smoke
```

### Analyse Compiled Application Bundle
Using [Webpack Bundle Analysis Tool](https://github.com/webpack-contrib/webpack-bundle-analyzer) we are able to run analysis on the compiled application bundle to check for any duplicate modules or large files that are not being used.

```javascript
// Run the bundle analysis
$ yarn analyse:application
```

### Profiles

Profiles have been setup to run multiple build tasks with a single command. Feel free to create more as needed.

```javascript
// Generate the documentation for both the application and build process
$ yarn profile:document

// Run linting and testing on both application and build process
$ yarn profile:health-check
```
