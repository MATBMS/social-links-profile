const FADE_MS = 300; // same as the 0.3s transition in style.css
const MESSAGE_MS = 2000;

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll(".link").forEach(setupButton);

function setupButton(button) {
  const text = button.querySelector(".link-text");
  const label = text.textContent;
  let message = null; // "Copied!" or "Copy failed" while showing
  let active = false; // pointer over the button, or keyboard focus
  let shown = label; // the text currently shown (or fading to)
  let fadeTimer;
  let messageTimer;

  // Show the right text: the message first, then the hint, then the label.
  function render() {
    const next = message || (active ? "Click to copy" : label);
    if (next === shown) return;
    shown = next;

    clearTimeout(fadeTimer);
    if (reduceMotion.matches) {
      text.textContent = shown;
      return;
    }
    text.classList.add("is-fading");
    fadeTimer = setTimeout(() => {
      text.textContent = shown;
      text.classList.remove("is-fading");
    }, FADE_MS);
  }

  function showMessage(newMessage) {
    message = newMessage;
    render();
    clearTimeout(messageTimer);
    messageTimer = setTimeout(() => {
      message = null;
      render();
    }, MESSAGE_MS);
  }

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.url);
      showMessage("Copied!");
    } catch {
      showMessage("Copy failed");
    }
  });

  // Hover only for a mouse: on touch screens the hint would get stuck.
  button.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "mouse") return;
    active = true;
    render();
  });
  button.addEventListener("pointerleave", () => {
    active = false;
    render();
  });

  // Keyboard focus only (not a mouse click).
  button.addEventListener("focus", () => {
    if (!button.matches(":focus-visible")) return;
    active = true;
    render();
  });
  button.addEventListener("blur", () => {
    active = false;
    render();
  });
}
