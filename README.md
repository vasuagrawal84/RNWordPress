# React Native WordPress

This is a iOS and Android application written using React Native to present blogs returned by the Wordpress API.

To run:

`yarn`
`react-native run-android`
OR 
`yarn`
`react-native run-ios`

## Features
- Login/logout functionality with user session being saved between app restarts
- List of blogs presented once user logs in
- User can click on blogs to view them in full on a new screen
- Any pages returned by the Pages API are shown on the settings tab
- User can click and view these pages

## Libraries
- react-navigation - used for routing/navigation
- react-native-render-html - used for rendering HTML
- redux-thunk - state management with asyc actions which would help with server side rendering if needed (could have used sagas too)
- react-native-keychain - used to store jwt token and other sensitive information

## Next steps
- Change to using React.PureComponents or functional components for performance optimisation
- Finish conversion to typescipt
- Utilise selectors in redux
- Use action creators to reduce duplication of network call code
- Implement caching for network calls and handling token expiry
- Unit tests - use jest, enzyme to create snapshot test and unit tests to test redux
- Automated E2E tests - Could use Appium or Detox
- Set up a CI to verify, build and upload to test channels

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

