


const { Schema } = require("mongoose")
const { database } = require("../database/MongoDB")

const schema = new Schema({
    UserId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    FolderId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    Name: {
        type: String,
        required: true
    },
    Color: {
        type: String,
        required: true
    }
})


module.exports = database.model("folder", schema)