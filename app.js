const express = require('express');
const app = express();
const path = require('path');

// Set folder public sebagai static folder untuk menyajikan file CSS dan gambar
app.use(express.static(path.join(__dirname, 'public')));

// Set mesin template EJS
app.set('view engine', 'ejs');

// Route untuk halaman utama
app.get('/', (req, res) => {
  res.render('index');
});

// Port yang akan digunakan
const port = 3000;

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
