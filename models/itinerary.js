const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    name: {type: String, required: true},
    nameUser: {type: String, required: true},
    imageUser: {type: String, required: true},
    activities: [{type: mongoose.Types.ObjectId, ref: 'activity'}],
    price: {type: Number, required: true},
    time: {type: Number, required: true},
    likes: {type: Array, required: true},
    hashtags: {type: Array, required: true},  
    image: {type: String, required: true},
    comments: [{
        comment: {type: String},
        user: {type:mongoose.Types.ObjectId, ref: 'user'},
        }],
    city: {type: mongoose.Types.ObjectId, ref: 'cities'},
})

const Itinerary = mongoose.model('itineraries', itinerarySchema);
module.exports = Itinerary