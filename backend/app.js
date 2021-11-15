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

app.use(express.json({ limit: "50mb" })); 
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// app.use(express.json());
// app.use(bodyParser.urlencoded({ limit: '150mb', extended: true }));
app.use(cookieParser());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
}));

app.use('/api/v1', auth);
app.use('/api/v1', media);

app.use(errorMiddleware);

module.exports = app;