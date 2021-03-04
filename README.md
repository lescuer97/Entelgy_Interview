# Entelgy interview test

A .env file is needed for developing the server and testing, put it at the root of the project.
I will provide this file.

## how to use the app.

1. You should clone the server

```
$ git clone https://github.com/lescuer97/Entelgy_Interview.git

```

2. Go inside the directory and install the dependencies

```
$ cd Entelgy_Interview
$ npm install

```

3. Add the provided .env file to the root of the project
4. The server should be able to start

```
// to run the server with nodemon
$ npm run dev

// to run with node
$ npm start

```

## Problems Observed

1. There is no password field in the client response of the Insurance API.
2. The id parameter in swagger doesn't capture the id input field and sends a string of ":id" instead of the provided ID
3. because of the unavailability of hashes or password I couldn't test the login in swagger correctly, but I added some of the logic for it to show I could
