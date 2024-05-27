const interval = 1000;
const times = interval * 4;
let counter = 0;

function inc() {
  console.log(counter);
  counter++;
}

let intervalId = setInterval(inc, interval);
setTimeout(() => clearInterval(intervalId), times);
