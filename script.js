// script.js

const launchBtn = document.getElementById("launchBtn");
const year = document.getElementById("year");

// Current year
year.textContent = `© ${new Date().getFullYear()} PMSA Wafy`;

// Launch button action
launchBtn.addEventListener("click", () => {
  launchBtn.innerHTML = "<span>Launching...</span>";
  launchBtn.style.pointerEvents = "none";

  setTimeout(() => {
    window.location.href = "https://pmsawafy.vercel.app/";
  }, 1200);
});

// Optional keyboard shortcut (Enter key)
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    launchBtn.click();
  }
});

// Smooth intro effect
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});