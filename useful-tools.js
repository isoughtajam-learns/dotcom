// Drives /useful-tools/: everything (all categories, subcategories, and
// tool tiles) is already rendered server-side by useful-tools/index.njk —
// this just shows/hides the right groups and tiles on click, and keeps
// the selection in the URL hash so a filtered view is shareable.
(function () {
  const pillRow = document.getElementById('category-pills');
  const subnav = document.getElementById('tools-subnav');
  const tilesContainer = document.getElementById('tools-tiles');
  if (!pillRow || !subnav || !tilesContainer) return;

  const pills = [...pillRow.querySelectorAll('.pill')];
  const groups = [...subnav.querySelectorAll('.tools-subnav-group')];
  const tiles = [...tilesContainer.querySelectorAll('.tool-tile')];

  function selectSubcategory(categoryId, subcategoryId) {
    groups.forEach((group) => {
      if (group.dataset.categoryGroup !== categoryId) return;
      group.querySelectorAll('.subnav-item').forEach((btn) => {
        btn.classList.toggle('selected', btn.dataset.subcategory === subcategoryId);
      });
    });

    tiles.forEach((tile) => {
      tile.hidden = !(tile.dataset.category === categoryId && tile.dataset.subcategory === subcategoryId);
    });

    try {
      history.replaceState(null, '', '#' + categoryId + '/' + subcategoryId);
    } catch (e) {
      // ignore — URL sync is a nicety, not required for filtering to work
    }
  }

  function selectCategory(categoryId, preferredSubcategoryId) {
    pills.forEach((pill) => {
      pill.setAttribute('aria-pressed', String(pill.dataset.category === categoryId));
    });

    groups.forEach((group) => {
      group.hidden = group.dataset.categoryGroup !== categoryId;
    });

    const activeGroup = groups.find((g) => g.dataset.categoryGroup === categoryId);
    if (!activeGroup) return;

    const wanted = preferredSubcategoryId &&
      activeGroup.querySelector('.subnav-item[data-subcategory="' + preferredSubcategoryId + '"]');
    const firstItem = activeGroup.querySelector('.subnav-item');
    const target = wanted || firstItem;
    if (target) selectSubcategory(categoryId, target.dataset.subcategory);
  }

  pills.forEach((pill) => {
    pill.addEventListener('click', () => selectCategory(pill.dataset.category));
  });

  subnav.addEventListener('click', (e) => {
    const btn = e.target.closest('.subnav-item');
    if (!btn) return;
    const group = btn.closest('.tools-subnav-group');
    selectCategory(group.dataset.categoryGroup, btn.dataset.subcategory);
  });

  const [hashCategory, hashSubcategory] = (location.hash || '').replace('#', '').split('/');
  const startCategory = pills.some((p) => p.dataset.category === hashCategory)
    ? hashCategory
    : pills[0] && pills[0].dataset.category;

  if (startCategory) selectCategory(startCategory, hashSubcategory);
})();
