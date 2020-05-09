var conn = require("../db");

module.exports = {
    get: (req, res) => {
        let sql = "SELECT c.*,CONCAT(u.u_firstName,' ', u.u_lastName) AS captain FROM clubs c JOIN users u ON c.u_id = u.u_id";
        conn.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM clubs WHERE u_id = ?";
        conn.query(sql,[req.params.u_id], (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    update: (req, res) => {
        let sql = "UPDATE clubs SET ? WHERE u_id = ?";
        conn.query(sql, [req.body,req.params.u_id], (err, response) => {
            if(err) throw err;
            res.json("Update success");
        })
    },
    post: (req, res) => {
        let sql = "INSERT INTO clubs SET ? ";
        conn.query(sql, [req.body] , (err, response) => {
            if (err) throw err;
            res.json({message : "Insert success"});
        })
    },
    delete: (req, res) => {
        let sql = "DELETE FROM clubs where c_id = ?";
        conn.query(sql, [req.params.id], (err,response) => {
            if (err) throw err;
            res.json("Xóa thành công!");
        })
    }
}