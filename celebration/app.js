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
