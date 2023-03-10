require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL

const app = express();
const routes = require('./routes/routes');

app.use('/api', routes)

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})