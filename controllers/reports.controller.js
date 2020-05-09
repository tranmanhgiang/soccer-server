var conn = require("../db");

module.exports = {
    get: (req, res) => {
        let sql = "SELECT re.*,CONCAT(u.u_firstName,' ', u.u_lastName) AS captain FROM reports re JOIN users u ON re.u_id = u.u_id";
        conn.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM reports WHERE re_id = ? ";
        conn.query(sql , [req.params.id], (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    post: (req, res) => {
        let sql = "INSERT INTO reports SET ? ";
        conn.query(sql, [req.body] , (err, response) => {
            if (err) throw err;
            res.json({message : "Insert success"});
        })
    },
    delete: (req, res) => {
        let sql = "DELETE FROM reports where re_id = ?";
        conn.query(sql, [req.params.id], (err,response) => {
            if (err) throw err;
            res.send("Xóa thành công!");
        })
    }
}