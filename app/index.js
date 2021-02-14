import clock from "clock";
import updateClock from './clock'
import initiateHeartRateReader from './heartRate'
import updateStepCount from './steps'
import updateBatteryPercentage from './battery'

var updateData = function() {
    updateClock();
    updateStepCount('steps');
    updateBatteryPercentage('batteryText', 'batteryImg');
}

initiateHeartRateReader('heartRate');
clock.addEventListener("tick", updateData);