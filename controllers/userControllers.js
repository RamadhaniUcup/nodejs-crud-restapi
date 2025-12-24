
import db from '../config/db.js';
//1.Menampilkan data dari tabel
export const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
    //jika ada eror
    if (err) return res.status(500).json({ message: err });
    //jika berhasil 
    res.json(results);
});
};


//2. menyimpan data 
//("INSERT INTO users (name, email) VALUES (?, ?,?)
export const insertUser = (req, res) => {
    const { name, email,password } = req.body;

db.query("INSERT INTO users (name, email,password) VALUES (?,?,?)",
    [name, email,password],
    (err, results) => {

        if (err) return res.status(500).json({ message: err });
        res.json({ message: "data berhasil di simpan" });
}
);
};




//3. menampilkan data berdasarkan id
export const showUser = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ message: err });
    
    if (results.length === 0)
    return res.status(400).json({ message: "User tidak ditemukan" });
res.json(results[0]);
});
};




//4.uptade data berdasarkan id
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
db.query("UPDATE users SET name=?, email=? WHERE id=?",
    [name, email, id],
    (err, results) => {
    if (err) return res.status(500).json({ message: err });

    res.json({ message: "Data berhasil diupdate" });
}
);
};

//5.delete data berdasarkan id
export const deleteUser = (req, res) => {
const { id } = req.params;

db.query("DELETE FROM users WHERE id=?", [id], (err, results) => {

    if (err) return res.status(500).json({ message: err });

    res.json({ message: "Data berhasil dihapus" });
});
};


