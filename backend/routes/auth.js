const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getUserProfile, logout } = require('../controllers/authController');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/me').get(getUserProfile);
router.route('/logout').get(logout);

module.exports = router;
