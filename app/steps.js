import { today } from "user-activity"
import document from 'document'

var updateStepCount = function(elementId) {
    document.getElementById(elementId).textContent = today.adjusted.steps;
}

export default updateStepCount;