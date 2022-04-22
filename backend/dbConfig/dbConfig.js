const mongoose = require("mongoose")

const mongodburl = `mongodb+srv://ojeabulu123:passw0rd@hospital-expenses.xfzyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const dbConnection = mongoose.connect(mongodburl)
    .then(db => {
        console.log("Connected to database")
        return db
    }).catch(err => {
    console.log("Couldn't connect")
    })

module.exports = dbConnection;