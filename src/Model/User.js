const { Schema } = require("mongoose")
const { database } = require("../database/MongoDB")

const schema = new Schema({
    UserId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Created: {
        type: Date,
        required: true
    }
})


module.exports = database.model("", schema)