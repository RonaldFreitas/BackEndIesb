const readline = require('readline-sync');
const products = [];


function create() {
    const name = readline.question("Enter a product name: ");
    const price = readline.question("Enter a product price: ");
    const new1 = {name, price};
    products.push(new1);
}


function list() {
    products.forEach((products)=>
    console.log(products.name, "-", products.price));
}


function search() {
    const name = readline.question("Enter a product name: ");
    const searched = produtos.find(products => products.name === name);
    if (searched) {
        console.log(searched.name, "-", searched.price);
    } else {
        console.log("Product not found");
    }
}


function update() {
    const name = readline.question("Enter a product name: ");
    const searched = produtos.find(products => products.name === name);
    if (searched) {
        const otherName = readline.question("Enter a product name: ");
        const otherPrice = readline.question("Enter a product price: ");
        searched.name = otherName;
        searched.price = otherPrice;
    } else {
        console.log("Product not found");
    }
}


function remove() {
    const name = readline.question("Enter a product name: ");
    const position = produtos.findIndex((products) => products.name === name);
    if (position >= 0) {
        products.splice(position, 1);
    } else {
        console.log("Product not found")
    }
}


module.exports = {create, list, search, update, remove};
