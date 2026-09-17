// script.js

const launchBtn = document.getElementById("launchBtn");
const year = document.getElementById("year");

// Current year
year.textContent = `© ${new Date().getFullYear()} Wafy Orbit`;

const TARGET_URL = "https://wafyorbit.vercel.app/";

// Launch button action
launchBtn.addEventListener("click", () => {
  launchBtn.innerHTML = "<span>Connecting to Wafy Orbit...</span>";
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