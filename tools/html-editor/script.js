const DEFAULT_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My page</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; padding: 2rem; line-height: 1.5; }
    h1 { margin-top: 0; }
    button { padding: .5rem 1rem; border: 0; border-radius: 6px; background: #4f46e5; color: #fff; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Hello, world</h1>
  <p>Edit the code on the left and this page updates as you type.</p>
  <button onclick="this.textContent = 'Clicked'">Click me</button>
</body>
</html>`;

// fetch code content specified in query params and set to editor
const params = new URLSearchParams(location.search);
const collection = params.get("collection");
const slug = params.get("slug");
const fieldName = params.get("field");

const REPO = "The-DigitalAcademy/shaper-elearning-content";
const url = `https://raw.githubusercontent.com/${REPO}/main/content/${collection}/${slug}.md`;

if (collection && slug && fieldName) {
  fetch(url, {
    headers: {
      Authorization:
        "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",
    },
  })
    .then((res) => res.text())
    .then((text) => {
      const parsedData = jsyaml.loadAll(text);
      if (parsedData.length) {
        editor.setValue(parsedData[0][fieldName].code, -1);
      }
    })
    .catch((err) => console.log(err));
}

const preview = document.getElementById("preview");
const copyBtn = document.getElementById("copy");
const status = document.getElementById("status");
const dark = window.matchMedia("(prefers-color-scheme: dark)");

ace.config.set(
  "basePath",
  "https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.9/",
);
ace.config.set("suffix", ".min.js");

const editor = ace.edit("editor", {
  mode: "ace/mode/html",
  theme: dark.matches ? "ace/theme/tomorrow_night" : "ace/theme/chrome",
  tabSize: 2,
  useSoftTabs: true,
  showPrintMargin: false,
  highlightActiveLine: true,
  highlightSelectedWord: true,
  showFoldWidgets: true,
  displayIndentGuides: true,
  behavioursEnabled: true,
  wrap: false,
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
});
editor.setValue(DEFAULT_CODE, -1);
dark.addEventListener("change", (e) =>
  editor.setTheme(e.matches ? "ace/theme/tomorrow_night" : "ace/theme/chrome"),
);

// Live preview
let timer;
let suppress = false,
  scrollY = 0;

// Runs inside the preview iframe: makes the page editable and reports changes back
function HELPER(initScroll) {
  var send = function (m) {
    parent.postMessage(m, "*");
  };
  var saved = null,
    t,
    st;
  var esc = function (s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  };
  function serialize() {
    var c = document.documentElement.cloneNode(true);
    c.querySelectorAll("[data-wysiwyg]").forEach(function (n) {
      n.remove();
    });
    var b = c.querySelector("body");
    if (b) b.removeAttribute("contenteditable");
    return "<!DOCTYPE html>\n" + c.outerHTML;
  }
  function q(c) {
    try {
      return document.queryCommandState(c);
    } catch (e) {
      return false;
    }
  }
  function state() {
    var blk = "";
    try {
      blk = String(document.queryCommandValue("formatBlock"))
        .toLowerCase()
        .replace(/[<>]/g, "");
    } catch (e) {}
    send({
      type: "state",
      block: blk,
      s: {
        bold: q("bold"),
        italic: q("italic"),
        underline: q("underline"),
        ul: q("insertUnorderedList"),
        ol: q("insertOrderedList"),
        left: q("justifyLeft"),
        center: q("justifyCenter"),
        right: q("justifyRight"),
        full: q("justifyFull"),
      },
    });
  }
  document.body.setAttribute("contenteditable", "true");
  if (initScroll) window.scrollTo(0, initScroll);
  document.addEventListener("input", function () {
    clearTimeout(t);
    t = setTimeout(function () {
      send({ type: "html", html: serialize() });
    }, 200);
  });
  document.addEventListener("selectionchange", function () {
    var s = getSelection();
    if (s.rangeCount && document.body.contains(s.anchorNode))
      saved = s.getRangeAt(0).cloneRange();
    state();
  });
  window.addEventListener("scroll", function () {
    clearTimeout(st);
    st = setTimeout(function () {
      send({ type: "scroll", y: window.scrollY });
    }, 100);
  });
  window.addEventListener("message", function (e) {
    var m = e.data;
    if (e.source !== parent || !m || m.type !== "cmd") return;
    document.body.focus();
    if (saved) {
      var s = getSelection();
      s.removeAllRanges();
      s.addRange(saved);
    }
    document.execCommand("styleWithCSS", false, /^justify/.test(m.cmd));
    if (m.cmd === "createLink" && saved && saved.collapsed) {
      document.execCommand(
        "insertHTML",
        false,
        '<a href="' + esc(m.value) + '">' + esc(m.value) + "</a>",
      );
    } else {
      document.execCommand(m.cmd, false, m.value || null);
    }
    state();
  });
  state();
}

function build(html) {
  const tag =
    "<style data-wysiwyg>body{outline:none}</style><script data-wysiwyg>(" +
    HELPER.toString() +
    ")(" +
    scrollY +
    ")<\/script>";
  const i = html.toLowerCase().lastIndexOf("</body>");
  return i >= 0 ? html.slice(0, i) + tag + html.slice(i) : html + tag;
}
function render() {
  preview.srcdoc = build(editor.getValue());
}

// Code -> preview
editor.session.on("change", () => {
  if (suppress) return;
  clearTimeout(timer);
  timer = setTimeout(render, 250);
});
render();

// Preview -> code
window.addEventListener("message", (e) => {
  if (e.source !== preview.contentWindow) return;
  const m = e.data || {};
  if (m.type === "scroll") scrollY = m.y;
  else if (m.type === "state") updateToolbar(m);
  else if (
    m.type === "html" &&
    typeof m.html === "string" &&
    m.html !== editor.getValue()
  ) {
    const pos = editor.getCursorPosition(),
      top = editor.session.getScrollTop();
    suppress = true;
    editor.setValue(m.html, -1);
    suppress = false;
    editor.moveCursorToPosition(pos);
    editor.session.setScrollTop(top);
  }
});

// Status bar
function updateStatus() {
  const p = editor.getCursorPosition();
  const sel = editor.getSelectedText().length;
  status.textContent =
    `Ln ${p.row + 1}, Col ${p.column + 1}` + (sel ? ` · ${sel} selected` : "");
}
editor.selection.on("changeCursor", updateStatus);
editor.selection.on("changeSelection", updateStatus);

// Format
const beautify = ace.require("ace/ext/beautify");
function format() {
  beautify.beautify(editor.session);
  editor.focus();
}
document.getElementById("format").addEventListener("click", format);
editor.commands.addCommand({
  name: "format",
  bindKey: { win: "Shift-Alt-F", mac: "Shift-Option-F" },
  exec: format,
});

// Wrap and font size
const wrapBtn = document.getElementById("wrap");
wrapBtn.addEventListener("click", () => {
  const on = !editor.session.getUseWrapMode();
  editor.session.setUseWrapMode(on);
  wrapBtn.textContent = "Wrap: " + (on ? "on" : "off");
});
let fontSize = 14;
function setFont(n) {
  fontSize = Math.min(24, Math.max(10, n));
  editor.setFontSize(fontSize);
}
document
  .getElementById("fontDown")
  .addEventListener("click", () => setFont(fontSize - 1));
document
  .getElementById("fontUp")
  .addEventListener("click", () => setFont(fontSize + 1));

// WYSIWYG toolbar
const ICON = (d, extra = "") =>
  `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/>${extra}</svg>`;
const num = (y, n) =>
  `<text x="1" y="${y}" font-size="7" fill="currentColor" stroke="none">${n}</text>`;
const TOOLS = [
  { cmd: "bold", key: "bold", title: "Bold (Ctrl+B)", html: "<b>B</b>" },
  { cmd: "italic", key: "italic", title: "Italic (Ctrl+I)", html: "<i>I</i>" },
  {
    cmd: "underline",
    key: "underline",
    title: "Underline (Ctrl+U)",
    html: "<u>U</u>",
  },
  "sep",
  {
    cmd: "justifyLeft",
    key: "left",
    title: "Align left",
    html: ICON("M4 6h16M4 10h10M4 14h16M4 18h10"),
  },
  {
    cmd: "justifyCenter",
    key: "center",
    title: "Align center",
    html: ICON("M4 6h16M7 10h10M4 14h16M7 18h10"),
  },
  {
    cmd: "justifyRight",
    key: "right",
    title: "Align right",
    html: ICON("M4 6h16M10 10h10M4 14h16M10 18h10"),
  },
  {
    cmd: "justifyFull",
    key: "full",
    title: "Justify",
    html: ICON("M4 6h16M4 10h16M4 14h16M4 18h16"),
  },
  "sep",
  {
    cmd: "insertUnorderedList",
    key: "ul",
    title: "Bulleted list",
    html: ICON("M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"),
  },
  {
    cmd: "insertOrderedList",
    key: "ol",
    title: "Numbered list",
    html: ICON(
      "M10 6h10M10 12h10M10 18h10",
      num(8, 1) + num(14, 2) + num(20, 3),
    ),
  },
  {
    cmd: "outdent",
    title: "Decrease indent",
    html: ICON("M4 6h16M12 10h8M12 14h8M4 18h16M7 9l-3 3 3 3"),
  },
  {
    cmd: "indent",
    title: "Increase indent",
    html: ICON("M4 6h16M12 10h8M12 14h8M4 18h16M4 9l3 3-3 3"),
  },
  "sep",
  {
    link: true,
    title: "Link",
    html: ICON(
      "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
    ),
  },
];
const ACTIVE = [
  "bg-indigo-100",
  "text-indigo-700",
  "dark:bg-indigo-900/60",
  "dark:text-indigo-200",
];
const tools = document.getElementById("tools");
const blockSel = document.getElementById("block");
const linkbar = document.getElementById("linkbar");
const linkUrl = document.getElementById("linkUrl");
const cmd = (c, v) =>
  preview.contentWindow.postMessage({ type: "cmd", cmd: c, value: v }, "*");

TOOLS.forEach((t) => {
  if (t === "sep") {
    const s = document.createElement("span");
    s.className = "mx-1 h-5 w-px bg-slate-300 dark:bg-slate-700";
    tools.appendChild(s);
    return;
  }
  const b = document.createElement("button");
  b.type = "button";
  b.title = t.title;
  b.setAttribute("aria-label", t.title);
  if (t.key) b.dataset.key = t.key;
  b.className =
    "flex h-7 w-7 items-center justify-center rounded text-sm text-slate-600 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-800";
  b.innerHTML = t.html;
  b.addEventListener("mousedown", (e) => e.preventDefault());
  b.addEventListener("click", () => (t.link ? toggleLink() : cmd(t.cmd)));
  tools.appendChild(b);
});

function updateToolbar(m) {
  tools.querySelectorAll("button[data-key]").forEach((b) => {
    const on = !!m.s[b.dataset.key];
    ACTIVE.forEach((c) => b.classList.toggle(c, on));
  });
  blockSel.value = ["h1", "h2", "h3"].includes(m.block) ? m.block : "p";
}
blockSel.addEventListener("change", () =>
  cmd("formatBlock", "<" + blockSel.value + ">"),
);

function closeLink() {
  linkbar.classList.add("hidden");
  linkbar.classList.remove("flex");
}
function toggleLink() {
  const show = linkbar.classList.contains("hidden");
  linkbar.classList.toggle("hidden", !show);
  linkbar.classList.toggle("flex", show);
  if (show) linkUrl.focus();
}
function applyLink() {
  let u = linkUrl.value.trim();
  if (!u) return;
  if (!/^([a-z][a-z0-9+.-]*:|\/|#)/i.test(u)) u = "https://" + u;
  cmd("createLink", u);
  linkUrl.value = "";
  closeLink();
}
document.getElementById("linkApply").addEventListener("click", applyLink);
document.getElementById("linkRemove").addEventListener("click", () => {
  cmd("unlink");
  closeLink();
});
linkUrl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    applyLink();
  }
  if (e.key === "Escape") closeLink();
});

