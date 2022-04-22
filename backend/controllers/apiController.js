const hosModels = require("../models/hosModels");

//get catergory

async function createCategory(req, res) {
    const Create = new hosModels.Category({
        type: "Investment",
        color: "#0000ff", //red
    })

    await Create.save(function (err) {
        if (!err) return res.json(Create);
        return res.status(400).json({message: `Error: ${err}`})
    })
}

async function getCatergory(req, res) {
    let data = await hosModels.Category.find({})

    let cleanData = await data.map(v => Object.assign({},{type:v.type, color: v.color}))
    return res.json(cleanData)
}

async function createTransaction(req, res) {
    if(!req.body)return res.status(400).json("No data provided")
    let { name, type, amount } = req.body;

    const create = await new hosModels.Transaction(
        {
            name,
            type,
            amount,
            date: new Date()
        }
    )

    create.save(function (err) {
        if (!err) return res.json(create);
        return res.status(400).json({message:`Error ${err}`})
    })
    
}

async function getTransaction(req, res) {
    let data = await hosModels.Transaction.find({})

    return res.json(data)
}

async function deleteTransaction(req, res) {
    if (!req.body) res.status(400).json({ message: "Nothing entered" })
    await hosModels.Transaction.deleteOne(req.body, function (err) {
        if(!err)res.json("Transaction removed")
    }).clone().catch(function(err){res.json(`An error occured: ${err}`)})
}

//labels
async function getLabels(req, res) {
    hosModels.Transaction.aggregate([
        {
            $lookup: {
                from: "categories",
                localField: "type",
                foreignField: "type",
                as:"categories_info"
            }
        },
        {
            $unwind:"$categories_info"
        }
    ]).then(result => {
        let data = result.map(v=> Object.assign({},{_id:v._id, name:v.name, type:v.type,amount:v.amount,color:v.categories_info["color"]}))
        res.json(data)
    }).catch(error => {
        res.status(400).json(`Error with looking up values, error: ${error}`)
    })
}
module.exports = {createCategory, getCatergory, createTransaction, getTransaction,deleteTransaction,getLabels}