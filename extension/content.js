window.addEventListener("keydown", async () => {
  const result = await chrome.storage.local.get("keyCount");
  const currentCount = result.keyCount || 0;
  const newCount = currentCount + 1;

  await chrome.storage.local.set({
    keyCount: newCount,
  });

  function calculateDistance(totalKeyPressed) {
    return totalKeyPressed / 100;
  }

  const distance = calculateDistance(newCount);
  console.log(`Distance travelled is : ${distance} m`);

  isMultipleof(newCount);
});
