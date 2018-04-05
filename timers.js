var waitTime = 3000
var currentTime = 0
var waitInterval = 10

console.log("Wait for it")

function percentWaited(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting... ${p}%`)
}


var interval = setInterval(function() {
    currentTime += waitInterval;
    var percent = Math.floor(100 * (currentTime / waitTime ));
    //console.log(`current time: ${currentTime/1000} seconds`)
    percentWaited(percent);
}, waitInterval);

setTimeout(function() {
    clearInterval(interval);
    percentWaited(100);
    console.log("\n\n done \n\n");
}, waitTime);

process.stdout.write("\n\n");
percentWaited(0);