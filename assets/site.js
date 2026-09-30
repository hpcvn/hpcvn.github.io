/* Efficient Computing Research Lab website: publication list, filters, search, copy email. */
(function () {
  "use strict";

  var TYPE_LABELS = {
    conference: "Conference",
    journal: "Journal",
    workshop: "Workshop",
    preprint: "Preprint",
    patent: "Patent",
    thesis: "Thesis"
  };
  var TYPE_ORDER = ["conference", "journal", "workshop", "preprint", "patent", "thesis"];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = text;
    return e;
  }

  function norm(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ");
  }

  function renderPublications() {
    var root = document.getElementById("pub-root");
    var chipsBox = document.getElementById("pub-chips");
    var input = document.getElementById("pub-search");
    var count = document.getElementById("pub-count");
    var empty = document.getElementById("pub-empty");
    if (!root || !chipsBox || !input) return;

    var data = (window.LAB_PUBLICATIONS || []).slice();
    var members = {};
    (window.LAB_MEMBERS || []).forEach(function (m) { members[norm(m)] = true; });

    var byYear = {};
    data.forEach(function (p) {
      var y = Number(p.year) || 0;
      (byYear[y] = byYear[y] || []).push(p);
    });
    var years = Object.keys(byYear).map(Number).sort(function (a, b) { return b - a; });

    var items = [];
    var groups = [];

    years.forEach(function (y) {
      var group = el("div", "pub-year");
      group.appendChild(el("h3", null, y ? String(y) : "Other"));
      var list = el("div", "pub-list");

      byYear[y].forEach(function (p) {
        var type = TYPE_LABELS[p.type] ? p.type : "conference";
        var art = el("article", "pub");
        art.setAttribute("data-type", type);

        var top = el("div", "pub-top");
        top.appendChild(el("span", "venue v-" + type, p.venue || TYPE_LABELS[type]));
        art.appendChild(top);

        art.appendChild(el("h4", null, p.title || ""));

        var authors = el("p", "authors");
        (p.authors || []).forEach(function (name, i) {
          if (i > 0) authors.appendChild(document.createTextNode(", "));
          if (members[norm(name)]) authors.appendChild(el("b", null, name));
          else authors.appendChild(document.createTextNode(name));
        });
        art.appendChild(authors);

        if (p.where) art.appendChild(el("p", "where", p.where));

        if (p.links && p.links.length) {
          var links = el("p", "links");
          p.links.forEach(function (pair) {
            if (!pair || !pair[1]) return;
            var a = el("a", null, pair[0] || "Link");
            a.href = pair[1];
            a.target = "_blank";
            a.rel = "noopener";
            links.appendChild(a);
          });
          art.appendChild(links);
        }

        art._search = norm(art.textContent);
        list.appendChild(art);
        items.push(art);
      });

      group.appendChild(list);
      root.appendChild(group);
      groups.push(group);
    });

    var activeType = "all";
    var chips = [];

    function addChip(key, label, n) {
      var b = el("button", "chip-btn");
      b.type = "button";
      b.id = "filter-" + key;
      b.setAttribute("data-filter", key);
      b.setAttribute("aria-pressed", key === "all" ? "true" : "false");
      b.appendChild(document.createTextNode(label + " "));
      b.appendChild(el("span", "n", String(n)));
      b.addEventListener("click", function () {
        activeType = key;
        chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === b)); });
        apply();
      });
      chipsBox.appendChild(b);
      chips.push(b);
    }

    addChip("all", "All", items.length);
    TYPE_ORDER.forEach(function (t) {
      var n = items.filter(function (a) { return a.getAttribute("data-type") === t; }).length;
      if (n) addChip(t, TYPE_LABELS[t], n);
    });

    function apply() {
      var term = norm(input.value.trim());
      var shown = 0;
      items.forEach(function (a) {
        var ok = (activeType === "all" || a.getAttribute("data-type") === activeType) &&
                 (!term || a._search.indexOf(term) !== -1);
        a.hidden = !ok;
        if (ok) shown++;
      });
      groups.forEach(function (g) { g.hidden = !g.querySelector(".pub:not([hidden])"); });
      if (count) {
        count.textContent = shown === items.length
          ? items.length + " items"
          : shown + " of " + items.length + " items";
      }
      if (empty) empty.hidden = shown !== 0;
    }

    input.addEventListener("input", apply);
    apply();
  }

  function setupCopy() {
    var btn = document.getElementById("copy-email");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      function reset(label, ms) { btn.textContent = label; setTimeout(function () { btn.textContent = "Copy"; }, ms); }
      function selectText() {
        try {
          var target = document.getElementById(btn.getAttribute("data-target"));
          var range = document.createRange();
          range.selectNodeContents(target);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          reset("Selected", 1800);
        } catch (e) { /* nothing else to try */ }
      }
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () { reset("Copied", 1600); }, selectText);
        } else {
          selectText();
        }
      } catch (e) {
        selectText();
      }
    });
  }

  renderPublications();
  setupCopy();
})();
