// (4) Buat Schema Product
const mongoose = require('mongoose')

const PesananSchema = mongoose.Schema({
    // Buat Schema data
    nama: {
        type: String,
        required: true
    },
    keranjangs: {
        type: Array,
        required: true
    },
    alamat: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Pesanan', PesananSchema)