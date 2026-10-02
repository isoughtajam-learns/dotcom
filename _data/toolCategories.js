// Registers each category's display color and its subcategories, in the
// order they should appear. Each tool markdown file in useful-tools/tools/
// references a category + subcategory here by id.
//
// `color` names one of six CSS custom properties (--category-1 through
// --category-6, defined in style.css) instead of a fixed hex value — those
// are derived from the active color scheme's --signal/--signal-deep tokens,
// so pill colors stay coherent no matter which scheme is selected. There
// are 6 slots total; use a different one per category, up to 6 categories.
//
// To add a category: pick an unused --category-N slot, add an entry with a
// unique id, name, color, and a subcategories list (each also { id, name }).
// To add a subcategory: add it to its parent category's subcategories list.
module.exports = [
  {
    id: "dev",
    name: "Development",
    color: "var(--category-1)",
    subcategories: [
      { id: "build-tools", name: "Build Tools" },
      { id: "reference", name: "Reference" },
    ],
  },
  {
    id: "design",
    name: "Design",
    color: "var(--category-4)",
    subcategories: [
      { id: "inspiration", name: "Inspiration" },
      { id: "color", name: "Color" },
    ],
  },
  {
    id: "diy",
    name: "DIY",
    color: "var(--category-2)",
    subcategories: [
      { id: "danger", name: "Danger" },
    ],
  },
];
