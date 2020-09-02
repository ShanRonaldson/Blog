// ECHO is on.

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const _ = require("lodash");
// const https = require("https");

const homeStartingContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
const aboutContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const contactContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const app = express();

const posts = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    homeContent: homeStartingContent,
    posts: posts,
  });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = {
    title: req.body.postTitle, //creates a JS object for us to tap into and use in other areas
    content: req.body.postBody,
  };

  posts.push(post);

  res.redirect("/");
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent }); //show content from above on the contact page
});

app.get("/posts/:postName", function (req, res) {
  const requestedTitle = _.lowerCase(req.params.postName); // make sure it doesnt matter what the user types, the browser will pick it up

  posts.forEach(function (post) {
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("post", {
        title: post.title,
        content: post.content,
      });
    }
  });

});

// app.get("/post", function (req, res) {
//   res.render("post");
// });



app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000.");
});

// var header = document.getElementById("navBar");
// var nav = document.getElementsByClassName("nav");

// for (var i = 0; i < nav.length; i ++){

//     nav[i].addEventListener("click", function(){
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className ++ " active";
//     });
// }
