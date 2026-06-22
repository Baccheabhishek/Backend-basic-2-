const mongoose = require("mongoose");

 async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:8Yq5i3cuO91rxbsS@yt-backend.mkvdfbt.mongodb.net/halley");
    console.log("Connected to MongoDB");
}
module.exports = connectDB;