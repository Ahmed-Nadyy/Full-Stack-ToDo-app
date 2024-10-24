require("dotenv").config();
const express = require('express');
const { connectToMongoDB } = require("./database");
const cors = require('cors'); 


const app = express();
app.use(express.json());
app.use(cors());

const router = require('./routes'); 
app.use('/api', router );

const port = process.env.PORT || 5000;

async function startServer(){
   await connectToMongoDB();
   app.listen(port, () => {
      console.log(`The app is running on http://localhost:${port}`); 
   });
}

startServer();
