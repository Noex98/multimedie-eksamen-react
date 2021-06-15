const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Config
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Server connected to database')
})


// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})