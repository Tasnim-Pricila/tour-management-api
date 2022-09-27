const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    place: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [30, 'Name is too long']
    },
    cost: {
        type: Number,
        required: true,
        min: [0, 'Price can not be negative']
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    hotelName: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [50, 'Name is too long']
    },
    groupSize: {
        type: Number,
        required: true,
        min: [0, 'Group size can not be negative'],
        max: [25, 'Member can not be more then 25']
    },
    guideName: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [30, 'Name is too long']
    },
    viewCount: {
        type: Number,
        min: [0, 'viewCount can not be negative']
    }
})


const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;