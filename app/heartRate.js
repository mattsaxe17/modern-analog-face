import { HeartRateSensor } from 'heart-rate'
import document from 'document'
import { display } from "display";
import { BodyPresenceSensor } from "body-presence";


const hrm = new HeartRateSensor();
const body = new BodyPresenceSensor();


display.addEventListener("change", () => {
    display.on ? hrm.start() : hrm.stop();
});


body.addEventListener("reading", () => {
    if (!body.present) {
      hrm.stop();
    } else {
      hrm.start();
    }
});


var initiateHeartRateReader = function(elementId) {
    hrm.addEventListener("reading", () => {
        document.getElementById(elementId).textContent = hrm.heartRate;
    });
    hrm.start();
    return hrm;
}

export default initiateHeartRateReader;