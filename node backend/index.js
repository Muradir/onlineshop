//use superheroes module
var superheroes = require("superheroes");

//use express module
const express = require("express");
const { response } = require("express");
const app = express();

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
    //console.log(con);
    //res.send("Hello Web!")
    //res.send("<h1>Cool Website</h1>")
    res.send("Hello Web!")
});

//login screen
app.get("/login", function(req, res){
    res.send("Give me your password!");
})

app.listen(3000, function(){
    console.log("Heya");
});

var randSuperhero = superheroes.random()
console.log(randSuperhero)



