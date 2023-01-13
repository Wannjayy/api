// (4) Buat Schema Product
const mongoose = require('mongoose')

const PesananSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: Number,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
    keranjangs: {
        type: Array,
        required: true
    },
})

module.exports = mongoose.model('Pesanan', PesananSchema)