# GymJitsu

> GymJitsu is a dynamic multi-page Express web app with server-side rendering and data persistence using MongoDB. GymJitsu is a business directory app focused on Jiu-Jitsu gyms. The app encourages users to view, add, and rate Jiu-Jitsu gyms. 

> Live demo [_here_]().

## Table of Contents

- [General Information](#general-information)
- [Technologies](#technologies)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Future Development](#future-development)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
- [License](#license)

## General Information

- General info about project
- purpose of project
- What was your motivation?
- Why did you build this project?
- What problem does it solve?
- What did you learn?
- What makes your project stand out?
- What features does it have?
- Challenges
- Scope of functionalities

## Technologies:

The following technologies were used in building this web app:

- HTML 5 / CSS 3
- JavaScript ES6
- Express.js @4.17.1
- Bootstrap @5.1.3
- EJS @3.1.6
- Mongoose @6.0.13 / MongoDB
- MapBox API
- Cloudinary API 

## Features

- View Jiu-Jitsu gyms from MongoDB on browser via interactive MapBox map and scrolling list 
- User authentication for login and logout
- User authorization to allow users to add, update, write reviews, and set star rating for gyms 
- Upload photos for gyms to Cloudinary

## Setup

- Project requirements/dependencies
- Where are they listed? Where is this located?
- Describe how to install / set up local enviroment to get started with project
- Fork project
- Download dependencies:
- minimum hardware reqs?
- input data? what format?
- Examples
- Structure/Design principles utilized
- Authentication: passwords/usernames

## Setup to Run Locally 

- Download ZIP of repository on Github
- Unzip folder
- Open command-line interface, then... 

`cd [location of unzipped repository]`

`touch .env` 

`npm install dotenv`

- Open project folder in IDE (eg VSCode)
- Note than project dependencies are listed in package.json
- In command-line run to download dependencies:

`npm install`

- Navigate to https://cloudinary.com/ in browser
- Set up personal Cloudinary free account, login, navigate to Account Details
- Open .env file in your IDE:
- Add these items to your .env file (copied from your Cloudinary Account Details page:

`CLOUDINARY_CLOUD_NAME=[paste your Cloud Name here]`
`CLOUDINARY_KEY=[paste your API Key here]`
`CLOUDINARY_SECRET=[paste your API Secret here]`

- Navigate to https://mapbox.com/ in browser
- Set up personal Mapbox free account, login, navigate to Tokens, copy Default public token (or create a custom token)
- Add this item to your .env file (copied from Mapbox):

`MAPBOX_TOKEN=[paste your Default public token here]`

- Open app.js file in IDE and comment out this line:

`// const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/gym-jitsu';`

- Remove comment from this line:

`mongoose.connect('mongodb://localhost:27017/gym-jitsu', {});`

- The app database will not be populated on your local machine. Therefore, localhost:3000/gyms will not show any gyms on the map or in a list below the map. If you would like to populate your database with some seed data, run this command in your terminal:

`node seeds/index.js`

- Create a new user in the app. This user will be saved in your Mongo database. Navigate to your database in your terminal:

`mongo`
`show dbs`
`use gym-jitsu`
`show collections`
`use users`
`db.users.find()`

- Copy the ObjectId of the user you created and paste it into seeds/index.js in the 'author' section of the seedDB function 
- Go to Cloudinary account in browserm, click Media Library, 

## Project Status

This YelpCamp project is: _in progress_.

## Future Development

Possible New Features:

- [ ] Dark Mode
- [ ] Move Helmet middleware into separate file (Helmet helps secure Express apps by setting various HTTP headers)
- [ ] Limit upload size and/or number of photos to Cloudinary

## Acknowledgements

- This web app project was based on the tuturial in [The Web Developer Bootcamp 2022](https://www.udemy.com/course/the-web-developer-bootcamp/).
- Many thanks to Colt Steele, his team, and Udemy

## Contact

Created by [Paul Daniel Przybylowski](https://paulprzybylowski.github.io)

## License

This project is open source and available under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).

Notes:
https://shields.io/
