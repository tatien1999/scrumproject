const mongoose = require('mongoose');

const submitTemplate = new mongoose.Schema({
    imageName: {
        type: String,
        default: "img",
        required: true
    },
    imageData: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('submitTable', submitTemplate)