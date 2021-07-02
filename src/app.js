const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
var bodyParser = require('body-parser')
const Register = require("./models/registers");
const { json } = require("express");
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,"../",'public')));
const router = express.Router();
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended:false}));

app.set("view engine", "pug");
app.set("views", path.join(__dirname,"../", "views"));

app.get('/', (req,res,next)=> {
  res.render("index.pug");
  
});

app.get('/form', (req,res) => {
res.render("form.pug");
});

app.post('/form', async (req,res) => {
  console.log(req.body);
     try {
       const registerUser = new Register({
         firstName: req.body.fname,
         secondName : req.body.sname,
         age : req.body.age,
         phoneNumber: req.body.phn,
         state : req.body.state,
         city : req.body.city,
         email : req.body.email,
         AdhaarNumber : req.body.adh

       })
       registerUser.save();
    //const registered = await registerUser.save();
    res.status(201).render("index.pug");
     } catch (error) {
       res.status(400).send(error);
     }
  });
  

app.get('/admin-login', (req,res) => {
   res.render("login.pug");
});

app.get('/faq', (req,res) => {
  res.render("faq.pug");
});

app.get('/about', (req,res) => {
  res.render("about.pug");
});

app.get('/myth', (req,res) => {
  res.render("myth.pug");
});

app.get('/guide', (req,res) => {
  res.render("guide.pug");
});

app.get('/immunity', (req,res) => {
  res.render("immunity.pug");
});

app.get('/stats', (req,res) => {
  res.render("stats.pug");
});

// app.listen(port , () => {
//     console.log(`server is running at port no ${port}`);
// });

app.listen(3000,function(){
  console.log("Server Started on port::3001");
});