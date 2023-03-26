const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
var hbs=require("hbs");

//while hosting process.env.port method is  used user enter url of website then system take one port randomly to do this we use this method and then we use or operator(||) when all port are busy then it use the developer defined port

const staticpath = path.join(__dirname,"/public");
const view_path = path.join(__dirname,"/templates/views");
const partial_path = path.join(__dirname,"/templates/partials");


app.set("views",view_path);
app.use(express.static(staticpath));
app.set("view-engine",'hbs');~

hbs.registerPartials(partial_path);


app.get("/",(req,res)=>{
    res.render("index.hbs");
})

app.get("/About",(req,res)=>{
    res.render("about.hbs");
})
app.get("/weather",(req,res)=>{
    res.render("weather.hbs");
})
app.get("*",(req,res)=>{
    res.render("error.hbs");
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})

