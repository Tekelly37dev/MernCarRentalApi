# MernCarRentalAPI 

## Description 
- - -

This test application uses a MERN architecture to create REST web services as well as providing authentication and authoriization using Jwt and bcrypt to simulate a real worls application

##  API Installation
- - -

* If unfamiliar with creating web API's using Node.js please refer to [NodeJS.org Introduction to Node.js tutorial](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) for guidance. 
* after cloning repository run command 'npm install' to add necessary dependecies.
* To start service run command 'node server.js'
* MongoDB must also be insatlled and running onyour machine.


## Usage
- - - 
All requests can be viewed from the localhost browser started upon running the application and entering the correct URL(see below), however the full capabilities, of creating, retrieving, updating, and deleting inventory and user data are only accessible using [Postman](https://www.postman.com/downloads/Postman), a free software allows you to configure http requests in finer detail in comparison to the browser.

Once you have installed Postman, you should be able to use each enpoint below i.e.

* Get all inventory items - ex. http://localhost:8080/api/generalItems
* Get inventory items by name - ex. http://localhost:8080/api/generalItems?name=Bronco
* Validate user credentials - ex. http://localhost:8080/api/user
* Get all users - ex. http://localhost:8080/api/user
* Get user by username http://localhost:8080/api/user?username=FirstUser



This is accomplished simply changing the dropdown on the left to GET PUT, POST, or DELETE and changing the URL to match the correct endpoint.

 To submit a user for authentication, be sure that in the body tab that 'raw' is selected and from the 'Text' drop-down, JSON is selected. 
the enpoint expexts a object in the following format 

``` JSON 
    {
        "username": "FirstUser",
        "password": "user123",
        "email": "test@email.com",
        "admin": false,
        "firstname": "UserFName",
        "lastname": "UserLName"
    }
 ```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
