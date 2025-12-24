import db from '../config/db.js';
//1.Menampilkan data dari tabel

export const getproduct = (req, res) => {
    db.query('SELECT * FROM product', (err, results) => {
    //jika ada eror
    if (err) return res.status(500).json({ message: err });
    //jika berhasil 
    res.json(results);
});
};


//2. menyimpan data 
export const insertproduct = (req, res) => {
    const { nama, harga, id_category } = req.body;

db.query('INSERT INTO product (nama, price ,id_category) VALUES (?,?,?)',
    [nama, harga,id_category],
    (err, results) => {

        if (err) return res.status(500).json({ message: err });
        res.json({ message: "data berhasil di simpan" });
}
);
};


//3. menampilkan data berdasarkan id
export const showproduct = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM product WHERE id_product = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      if (results.length === 0) {
        return res.status(404).json({ message: "Product tidak ditemukan" });
      }

      res.json(results[0]);
    }
  );
};



//4.uptade data berdasarkan id
export const updateproduct = (req, res) => {
  const { id } = req.params;
  const { nama } = req.body;

  db.query(
    "UPDATE product SET nama = ? WHERE id_product = ?",
    [nama, id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: err });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }

      res.json({ message: "Data berhasil diupdate" });
    }
  );
};


//5.delete data berdasarkan id
// 5. delete data berdasarkan id
export const deleteproduct = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM product WHERE id_product = ?",
    [id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: err });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Data tidak ditemukan" });
      }

      res.json({ message: "Data berhasil dihapus" });
    }
  );
};





