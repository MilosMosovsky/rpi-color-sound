var rpio = require('rpio');

rpio.open(15, rpio.OUTPUT, rpio.LOW);

for (var i = 0; i < 5; i++) {
    /* On for 1 second */
    rpio.write(15, rpio.HIGH);
    rpio.sleep(1);

    /* Off for half a second (500ms) */
    rpio.write(15, rpio.LOW);
    rpio.msleep(500);
}