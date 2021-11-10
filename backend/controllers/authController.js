const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
//TODO: sendToken, sendEmail

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

//currently login in user

//logout