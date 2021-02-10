const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
var cors = require('cors')
const connectionDB = require("./database/connection");
const route  = require("./routes/route");
const path = require("path")

const app = express();

// parse application/json
app.use(bodyParser.json())

// dotenv load 
dotenv.config({path:'config.env'})


// enable cors
app.use(cors());

// database connection
connectionDB.dbConnection();

// port initialize 
PORT = process.env.PORT || 8080;

// set engine
app.set("view engine","ejs");

// set static path
app.use('/js', express.static(path.join(__dirname, 'public')))

// set view path
///app.set("views");

// route import
app.use('/api',route);

// second route
app.use('/',require('./routes/render_route'));

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})

