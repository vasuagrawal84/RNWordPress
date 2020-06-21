# React Application Exercise

Your task is to create a maintainable React application using modern JavaScript and framework(s). The application is a blog pulling content from the API listed below based on some simple HTML/CSS markup; there is also basic login/logout functionality. All the necessary HTML and CSS are provided inside the `provided` directory as well as any information you need to complete the exercise.

Please use your best judgement for any decisions that need to be made about the implementation including potential starter files, modules, plugins, and libraries you feel are necessary to create the application. The goal of this exercise is to help us gauge your knowledge with modern JavaScript and React. As such, don’t worry about improving the provided HTML and CSS - that is not the focus of this exercise. We are very interested to see how you scaffold your application, follow React best practices, use modern JavaScript features (ES6-8), utilize build processes, implement a routing strategy, and handle state management. For authentication, we want to see how you handle the authentication flow (login and logout), store tokens, and handle expired tokens.

Please also track your time, our goal is to make these exercises thorough, but not overwhelming so getting your feedback very much helps the process. If the exercise is taking too long, feel free to stop and just show us what you have. If this project is a challenge or a struggle, just do your best.

## Requirements

* Application utilizing the provided HTML/CSS and following the specifications. No server-side rendering is required, though we’d like the application built in such a way that server side rendering could be added in the future.
* Modern JavaScript best practices.
* No page reloads necessary.
* Built using React.
* Login/logout functionality using JSON Web Token authentication.

## APIs

The API is the default WordPress REST API provided with WordPress. The relevant endpoints are listed below:

* `GET https://js1.10up.com/wp-json/wp/v2/posts` - Get blog posts
* `GET https://js1.10up.com/wp-json/wp/v2/pages` - Get pages (about)
* `POST https://js1.10up.com/wp-json/jwt-auth/v1/token` - Receive a token based on a username and password. Valid username is `jane` and password is `12345`. JSON body should look like this:
  ```
  {
    "username": "USERNAME",
    "password": "PASSWORD"
  }
  ```
* `POST https://js1.10up.com/wp-json/jwt-auth/v1/token/validate` - Check whether an existing token is valid or not. For this request, pass along the `Authentication` header like so:
  ```
  Authentication: Bearer TOKEN
  ```

