let totalKeyPressed = 0;

const trackWindow = window.addEventListener("keypress", (key) => {
  totalKeyPressed++;
  console.log(`Total keys pressed :${totalKeyPressed}, ${key.key}`);

  function isMultipleof(totalKeyPressed) {
    if (totalKeyPressed % 100 === 0 && totalKeyPressed != 0) {
      console.log(`Distance travelled is : ${totalKeyPressed / 100} m`);
    }
  }

  isMultipleof(totalKeyPressed);
});
