var rpio = require('rpio');
rpio.init({gpiomem: false});

var GREEN_PORT = 14;
var RED_PORT = 15;

rpio.open(RED_PORT, rpio.OUTPUT, rpio.LOW);
rpio.open(GREEN_PORT, rpio.OUTPUT, rpio.LOW);

for (var i = 0; i < 5; i++) {
    /* On for 1 second */
    rpio.write(RED_PORT, rpio.HIGH);
    rpio.write(GREEN_PORT, rpio.HIGH);
    rpio.sleep(1);

    /* Off for half a second (500ms) */
    rpio.write(RED_PORT, rpio.LOW);
    rpio.write(GREEN_PORT, rpio.LOW);
    rpio.msleep(500);
}