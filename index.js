const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Airline = require("./models/airline");

mongoose.connect("mongodb://localhost/airline",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err)return console.log(err);
    console.log("connected to DB");
})

const PORT = 8000

app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs");

app.route("/")
.get((req,res)=>{
    res.render("index")
})
.post((req,res)=>{
    const airline = new Airline({...req.body})
    airline.save().then((doc)=>{
        console.log(doc);
        res.redirect("/");
    })
})

app.get("/records",(req,res)=>{
    Airline.find().then(docs=>res.render("products",{docs}))
})

app.post("/delete/:id",(req,res)=>{
    Airline.findById(req.params.id).remove().then(()=>{
        res.redirect("/records");
    })
})


app.listen(PORT,()=>console.log(`listening on ${PORT}`));