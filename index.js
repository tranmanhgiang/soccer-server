var express = require("express");
var app = express();
var cors = require("cors");
var userRouter = require("./routes/users.route");
var clubRouter = require("./routes/clubs.route");
var adminRouter = require("./routes/admins.route");
var reportRouter = require("./routes/reports.route");
var findAmatchRouter = require("./routes/findAmatch.router");
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(4000);

app.use(cors());
app.use('/users', userRouter); 
app.use('/clubs', clubRouter);
app.use('/admins', adminRouter);
app.use('/reports',reportRouter);
app.use('/findamatch',findAmatchRouter);

