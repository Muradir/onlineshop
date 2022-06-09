//use express module
const express = require("express");
//create express app
const app = express();

//use path module
var path = require('path');
const rootDir = path.dirname(path.dirname(__filename));

app.use(express.static(rootDir + '/stylesheets'));
//console.log(__filename)

//use body-parser module
const bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.urlencoded({extended: true}));

//const { response } = require("express");

//use mysql module
const mysql = require("mysql")
var con = mysql.createConnection({
    host: "b7xzxkxarjooxxw9wkfi-mysql.services.clever-cloud.com",
    user: "ugk98we9fog0mjs5",
    password: "XaP2f68yAjHBfVwNmrTn"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


//home screen
app.get("/", function(req, res){
    //res.send("Hello Web!")
    //res.send("<h1>Cool Website</h1>")
    res.sendFile(rootDir + "/Account/LogIn.html")
});

app.post("/", function(req, res){
    console.log(req);
    email = req.body.uname;
    password = req.body.psw;
    res.send("Email: " + email + ", Password: " + password);
    
});

/*//login screen
app.get("/login", function(req, res){
    res.send("Give me your password!");
})*/

app.listen(3000, function(){
    console.log("Heya");
});



