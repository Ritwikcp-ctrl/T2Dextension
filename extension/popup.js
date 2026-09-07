const distanceElement =
  document.getElementById("distance");

const distanceStatElement =
  document.getElementById("distanceStat");

const keyCountElement =
  document.getElementById("keyCount");

const messageElement =
  document.getElementById("message");

const resetButton =
  document.getElementById("reset");


function updateMessage(distance) {

  if (distance === 0) {
    return "Start typing to begin your journey.";
  }

  if (distance < 1) {
    return "You're on your way.";
  }

  if (distance < 10) {
    return "You've typed the distance of a short walk.";
  }

  return "That's serious keyboard mileage.";
}


function render(keyCount) {

  const distance = keyCount / 100;

  distanceElement.textContent =
    distance.toFixed(2);

  distanceStatElement.textContent =
    `${distance.toFixed(2)} m`;

  keyCountElement.textContent =
    keyCount.toLocaleString();

  messageElement.textContent =
    updateMessage(distance);
}


async function updateUI() {

  const result =
    await chrome.storage.local.get("keyCount");

  const keyCount =
    result.keyCount || 0;

  render(keyCount);
}


/*
  Listen for changes in chrome.storage.

  Whenever background.js updates keyCount,
  this automatically runs.
*/
chrome.storage.onChanged.addListener(
  (changes, areaName) => {

    if (areaName !== "local") {
      return;
    }

    if (!changes.keyCount) {
      return;
    }

    const newKeyCount =
      changes.keyCount.newValue || 0;

    render(newKeyCount);
  }
);


/*
  Reset counter
*/
resetButton.addEventListener(
  "click",
  async () => {

    await chrome.storage.local.set({
      keyCount: 0
    });

    render(0);
  }
);


/*
  Initial load
*/
updateUI();