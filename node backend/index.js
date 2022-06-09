
//use express module
const express = require("express");
//create express app
const app = express();

//use path module
var path = require('path');
const rootDir = path.dirname(path.dirname(__filename));

app.use(express.static(rootDir + '/stylesheets'));

//use body-parser module
const bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.urlencoded({extended: true}));

//use mysql module
const mysql = require("mysql")

//use db module
const db = require(__dirname + "/database.js")
console.log(db);

//home screen
app.get("/", function(req, res){
    //res.send("Hello Web!")
    //res.send("<h1>Cool Website</h1>")
    res.sendFile(rootDir + "/Account/LogIn.html")
});

app.post("/Home", function(req, res){
    console.log(req);
    inputEmail = req.body.uname;
    inputPassword = req.body.psw;
    //res.send("Email: " + inputEmail + ", Password: " + password);
    var connection = mysql.createConnection({
        host: "bqrexvhvnlarvtcjjpt2-mysql.services.clever-cloud.com",
        user: "urbudhrsydebyn5p",
        password: "wu2WXApSxOJKxZFyUhp0",
        database : "bqrexvhvnlarvtcjjpt2"
    });
    
    connection.connect();
    console.log(connection);

    isValidLogin = exeSelectQuery('SELECT * FROM users WHERE email = ? AND password = ?;', [inputEmail, inputPassword], connection);

    if (isValidLogin){
        console.log("Access is possible")
        res.sendFile(rootDir + '/Account/OrderHistory.html')
    }
    else{
        console.log("No result")
        res.redirect('/');
    } 

    /*connection.query('SELECT * FROM users WHERE email = ? AND password = ?;', [inputEmail, inputPassword], function (error, results, fields) {
        if (error) throw error;
        data = results[0]
        console.log(results[0])
        console.log(results)

        if (data != undefined){
            console.log("Access is possible")
            res.sendFile(rootDir + '/Account/OrderHistory.html')
        }
        else{
            console.log("No result")
            res.redirect('/');
        } 
    });*/

});

app.listen(3000, function(){
    console.log("Heya");
});

function exeSelectQuery(selectQuery, filterParameters, connection){
    connection.query(selectQuery, filterParameters, function (error, results, fields) {
        if (error) throw error;
        data = results[0]
        console.log(results[0])
        console.log(results)

        if (data != undefined){
            return true
        }
        else{
            return false
        } 
    });
};



