
window.addEventListener("keydown", (event) => {

  // Ignore IME/composition input
  if (event.isComposing) {
    return;
  }

  // Only character-producing keys
  if (event.key.length !== 1) {
    return;
  }

  // Send only the event.
  // The actual typed character is never sent.
  chrome.runtime.sendMessage({
    type: "KEY_TYPED"
  }).catch(() => {
    // Ignore errors if the extension was reloaded.
  });

});

















// window.addEventListener("keydown", async () => {
//   const result = await chrome.storage.local.get("keyCount");
//   const currentCount = result.keyCount || 0;
//   const newCount = currentCount + 1;

//   await chrome.storage.local.set({
//     keyCount: newCount,
//   });

//   function calculateDistance(totalKeyPressed) {
//     return totalKeyPressed / 100;
//   }

//   const distance = calculateDistance(newCount);
//   console.log(`Distance travelled is : ${distance} m`);

//   isMultipleof(newCount);
// });
