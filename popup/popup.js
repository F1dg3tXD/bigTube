document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggleRedirect");

    chrome.storage.sync.get({ enabled: true }, (data) => {
        toggle.checked = data.enabled;
    });

    toggle.addEventListener("change", () => {
        chrome.storage.sync.set({ enabled: toggle.checked });
    });
});
