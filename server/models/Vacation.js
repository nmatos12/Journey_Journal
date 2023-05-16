const { Schema, model } = require('mongoose');

const vacationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    guest: {
        type: Number,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});
    
const Vacation = model('vacation', vacationSchema);
    
module.exports = Vacation;
