var conn = require("../db");

module.exports = {
    get: (req, res) => {
        let sql = "SELECT * FROM admins";
        conn.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM admins WHERE a_id = ? ";
        conn.query(sql , [req.params.id], (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    post: (req, res) => {
        let sql = "INSERT INTO admins SET ? ";
        conn.query(sql, [req.body] , (err, response) => {
            if (err) throw err;
            res.json({message : "Insert success"});
        })
    },
    delete: (req, res) => {
        let sql = "DELETE FROM admins where a_id = ?";
        conn.query(sql, [req.params.id], (err,response) => {
            if (err) throw err;
            res.send("Xóa thành công!");
        })
    }
}