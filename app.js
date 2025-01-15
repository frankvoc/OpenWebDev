const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname,"public")));

//Route
app.get("/",(req, res)=>{
    res.redirect("/index");
});
app.get("/json",(req, res)=>{
    res.sendFile(path.join(__dirname,"public","players.json"))
});
//route for todo.json
app.get("/todo",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","todo.json"));
})
//route for index
app.get("/index",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index2.html"));
})
//route for read-todo
app.get("/read-todo", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "read-todo.html"));
});
//Creating listener on port 3000
app.listen(PORT,()=>{
    console.log("Server Running on port", PORT)
})