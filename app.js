// (1) definisikan module, middleware
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
const cors = require('cors')


app.use(cors())
// (6) middleware body-parser
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// (7) import routes
const produkRoutes = require('./routes/produk')
const allprodukRoutes = require('./routes/allproduk')
const keranjangRoutes = require('./routes/keranjang')
const pesananRoutes = require('./routes/pesanan')

// (8) app.use (mendaftarkan middleware baru ke Express)
app.use('/produk', produkRoutes)
app.use('/allproduk', allprodukRoutes)
app.use('/keranjang', keranjangRoutes)
app.use('/pesanan', pesananRoutes)

// (3) koneksi ke database mongodb
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

    // handle error
    db.on('error', console.error.bind(console, 'Error Establishing a Database Connection?'))
    // handle success
    db.once('open', () => {
        console.log('Database is connected')
    })

// (2) listen port, dan buat callback dengan output console.log
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})