// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Produk = require('../models/Produk')

// Create 
router.post('/', async(req, res) => {
    // tampung input 
    const produkPost = new Produk({
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
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
// Update 
router.put('/:produkId', async(req, res) => {
    // tampung input
    const data = {
        nama: req.body.nama,
        alamat: req.body.harga,
        gambar: req.body.gambar
    }

    try {
        // update data 
        const product = await Produk.updateOne({_id: req.params.produkId}, data)
        // response
        res.json(produk)
    } catch (error) {
        res.json({message: error})
    }
})
// Delete 
router.delete('/:produkId', async(req, res) => {
    try {
        // delete data 
        const produk = await Produk.deleteOne({_id: req.params.produkId})
        // response
        res.json(produk)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router