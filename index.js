import express from "express";
import bodyParser from "body-parser";

const app  = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/create",(req,res)=>{
    res.render("create.ejs");
});

app.get("/view",(req,res)=>{
    res.render("view.ejs");
})

app.post("/view",(req,res)=>{
    const title = req.body["title"];
    const notes = req.body["notes"];
    console.log(title,notes);
    res.render("view.ejs",{title:title,notes:notes});
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});