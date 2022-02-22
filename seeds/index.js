
const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Gym = require('../models/gyms');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const dbUrl = 'mongodb://localhost:27017/gym-jitsu';

mongoose.connect(dbUrl, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Gym.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 10) + 5;
        const gym = new Gym({
            
            //Your User ID
            author: '6206a8eac5ebfc4d3574e9ad',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem sunt mollitia dolore velit. Ipsam quos aliquid quaerat a. Voluptatum quod possimus accusantium aliquid.",
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
                  url: 'https://res.cloudinary.com/dvfbu2gde/image/upload/v1644604210/GymJitsu/gym1_utlq99.jpg',
                  filename: 'GymJitsu/gym1_utlq99'
                },
              
                {
                  url: 'https://res.cloudinary.com/dvfbu2gde/image/upload/v1644604210/GymJitsu/gym2_ktetos.jpg',
                  filename: 'GymJitsu/gym2_ktetos'
                }
                
              ]
        })
        await gym.save();
    }
}

seedDB().then(() => {
  mongoose.connection.close();
})