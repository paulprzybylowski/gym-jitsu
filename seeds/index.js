
const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');


if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';

mongoose.connect(dbUrl, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            
            //Your User ID
            author: '61f953629046deefd34deb9e',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem sunt mollitia dolore velit. Consequatur quia nostrum recusandae, atque maiores laudantium? Ipsam quos aliquid quaerat a. Voluptatum quod possimus accusantium aliquid.",
            price,
            geometry: {
              type: "Point",
              coordinates: [
                cities[random1000].longitude,
                cities[random1000].latitude,
              ]
            },
            images: [
                {
                  url: 'https://res.cloudinary.com/dvfbu2gde/image/upload/v1643736174/YelpCamp/mzlauibqgryiezw0zu3h.jpg',
                  filename: 'YelpCamp/mzlauibqgryiezw0zu3h'
                },
                {
                  url: 'https://res.cloudinary.com/dvfbu2gde/image/upload/v1643736174/YelpCamp/o5hmxkeqlwqe2msjxfy8.jpg',
                  filename: 'YelpCamp/o5hmxkeqlwqe2msjxfy8'
                }
              ]
        })
        await camp.save();
    }
}

seedDB();