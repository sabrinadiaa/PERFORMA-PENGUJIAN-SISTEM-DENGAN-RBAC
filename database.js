const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sisbat' // database
});

db.connect((err) => {
  if (err) {
    console.error('Koneksi DB gagal:', err);
  } else {
    console.log('Koneksi DB berhasil');
  }
});

module.exports = db;