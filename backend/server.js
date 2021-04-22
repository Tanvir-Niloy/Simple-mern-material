require('dotenv').config();
const express  = require('express');
const connectDB = require('./config/db');
const errorHandler = require("./middleware/errorHandler");
const colors = require('colors');
const app  = express();

//db connect

connectDB();

//Middleware

app.use(express.json());

// Error Handler
app.use(errorHandler);


//Routes

app.use('/api/v1/bootcamps',require('./routes/bootcampRoutes'))

const port = process.env.PORT || 5000;

app.listen(port,()=>{

          console.log(`server running on port ${port}`.yellow.underline.bold)
});