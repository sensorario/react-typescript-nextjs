let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Operazione completata con successo!");
    } else {
      reject("Operazione fallita!");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log("Successo:", result);
  })
  .catch((error) => {
    console.log("Errore:", error);
  });
