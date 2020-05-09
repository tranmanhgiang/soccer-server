var conn = require("../db");

module.exports = {
    get: (req, res) => {
        let sql = "SELECT f.*,c.*,CONCAT(u.u_firstName,' ', u.u_lastName) AS captain FROM findAMatch f JOIN clubs c ON f.c_id = c.c_id JOIN users u ON c.u_id = u.u_id ";
        conn.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM findAMatch WHERE f_id = ?";
        conn.query(sql,[req.params.id], (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    update : (req, res) => {
        let sql = "UPDATE findAMatch SET ? WHERE f_id = ?";
        conn.query(sql,[req.body,req.params.id], (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    post: (req, res) => {
        let sql = "INSERT INTO findAMatch SET ? ";
        conn.query(sql, [req.body] , (err, response) => {
            if (err) throw err;
            res.json({message : "Insert success"});
        })
    },
    delete: (req, res) => {
        let sql = "DELETE FROM findAMatch where f_id = ?";
        conn.query(sql, [req.params.id], (err,response) => {
            if (err) throw err;
            res.json("Xóa thành công!");
        })
    }
}