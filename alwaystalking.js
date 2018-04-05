var sayings = [
    "statement 1",
    "statement 2",
    "statement 3",
    "statement 4",
    "statement 5",
    "statement 6",
    "statement 7",
    "statement 8"
]

var interval = setInterval(function() {
    var i = Math.floor(Math.random() * sayings.length);
    process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data) {
    console.log(`Received from STDIN => ${data.toString().trim()}`)
    clearInterval(interval);
    process.exit();
})