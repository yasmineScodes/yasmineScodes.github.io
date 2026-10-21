/* ============ CONTENT (edit me) ============ */
// each image: list of file names to try, in order
const CHARS = [
  { page: "who",      k: "c_who",      src: ["assets/who_am_i.png"] },
  { page: "academic", k: "c_academic", src: ["assets/academic.png"] },
  { page: "work",     k: "c_work",     src: ["assets/work_me.png"] },
  { page: "passions", k: "c_passions", src: ["assets/other_side.png"] },
];
const T = {
  en: { back: "‹ back", contact: "Contact me!", welcome: "Welcome to my portfolio!", profile: "Welcome to my portfolio!", scroll: "Scroll to see more! ˅",
    c_who: "Who am I?", c_academic: "Academic", c_work: "Work", c_passions: "Languages & passions",
    bio: "Hello, I’m Yasmine! I’m a 21 years old computer science student who loves exploring new ideas, creating things, and figuring out how stuff works. I’m ambitious, hardworking, and organized, but I also believe that having a good sense of humour and being kind to the people around you matters just as much as skills. I’m someone who enjoys helping others, learning from the people I meet, and adapting to new environments. I get along easily with others, bring positive energy to a team, and I’m always ready to take on new challenges. I’m curious by nature, eager to grow, and I love the feeling of turning an idea into something real.",
    school: "Institution", mention: "Honours", exp: "Experiences", proj: "Projects", demo: "Demo ↗", code: "Code ↗", copied: "Copied!", copy_tip: "Click to copy", hobbies: "Hobbies", langs: "Languages", soon: "+ Coming soon",
    contact_h: "Contact me!", lets: "Let’s build something together." },
  fr: { back: "‹ retour", contact: "Me contacter !", welcome: "Bienvenue sur mon portfolio !", profile: "Bienvenue sur mon portfolio !", scroll: "Faites défiler pour en voir plus ! ˅",
    c_who: "Qui suis-je ?", c_academic: "Parcours académique", c_work: "Mon travail", c_passions: "Langues & passions",
    bio: "Bonjour, je suis Yasmine ! J’ai 21 ans et je suis étudiante en informatique. J’adore explorer de nouvelles idées, créer des choses et comprendre comment tout fonctionne. Je suis ambitieuse, travailleuse et organisée, mais je crois aussi qu’avoir le sens de l’humour et être bienveillante envers les gens qui nous entourent compte autant que les compétences. J’aime aider les autres, apprendre des personnes que je rencontre et m’adapter à de nouveaux environnements. Je m’entends facilement avec les autres, j’apporte une énergie positive à une équipe et je suis toujours prête à relever de nouveaux défis. Je suis curieuse de nature, désireuse de progresser, et j’adore la sensation de transformer une idée en quelque chose de concret.",
    school: "Établissement", mention: "Mention", exp: "Expériences", proj: "Projets", demo: "Démo ↗", code: "Code ↗", copied: "Copié !", copy_tip: "Cliquer pour copier", hobbies: "Loisirs", langs: "Langues", soon: "+ Bientôt",
    contact_h: "Me contacter !", lets: "Construisons quelque chose ensemble." },
};
const UA = "Université d’Artois, Lens, France";
const ACAD = [ // [en, fr]
  { id: "L3", deg: ["Licence – Computer science", "Licence – Informatique"], sch: [UA, UA], men: ["In progress", "En cours"] },
  { id: "L2", deg: ["Licence – Computer science", "Licence – Informatique"], sch: [UA, UA], men: ["Good", "Bien"] },
  { id: "L1", deg: ["Licence – Computer science", "Licence – Informatique"], sch: [UA, UA], men: ["Fairly good", "Assez bien"] },
  { id: "Bac", deg: ["Baccalaureate – Computer science", "Baccalauréat – Informatique"], sch: ["Liberty High School, Jendouba, Tunisia", "Lycée Liberty, Jendouba, Tunisie"], men: ["Very good", "Très bien"] },
];
const EXP = [
  { n: ["Multimodal AI Intern – LIUPPA, Campus Montaury", "Stagiaire en IA multimodale – LIUPPA, Campus Montaury"], d: ["15 May – 14 July 2026", "15 mai – 14 juillet 2026"],
    b: [["Designed a conversational corpus of simulated job interviews in JSON, with multimodal scripts.", "Experimented with generative AI tools (ElevenLabs, NotebookLM, Runway, HeyGen) to produce audio and video.", "Created and annotated deliverables and presented the results to the research team."],
        ["Conception d’un corpus conversationnel d’entretiens de recrutement simulés en JSON, avec scripts multimodaux.", "Expérimentation d’outils d’IA générative (ElevenLabs, NotebookLM, Runway, HeyGen) pour produire des contenus audio et vidéo.", "Création et annotation des livrables et présentation des résultats à l’équipe de recherche."]],
    tags: ["JSON", "Generative AI", "NLP"] },
  { n: ["Programming Teacher – Institut Einstein, Tunisia", "Enseignante en programmation – Institut Einstein, Tunisie"], d: ["Summer 2024", "Été 2024"],
    b: [["Ran introductory programming workshops for children.", "Explained logic concepts and gave one-to-one support, adapting exercises to each learner."],
        ["Animation d’ateliers d’initiation à la programmation pour enfants.", "Explication des concepts de logique et accompagnement individuel, avec exercices adaptés au niveau de chacun."]],
    tags: ["Teaching", "Scratch"] },
];
// screenshot = assets/projects/<name>.png
const PROJ = [
  { n: "Librairie Al Yasamin", d: ["E-commerce website for my family’s bookstore: catalogue, cart, orders, client and staff areas.", "Site e-commerce pour la librairie familiale : catalogue, panier, commandes, espaces client et personnel."], tags: ["HTML5", "CSS3", "JavaScript"], code: "https://github.com/yasmineScodes/librairie-al-yasamin-demo" },
  { n: "Site de gestion de laboratoires", d: ["Tool that automatically collects and structures data on research labs (CRIL, LIRIS).", "Outil de collecte automatisée et de structuration de données sur des laboratoires de recherche (CRIL, LIRIS)."], tags: ["Python", "BeautifulSoup", "HAL API", "SQL"], code: "https://github.com/yasmineScodes/gestion-de-laboratoires-de-recherche" },
  { n: "Pierre-Feuille-Ciseaux", d: ["Pixel-art Rock Paper Scissors: PvP and vs computer, characters, rounds, pause, music and sound effects.", "Pierre-feuille-ciseaux en pixel art : Joueur vs Joueur et vs Ordinateur, personnages, manches, pause, musique et effets sonores."], tags: ["Python", "Tkinter", "Pillow", "Pygame"], link: "https://github.com/yasmineScodes/rock-paper-scissors/releases/tag/v1.0", code: "https://github.com/yasmineScodes/rock-paper-scissors" },
  { n: "Tron Game", d: ["Local two-player arcade game with keyboard controls, collision detection and a game loop.", "Jeu d’arcade local à deux joueurs : commandes clavier, détection des collisions et boucle de jeu."], tags: ["JavaScript", "HTML5", "Canvas"], code: "https://github.com/yasmineScodes/Tron-game" },
  { n: "Jeu Same", d: ["Matrix-based game structured in classes, with user interaction handling.", "Jeu sur matrice structuré en classes, avec gestion des interactions utilisateur."], tags: ["Python", "OOP"], code: "https://github.com/yasmineScodes/Same-Game" },
  { n: "Petit Robot programmable", d: ["Team-built robot on an Arduino board with embedded logic.", "Robot conçu en équipe autour d’une carte Arduino, avec logique embarquée."], tags: ["Arduino"] },
];
const HOB = [["🏸", "Badminton", "Badminton"], ["🏐", "Volleyball", "Volley"], ["🎮", "Games", "Jeux vidéo"], ["✏️", "Drawing", "Dessin"], ["🎤", "Singing", "Chant"], ["🥊", "Kickboxing", "Kickboxing"], ["🧶", "Crochet", "Crochet"], ["📖", "Reading", "Lecture"]];
const LANGS = [["أ", ["Arabic", "Arabe"], 5, "ا ب ت ث ج"], ["É", ["French", "Français"], 4, "A B C É Ç"], ["A", ["English", "Anglais"], 4, "A B C D E"]];

