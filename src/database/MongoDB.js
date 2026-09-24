const mongoose = require("mongoose")

const database = mongoose.createConnection(process.env.MongoDBURL)


setTimeout(() => {
    if(database.readyState === 1) {
        console.log("🍃 MongoDB Connected")
    } else {
        console.log("⚠️ MongoDB not Connected")
    }
}, 2000);

module.exports = {
    database
}