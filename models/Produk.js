// (4) Buat Schema Product
const mongoose = require('mongoose')

const ProdukSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Produk', ProdukSchema)