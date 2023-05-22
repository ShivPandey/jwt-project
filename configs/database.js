const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => {
    // connection to database
    mongoose
        .connect(MONGO_URI, {})
        .then(() => {
            console.log('Successfully connected to database');
        })
        .catch((error) => {
            console.log('Database connection failed. exiting now...');
            console.error(error);
            process.exit(1);
        })
}