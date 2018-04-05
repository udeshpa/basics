
process.stdout.write("Hello ");
process.stdout.write("World \n\n\n");

var questions = [
    "What is your name ? ",
    "What is your hobby ? ",
    "What is your preferred prog language ?"
];


function ask(i) {

    process.stdout.write(`${questions[i]}`);
    process.stdout.write("   >   ")
}

var answers = []

process.stdin.on('data', function(data) {

    answers.push(data.toString().trim());
//    process.stdout.write('\n ' + data.toString().trim() + '\n')
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
})

process.on('exit', function() {
    process.stdout.write("\n\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`)
    process.stdout.write("\n\n\n");
})

ask(0);
