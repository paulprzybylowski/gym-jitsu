# GymJitsu

GymJitsu is a dynamic multi-page Express web app with server-side rendering and data persistence using MongoDB. GymJitsu is a business directory app focused on Jiu-Jitsu gyms. The app encourages users to view, add, and rate Jiu-Jitsu gyms. 

Live app demo hosted on Heroku [here](). Screencast available in my portfolio [here](https://paulprzybylowski.github.io/#projects).

## Table of Contents

- [General Information](#general-information)
- [Technologies](#technologies)
- [Features](#features)
- [Project Status](#project-status)
- [Future Development](#future-development)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
- [License](#license)

## General Information

### Why did you initially build this project?

> I initially built this project in completion of [The Web Developer Bootcamp 2022](https://www.udemy.com/course/the-web-developer-bootcamp/). Then I further modified the project and applied it to a particular industry that I'm interested in.

### What problem does this project solve?

> It can be difficult for people to find excellent Jiu-Jitsu gyms. This app helps people to find Jiu-Jitsu gyms that other users have rated and reviewed as well as add additional gyms to grow this athletic sports community. 

### What did you learn?

> While building this project, I learned how to create an Express.js web app with a MongoDB back-end. Additionally, I gained experience using the MapBox and Cloudinary APIs. I reviewed deployment to Heroku and gained technical writing experience with this README. 

### What makes your project stand out?

> This project stands out due to its elegant functionality and UI. 

### Were there any particular challenges in this project?

> This project was challenging all around, but well worth the time and effort! 

## Technologies:

The following technologies were used in building this web app:

- HTML 5 / CSS 3
- JavaScript ES6
- Express.js @4.17.1
- Bootstrap @5.1.3
- EJS @3.1.6
- MongoDB
- Mongoose @6.0.13
- Helmet @5.0.2
- Joi @17.4.2
- Passport authentication
- MapBox API
- Cloudinary API 

See all dependencies in package.json.

## Features

- Ability to view Jiu-Jitsu gyms served from MongoDB on browser via interactive MapBox API map and scrolling list 
- User authentication for login and logout
- User authorization to allow users to add, update, write reviews, and set star rating for gyms 
- Upload photos for gyms to Cloudinary

## Setup

### How to Run Locally

- Fork project on Github and download ZIP of repository
- Unzip folder
- Open your command-line interface, then... 

```
cd [location of unzipped repository]
touch .env
npm install dotenv
```

- Open project folder in IDE (eg VSCode)
- Note than project dependencies are listed in package.json
- In command-line run to download dependencies:

`npm install`

### Connecting Cloudinary and MapBox to App

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

### Seeding Database with Gyms 

- The app database will empty on your local machine. Therefore, localhost:3000/gyms will not display any gyms on the map or in a scrolling list below the map. You can begin to add gyms by creating new users and then create gyms with these users.
- If you would like to populate your gym database with some seed gyms, first create a new user in the app. This user will be saved in your Mongo database. Navigate to your database in your terminal:

```
mongo
show dbs
use gym-jitsu
show collections
use users
db.users.find()
```

- Copy the ObjectId of the user you created and paste it into seeds/index.js in the 'author' section of the seedDB function.
- If you'd like to add seed photos to the app database, go to your Cloudinary account in browser, click Media Library, upload photos, copy the url and filename for these photos, paste urls and filenames in seeds/index.js within 'images' inside the seedDB function. For example:

```
images: [
    {
      url: '[insert photo url to Cloudinary]',
      filename: '[insert filename from Cloudinary]'
    },
       ]
```

- Now you can run the seeds file in your terminal to populate the database with seed gyms associated with the user you created:

`node seeds/index.js`

- If seeding the database worked correctly, you will now see seed gyms in the map and the text list in your browser at localhost:3000/gyms. Each gym will have a populated name, lorem ipsum text block, location(city,state) and map, price in dollars per class, submitted by @[your created username], and time elapsed since the gym was created in the database. 

## Project Status

This YelpCamp project is: _complete_.

## Future Development

Ideas for Additional Features:

- [ ] Dark Mode
- [ ] Move Helmet middleware into separate file (Helmet helps secure Express apps by setting various HTTP headers)
- [ ] Limit upload file size and/or number of photos to Cloudinary
- [ ] Limit number of gyms displayed on /gyms and integrate a 'Load more' button at the bottom

## Acknowledgements

- This web app project was based on the tuturial in [The Web Developer Bootcamp 2022](https://www.udemy.com/course/the-web-developer-bootcamp/).
- Many thanks to instructor Colt Steele and his team.

## Contact

[Paul Daniel Przybylowski](https://paulprzybylowski.github.io)

## License

This project is open source and available under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).
