// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Pesanan = require('../models/Pesanan')

// Create 
router.post('/', async(req, res) => {
    // tampung input 
    const pesananPost = new Pesanan({
        nama: req.body.nama,
        alamat: req.body.alamat,
        keranjang: req.body.keranjang
    })

    try {
        // simpan data 
        const pesanan = await pesananPost.save()
        // response
        res.json(pesanan)
    } catch (error) {
        res.json({message: error})
    }
})
// Read
router.get('/', async(req, res) => {
    try {
        const pesanan = await Pesanan.find()
        res.json(pesanan)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/:pesananId', async(req, res) => {
    try {
        const pesanan = await Pesanan.findOne({_id: req.params.pesananId})
        res.json(pesanan)
    } catch (error) {
        res.json({message: error})
    }
})
// Delete 
router.delete('/:pesananId', async(req, res) => {
    try {
        // delete data 
        const pesanan = await Pesanan.deleteOne({_id: req.params.pesananId})
        // response
        res.json(pesanan)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router