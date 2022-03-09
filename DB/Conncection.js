const mongoose = require('mongoose');

const URI = "mongodb+srv://dbOnlineCourse:4enns6RCxNMwAMuq@cluster0.z7yua.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async() => {
    try {
        await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('db connected..!');
    } catch (e) { console.log(e); }

};

module.exports = connectDB;