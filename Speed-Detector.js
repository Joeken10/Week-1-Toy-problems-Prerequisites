const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector() {
    rl.question("What is your current speed? ", (speed) => {
        if (isNaN(speed) || speed < 0) {
            console.log("Invalid speed. Please enter a valid speed.");
            speedDetector(); 
        } else {
            if (speed >= 0 && speed <= 70) {
                console.log("Ok");
                rl.close();
            } else {
                let aboveSpeedLimit = speed - 70;
                numberOfDemerits = Math.ceil(aboveSpeedLimit / 5);
                if (numberOfDemerits <= 12) {
                    console.log(`Points: ${numberOfDemerits}`);
                    rl.close();
                } else {
                    console.log("License suspended");
                    rl.close();
                }
            }
        }
    })
}
speedDetector();

