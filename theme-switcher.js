// Builds the footer's theme-switcher swatches and handles picking/persisting
// a color scheme. The actual color values live in style.css as
// [data-theme="id"] blocks — this file only needs an id/label/swatch/
// swatchOutline per scheme so the buttons can render themselves.
// swatchOutline is the border color shown only on the currently selected
// swatch (see .theme-switcher button[aria-pressed="true"] in style.css).
//
// To add a scheme: add a [data-theme="id"] block in style.css (see the
// comment above the color-scheme tokens there), then add an entry here.
const THEMES = [
  { id: 'paper', label: 'Paper', swatch: '#EDEEEB', swatchOutline: '#2E4A73' },
  { id: 'dusk', label: 'Dusk', swatch: '#708993', swatchOutline: '#19183B' },
  { id: 'popsicle', label: 'Popsicle', swatch: '#EA047E', swatchOutline: '#00F5FF' },
  { id: 'forest', label: 'Forest', swatch: '#4E9F3D', swatchOutline: '#1E5128' }
];

(function () {
  const root = document.documentElement;
  const container = document.getElementById('theme-switcher');
  if (!container || THEMES.length === 0) return;

  function currentTheme() {
    return root.dataset.theme || 'paper';
  }

  function applyTheme(id) {
    root.dataset.theme = id;
    try {
      localStorage.setItem('theme', id);
    } catch (e) {
      // localStorage unavailable (private mode, etc.) — theme just won't persist.
    }
    [...container.children].forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.themeId === id));
    });
  }

  THEMES.forEach((theme) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.themeId = theme.id;
    btn.style.setProperty('--swatch', theme.swatch);
    btn.style.setProperty('--swatch-outline', theme.swatchOutline);
    btn.setAttribute('aria-label', theme.label + ' theme');
    btn.setAttribute('aria-pressed', String(theme.id === currentTheme()));
    btn.setAttribute('title', theme.label);
    btn.addEventListener('click', () => applyTheme(theme.id));
    container.appendChild(btn);
  });
})();
