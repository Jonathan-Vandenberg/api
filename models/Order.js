const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['BUY', 'SELL'],
        default: 'BUY'
    }
});

module.exports = mongoose.model('Order', orderSchema);
