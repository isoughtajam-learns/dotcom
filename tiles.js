// Populates the fixed background grid with cells that each carry a
// randomized animation-delay, so the chessboard-style flip looks organic
// rather than mechanically synchronized. No JS is used for the flip itself —
// that's pure CSS — this only sets up the grid and staggers timing.

(function () {
  const grid = document.getElementById('tile-grid');
  if (!grid) return;

  const tileImages = [
    "url('/images/street_art_poem-tile.jpeg')",
    "url('/images/budapest_station-tile.jpeg')",
    "url('/images/our_lady_of_street_art-tile.jpeg')",
    "url('/images/pancake-tile.jpeg')",
    "url('/images/public_works-tile.jpeg')",
    "url('/images/street_art_chiropractic-tile.jpeg')",
    "url('/images/street_art_wall_eyes-tile.jpeg')",
    "url('/images/oakland_building-tile.jpeg')",
    "url('/images/street_art_peace-tile.jpeg')",
    "url('/images/sushi_plate-tile.jpeg')",
    "url('/images/way_out-tile.jpeg')",
    "url('/images/cherry_blossom-tile.jpeg')",
    "url('/images/sunset_clouds-tile.jpeg')",
    "url('/images/campanile-tile.jpeg')",
    "url('/images/long_shadow-tile.jpeg')",
  ];

  function populate() {
    grid.innerHTML = '';
    const cellSize = 128;
    const cols = Math.ceil(window.innerWidth / cellSize) + 1;
    const rows = Math.ceil(window.innerHeight / cellSize) + 1;
    const total = cols * rows;

    for (let i = 0; i < total; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.style.setProperty('--i', (i % 17)); // bounded stagger, not linear sweep
      cell.style.animationDuration = (7 + Math.random() * 4).toFixed(2) + 's';
      cell.style.backgroundImage =
        tileImages[Math.floor(Math.random() * tileImages.length)];
      grid.appendChild(cell);
    }
  }

  populate();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(populate, 200);
  });
})();
