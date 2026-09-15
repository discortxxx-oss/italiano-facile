const os = require("os");
const path = require("path");
const CFG = process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config");
const SKILL = path.join(CFG, "gigatool", "skills", "pptxgenjs-presentation");
const PptxGenJS = require(path.join(SKILL, "vendor", "pptxgenjs.bundle.cjs"));
const H = require(path.join(SKILL, "helpers", "index.cjs"));

const P = H.getPalette("coral");
const FONT = "Calibri";

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";
pptx.theme = { headFontFace: FONT, bodyFontFace: FONT };

function finish(slide) {
  H.warnIfSlideTextOverflows(slide, pptx);
  H.warnIfSlideHasOverlaps(slide, pptx);
  H.warnIfSlideElementsOutOfBounds(slide, pptx);
}

const OUT = "presentarsi-lezione-a0-a1.pptx";

async function main() {
  // ===== Slide 1 — Cover =====
  const s1 = pptx.addSlide();
  s1.background = { color: P.ink };
  s1.addText("Presentarsi", {
    x: 0.7, y: 1.8, w: 11.2, h: 1.6,
    fontFace: FONT, fontSize: 48, bold: true, color: P.bg, valign: "top",
  });
  s1.addText("Знакомство (A0\u2013A1)", {
    x: 0.7, y: 3.6, w: 8, h: 0.7,
    fontFace: FONT, fontSize: 30, bold: true, color: P.accent, valign: "top",
  });
  s1.addText("урок итальянского для начинающих", {
    x: 0.7, y: 6.2, w: 12, h: 0.45,
    fontFace: FONT, fontSize: 16, bold: true, color: P.muted, valign: "middle",
  });
  finish(s1);

  // ===== Slide 2 — Obiettivi (Цели) =====
  const s2 = pptx.addSlide();
  s2.background = { color: P.bg };
  s2.addText("Obiettivi", {
    x: 0.7, y: 1.4, w: 11.2, h: 0.6,
    fontFace: FONT, fontSize: 24, bold: true, color: P.accent, valign: "top",
  });
  s2.addText("Цели урока", {
    x: 0.7, y: 2.0, w: 11.2, h: 0.8,
    fontFace: FONT, fontSize: 32, bold: true, color: P.ink, valign: "top",
  });
  s2.addText([
    { text: "Научиться представлять себя: имя, возраст, откуда вы", options: { bullet: true, breakLine: true } },
    { text: "Освоить глаголы essere (быть) и chiamarsi (называться)", options: { bullet: true, breakLine: true } },
    { text: "Выучить базовые приветствия и прощания", options: { bullet: true, breakLine: true } },
    { text: "Смочь спросить собеседника о его имени, возрасте, происхождении", options: { bullet: true } },
  ], {
    x: 0.7, y: 3.2, w: 11.5, h: 3.5,
    fontFace: FONT, fontSize: 16, color: P.ink, valign: "top", paraSpaceAfter: 12,
  });
  finish(s2);

  // ===== Slide 3 — Saluti (Приветствия) =====
  const s3 = pptx.addSlide();
  s3.background = { color: P.bg };
  s3.addText("Saluti", {
    x: 0.7, y: 0.4, w: 11.2, h: 0.6,
    fontFace: FONT, fontSize: 24, bold: true, color: P.accent, valign: "top",
  });
  s3.addText("Приветствия", {
    x: 0.7, y: 1.0, w: 11.2, h: 0.7,
    fontFace: FONT, fontSize: 30, bold: true, color: P.ink, valign: "top",
  });
  const hdr = (t) => ({ text: t, options: { bold: true, color: P.bg, fill: { color: P.accent } } });
  const rows3 = [
    [hdr("Русский"), hdr("Italiano"), hdr("Произношение")],
    ["Привет (неформ.)", "Ciao", "ча\u0301о"],
    ["Здравствуйте (форм.)", "Buongiorno", "буонджо\u0301рно"],
    ["Добрый вечер", "Buonasera", "буонасэ\u0301ра"],
    ["До свидания", "Arrivederci", "арривэдэ\u0301рчи"],
    ["Как дела?", "Come stai? / Come sta?", "ко\u0301мэ стай / ко\u0301мэ ста"],
    ["Хорошо, спасибо", "Bene, grazie", "бэ\u0301нэ, гра\u0301циэ"],
  ];
  const plan3 = H.calcTableHeight(rows3, { colW: [3.5, 4.0, 4.5], fontFace: FONT, fontSize: 14, y: 2.0 });
  if (!plan3.fits) throw new Error("saluti table too tall");
  s3.addTable(rows3, {
    x: 0.7, y: 2.0, w: 12.0, colW: [3.5, 4.0, 4.5],
    rowH: plan3.rowH, fontFace: FONT, fontSize: 14,
    color: P.ink, border: { pt: 0.5, color: P.line }, valign: "middle",
  });
  s3.addText("Cominciamo con un saluto! \u2014 Начнём с приветствия!", {
    x: 0.7, y: 6.5, w: 12, h: 0.4,
    fontFace: FONT, fontSize: 14, italic: true, color: P.muted, valign: "top",
  });
  finish(s3);

  // ===== Slide 4 — Vocabolario (Лексика) =====
  const s4 = pptx.addSlide();
  s4.background = { color: P.bg };
  s4.addText("Vocabolario", {
    x: 0.7, y: 0.4, w: 11.2, h: 0.6,
    fontFace: FONT, fontSize: 24, bold: true, color: P.accent, valign: "top",
  });
  s4.addText("Come ti chiami? \u2014 Как представиться", {
    x: 0.7, y: 1.0, w: 11.2, h: 0.7,
    fontFace: FONT, fontSize: 28, bold: true, color: P.ink, valign: "top",
  });
  const rows4 = [
    [hdr("Русский"), hdr("Italiano"), hdr("Произношение")],
    ["Как тебя зовут?", "Come ti chiami?", "ко\u0301мэ ти киа\u0301ми"],
    ["Меня зовут \u2026", "Mi chiamo \u2026", "ми киа\u0301мо"],
    ["Откуда ты?", "Di dove sei?", "ди до\u0301вэ сэ\u0301й"],
    ["Я из России", "Sono di Russia / dalla Russia", "со\u0301но ди ру\u0301ссиа / да\u0301лла"],
    ["Сколько тебе лет?", "Quanti anni hai?", "куа\u0301нти а\u0301нни а\u0301й"],
    ["Мне \u2026 лет", "Ho \u2026 anni", "о \u2026 а\u0301нни"],
    ["Чем ты занимаешься?", "Cosa fai?", "ко\u0301за фа\u0301й"],
    ["Я студент / учитель", "Sono studente / insegnante", "со\u0301но студэ\u0301нтэ / инсэнья\u0301нтэ"],
  ];
  const plan4 = H.calcTableHeight(rows4, { colW: [3.3, 4.2, 4.5], fontFace: FONT, fontSize: 14, y: 2.0 });
  if (!plan4.fits) throw new Error("vocab table too tall");
  s4.addTable(rows4, {
    x: 0.7, y: 2.0, w: 12.0, colW: [3.3, 4.2, 4.5],
    rowH: plan4.rowH, fontFace: FONT, fontSize: 14,
    color: P.ink, border: { pt: 0.5, color: P.line }, valign: "middle",
  });
  finish(s4);

  // ===== Slide 5 — Essere =====
  const s5 = pptx.addSlide();
  s5.background = { color: P.bg };
  s5.addText("Grammatica", {
    x: 0.7, y: 0.4, w: 11.2, h: 0.6,
    fontFace: FONT, fontSize: 24, bold: true, color: P.accent, valign: "top",
  });
  s5.addText("Essere \u2014 \u00abбыть\u00bb", {
    x: 0.7, y: 1.0, w: 11.2, h: 0.7,
    fontFace: FONT, fontSize: 28, bold: true, color: P.ink, valign: "top",
  });
  s5.addText("\u2014 самый важный глагол итальянского языка. Без него никуда.", {
    x: 0.7, y: 1.8, w: 11.2, h: 0.5,
    fontFace: FONT, fontSize: 15, italic: true, color: P.muted, valign: "top",
  });
  const rows5 = [
    [hdr("Лицо"), hdr("Italiano"), hdr("Русский")],
    ["io", "sono", "я (есть)"],
    ["tu", "sei", "ты (есть)"],
    ["lui / lei / Lei", "e\u0300", "он / она (есть)"],
    ["noi", "siamo", "мы (есть)"],
    ["voi", "siete", "вы (есть)"],
    ["loro", "sono", "они (есть)"],
  ];
  const plan5 = H.calcTableHeight(rows5, { colW: [2.5, 4.0, 5.5], fontFace: FONT, fontSize: 16, y: 2.6 });
  if (!plan5.fits) throw new Error("essere table too tall");
  s5.addTable(rows5, {
    x: 0.7, y: 2.6, w: 12.0, colW: [2.5, 4.0, 5.5],
    rowH: plan5.rowH, fontFace: FONT, fontSize: 16,
    color: P.ink, border: { pt: 0.5, color: P.line }, valign: "middle",
  });
  s5.addText("Запомните: io sono, tu sei, lui/lei e\u0300 \u2014 основа любого диалога", {
    x: 0.7, y: 6.3, w: 12, h: 0.4,
    fontFace: FONT, fontSize: 14, bold: true, color: P.accent, valign: "top",
  });
  finish(s5);

  // ===== Slide 6 — Chiamarsi =====
  const s6 = pptx.addSlide();
  s6.background = { color: P.bg };
  s6.addText("Grammatica", {
    x: 0.7, y: 0.4, w: 11.2, h: 0.6,
    fontFace: FONT, fontSize: 24, bold: true, color: P.accent, valign: "top",
  });
  s6.addText("Chiamarsi \u2014 \u00abназываться\u00bb", {
    x: 0.7, y: 1.0, w: 11.2, h: 0.7,
    fontFace: FONT, fontSize: 28, bold: true, color: P.ink, valign: "top",
  });
  s6.addText("\u00abMi chiamo\u00bb \u2014 буквально \u00abя называю себя\u00bb. Возвратный глагол.", {
    x: 0.7, y: 1.8, w: 11.2, h: 0.5,
    fontFace: FONT, fontSize: 15, italic: true, color: P.muted, valign: "top",
  });
  const rows6 = [
    [hdr("Лицо"), hdr("Italiano"), hdr("Русский")],
    ["io", "mi chiamo", "я называюсь"],
    ["tu", "ti chiami", "ты называешься"],
    ["lui / lei / Lei", "si chiama", "он / она называется"],
    ["noi", "ci chiamiamo", "мы называемся"],
    ["voi", "vi chiamate", "вы называетесь"],
    ["loro", "si chiamano", "они называются"],
  ];
  const plan6 = H.calcTableHeight(rows6, { colW: [2.5, 4.0, 5.5], fontFace: FONT, fontSize: 16, y: 2.6 });
  if (!plan6.fits) throw new Error("chiamarsi table too tall");
  s6.addTable(rows6, {
    x: 0.7, y: 2.6, w: 12.0, colW: [2.5, 4.0, 5.5],
    rowH: plan6.rowH, fontFace: FONT, fontSize: 16,
    color: P.ink, border: { pt: 0.5, color: P.line }, valign: "middle",
  });
  s6.addText("Внимание: частица меняется! Mi / ti / si / ci / vi / si", {
    x: 0.7, y: 6.3, w: 12, h: 0.4,
    fontFace: FONT, fontSize: 14, bold: true, color: P.accent, valign: "top",
  });
  finish(s6);

  // ===== Slide 7 — Dialogo =====
  const s7 = pptx.addSlide();
  s7.background = { color: P.bg };
  s7.addText("Dialogo", {
    x: 0.7, y: 0.4, w: 11.2, h: 0.6,
    fontFace: FONT, fontSize: 24, bold: true, color: P.accent, valign: "top",
  });
  s7.addText("Давайте познакомимся", {
    x: 0.7, y: 1.0, w: 11.2, h: 0.7,
    fontFace: FONT, fontSize: 28, bold: true, color: P.ink, valign: "top",
  });
  const lines = [
    "\u2014 Ciao! Come ti chiami?",
    "\u2014 Ciao! Mi chiamo Marco. E tu?",
    "\u2014 Io sono Anna. Piacere!",
    "\u2014 Piacere! Di dove sei?",
    "\u2014 Sono di Russia, di Mosca. E tu?",
    "\u2014 Io sono italiano, di Roma.",
    "\u2014 Quanti anni hai?",
    "\u2014 Ho 28 anni. E tu?",
    "\u2014 Io ho 25 anni. Cosa fai?",
    "\u2014 Sono insegnante. E tu?",
    "\u2014 Sono studentessa.",
  ];
  s7.addText(
    lines.map((t) => ({ text: t, options: { breakLine: true } })),
    {
      x: 1.2, y: 2.0, w: 10.9, h: 4.8,
      fontFace: FONT, fontSize: 16, color: P.ink, valign: "top", paraSpaceAfter: 4,
    },
  );
  finish(s7);

  // ===== Slide 8 — Esercizi =====
  const s8 = pptx.addSlide();
  s8.background = { color: P.bg };
  s8.addText("Esercizi", {
    x: 0.7, y: 0.4, w: 11.2, h: 0.6,
    fontFace: FONT, fontSize: 24, bold: true, color: P.accent, valign: "top",
  });
  s8.addText("Упражнения", {
    x: 0.7, y: 1.0, w: 11.2, h: 0.7,
    fontFace: FONT, fontSize: 28, bold: true, color: P.ink, valign: "top",
  });
s8.addText([
    { text: "1. Вставьте правильную форму:", options: { bold: true, breakLine: true } },
    { text: "Io mi chiamo / ti chiami Paolo.", options: { bullet: true, breakLine: true } },
    { text: "Tu sei / e\u0300 di Roma?", options: { bullet: true, breakLine: true } },
    { text: "Lei si chiama / mi chiamo Maria.", options: { bullet: true, breakLine: true } },
    { text: "Noi siamo / sono studenti.", options: { bullet: true, breakLine: true } },
    { text: "Loro hanno / hai 20 anni.", options: { bullet: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "2. Ответьте на вопросы:", options: { bold: true, breakLine: true } },
    { text: "Come ti chiami?", options: { bullet: true, breakLine: true } },
    { text: "Quanti anni hai?", options: { bullet: true, breakLine: true } },
    { text: "Di dove sei?", options: { bullet: true, breakLine: true } },
    { text: "Cosa fai?", options: { bullet: true } },
  ], {
    x: 0.7, y: 2.0, w: 11.5, h: 4.8,
    fontFace: FONT, fontSize: 16, color: P.ink, valign: "top", paraSpaceAfter: 8,
  });
  s8.addText([
    { text: "2. Ответьте на вопросы:", options: { bold: true, breakLine: true } },
    { text: "Come ti chiami?", options: { bullet: true, breakLine: true } },
    { text: "Quanti anni hai?", options: { bullet: true, breakLine: true } },
    { text: "Di dove sei?", options: { bullet: true, breakLine: true } },
    { text: "Cosa fai?", options: { bullet: true } },
  ], {
    x: 0.7, y: 4.3, w: 11.2, h: 2.4,
    fontFace: FONT, fontSize: 16, color: P.ink, valign: "top", paraSpaceAfter: 8,
  });
  finish(s8);

  // ===== Slide 9 — Compiti (ДЗ) =====
  const s9 = pptx.addSlide();
  s9.background = { color: P.bg };
  s9.addText("Compiti a casa", {
    x: 0.7, y: 0.4, w: 11.2, h: 0.6,
    fontFace: FONT, fontSize: 24, bold: true, color: P.accent, valign: "top",
  });
  s9.addText("Домашнее задание", {
    x: 0.7, y: 1.0, w: 11.2, h: 0.7,
    fontFace: FONT, fontSize: 28, bold: true, color: P.ink, valign: "top",
  });
  s9.addText([
    { text: "Выучить спряжение глаголов essere и chiamarsi", options: { bullet: true, breakLine: true } },
    { text: "Написать 3 предложения о себе (имя, возраст, откуда)", options: { bullet: true, breakLine: true } },
    { text: "Подготовить короткий диалог-знакомство (4\u20136 реплик)", options: { bullet: true } },
  ], {
    x: 0.7, y: 2.8, w: 11.2, h: 2.5,
    fontFace: FONT, fontSize: 20, color: P.ink, valign: "top", paraSpaceAfter: 20,
  });
  finish(s9);

  // ===== Slide 10 — Frasi utili =====
  const s10 = pptx.addSlide();
  s10.background = { color: P.bg };
  s10.addText("Frasi utili", {
    x: 0.7, y: 0.4, w: 11.2, h: 0.6,
    fontFace: FONT, fontSize: 24, bold: true, color: P.accent, valign: "top",
  });
  s10.addText("Полезные фразы для урока", {
    x: 0.7, y: 1.0, w: 11.2, h: 0.7,
    fontFace: FONT, fontSize: 28, bold: true, color: P.ink, valign: "top",
  });
  const rows10 = [
    [hdr("Русский"), hdr("Italiano")],
    ["Я не понимаю", "Non capisco"],
    ["Повторите, пожалуйста", "Ripeta, per favore"],
    ["Как это произносится?", "Come si pronuncia?"],
    ["Что значит \u2026?", "Cosa significa \u2026?"],
    ["Можно медленнее?", "Piu\u0300 lentamente, per favore"],
  ];
  const plan10 = H.calcTableHeight(rows10, { colW: [4.5, 7.5], fontFace: FONT, fontSize: 15, y: 2.2 });
  if (!plan10.fits) throw new Error("frasi table too tall");
  s10.addTable(rows10, {
    x: 0.7, y: 2.2, w: 12.0, colW: [4.5, 7.5],
    rowH: plan10.rowH, fontFace: FONT, fontSize: 15,
    color: P.ink, border: { pt: 0.5, color: P.line }, valign: "middle",
  });
  finish(s10);

  // ===== Slide 11 — Closing =====
  const s11 = pptx.addSlide();
  s11.background = { color: P.ink };
  s11.addText("Buon lavoro!", {
    x: 0.7, y: 2.5, w: 11.2, h: 1.5,
    fontFace: FONT, fontSize: 48, bold: true, color: P.accent, valign: "top",
  });
  s11.addText("In bocca al lupo! \ud83d\udc4d", {
    x: 0.7, y: 4.2, w: 11.2, h: 0.8,
    fontFace: FONT, fontSize: 28, bold: true, color: P.bg, valign: "top",
  });
  s11.addText("Grazie e arrivederci!", {
    x: 0.7, y: 6.0, w: 11.2, h: 0.5,
    fontFace: FONT, fontSize: 18, color: P.muted, valign: "top",
  });
  finish(s11);

  await pptx.writeFile({ fileName: OUT });
  await H.recompressPptx(OUT);
  console.log("written: " + OUT);
}
main().catch((e) => { console.error(e); process.exit(1); });