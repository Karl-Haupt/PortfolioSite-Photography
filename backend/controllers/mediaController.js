const Photo = require('../models/photos');
const cloudinary = require('cloudinary');

const catchAsyncError = require('../middleware/catchAsyncError');
const ErrorHandler = require('../utils/errorHandler');

//Create photo => /api/v1/photos/new
exports.createPhoto = catchAsyncError( async (req, res, next) => {
    
    //Handle 1/more images
    let images = [];
    if(typeof req.body.images === 'string') {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }

    //Upload the files to cloudinary
    let imagesLinks = [];
    for(let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: 'photod'
        });
    
        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url
        });
    }

    req.body.images = imagesLinks;
    // req.body.user = req.user.id;

    const photos = await Photo.create(req.body);

    res.status(201).json({
        success: true,
        photos
    });
    
});

//Get all photos => /api/v1/photos
exports.getAllPhotos = catchAsyncError( async (req, res, next) => {
    const photos = await Photo.find();

    res.status(200).json({
        success: true,
        photos
    });
});

//Get a single photo => /api/v1/photos/:id
exports.getSinglePhoto = catchAsyncError( async (req, res, next) => {
    const photo = await Photo.findById(req.params.id);

    if(!photo) return next(new ErrorHandler('Photo not found'), 404);

    res.status(200).json({
        success: true,
        photo
    });
});

