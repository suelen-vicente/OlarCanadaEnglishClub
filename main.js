let aulas = [
  {
    id: 1,
    titulo: "✈️ Airport English",
    descricao: "Frases úteis para se comunicar no aeroporto",
    lesson: {
      title: "English Lesson: At the Airport",
      goal: "Communicate in simple English inside the airport.",
      sections: [
        {
          title: "Basic Phrases",
          items: [
            { en: "Excuse me", pt: "Com licença" },
            { en: "Can you help me?", pt: "Você pode me ajudar?" },
            { en: "I don’t understand.", pt: "Eu não entendo." },
            { en: "Can you repeat, please?", pt: "Pode repetir, por favor?" },
            { en: "Can you speak slowly?", pt: "Você pode falar devagar?" },
          ],
        },
        {
          title: "Asking for Directions",
          items: [
            { en: "Where is the gate?", pt: "Onde fica o portão (gate)?" },
            { en: "Where is gate 10?", pt: "Onde fica o portão 10?" },
            { en: "Where is baggage claim?", pt: "Onde fica a retirada de bagagens (baggage claim)?" },
            { en: "Where is immigration?", pt: "Onde fica a imigração?" },
            { en: "Where is the bathroom?", pt: "Onde fica o banheiro?" },
          ],
        },
        {
          title: "Understanding Directions",
          items: [
            { en: "Go straight", pt: "Siga em frente / Vá reto" },
            { en: "Turn left", pt: "Vire à esquerda" },
            { en: "Turn right", pt: "Vire à direita" },
            { en: "It’s near", pt: "É perto" },
            { en: "It’s far", pt: "É longe" },
            { en: "Next to", pt: "Ao lado de" },
            { en: "Across from", pt: "Em frente a" },
          ],
        },
        {
          title: "Travel Situations",
          items: [
            { en: "Where do I check in?", pt: "Onde eu faço check-in?" },
            { en: "Where is security?", pt: "Onde fica a segurança (raio-x)?" },
            { en: "Where is my boarding gate?", pt: "Onde fica o meu portão de embarque?" },
            { en: "Where can I get my luggage?", pt: "Onde eu pego minha bagagem?" },
          ],
        },
        {
          title: "Problems",
          items: [
            { en: "I am lost.", pt: "Eu estou perdido(a)." },
            { en: "I missed my flight.", pt: "Eu perdi meu voo." },
            { en: "My bag is missing.", pt: "Minha mala sumiu / está faltando." },
            { en: "I need help.", pt: "Eu preciso de ajuda." },
          ],
        },
        {
          title: "Tips",
          items: [
            { en: "Always say 'Excuse me' first.", pt: "Comece sempre com “Excuse me” (com licença)." },
            { en: "Use 'please' and 'thank you'.", pt: "Use “please” (por favor) e “thank you” (obrigado/a)." },
            { en: "Speak slowly.", pt: "Fale devagar." },
            { en: "You can point if needed.", pt: "Você pode apontar se precisar." },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    titulo: "☕️ Tim Hortons",
    descricao: "Como pedir café e comida em inglês",
    lesson: {
      title: "English Lesson: Ordering at a Coffee Shop (Tim Hortons)",
      goal: "Order food and drinks in simple English.",
      sections: [
        {
          title: "Basic Phrases",
          items: [
            { en: "Hi", pt: "Oi / Olá" },
            { en: "Can I get...?", pt: "Eu posso pedir...?" },
            { en: "Please", pt: "Por favor" },
            { en: "Thank you", pt: "Obrigado/a" },
          ],
        },
        {
          title: "Making an order",
          items: [
            { en: "Can I get a coffee, please?", pt: "Pode me ver um café, por favor?" },
            { en: "Can I get a latte?", pt: "Pode me ver um latte?" },
            { en: "Can I get a sandwich?", pt: "Pode me ver um sanduíche?" },
            { en: "Can I get a donut?", pt: "Pode me ver um donut?" },
          ],
        },
        {
          title: "Drink details",
          items: [
            { en: "Hot or iced?", pt: "Quente ou gelado?" },
            { en: "Hot, please", pt: "Quente, por favor." },
            { en: "Iced, please", pt: "Gelado, por favor." },
          ],
        },
        {
          title: "Size",
          items: [
            { en: "What size?", pt: "Qual tamanho?" },
            { en: "Small / Medium / Large", pt: "Pequeno / Médio / Grande" },
            { en: "Medium, please", pt: "Médio, por favor." },
          ],
        },
        {
          title: "Sugar and milk",
          items: [
            { en: "Sugar? Milk? Cream?", pt: "Açúcar? Leite? Creme?" },
            { en: "Yes, please", pt: "Sim, por favor." },
            { en: "No, thank you", pt: "Não, obrigado/a." },
            { en: "One sugar, please", pt: "Um açúcar, por favor." },
            { en: "Milk, please", pt: "Leite, por favor." },
          ],
        },
        {
          title: "Example order",
          items: [
            { en: "Hi, can I get a medium coffee, please?", pt: "Oi, pode me ver um café médio, por favor?" },
            { en: "Hot, please", pt: "Quente, por favor." },
            { en: "Anything else?", pt: "Mais alguma coisa?" },
            { en: "No, that's it", pt: "Não, só isso." },
          ],
        },
        {
          title: "Payment",
          items: [
            { en: "Debit or credit?", pt: "Débito ou crédito?" },
            { en: "Tap?", pt: "Aproximar (tap)?" },
            { en: "Debit / Credit / Yes", pt: "Débito / Crédito / Sim" },
          ],
        },
        {
          title: "Receiving order",
          items: [
            { en: "Here you go", pt: "Aqui está / Aqui vai" },
            { en: "Thank you", pt: "Obrigado/a" },
          ],
        },
        {
          title: "Tips",
          items: [
            { en: "Speak slowly", pt: "Fale devagar." },
            { en: "Use 'please' and 'thank you'", pt: "Use “please” e “thank you”." },
            { en: "You can point at the menu", pt: "Você pode apontar no menu." },
          ],
        },
      ],
    },
  },
];

const state = {
  aulaSelecionadaId: null,
  quizMode: false,
  isSpeaking: false,
  isPaused: false,
  utterance: null,
  nextId: 2,
};

const el = {
  aulasGrid: document.getElementById("aulasGrid"),
  aulaTitulo: document.getElementById("aulaTitulo"),
  aulaDescricao: document.getElementById("aulaDescricao"),
  aulaConteudoPretty: document.getElementById("aulaConteudoPretty"),
  flashcards: document.getElementById("flashcards"),
  fcProgress: document.getElementById("fcProgress"),
  fcScore: document.getElementById("fcScore"),
  fcFront: document.getElementById("fcFront"),
  fcBack: document.getElementById("fcBack"),
  fcReveal: document.getElementById("fcReveal"),
  fcCorrect: document.getElementById("fcCorrect"),
  fcWrong: document.getElementById("fcWrong"),
  fcNext: document.getElementById("fcNext"),
  speechToggle: document.getElementById("speechToggle"),
  speechStop: document.getElementById("speechStop"),
  downloadPdf: document.getElementById("downloadPdf"),
  quizToggle: document.getElementById("quizToggle"),
  status: document.getElementById("status"),
};

function getAulaSelecionada() {
  return aulas.find((a) => a.id === state.aulaSelecionadaId) ?? null;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function computeNextId() {
  const maxId = aulas.reduce((max, a) => Math.max(max, a.id ?? 0), 0);
  state.nextId = maxId + 1;
}

function getAulaText(aula) {
  if (!aula) return "";
  if (typeof aula.conteudo === "string") return aula.conteudo;
  const lesson = aula.lesson;
  if (!lesson) return "";

  const lines = [];
  lines.push(`✈ ${lesson.title}`);
  if (lesson.goal) lines.push(`Goal: ${lesson.goal}`);
  lines.push("");
  for (const section of lesson.sections ?? []) {
    lines.push(section.title);
    for (const item of section.items ?? []) {
      const en = typeof item === "string" ? item : item.en;
      if (en) lines.push(`- ${en}`);
    }
    lines.push("");
  }
  return lines.join("\n").trim();
}

function renderPrettyLesson(aula) {
  if (!aula?.lesson) {
    el.aulaConteudoPretty.innerHTML =
      '<p class="content__placeholder">Selecione uma aula para ver o conteúdo aqui.</p>';
    return;
  }

  const lesson = aula.lesson;
  const parts = [];

  parts.push('<div class="meta">');
  parts.push(`<span class="pill pill--accent">🍁 ${escapeHtml(lesson.title)}</span>`);
  parts.push("</div>");

  if (lesson.goal) parts.push(`<p class="goal"><strong>Goal:</strong> ${escapeHtml(lesson.goal)}</p>`);

  parts.push('<div class="divider"></div>');

  for (const section of lesson.sections ?? []) {
    parts.push(`<h3>${escapeHtml(section.title)}</h3>`);
    parts.push("<ol>");
    for (const item of section.items ?? []) {
      const en = typeof item === "string" ? item : item.en;
      const pt = typeof item === "string" ? "" : item.pt;
      if (!en) continue;
      parts.push(
        `<li>${escapeHtml(en)}${
          pt ? `<div class="sub">${escapeHtml(pt)}</div>` : ""
        }</li>`
      );
    }
    parts.push("</ol>");
  }

  el.aulaConteudoPretty.innerHTML = parts.join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildFlashcards(aula) {
  const lesson = aula?.lesson;
  if (!lesson?.sections?.length) return [];

  const cards = [];
  for (const section of lesson.sections) {
    for (const item of section.items ?? []) {
      const en = typeof item === "string" ? item : item.en;
      const pt = typeof item === "string" ? "" : item.pt;
      if (!en || !pt) continue;

      cards.push({
        mode: "en->pt",
        frontLabel: "EN → tradução",
        front: en,
        backLabel: "PT",
        back: pt,
        section: section.title,
      });

      cards.push({
        mode: "pt->en",
        frontLabel: "PT → diga em inglês",
        front: pt,
        backLabel: "EN",
        back: en,
        section: section.title,
      });
    }
  }

  return shuffle(cards);
}

const quiz = {
  deck: [],
  index: 0,
  revealed: false,
  correct: 0,
  wrong: 0,
};

function setQuizVisible(visible) {
  el.flashcards.hidden = !visible;
  el.aulaConteudoPretty.hidden = visible;
}

function updateQuizUi() {
  const total = quiz.deck.length;
  const current = quiz.deck[quiz.index] ?? null;
  el.fcProgress.textContent = total ? `${Math.min(quiz.index + 1, total)}/${total}` : "0/0";
  el.fcScore.textContent = `✅ ${quiz.correct} • ❌ ${quiz.wrong}`;

  if (!current) {
    el.fcFront.innerHTML =
      '<span class="fcLabel">Flashcards</span>Selecione uma aula para começar.';
    el.fcBack.hidden = true;
    el.fcBack.textContent = "";
    el.fcReveal.disabled = true;
    el.fcCorrect.disabled = true;
    el.fcWrong.disabled = true;
    el.fcNext.disabled = true;
    return;
  }

  el.fcFront.innerHTML = `<span class="fcLabel">${escapeHtml(current.frontLabel)}</span>${escapeHtml(
    current.front
  )}`;
  el.fcBack.textContent = `${current.backLabel}: ${current.back}`;
  el.fcBack.hidden = !quiz.revealed;

  el.fcReveal.disabled = quiz.revealed;
  el.fcCorrect.disabled = !quiz.revealed;
  el.fcWrong.disabled = !quiz.revealed;
  el.fcNext.disabled = !quiz.revealed;
}

function startQuizForSelectedLesson() {
  const aula = getAulaSelecionada();
  quiz.deck = buildFlashcards(aula);
  quiz.index = 0;
  quiz.revealed = false;
  quiz.correct = 0;
  quiz.wrong = 0;
  updateQuizUi();
}

function revealCard() {
  if (!quiz.deck.length) return;
  quiz.revealed = true;
  updateQuizUi();
}

function answerCard(isCorrect) {
  if (!quiz.revealed) return;
  if (isCorrect) quiz.correct += 1;
  else quiz.wrong += 1;
  nextCard();
}

function nextCard() {
  if (!quiz.deck.length) return;
  if (!quiz.revealed) return;
  quiz.index += 1;
  if (quiz.index >= quiz.deck.length) quiz.index = 0;
  quiz.revealed = false;
  updateQuizUi();
}

function setStatus(message) {
  el.status.textContent = message ?? "";
}

function safeFilename(name) {
  const cleaned = String(name)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return cleaned.length ? cleaned : "aula";
}

function renderAulas() {
  el.aulasGrid.innerHTML = "";
  for (const aula of aulas) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.setAttribute("aria-selected", String(aula.id === state.aulaSelecionadaId));
    card.addEventListener("click", () => selecionarAula(aula.id));

    const title = document.createElement("h3");
    title.className = "card__title";
    title.textContent = aula.titulo;

    const desc = document.createElement("p");
    desc.className = "card__desc";
    desc.textContent = aula.descricao;

    card.append(title, desc);
    el.aulasGrid.append(card);
  }
}

function updateControls() {
  const aula = getAulaSelecionada();
  const hasAula = Boolean(aula);

  el.speechToggle.disabled = !hasAula;
  el.speechStop.disabled = !hasAula;
  el.downloadPdf.disabled = !hasAula;

  if (!hasAula) {
    el.speechToggle.textContent = "Ouvir";
    return;
  }

  if (!state.isSpeaking) {
    el.speechToggle.textContent = "Ouvir";
  } else if (!state.isPaused) {
    el.speechToggle.textContent = "Pausar";
  } else {
    el.speechToggle.textContent = "Continuar";
  }
}

function stopSpeech() {
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  state.isSpeaking = false;
  state.isPaused = false;
  state.utterance = null;
  updateControls();
  setStatus("");
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    setStatus("Seu navegador não suporta leitura em voz alta (SpeechSynthesis).");
    return;
  }

  stopSpeech();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.onend = () => {
    state.isSpeaking = false;
    state.isPaused = false;
    state.utterance = null;
    updateControls();
    setStatus("");
  };
  utterance.onerror = () => {
    state.isSpeaking = false;
    state.isPaused = false;
    state.utterance = null;
    updateControls();
    setStatus("Não foi possível reproduzir o áudio.");
  };

  state.utterance = utterance;
  window.speechSynthesis.speak(utterance);
  state.isSpeaking = true;
  state.isPaused = false;
  updateControls();
  setStatus("Reproduzindo...");
}

function toggleSpeech() {
  const aula = getAulaSelecionada();
  if (!aula) return;

  if (!("speechSynthesis" in window)) {
    setStatus("Seu navegador não suporta leitura em voz alta (SpeechSynthesis).");
    return;
  }

  const synth = window.speechSynthesis;

  if (!state.isSpeaking) {
    speak(getAulaText(aula));
    return;
  }

  if (state.isSpeaking && !state.isPaused) {
    synth.pause();
    state.isPaused = true;
    updateControls();
    setStatus("Pausado.");
  } else {
    synth.resume();
    state.isPaused = false;
    updateControls();
    setStatus("Reproduzindo...");
  }
}

function gerarPDF() {
  const aula = getAulaSelecionada();
  if (!aula) return;

  if (!window.jspdf?.jsPDF) {
    setStatus("jsPDF não carregou. Verifique sua conexão e recarregue a página.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  const margin = 48;
  const width = doc.internal.pageSize.getWidth() - margin * 2;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  const pdfTitle = aula.lesson?.title ?? aula.titulo ?? "Aula";
  const titleLines = doc.splitTextToSize(pdfTitle, width);
  doc.text(titleLines, margin, 64);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  let y = 64 + titleLines.length * 18 + 12;
  const contentLines = doc.splitTextToSize(getAulaText(aula), width);
  const lineHeight = 14;
  const pageHeight = doc.internal.pageSize.getHeight();

  for (const line of contentLines) {
    if (y > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    doc.text(line, margin, y);
    y += lineHeight;
  }

  doc.save(`${safeFilename(pdfTitle)}.pdf`);
  setStatus("PDF gerado.");
}

function selecionarAula(id) {
  if (state.aulaSelecionadaId === id) return;

  stopSpeech();
  state.aulaSelecionadaId = id;
  const aula = getAulaSelecionada();

  el.aulaTitulo.textContent = aula?.titulo ?? "Escolha uma aula";
  el.aulaDescricao.textContent = aula?.descricao ?? "";
  renderPrettyLesson(aula);
  if (state.quizMode) startQuizForSelectedLesson();

  setStatus("");
  renderAulas();
  updateControls();
}

function toggleQuizMode() {
  state.quizMode = !state.quizMode;
  el.quizToggle.setAttribute("aria-pressed", String(state.quizMode));
  el.quizToggle.textContent = `Modo quiz: ${state.quizMode ? "Ligado" : "Desligado"}`;
  setQuizVisible(state.quizMode);
  if (state.quizMode) {
    startQuizForSelectedLesson();
    setStatus("Modo quiz: flashcards (misto).");
  } else {
    setStatus("Modo quiz desligado.");
  }
}

el.speechToggle.addEventListener("click", toggleSpeech);
el.speechStop.addEventListener("click", stopSpeech);
el.downloadPdf.addEventListener("click", gerarPDF);
el.quizToggle.addEventListener("click", toggleQuizMode);
el.fcReveal.addEventListener("click", revealCard);
el.fcCorrect.addEventListener("click", () => answerCard(true));
el.fcWrong.addEventListener("click", () => answerCard(false));
el.fcNext.addEventListener("click", nextCard);

function normalizeHeading(line) {
  return String(line).trim().toLowerCase();
}

function parseLessonFromText(rawText, fallbackTitle) {
  const lines = String(rawText)
    .replaceAll("\r\n", "\n")
    .replaceAll("\r", "\n")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length);

  const lessonTitleLine =
    lines.find((l) => /english\s+lesson\s*:/i.test(l)) ?? (lines[0] ?? fallbackTitle);

  const goalLine = lines.find((l) => /^goal\s*:/i.test(l));
  const goal = goalLine ? goalLine.replace(/^goal\s*:\s*/i, "").trim() : "";

  const knownSectionTitles = [
    "Basic Phrases",
    "Asking for Directions",
    "Understanding Directions",
    "Travel Situations",
    "Problems",
    "Tips",
  ];
  const knownSet = new Set(knownSectionTitles.map((t) => normalizeHeading(t)));

  const sections = [];
  let current = null;

  for (const line of lines) {
    if (/^goal\s*:/i.test(line)) continue;
    if (/^\d+(\s+\d+)+$/.test(line)) continue; // "1 2 3 4"
    if (/^[•\-–—]\s*/.test(line)) {
      const item = line.replace(/^[•\-–—]\s*/, "").trim();
      if (current && item) current.items.push(item);
      continue;
    }

    const normalized = normalizeHeading(line);
    if (knownSet.has(normalized)) {
      current = { title: line, items: [] };
      sections.push(current);
      continue;
    }

    if (!current) {
      current = { title: "Content", items: [] };
      sections.push(current);
    }
    current.items.push(line);
  }

  const cleanedSections = sections
    .map((s) => ({ title: s.title, items: (s.items ?? []).filter(Boolean) }))
    .filter((s) => s.items.length);

  return {
    title: lessonTitleLine,
    goal,
    sections: cleanedSections.length ? cleanedSections : [{ title: "Content", items: lines }],
  };
}

renderAulas();
updateControls();
setQuizVisible(false);
updateQuizUi();
setStatus("Pronto.");
