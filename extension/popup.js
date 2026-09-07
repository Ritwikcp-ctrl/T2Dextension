console.log("POPUP JS RUNNING");

chrome.storage.local.get("keyCount").then((result) => {

  console.log("Storage result:", result);

  const keyCount = result.keyCount || 0;
  const distance = keyCount / 100;

  document.getElementById("keys").textContent =
    `Keys typed: ${keyCount}`;

  document.getElementById("distance").textContent =
    `Distance: ${distance.toFixed(2)} m`;
});