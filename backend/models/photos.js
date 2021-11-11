const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    genre: {
        type: String,
        default: "none"
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ]
});

module.exports = mongoose.model('Photos', photoSchema);