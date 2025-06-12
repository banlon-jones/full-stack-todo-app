# TodoUi

Todo UI is the frontend for the Full Stack Todo App, built with Angular.

## Features
- sign in and sign up
- Add, edit, and delete todo items
- Mark todos as complete/incomplete
- Responsive design

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli) (v19+)

### Installation

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Project Structure
src/app/ — Main application code

src/environments/ — Environment configurations

## Deploying the Application on GCP

### steps
1. Build the Angular application for production:
  ```bash
  ng build --prod
  ```
This will generate the production-ready files in the dist/ directory.

2. Install the Firebase CLI:
  ```bash
  npm install -g firebase-tools
  ```

3. Initialize Firebase Hosting and select GCP project:
  ```bash
  firebase init hosting
  ```
4. Deploy the application:
  ```bash
  firebase deploy
  ```

## Using the To-Do List Application

Navigate to the application in your browser.
- Sign-in Page:

Sign-in by filling out the form.
If you do not have an account, click the "Sign up" link to navigate to the sign-up page.
- Dashboard:

View your list of tasks.

Use the "Create Task" button to add a new task.

Edit or delete tasks directly from the list.

- 404 Page:

If you navigate to an invalid route, you'll see a "404 Page Not Found" message with a link to return to the home page.


## Contributing
Pull requests are welcome. For major changes, please open an issue first.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
