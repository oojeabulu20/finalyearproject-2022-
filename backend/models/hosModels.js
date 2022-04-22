const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categoryModel = new Schema({
    type: {
        type: String,default:"Investment"
    },
    color: {
        type:String, default:"#454B1B"
    }
})

const transactionModel = new Schema({
    name: {
        type: String,default:"Anonymous"
    },
    type: {
        type:String, default:"Investment"
    },
    amount: {
        type:Number
    },
    date: {
        type: Date, default:Date.now
    }
})


const Category = mongoose.model("categories", categoryModel)
const Transaction = mongoose.model("transaction", transactionModel)

exports.default = Transaction
module.exports = {
    Category,
    Transaction
}