const Fetch = require("@11ty/eleventy-fetch");

async function fetchTitle(url) {
  try {
    const html = await Fetch(url, { duration: "7d", type: "text" });
    const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (match) {
      return match[1].replace(/\s+/g, " ").trim();
    }
  } catch (e) {
    // network error, non-200, timeout — fall back to the hostname below
  }
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch (e) {
    return url;
  }
}

module.exports = {
  permalink: false,
  tags: ["tools"],
  eleventyComputed: {
    title: (data) => fetchTitle(data.url),
  },
};
