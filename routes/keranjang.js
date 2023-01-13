// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Keranjang = require('../models/Keranjang')

// Create 
router.post('/', async(req, res) => {
    // tampung input 
    const keranjangPost = new Keranjang({
        jumlah_pesanan: req.body.jumlah_pesanan,
        keterangan: req.body.keterangan,
        product: req.body.product
    })

    try {
        // simpan data 
        const keranjang = await keranjangPost.save()
        // response
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})
// Read
router.get('/', async(req, res) => {
    try {
        const keranjang = await Keranjang.find()
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/:keranjangId', async(req, res) => {
    try {
        const keranjang = await Keranjang.findOne({_id: req.params.keranjangId})
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})
// Delete 
router.delete('/:keranjangId', async(req, res) => {
    try {
        // delete data 
        const keranjang = await Keranjang.deleteOne({_id: req.params.keranjangId})
        // response
        res.json(keranjang)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router