const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
// const path = require('path');
const dotenv = require('dotenv');

const errorMiddleware = require('./middleware/errors');

const auth = require('./routes/auth');
const media = require('./routes/media');

dotenv.config({ path: 'backend/config/config.env' });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

app.use('/api/v1', auth);
app.use('/api/v1', media);

app.use(errorMiddleware);

module.exports = app;