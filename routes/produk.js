// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Produk = require('../models/Produk')

// Create 
router.post('/', async(req, res) => {
    // tampung input 
    const produkPost = new Produk({
        nama: req.body.nama,
        harga: req.body.harga
    })

    try {
        // simpan data 
        const produk = await produkPost.save()
        // response
        res.json(produk)
    } catch (error) {
        res.json({message: error})
    }
})
// Read
router.get('/', async(req, res) => {
    try {
        const produk = await Produk.find()
        res.json(produk)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router