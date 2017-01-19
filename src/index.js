var rpio = require('rpio');
rpio.init({gpiomem: false});

var RED_PORT = 15;
var GREEN_PORT = 16;
var BLUE_PORT = 18;
var INPUT_PORT = 19;

rpio.open(RED_PORT, rpio.OUTPUT, rpio.LOW);
rpio.open(GREEN_PORT, rpio.OUTPUT, rpio.LOW);
rpio.open(BLUE_PORT, rpio.OUTPUT, rpio.LOW);
rpio.open(INPUT_PORT, rpio.INPUT);

for (var i = 0; i < 99; i++) {
    /* On for 1 second */
    rpio.write(RED_PORT, rpio.HIGH);
    rpio.write(GREEN_PORT, rpio.HIGH);
    rpio.write(BLUE_PORT, rpio.HIGH);
    rpio.sleep(1);

    /* Off for half a second (500ms) */
    rpio.write(RED_PORT, rpio.LOW);
    rpio.write(GREEN_PORT, rpio.LOW);
    rpio.write(BLUE_PORT, rpio.LOW);
    rpio.msleep(500);

    console.log('Pin INPUT = %d', rpio.read(INPUT_PORT));
}