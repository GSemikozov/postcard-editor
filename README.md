# Postcard Editor

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Development plan

- Set-up local environment
- Choose best approach to app architecture
- Split design mockup into small separate pieces which are could be delivered clearly and quickly
- Start developing components, combine and connect them to each other, step-by-step
- Writing tests first - if it's possible. If not - then cover critical functionality later
- If everything tested and worked fine - then putting the whole application together

## List of tasks

- set-up react app via `CRA`
- implement store skeleton as combination of react hooks and context api - `CreateContext` + `useReducer` 
- lay the architecture foundation (`Atomic Design`)
- develop `components` - Button, EditableText, Postcard, Sidebar, Layout
- implement rotation logic
- implement zoom logic
- implement adding list of texts on the picture
- implement text editing
- implement drag-n-drop

## Estimated efforts

Can be delivered by 1 day (without improvement tasks)

## Architecture

CRA (Create React App) + Atomic Design + context api & useReducer

## Tests

Jest + Enzyme, several tests are in `App.text.js`

## Suggestions for improvements

- finish drag-n-drop
- possibility to upload image | several images, then - display it as a gallery
- improve UI (for example, no need to zoom-in picture as it is in design because images may have different resolution and won't be fitted into the view - 
in this case better to use fixed sizes for the picture wrapper; find a solution for mobile)

## Technologies used

`React` + `CRA` (Create React App) + `Atomic Design` + `context api` & `useReducer`, `css-modules`, `react-dnd`, `jest`, `enzyme`,
pre-commit hook with husky and `prettier` to format code

## Author

`Herman Semykozov`