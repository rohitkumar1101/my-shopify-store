const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv/config')
const Port = process.env.PORT || 5000
 
app.use(cors());
app.use(bodyParser.json());

//Import routes
const ordersRoute = require('./routes/orders');

//Middleware
app.use('/orders', ordersRoute)


//Routes
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});


//DB Connection
const DB_CONNECT = process.env.DB_CONNECTION
mongoose.connect(DB_CONNECT,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log("Connected To DB")
);

//Listening to server
app.listen(Port);

