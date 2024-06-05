const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true}
});

module.exports = mongoose.model('Phone', phoneSchema);