
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/Calculator.html")
});

app.post("/", function(req, res){
    num1 = Number(req.body.num1);
    num2 = Number(req.body.num2);
    result = num1 * num2;
    res.send("The result of " + num1 + " * " + num2 + " is " + result + "!");
    //res.redirect("/")
    //res.send("The result of " + num1 + " * " + num2 + " is " + result + "!");
});

app.listen(3000, function(){});