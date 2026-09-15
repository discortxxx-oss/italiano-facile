const os = require("os");
const path = require("path");
const CFG = process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config");
const SKILL = path.join(CFG, "gigatool", "skills", "word");
const H = require(path.join(SKILL, "helpers", "index.cjs"));

(async () => {
  const doc = H.createDoc({ title: "Presentarsi — Знакомство (A0-A1)" });

  doc.heading("Presentarsi — Знакомство (A0-A1)", 1);

  doc.paragraph("Тема: научиться представлять себя, называть имя, возраст, откуда вы, профессию, спрашивать собеседника. Урок рассчитан на один полноценный урок (60 минут).");

  doc.heading("1. Цели урока", 2);
  doc.bullets([
    "Научиться говорить «меня зовут», «мне … лет», «я из …»",
    "Освоить глаголы essere (быть) и chiamarsi (называться)",
    "Выучить базовые приветствия и прощания",
    "Смочь спросить собеседника о его имени, возрасте, происхождении",
  ]);

  doc.heading("2. Разминка — Приветствия (Saluti)", 2);
  doc.paragraph("Начните урок с приветствия. Попросите ученика повторить за вами:");

  doc.table([
    ["Русский", "Italiano", "Произношение"],
    ["Привет (неформ.)", "Ciao", "ча́о"],
    ["Здравствуйте (форм.)", "Buongiorno", "буонджо́рно"],
    ["Добрый вечер", "Buonasera", "буонасэ́ра"],
    ["До свидания", "Arrivederci", "арривэдэ́рчи"],
    ["Пока", "Ciao", "ча́о"],
    ["Как дела?", "Come stai? (тú) / Come sta? (Lei)", "ко́мэ ста́й / ко́мэ ста"],
    ["Хорошо, спасибо", "Bene, grazie", "бэ́нэ, гра́циэ"],
  ], { widths: [0.3, 0.35, 0.35] });

  doc.heading("3. Основная лексика — Come ti chiami?", 2);
  doc.paragraph("Главный вопрос урока — «Как тебя зовут?». Отработайте диалог:");

  doc.table([
    ["Русский", "Italiano", "Произношение"],
    ["Как тебя зовут?", "Come ti chiami?", "ко́мэ ти киа́ми"],
    ["Меня зовут …", "Mi chiamo …", "ми киа́мо"],
    ["Откуда ты?", "Di dove sei?", "ди до́вэ сэ́й"],
    ["Я из России", "Sono di Russia / Sono dalla Russia", "со́но ди ру́ссиа / со́но да́лла ру́ссиа"],
    ["Я из (города)", "Sono di Mosca", "со́но ди мо́ска"],
    ["Сколько тебе лет?", "Quanti anni hai?", "куа́нти а́нни а́й"],
    ["Мне … лет", "Ho … anni", "о … а́нни"],
    ["Чем ты занимаешься?", "Cosa fai?", "ко́за фа́й"],
    ["Я студент / учитель", "Sono studente / insegnante", "со́но студэ́нтэ / инсэнья́нтэ"],
  ], { widths: [0.3, 0.35, 0.35] });

  doc.heading("4. Грамматика — глаголы essere и chiamarsi", 2);

  doc.heading("Глагол essere (быть)", 3);
  doc.paragraph("Это самый важный глагол. Выучите спряжение:");

  doc.table([
    ["Лицо", "Italiano", "Русский"],
    ["io", "sono", "я есть / я являюсь"],
    ["tu", "sei", "ты есть"],
    ["lui/lei/Lei", "è", "он/она есть"],
    ["noi", "siamo", "мы есть"],
    ["voi", "siete", "вы есть"],
    ["loro", "sono", "они есть"],
  ], { widths: [0.25, 0.35, 0.4] });

  doc.heading("Глагол chiamarsi (называться) — возвратный", 3);
  doc.paragraph("В итальянском «меня зовут» буквально — «я называю себя»: mi chiamo. Спряжение:");

  doc.table([
    ["Лицо", "Italiano", "Русский"],
    ["io", "mi chiamo", "я называюсь"],
    ["tu", "ti chiami", "ты называешься"],
    ["lui/lei/Lei", "si chiama", "он/она называется"],
    ["noi", "ci chiamiamo", "мы называемся"],
    ["voi", "vi chiamate", "вы называетесь"],
    ["loro", "si chiamano", "они называются"],
  ]);

  doc.heading("5. Диалог для отработки", 2);
  doc.paragraph("Прочитайте и разыграйте диалог с учеником:");

  doc.paragraph("— Ciao! Come ti chiami?", { bold: true });
  doc.paragraph("— Ciao! Mi chiamo Marco. E tu?");
  doc.paragraph("— Io sono Anna. Piacere!");
  doc.paragraph("— Piacere! Di dove sei?");
  doc.paragraph("— Sono di Russia, di Mosca. E tu?");
  doc.paragraph("— Io sono italiano, di Roma.");
  doc.paragraph("— Quanti anni hai?");
  doc.paragraph("— Ho 28 anni. E tu?");
  doc.paragraph("— Io ho 25 anni. Cosa fai?");
  doc.paragraph("— Sono insegnante. E tu?");
  doc.paragraph("— Sono studentessa.");

  doc.heading("6. Упражнения", 2);

  doc.heading("Упражнение 1. Вставьте правильную форму", 3);
  doc.bullets([
    "Io mi chiamo / ti chiami Paolo.",
    "Tu sei / è di Roma?",
    "Lei si chiama / mi chiamo Maria.",
    "Noi siamo / sono studenti.",
    "Loro hanno / hai 20 anni.",
  ]);
  doc.paragraph("(Ответы: chiamo, sei, si chiama, siamo, hanno)", { italic: true });

  doc.heading("Упражнение 2. Ответьте на вопросы", 3);
  doc.bullets([
    "Come ti chiami?",
    "Quanti anni hai?",
    "Di dove sei?",
    "Cosa fai?",
  ]);

  doc.heading("Упражнение 3. Поставьте слова в правильный порядок", 3);
  doc.bullets([
    "chiamo / Lucia / Mi",
    "anni / Ho / 30",
    "di / Russia / Sono",
    "chiami / Come / ti?",
  ]);
  doc.paragraph("(Ответы: Mi chiamo Lucia. Ho 30 anni. Sono di Russia. Come ti chiami?)", { italic: true });

  doc.heading("7. Домашнее задание", 2);
  doc.bullets([
    "Выучить спряжение глаголов essere и chiamarsi",
    "Написать 3 предложения о себе (имя, возраст, откуда)",
    "Подготовить короткий диалог-знакомство (4–6 реплик)",
  ]);

  doc.heading("8. Полезные фразы для урока", 2);
  doc.table([
    ["Русский", "Italiano"],
    ["Я не понимаю", "Non capisco"],
    ["Повторите, пожалуйста", "Ripeta, per favore"],
    ["Как это произносится?", "Come si pronuncia?"],
    ["Что значит …?", "Cosa significa …?"],
    ["Можно медленнее?", "Più lentamente, per favore"],
  ], { widths: [0.4, 0.6] });

  doc.heading("Buon lavoro! In bocca al lupo!", 1);

  await doc.save("presentarsi-lezione-a0-a1.docx");
  console.log("wrote presentarsi-lezione-a0-a1.docx");
})();