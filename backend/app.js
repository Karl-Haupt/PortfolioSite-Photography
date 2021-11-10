const express = require('express');
const app = express();

const path = require('path');
const dotenv = require('dotenv');

const errorMiddleware = require('./middleware/errors');

dotenv.config({ path: 'backend/config/config.env' });

app.use(express.json());

//TODO: Set up for image upload
//TODO: Import all routes
app.use('/api/v1', auth);

app.use(errorMiddleware);

module.exports = app;