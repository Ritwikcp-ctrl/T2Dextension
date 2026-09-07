# Keyboard Distance

> Turn your typing into measurable distance.

**Keyboard Distance** is a Chrome extension that tracks character-producing keyboard events and converts the total into a simple distance metric.

**100 typed characters = 1 meter**

The extension is designed around a privacy-first approach: it counts typing activity without collecting or storing the actual text being typed.

---

## Features

* Track typed character events across webpages
* Convert typing activity into distance
* Persistent counter using Chrome Storage
* Works across multiple browser tabs
* Real-time statistics in the extension popup
* Reset the counter at any time
* Minimal black-and-white interface
* Manifest V3 architecture
* No backend or external database required
* Does not store the actual characters typed

---

## How It Works

The extension follows this flow:

```text
User types on a webpage
          │
          ▼
     content.js
          │
          │  KEY_TYPED
          ▼
    background.js
          │
          ▼
 chrome.storage.local
          │
          ▼
       popup.js
          │
          ▼
    Extension Popup
```

The extension does **not** send the actual character to the background worker.

For example, if the user types:

```text
hello
```

the extension sends an event equivalent to:

```js
{
  type: "KEY_TYPED"
}
```

It does not send:

```js
{
  type: "KEY_TYPED",
  key: "h"
}
```

---

## Distance Calculation

The calculation is intentionally simple:

```text
100 characters = 1 meter
```

Therefore:

```text
50 characters  = 0.50 m
100 characters = 1.00 m
500 characters = 5.00 m
1000 characters = 10.00 m
```

The popup displays both the total character count and calculated distance.

---

## Project Structure

```text
extension/
│
├── manifest.json
│
├── content.js
│
├── background.js
│
├── popup.html
├── popup.css
├── popup.js
│
├── privacy-policy.html
│
└── icons/
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

### `manifest.json`

Defines the Chrome extension configuration and Manifest V3 settings.

### `content.js`

Runs on webpages and detects character-producing keyboard events.

It sends only a notification that a character was typed.

### `background.js`

Acts as the central counter.

It receives events from content scripts and maintains the global typing count.

### `popup.html`

Defines the extension popup interface.

### `popup.js`

Reads the counter and calculates/display the distance.

### `popup.css`

Contains the styling for the black-and-white interface.

### `privacy-policy.html`

Contains the extension's privacy policy.

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 2. Open Chrome Extensions

Open:

```text
chrome://extensions
```

### 3. Enable Developer Mode

Turn on:

```text
Developer mode
```

### 4. Load the extension

Click:

```text
Load unpacked
```

Select the directory containing:

```text
manifest.json
```

For this project, that is the `extension` directory.

### 5. Test

Open a normal webpage and type some text.

Then click the **Keyboard Distance** extension icon to view your statistics.

---

## Privacy

Keyboard Distance is designed to avoid collecting the actual text users type.

The extension:

* Counts character-producing keyboard events
* Stores the aggregate count locally using `chrome.storage.local`
* Does not intentionally store the characters themselves
* Does not send typed text to an external server
* Does not require a backend
* Does not use an external database

The stored counter can be reset from the extension popup.

For the complete policy, see:

[`privacy-policy.html`](./privacy-policy.html)

---

## Permissions

The extension currently requests:

```json
"permissions": [
  "storage"
]
```

The `storage` permission is used to persist the typing counter.

The extension does not request permissions such as:

```text
tabs
history
cookies
webNavigation
```

---

## Browser Compatibility

The extension is built using **Chrome Manifest V3**.

It is intended for Chromium-based browsers that support the required Manifest V3 APIs.

---

## Limitations

The extension runs on webpages where Chrome allows content scripts to execute.

It cannot monitor:

* Chrome internal pages such as `chrome://...`
* Native desktop applications
* Applications outside the browser
* Pages where extension content scripts are blocked

For example, the extension can work with a web application opened in Chrome, but it cannot monitor a separate native desktop application.

---

## Development

After modifying the extension:

1. Open:

```text
chrome://extensions
```

2. Find **Keyboard Distance**
3. Click **Reload**
4. Refresh the webpage being tested

When the extension is reloaded, existing webpages may need to be refreshed so that the updated content script is injected.

---

## Roadmap

* [x] Keyboard event tracking
* [x] Character counting
* [x] Distance calculation
* [x] Persistent local storage
* [x] Popup interface
* [x] Reset functionality
* [x] Multi-tab architecture
* [x] Manifest V3
* [x] Extension icons
* [x] Privacy policy
* [ ] Chrome Web Store release
* [ ] Improved statistics
* [ ] Daily/weekly typing distance
* [ ] Typing history
* [ ] Progress milestones
* [ ] Optional user goals

---

## Why This Project?

Keyboard Distance started as an experiment around browser extensions, keyboard events, Chrome storage, and Manifest V3 architecture.

The idea is simple:

> Every keystroke contributes to a journey.

Instead of treating typing as an invisible activity, Keyboard Distance turns it into a small measurable metric.

```text
Same keys.
Further you.
```

---

## License

This project is currently intended as an educational and experimental project.

Add a specific license here if you decide to open-source the project under a particular license.
