let totalKeyPressed = 0;

const trackWindow = window.addEventListener("keypress", () => {
  totalKeyPressed++;
  //   console.log(`Total keys pressed :${totalKeyPressed}, ${key.key}`);

  function isMultipleof(totalKeyPressed) {
    if (totalKeyPressed) {
      console.log(`Distance travelled is : ${totalKeyPressed / 100} m`);
    }
  }

  isMultipleof(totalKeyPressed);
});
