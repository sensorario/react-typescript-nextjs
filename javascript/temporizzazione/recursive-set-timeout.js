const interval = 1000;
let counter = 0;

function inc() {
  console.log(counter);
  counter++;

  setTimeout(() => {
    inc();
  }, interval);
}

setTimeout(() => {
  inc();
}, interval);
