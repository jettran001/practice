
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/project02_dev');
        console.log('MongoDB connected');
    } catch (err) {
        console.log('MongoDB connection error: ' + err);
    }
}

module.exports = {connect}