import Reveal from "reveal.js";
import RevealZoom from "reveal.js/plugin/zoom/zoom.js";
import RevealNotes from "reveal.js/plugin/notes/notes.js";
import RevealSearch from "reveal.js/plugin/search/search.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

let deck = new Reveal({
  controls: true,
  progress: true,
  center: true,
  hash: true,

  // Learn about plugins: https://revealjs.com/plugins/
  plugins: [
    RevealZoom,
    RevealNotes,
    RevealSearch,
    RevealMarkdown,
    RevealHighlight,
  ],
});

deck.initialize();
