
const controller = require('./controller');


function menu() {
console.log("1. List");
console.log("2. Create");
console.log("3. Find");
console.log("4. Update");
console.log("5. Remove");
console.log("6. Exit");
}


function chooseOption(option) {
    switch(option) {
        case '1' :
            controller.list();
          break;
        case '2' :
          controller.create();
          break;
        case '3' :
          controller.find();  
          break;
        case '4' :
          controller.update();  
          break;
        case '5' :
          controller.remove();  
          break;
        case '6' : Process.exit(0);
        default: console.log('Invalid option');
       
       
    }
    readline.question("Press ENTER to continue...");
}


function main() {
while (true){
    menu();
    const option = readline.question("Choose an option:")
    chooseOption(option)
}


}


main()


