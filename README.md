# site-plugin-ts

This project allows you to build a TypeScript React component isolation, export it as a JS module which can be utilized by another react app. 
This project can serve the component as its own mini website via webpack for development. It is designed to be completely modular 
so styles will not bleed thanks to [styled-components](https://styled-components.com/).

This design allows you to break up a large web frontend application into several smaller projects. This will allow you to speed up development as well as reduce the risk
of conflicts and errors. Its surprising how many organisations have a dozen backend teams and one large frontend team. You can have a dozen frontend teams too!

## Project Structure
* `lib` - Contains the module code that will be used by the parent application.
* `src` - Contains only the site assets to demo code in webpack. Imports the contents of lib directly. 
* `jest` - Contains jest tests

## Configuration
Out of the box site plugin extends styled-components theme provider and react-router. Any parent project that imports the site 
plugin will have to have these set up. `src/Index.jsx` contains the required code to use in a parent project.

You should not need to ever edit the configuration in src. It will still work if you follow the edit instructions below.

### Edit theme provider ignore parent
* Uncomment the no parent function in `lib/Theme.js` and comment/remove out the other.

### Edit remove React Router
* Edit `lib/App.jsx` remove app function and uncomment the other app function.
* Remove the React-Router imports. The linter should warn you about those also.
* In `package.json` remove react-router-dom references from peer dependencies and dev dependencies sections.

## Commands

* `npm run serve` - serves lib via webpack-dev-server 
* `npm run test` - runs the jest tests
* `npm run coverage` - runs the site coverage
* `npm run lint` - runs AirBnB linting rules against lib, src and test

## Issues
* I have no configuration to push this project to a npm repo. Its more designed for in house use. If you do that all you need to push is the lib folder, 
  src and test are redundant.
* I've not tested this within another project yet. Building a project to do that just now. If any issues are found, I'll update this one as well. That will be in the next couple of weeks.

## 3rd party library instructions
* [react-router](https://reactrouter.com/web/guides/quick-start)
* [react-router nested routing](https://reactrouter.com/web/guides/quick-start/2nd-example-nested-routing)
* [styled-components](https://styled-components.com/)
* [typescript](https://www.typescriptlang.org/)
