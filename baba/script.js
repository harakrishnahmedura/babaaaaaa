const pages = Array.from(document.querySelectorAll(".page"));
const navLinks = Array.from(document.querySelectorAll("nav a[data-page]"));
const pageNumber = document.getElementById("pageNumber");
const pageTitle = document.getElementById("pageTitle");
const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");
const mainNav = document.getElementById("mainNav");
let currentPage = 0;

function showPage(index) {
  currentPage = Math.max(0, Math.min(index, pages.length - 1));
  pages.forEach((page, i) => page.classList.toggle("active", i === currentPage));
  navLinks.forEach((link, i) => link.classList.toggle("active", i === currentPage));
  pageNumber.textContent = String(currentPage + 1).padStart(2, "0");
  pageTitle.textContent = pages[currentPage].dataset.title || "Our Story";
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === pages.length - 1;
  mainNav.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
  const id = pages[currentPage].id;
  if (history.replaceState) history.replaceState(null, "", "#" + id);
}

function pageFromHash() {
  const id = window.location.hash.slice(1);
  const index = pages.findIndex(page => page.id === id);
  if (index >= 0) showPage(index);
}

navLinks.forEach(link => link.addEventListener("click", event => {
  event.preventDefault();
  showPage(Number(link.dataset.page));
}));
document.querySelectorAll("[data-page]").forEach(link => {
  if (link.tagName.toLowerCase() !== "a") return;
  link.addEventListener("click", event => {
    event.preventDefault();
    showPage(Number(link.dataset.page));
  });
});
prevButton.addEventListener("click", () => showPage(currentPage - 1));
nextButton.addEventListener("click", () => showPage(currentPage + 1));
document.getElementById("menuToggle").addEventListener("click", () => mainNav.classList.toggle("open"));

const songButton = document.getElementById("songButton");
const lyricVideo = document.getElementById("lyricVideo");
const videoPlaceholder = document.getElementById("videoPlaceholder");
const soundtrackPage = document.querySelector(".soundtrack-page");
const trackTime = document.getElementById("trackTime");
const musicMessage = document.getElementById("musicMessage");
function formatTrackTime(seconds) {
  if (!Number.isFinite(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}
songButton.addEventListener("click", async () => {
  try {
    if (lyricVideo.paused) {
      await lyricVideo.play();
    } else {
      lyricVideo.pause();
    }
  } catch (error) {
    if (musicMessage) musicMessage.textContent = 'Could not play the lyric video. Put “AURORA - Exist For Love (Lyric Video).mp4” beside index.html and make sure the filename matches exactly.';
  }
});
lyricVideo.addEventListener("play", () => {
  soundtrackPage.classList.add("is-playing");
  songButton.textContent = "Ⅱ";
  songButton.setAttribute("aria-label", "Pause Exist for Love lyric video");
  if (videoPlaceholder) videoPlaceholder.classList.add("is-hidden");
});
lyricVideo.addEventListener("pause", () => {
  soundtrackPage.classList.remove("is-playing");
  songButton.textContent = "▶";
  songButton.setAttribute("aria-label", "Play Exist for Love lyric video");
});
lyricVideo.addEventListener("timeupdate", () => {
  trackTime.textContent = formatTrackTime(lyricVideo.currentTime);
});
lyricVideo.addEventListener("ended", () => {
  soundtrackPage.classList.remove("is-playing");
  songButton.textContent = "▶";
  trackTime.textContent = "00:00";
  if (videoPlaceholder) videoPlaceholder.classList.remove("is-hidden");
});
lyricVideo.addEventListener("error", () => {
  if (musicMessage) musicMessage.textContent = 'Lyric video not found. Put “AURORA - Exist For Love (Lyric Video).mp4” beside index.html. An MP3 is audio-only; use the actual MP4 video file to show lyrics on screen.';
});

window.addEventListener("hashchange", pageFromHash);
pageFromHash();
