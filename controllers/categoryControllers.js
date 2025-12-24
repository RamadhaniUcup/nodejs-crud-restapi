import db from '../config/db.js';
//1.Menampilkan data dari tabel

export const getcategory = (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
    //jika ada eror
    if (err) return res.status(500).json({ message: err });
    //jika berhasil 
    res.json(results);
});
};


//2. menyimpan data 
export const insertcategory = (req, res) => {
    const { nama } = req.body;

db.query("INSERT INTO categories (nama) VALUES (?)",
    [nama],
    (err, results) => {

        if (err) return res.status(500).json({ message: err });
        res.json({ message: "data berhasil di simpan" });
}
);
};

//3. menampilkan data berdasarkan id
export const showcategory = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM categories WHERE id_category = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });

      if (results.length === 0) {
        return res.status(404).json({ message: "Category tidak ditemukan" });
      }

      res.json(results[0]);
    }
  );
};





//4.uptade data berdasarkan id
export const updatecategory = (req, res) => {
    const { id } = req.params;
    const { nama} = req.body;
db.query("UPDATE product SET nama=? WHERE id_category=?",
    [nama,id],
    (err, results) => {
    if (err) return res.status(500).json({ message: err });

    res.json({ message: "Data berhasil diupdate" });
}
);
};

//5.delete data berdasarkan id
export const deletecategory = (req, res) => {
const { id } = req.params;

db.query("DELETE FROM categories WHERE id_category=?", [id], (err, results) => {

    if (err) return res.status(500).json({ message: err });

    res.json({ message: "Data berhasil dihapus" });
});
};




