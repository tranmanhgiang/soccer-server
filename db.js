var mysql = require("mysql");
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'soccer'
});

conn.connect((err) => {
    if(err) throw err;
    console.log("Connection success");
});

module.exports = conn;