// Resizable panels
const main = document.querySelector("main");
const divider = document.getElementById("divider");
const desktop = window.matchMedia("(min-width: 768px)");
let split = 50,
  dragging = false;
function setSplit(p) {
  split = Math.min(85, Math.max(15, p));
  main.style.setProperty("--split", split + "%");
  editor.resize();
}
divider.addEventListener("pointerdown", (e) => {
  dragging = true;
  divider.setPointerCapture(e.pointerId);
  preview.style.pointerEvents = "none";
  document.body.style.userSelect = "none";
});
divider.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  const r = main.getBoundingClientRect();
  setSplit(
    desktop.matches
      ? ((e.clientX - r.left) / r.width) * 100
      : ((e.clientY - r.top) / r.height) * 100,
  );
});
function stopDrag() {
  dragging = false;
  preview.style.pointerEvents = "";
  document.body.style.userSelect = "";
}
divider.addEventListener("pointerup", stopDrag);
divider.addEventListener("pointercancel", stopDrag);
divider.addEventListener("dblclick", () => setSplit(50));
divider.addEventListener("keydown", (e) => {
  const back = ["ArrowLeft", "ArrowUp"].includes(e.key),
    fwd = ["ArrowRight", "ArrowDown"].includes(e.key);
  if (back || fwd) {
    e.preventDefault();
    setSplit(split + (fwd ? 2 : -2));
  }
});

// Copy and reset
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (_) {}
    ta.remove();
    return ok;
  }
}
copyBtn.addEventListener("click", async () => {
  const ok = await copyText(editor.getValue());
  copyBtn.textContent = ok ? "Copied" : "Copy failed";
  setTimeout(() => (copyBtn.textContent = "Copy code"), 1500);
});
document.getElementById("reset").addEventListener("click", () => {
  editor.setValue(DEFAULT_CODE, -1);
  editor.focus();
});
