import "./style.scss";

document.documentElement.addEventListener(
  "touchstart",
  e => {
    if (e.touches.length >= 2) {
      e.preventDefault();
    } else {
    }
  },
  { passive: false }
);

let lastTouchEndTime = 0;
document.documentElement.addEventListener(
  "touchend",
  e => {
    const now = window.performance.now();
    if (now - lastTouchEndTime <= 300) {
      e.preventDefault();
    }
    lastTouchEndTime = now;
  },
  { passive: false }
);