/* ============ helpers ============ */
const $ = (s) => document.querySelector(s), $$ = (s) => [...document.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
let L = "en";
try { L = localStorage.getItem("lang") || ((navigator.language || "").startsWith("fr") ? "fr" : "en"); } catch (e) {}
const t = (k) => T[L][k], p = (a) => a[L === "fr" ? 1 : 0];
const PH = `<svg viewBox="0 0 100 200" width="110" aria-hidden="true"><circle cx="50" cy="40" r="26" fill="#fff" stroke="#2a6fa8" stroke-width="3"/><circle cx="30" cy="30" r="12" fill="#9fd0f5"/><circle cx="70" cy="30" r="12" fill="#9fd0f5"/><path d="M50 66v70M50 80l-28 40M50 80l28 40M50 136l-18 56M50 136l18 56" stroke="#2a6fa8" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`;
function fig(srcs, alt, ph = PH) {
  const d = document.createElement("div"); d.className = "fig";
  let i = 0; const im = new Image(); im.alt = alt;
  im.onerror = () => { if (++i < srcs.length) im.src = encodeURI(srcs[i]); else d.innerHTML = ph; };
  im.src = encodeURI(srcs[0]); d.appendChild(im); return d;
}
const tags = (a) => `<div class="tags">${a.map((x) => `<span>${esc(x)}</span>`).join("")}</div>`;

/* ============ router ============ */
const views = ["home", "who", "academic", "work", "passions"];
let current = "home", wstate = "desk", homeY = 0;
function show(name) {
  if (!views.includes(name)) name = "home";
  if (current === "home") homeY = scrollY; // remember where the visitor was
  views.forEach((v) => $("#" + v).classList.toggle("on", v === name));
  current = name; $("#back").hidden = name === "home";
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, name === "home" ? homeY : 0);
  document.documentElement.style.scrollBehavior = "";
  const w = $("#who"); w.classList.remove("run");
  if (name === "who") { void w.offsetWidth; w.classList.add("run"); }
  if (name === "work") { backDesk(); const lid = $("#lid"); lid.classList.remove("open"); setTimeout(() => lid.classList.add("open"), 150); }
  onScroll();
}
function go(n) {
  if (current === "work" && n !== "work") { $("#lid").classList.remove("open"); setTimeout(() => (location.hash = n), 1150); }
  else location.hash = n;
}
addEventListener("hashchange", () => show(location.hash.slice(1)));
function backDesk() { wstate = "desk"; $("#p-list").classList.remove("on"); $("#p-desk").classList.add("on"); }
$("#back").onclick = () => (current === "work" && wstate !== "desk" ? backDesk() : go("home"));
$("#sback").onclick = backDesk;
$("#contact").onclick = () => {
  const down = () => $("#footer").scrollIntoView({ behavior: "smooth" });
  if (current === "home") down(); else { location.hash = "home"; setTimeout(down, 200); }
};
$$(".sw button").forEach((b) => (b.onclick = () => setLang(b.dataset.l)));

