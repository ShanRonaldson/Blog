// ECHO is on.


const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
// const https = require("https");

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const contactContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));



app.get("/", function(req, res){
    res.render("list");
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000.");
});

