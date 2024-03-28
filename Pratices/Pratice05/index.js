const express = require('express');
const app = express();
app.use(express.json());

const routerProdutos = require('./router');
app.use(routerProdutos);

app.listen(3000, function(){
  console.log("API está online.")
});

module.exports = app;