/* ============ home ============ */
let act = 0; const n = CHARS.length, half = Math.floor(n / 2);
function renderChars() {
  const box = $("#chars"); box.innerHTML = "";
  CHARS.forEach((c, i) => {
    const b = document.createElement("button"); b.className = "char";
    b.appendChild(fig(c.src, t(c.k))); b.insertAdjacentHTML("beforeend", `<span>${esc(t(c.k))}</span>`);
    b.onclick = () => { if (i === act) go(c.page); else { act = i; layout(); } };
    box.appendChild(b);
  });
  layout();
}
function layout() { $$(".char").forEach((el, i) => { const o = ((i - act + n + half) % n) - half; el.style.setProperty("--o", o); el.dataset.o = o; }); }
$("#prev").onclick = () => { act = (act - 1 + n) % n; layout(); };
$("#next").onclick = () => { act = (act + 1) % n; layout(); };
addEventListener("keydown", (e) => { if (current === "home" && e.key === "ArrowLeft") $("#prev").click(); if (current === "home" && e.key === "ArrowRight") $("#next").click(); });
function onScroll() {
  if (current !== "home") return;
  const q = Math.min(1, Math.max(0, scrollY / (innerHeight * 0.7)));
  $("#head").style.transform = `translateY(${-q * 33}vh) scale(${1 - 0.4 * q})`;
  $("#h1a").style.opacity = Math.max(0, 1 - q * 2.2); $("#h1b").style.opacity = Math.max(0, q * 2.2 - 1.2);
  $("#hint").style.opacity = 1 - q * 3;
  const s = $("#stage"); s.style.opacity = q; s.style.transform = `translateY(${(1 - q) * 60}px)`; s.style.pointerEvents = q > 0.6 ? "auto" : "none";
}
addEventListener("scroll", onScroll, { passive: true });
for (let i = 0; i < 18; i++) { const b = document.createElement("i"), z = 12 + Math.random() * 44; b.style.cssText = `left:${Math.random() * 100}%;width:${z}px;height:${z}px;animation-duration:${9 + Math.random() * 10}s;animation-delay:-${Math.random() * 14}s`; $("#bubbles").appendChild(b); }
new IntersectionObserver((e) => e[0].isIntersecting && $("#footer").classList.add("in"), { threshold: 0.3 }).observe($("#footer"));

