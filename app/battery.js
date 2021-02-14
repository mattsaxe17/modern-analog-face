import { battery } from "power";
import document from 'document'

var updateBatteryPercentage = function(textElementId, iconElementId) {
    document.getElementById(textElementId).textContent = Math.floor(battery.chargeLevel) + '%';

    if(battery.chargeLevel < 25) {
        document.getElementById(iconElementId).href = 'low-battery-pngrepo-com.png'
    } else if (battery.chargeLevel < 50) {
        document.getElementById(iconElementId).href = 'medium-battery-pngrepo-com.png'
    } else {
        document.getElementById(iconElementId).href = 'battery-pngrepo-com.png'
    }
}

export default updateBatteryPercentage;