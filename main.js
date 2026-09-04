/* Click counter */

const counter = document.getElementById('counter');
const output = document.getElementById('count');

let count = 0;

counter.addEventListener('click', () => {
  count += 1;
  output.textContent = count;
});

/* Theme toggle
   Starts from the OS preference, then remembers whatever the user picks.
   Storage is wrapped because private windows can throw on access. */

const STORAGE_KEY = 'sandbox-theme';
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('span');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function currentTheme() {
  return root.dataset.theme || (systemDark.matches ? 'dark' : 'light');
}

function render(theme) {
  const next = theme === 'dark' ? 'light' : 'dark';
  icon.textContent = theme === 'dark' ? '☀' : '☾';
  toggle.setAttribute('aria-label', `Switch to ${next} mode`);
  toggle.setAttribute('title', `Switch to ${next} mode`);
}

toggle.addEventListener('click', () => {
  const theme = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (e) {}
  render(theme);
});

// Follow the OS until the user makes an explicit choice.
systemDark.addEventListener('change', () => {
  if (!readStored()) render(currentTheme());
});

render(currentTheme());
