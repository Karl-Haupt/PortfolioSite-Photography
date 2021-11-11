const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/catchAsyncError');

//Register user => /api/v1/register
exports.registerUser = catchAsyncError( async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password
    });

    res.status(200).send({
        success: true,
        user
   });
});

//Login User => /api/v1/login
exports.loginUser = catchAsyncError( async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) return next(new ErrorHandler('Please enter email & password', 400));

   //Finding user in database 
   const user = await User.findOne({ email }).select('+password');

   if(!user) return next(new ErrorHandler('Invalid email or password'), 401)

   const isPasswordMatched = await user.comparePassword(password);

   if(!isPasswordMatched) return next(new ErrorHandler('Invalid email or password'))

   res.status(200).send({
        success: true,
        user
   });
   
});

//Get curently logged in user details => api/v1/message
exports.getUserProfile = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).send({
        success: true,
        user
    });
});

//Logout user => /api/v1/logout
exports.logout = catchAsyncError( async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: 'Logged out'
    });
});