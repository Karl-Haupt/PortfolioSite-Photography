const express = require('express');
const router = express.Router();

const { createPhoto, getAllPhotos, getSinglePhoto } = require('../controllers/mediaController');

router.route('/photos/new').post(createPhoto);
router.route('/photos').get(getAllPhotos);
router.route('/photos/:id').get(getSinglePhoto);

module.exports = router;