var conn = require("../db");

module.exports {
    get : (req, res) => {
        let sql = "SELECT * from";
        conn.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        })
    }
}