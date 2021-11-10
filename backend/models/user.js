const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please eneter your email address'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, 'Your password must be at least 6 characters'],
        select: false
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

//Encrypt password before saving the user
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

//Compare's user password
userSchema.methods.comparePassword = async function(enteredPassword) {
    bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);