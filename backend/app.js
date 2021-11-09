const express = require('express');
const app = express();

const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: 'backend/config/config.env' });

app.use(express.json());

//TODO: Set up for image upload
//TODO: Import all routes

module.exports = app;