// script.js

const launchBtn = document.getElementById("launchBtn");
const year = document.getElementById("year");

// Current year
year.textContent = `© ${new Date().getFullYear()} Mueenudeen Baqavi Mundamparamb`;

const TARGET_URL = "https://mueenudeenbaqavi.com";

// Launch button action
launchBtn.addEventListener("click", () => {
  launchBtn.innerHTML = "<span>Opening Website...</span>";
  launchBtn.style.pointerEvents = "none";

  setTimeout(() => {
    window.location.href = TARGET_URL;
  }, 400);
});

// Keyboard shortcut (Enter key)
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    launchBtn.click();
  }
});