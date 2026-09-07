let keyCount = 0;

let initialized = false;

let saveTimer = null;


async function initialize() {

  if (initialized) {
    return;
  }

  const result =
    await chrome.storage.local.get("keyCount");

  keyCount =
    result.keyCount || 0;

  initialized = true;
}


async function saveCount() {

  await chrome.storage.local.set({
    keyCount
  });

}


function scheduleSave() {

  if (saveTimer) {
    return;
  }

  saveTimer = setTimeout(async () => {

    saveTimer = null;

    try {

      await saveCount();

    } catch (error) {

      console.error(
        "Failed to save key count:",
        error
      );

    }

  }, 500);
}


chrome.runtime.onMessage.addListener(
  async (message) => {

    if (message.type !== "KEY_TYPED") {
      return;
    }

    await initialize();

    keyCount++;

    scheduleSave();

  }
);


chrome.runtime.onSuspend.addListener(
  async () => {

    try {

      await saveCount();

    } catch (error) {

      console.error(
        "Failed to save count:",
        error
      );

    }

  }
);