// background.js
chrome.storage.sync.get({ enabled: true }, (data) => {
    chrome.webNavigation.onCommitted.addListener((details) => {
        chrome.storage.sync.get({ enabled: true }, (data) => {
            if (!data.enabled) return;
            
            const url = new URL(details.url);
            if (url.hostname === "www.youtube.com" || url.hostname === "youtube.com") {
                if (url.pathname.startsWith("/watch")) {
                    const newUrl = details.url.replace("youtube.com", "yout-ube.com");
                    chrome.tabs.update(details.tabId, { url: newUrl });
                }
            }
        });
    });
});
