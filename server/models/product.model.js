const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    title: {type: String,
            required: [true, 'Title is required']},
    price: {type: Number,
            required: [true, 'Price is required']},
    description: {type: String,
            required: [true, 'Description is required']}
}, {timestamps: true});

module.exports.Producto = mongoose.model("Producto", ProductoSchema);


