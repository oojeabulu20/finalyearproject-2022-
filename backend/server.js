const express = require("express");
//initialise the server
const app = express()
const cors = require("cors")

const PORT = 5555;

//middlewares
app.use(express.json());
app.use(cors())

//connecting to database
const dbConnect = require("./dbConfig/dbConfig")

app.use(require("./routes/apiRoutes"))

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
 