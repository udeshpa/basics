var readLine = require('readline');
var rL =  readLine.createInterface(process.stdin, process.stdout);
var fs = require("fs");


var realPerson = {
    name : '',
    sayings : []
}

rL.question("What is the name of a real person", function(answer) {
    //console.log(answer);

    realPerson.name = answer;

    var stream = fs.createWriteStream(realPerson.name +  ".md");

    stream.write(`${realPerson.name}\n=================\n`);

    //fs.writeFileSync(realPerson.name +  ".md", `${realPerson.name}\n=================\n`);




    rL.setPrompt(`What would ${realPerson.name} say ?`);
    rL.prompt();
    rL.on('line', function(saying) {

        realPerson.sayings.push(saying.trim());

        

        if(saying.toLowerCase().trim() === 'exit') {
            rL.close()
            stream.close();
        }else {
            //fs.appendFile(realPerson.name + ".md", `${saying.trim()} \n`);
            stream.write(`${saying.trim()} \n`);
            rL.setPrompt('What else is he saying ? (type exit to quit)')
            rL.prompt();
        }
    })
})

rL.on('close', function() {
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit()
})