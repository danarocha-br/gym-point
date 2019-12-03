<h1>
  GymPoint
</h1>

This is the end result for the final Rocketseat GoStack challenge. This is a simple project for a gym management. The aim was to develop the backend, front and mobile app using Javascript as a stack.

 <p>
   <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/danarocha-br/gym-point?style=for-the-badge">
   <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/danarocha-br/gym-point?style=for-the-badge">
   <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danarocha-br/gym-point?style=for-the-badge">
</p>

## Screenshots
<div>
  <img alt="Mobile" title="mobile" height="600" src="example/screenshots/mob1.gif" style="margin-right: 20px">
  <img alt="Mobile" title="mobile" height="600" src="example/screenshots/mob2.gif">
</div>

<img alt="Web" title="web" width="800" src="example/screenshots/web.gif">




## Browser Support

| ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 39+ ✔                                                                                                         | 42+ ✔                                                                                                          | 29+ ✔                                                                                                        | 10.1+ ✔                                                                                                       | Nope ✘                                                                                                    |

## :information_source: Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

You will need:

- NodeJS | Yarn or Npm | Docker | PostgreSQL | Redis

You need to install these prerequisites on your computer before you can use "**GymPoint**".

<h4>NodeJS</h4> <a href="https://nodejs.org/en/download/package-manager/" target="_blank">with these instructions</a>.

<h4>Yarn</h4> <a href="https://yarnpkg.com/en/docs/getting-started" target="_blank">with these instructions</a>.

<h4>Docker</h4> <a href="https://www.docker.com/get-started" target="_blank">with these instructions</a>.

<h4>PostgreSQL</h4> <a href="https://hub.docker.com/_/postgres" target="_blank">with these instructions</a>.

```bash
# Docker
$ docker run --name gympoint -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Go into the repository
$ cd gym-point

# Install dependencies
$ yarn install

# Create the migrations
$ yarn sequelize db:migrate

# Sync admin user seeders
$ yarn sequelize db:seed:all

# Run the Rest API
$ yarn dev

```

<h4>REST API Client</h4>

Finally, you will need a rest client to test "**GymPoint**". Here are some:

<ul>
  <li><a href="https://insomnia.rest/" target="_blank">Insomnia</a></li>
  <li><a href="https://www.getpostman.com/" target="_blank">Postman</a></li>
</ul>

## :rocket: Built With

- [NodeJS](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [React Native](https://facebook.github.io/react-native/) - Build the native app using JavaScript and React
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
- [React Navigation](https://reactnavigation.org/) - Router
- [React JS](https://reactjs.org/)
- [Redux](https://redux.js.org/) - React State Manager
- [Redux-Sagas](https://redux-saga.js.org/) - Side-Effect model for Redux
- [PropTypes](https://github.com/facebook/prop-types)
- [Axios](https://github.com/axios/axios) - HTTP Client
- [ESlint](https://eslint.org/) - Linter
- [Reactotron](https://infinite.red/reactotron) - Inspector
- [Styled-Components](https://www.styled-components.com/) - Styles

## Tools

<ul>
  <li>es6 syntax and babel</li>
  <li>Sucrase + Nodemon;</li>
  <li>ESLint + Prettier + EditorConfig;</li>
  <li>Sequelize (PostgreSQL)</li>
  <li>Flux to organize the data flow management</li>
</ul>

## What's next

- [ ] REST API (with Node js) - tests

---

Made with ♥ by Dana Rocha :wave: [Get in touch!](https://www.linkedin.com/in/danarocha/)

## License

This project is licensed under the MIT License - see the <a href="" target="_blank">LICENSE.md</a> file for details.
