var conn = require("../db");

module.exports = {
    get: (req, res) => {
        let sql = "SELECT * FROM users";
        conn.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM users WHERE u_email = ? ";
        conn.query(sql , [req.params.email], (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    post: (req, res) => {
        let sql = "INSERT INTO users SET ? ";
        conn.query(sql, [req.body] , (err, response) => {
            if (err) throw err;
            res.json({message : "Insert success"});
        })
        
    },
    delete: (req, res) => {
        let sql = "DELETE FROM users where u_id = ?";
        conn.query(sql, [req.params.id], (err,response) => {
            if (err) throw err;
            res.send("Xóa thành công!");
        })
    }
}