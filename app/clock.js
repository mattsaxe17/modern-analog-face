import clock from "clock"
import document from "document"

clock.granularity = "seconds";

let hourHand = document.getElementById("hours");
let minuteHand = document.getElementById("minutes");
let secondHand = document.getElementById("seconds");
let dayName = document.getElementById('dayName');
let date = document.getElementById('date');
let digitalTime = document.getElementById('digitalTime');

var findAngle = {
    hourHand: function(hours, minutes) {
        let hourAngle = (360 / 12) * hours;
        let minuteAngle = (360 / 12 / 60) * minutes;
        return hourAngle + minuteAngle;
    },
    minuteHand: function(minutes, seconds) {
        let minuteAngle = (360 / 60) * minutes;
        let secondAngle = (360 / 60 / 60) * seconds;
        return minuteAngle + secondAngle;
    },
    secondHand: function(seconds) {
        return (360 / 60) * seconds;
    }
}

var updateClock = function() {
  let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  let today = new Date();
  let hours = (today.getHours() < 10 ? '0' + today.getHours().toString() : today.getHours().toString()) % 12;
  let mins = today.getMinutes() < 10 ? '0' + today.getMinutes().toString() : today.getMinutes().toString();
  let secs = today.getSeconds();

  hourHand.groupTransform.rotate.angle = findAngle.hourHand(hours, mins);
  minuteHand.groupTransform.rotate.angle = findAngle.minuteHand(mins, secs);
  secondHand.groupTransform.rotate.angle = findAngle.secondHand(secs);

  dayName.textContent = days[today.getDay()].toLocaleUpperCase();
  date.textContent = today.getDate();
  digitalTime.textContent = `${hours}:${mins}`;
}

export default updateClock;