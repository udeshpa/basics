var path = require("path");

var hello = "Hello World from Node js"

var justNode = hello.slice(17);
console.log(`Rock on world from ${justNode}`);

console.log(__dirname);

console.log(__filename);


console.log(`Rock on world from ${path.basename(__filename)}`);


console.log(process.argv);

function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index == -1) ? null : process.argv[index + 1];
} 

var user =  grab('--user')
var greeting =  grab('--greeting')

if(!user || !greeting) {
    console.log("You Blew it")
} else {
    console.log(`Welcome ${user}, ${greeting} `)    
}

