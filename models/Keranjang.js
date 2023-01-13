// (4) Buat Schema Product
const mongoose = require('mongoose')

const KeranjangSchema = mongoose.Schema({
    // Buat Schema data
    jumlah_pesanan: {
        type: Number,
        required: true
    },
    keterangan: {
        type: String,
        required: true
    },
    product: {
        type: Object,
        required: true
    },
})

module.exports = mongoose.model('Keranjang', KeranjangSchema)