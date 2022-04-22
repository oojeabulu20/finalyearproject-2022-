const routes = require("express").Router();
const apiController = require("../controllers/apiController");


//category routes
routes.route("/api/category").post(apiController.createCategory)
    .get(apiController.getCatergory)
       
//transaction routes
routes.route("/api/transaction").post(apiController.createTransaction)
    .get(apiController.getTransaction)
    .delete(apiController.deleteTransaction)

routes.route("/api/labels")
.get(apiController.getLabels)

                        
module.exports = routes;