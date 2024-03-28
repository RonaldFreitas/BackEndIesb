const express = require('express');

const app = express();

app.listen(3000, function(){
    console.log("API está online!");
});

app.get("/", function(req, res){
res.status(200).send("Salve!");
});

app.post("/", function(req, res){
res.status(201).end();
});

app.put("/", function(req, res){
res.status(200).end();
});

app.delete("/", function(req, res){
    res.status(204).end();
});

module.exports = app;
