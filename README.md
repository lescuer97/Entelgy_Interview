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

## what I did and why

I decided to centralize the error handling of the API because in the case of the expansion it will be easier to controller and gives a specific file where you can handle and control everything.

I separated both main routes into their own files. this makes it really easy to add more routes and add specific middleware for the different needs of the app.

I made 3 controllers that have their own cache one for auth and two for the data. it's an ugly solution but works (I will try to find a better way) that connect to the API that I need to consume,o so I only need to have 3 controllers that called to the API so I minimized the chance for an error in the API consumer as much as possible.

Then the data is passed down to the different controllers and I created a small utility functions file for processing the data as need and tried to make the functions as generic as possible.

## Problems Observed

1. There is no password field in the client response of the Insurance API.
2. The id parameter in swagger doesn't capture the id input field and sends a string of ":id" instead of the provided ID
3. because of the unavailability of hashes or password I couldn't test the login in swagger correctly, but I added some of the logic for it to show I could
