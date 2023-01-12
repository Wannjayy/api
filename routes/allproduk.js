// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router() 
const Allproduk = require('../models/Allproduk')
const app = express()


app.use(express.json())

// Create 
router.post('/', async(req, res) => {
    // tampung input 
    const allprodukPost = new Allproduk({
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })

    try {
        // simpan data 
        const allproduk = await allprodukPost.save()
        // response
        res.json(allproduk)
    } catch (error) {
        res.json({message: error})
    }
})
// Read
router.get('/', async(req, res) => {
    try {
        const allproduk = await Allproduk.find()
        res.json(allproduk)
    } catch (error) {
        res.json({message: error})
    }
})
// Update 
router.put('/:allprodukId', async(req, res) => {
    // tampung input
    const data = {
        nama: req.body.nama,
        alamat: req.body.harga,
        gambar: req.body.gambar
    }

    try {
        // update data 
        const allproduk = await Allproduk.updateOne({_id: req.params.allprodukId}, data)
        // response
        res.json(allproduk)
    } catch (error) {
        res.json({message: error})
    }
})
// Delete 
router.delete('/:allprodukId', async(req, res) => {
    try {
        // delete data 
        const allproduk = await Allproduk.deleteOne({_id: req.params.allprodukId})
        // response
        res.json(allproduk)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/:allproduknama', async(req, res) => {
    try {
        const allproduk = await Allproduk.findOne({nama: req.params.allproduknama})
        res.json(allproduk)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router