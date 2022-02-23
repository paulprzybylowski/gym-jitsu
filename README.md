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

```
cd [location of unzipped repository]
touch .env
npm install dotenv
```

- Open project folder in IDE (eg VSCode)
- Note than project dependencies are listed in package.json
- In command-line run to download dependencies:

`npm install`

- Navigate to https://cloudinary.com/ in browser
- Set up personal Cloudinary free account, login, navigate to Account Details
- Open .env file in your IDE:
- Add these items to your .env file (copied from your Cloudinary Account Details page:

```
CLOUDINARY_CLOUD_NAME=[paste your Cloud Name here]
CLOUDINARY_KEY=[paste your API Key here]
CLOUDINARY_SECRET=[paste your API Secret here]
```

- Navigate to https://mapbox.com/ in browser
- Set up personal Mapbox free account, login, navigate to Tokens, copy Default public token (or create a custom token)
- Add this item to your .env file (copied from Mapbox):

`MAPBOX_TOKEN=[paste your Default public token here]`

- Open app.js file in IDE and comment out this line:

`// const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/gym-jitsu';`

- Remove comment from this line:

`mongoose.connect('mongodb://localhost:27017/gym-jitsu', {});`

- The app database will not be populated on your local machine. Therefore, localhost:3000/gyms will not show any gyms on the map or in a list below the map. You can begin to add gyms by creating new users and then gyms. If you would like to populate your gym database with some seed data, run this command in your terminal:

`node seeds/index.js`

- Create a new user in the app. This user will be saved in your Mongo database. Navigate to your database in your terminal:

```
mongo
show dbs
use gym-jitsu
show collections
use users
db.users.find()
```

- Copy the ObjectId of the user you created and paste it into seeds/index.js in the 'author' section of the seedDB function.
- If you'd like to add seed photos to the app database, go to your Cloudinary account in browser, click Media Library, upload photos, copy the url and filename for these photos, paste urls and filenames in seeds/index.js within 'images' inside seedDB function. For example:

```
images: [
    {
      url: '[insert photo url to Cloudinary]',
      filename: '[insert filename from Cloudinary]'
    },
       ]
```
- Now you can run the seeds file in your terminal to populate the database with seed gyms:

`node seeds/index.js`

- If seeding the database worked correctly, you will now see seed gyms in the map and the text list in your browser at localhost:3000/gyms. Each gym will have a populated name, lorem ipsum text block, location (city,state), price in dollars per class, submitted by @[your created username], and time elapsed since the gym was created in the database. 

## Project Status

This YelpCamp project is: _in progress_.

## Future Development

Ideas for Additional Features:

- [ ] Dark Mode
- [ ] Move Helmet middleware into separate file (Helmet helps secure Express apps by setting various HTTP headers)
- [ ] Limit upload size and/or number of photos to Cloudinary

## Acknowledgements

- This web app project was based on the tuturial in [The Web Developer Bootcamp 2022](https://www.udemy.com/course/the-web-developer-bootcamp/).
- Many thanks to instructor Colt Steele and his team

## Contact

[Paul Daniel Przybylowski](https://paulprzybylowski.github.io)

## License

This project is open source and available under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).