/* ============ other pages ============ */
function renderAcad() {
  const rot = [-2.5, 1.8, -1.5, 2.4];
  $("#acad").innerHTML = ACAD.map((a, i) => `<article class="acard" style="--r:${rot[i % 4]}deg;--d:${i * 0.12}s"><div class="inf"><small>${a.id}</small><h3>${esc(p(a.deg))}</h3><p><b>${t("school")}</b><br>${esc(p(a.sch))}</p><p><b>${t("mention")}</b><br>${esc(p(a.men))}</p></div></article>`).join("");
}
function openList(k) { wstate = k; $("#p-desk").classList.remove("on"); $("#p-list").classList.add("on"); renderList(); }
function renderList() {
  if (wstate === "desk") return;
  const g = $("#lgrid"); $("#ltitle").textContent = t(wstate); g.scrollTop = 0;
  if (wstate === "exp") g.innerHTML = EXP.map((e) => `<article class="item"><h3>${esc(p(e.n))}</h3><small>${esc(p(e.d))}</small><ul>${p(e.b).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>${tags(e.tags)}</article>`).join("");
  else {
    g.innerHTML = PROJ.map((j, i) => `<article class="item"><div class="shot" id="sh${i}"></div><h3>${esc(j.n)}</h3><p>${esc(p(j.d))}</p>${tags(j.tags)}${j.link || j.code ? `<p class="plinks">${j.link ? `<a href="${esc(j.link)}" target="_blank" rel="noopener">${t("demo")}</a>` : ""}${j.code ? `<a href="${esc(j.code)}" target="_blank" rel="noopener">${t("code")}</a>` : ""}</p>` : ""}</article>`).join("");
    PROJ.forEach((j, i) => $("#sh" + i).appendChild(fig([`assets/projects/${j.n}.png`], j.n, `<span>🖼️ ${esc(j.n)}</span>`)));
  }
}
$("#f-exp").onclick = () => openList("exp"); $("#f-proj").onclick = () => openList("proj");
function renderPassions() {
  $("#hob").innerHTML = HOB.map(([e, a, f], i) => `<div class="fl" style="animation-delay:${i * 0.3}s">${e}<small>${p([a, f])}</small></div>`).join("");
  $("#lgs").innerHTML = LANGS.map(([g, nm, s, al], i) => `<div class="lang" style="animation-delay:${i * 0.4}s"><div class="g">${g}</div><div><b>${p(nm)}</b><div class="stars">${"★".repeat(s)}${"☆".repeat(5 - s)}</div><small>${al}</small></div></div>`).join("") + `<div class="soon">${t("soon")}</div>`;
}
$("#photo").appendChild(fig(["assets/photo.jpg"], "Yasmine"));
$("#whochar").appendChild(fig(CHARS[0].src, t("c_who")));
$("#mid").appendChild(fig(CHARS[3].src, "other side"));

/* ============ copy e-mail ============ */
let toastT;
function toast(msg) {
  let el = $("#toast");
  if (!el) { el = document.createElement("div"); el.id = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
  el.textContent = msg; el.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove("on"), 1800);
}
async function copyText(txt) {
  try { await navigator.clipboard.writeText(txt); return true; } catch (e) {}
  try { // fallback for browsers/contexts without the Clipboard API
    const ta = document.createElement("textarea"); ta.value = txt; ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0"; document.body.appendChild(ta); ta.select();
    const ok = document.execCommand("copy"); ta.remove(); return ok;
  } catch (e) { return false; }
}
$$(".mail").forEach((b) => (b.onclick = async () => {
  if (await copyText(b.dataset.copy)) {
    b.classList.add("done"); toast(t("copied") + " " + b.dataset.copy);
    setTimeout(() => b.classList.remove("done"), 1500);
  } else toast(b.dataset.copy);
}));

/* ============ language ============ */
function setLang(l) {
  L = l; try { localStorage.setItem("lang", l); } catch (e) {}
  document.documentElement.lang = l;
  $$("[data-i]").forEach((e) => (e.textContent = t(e.dataset.i)));
  $$(".sw button").forEach((b) => b.classList.toggle("on", b.dataset.l === l));
  $$(".mail").forEach((b) => (b.title = t("copy_tip")));
  renderChars(); renderAcad(); renderList(); renderPassions(); onScroll();
}
setLang(L); show(location.hash.slice(1));
