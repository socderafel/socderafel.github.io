// Motor JavaScript Avançat per a la Pissarra Digital Interactiva (CA1)
(function() {
  'use strict';

  // Estat Global
  let currentPDIActivityId = 'act-ud1-1';
  let pdiAudioEnabled = true;
  let pdiAudioCtx = null;

  // Estats interns per joc
  const speedQuizState = {};
  const intrusState = {};
  const keypadState = {};

  // Inicialitzador d'Àudio Web segur
  function getAudioContext() {
    try {
      if (!pdiAudioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) pdiAudioCtx = new AudioContext();
      }
      if (pdiAudioCtx && pdiAudioCtx.state === 'suspended') {
        pdiAudioCtx.resume().catch(function() {});
      }
      return pdiAudioCtx;
    } catch(e) {
      return null;
    }
  }

  window.playPDISound = function(type) {
    if (!pdiAudioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'tap') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'flip') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.12);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'correct') {
        const freqs = [523.25, 659.25, 783.99, 1046.50];
        freqs.forEach(function(freq, i) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.08);
          gain.gain.setValueAtTime(0.25, now + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.35);
        });
        triggerConfetti();
      } else if (type === 'error') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.linearRampToValueAtTime(90, now + 0.25);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch(e) {
      console.warn("Àudio no disponible:", e);
    }
  };

  // Alternar So
  window.togglePDISound = function() {
    pdiAudioEnabled = !pdiAudioEnabled;
    const icons = ['#sound-icon', '#game-sound-btn'];
    icons.forEach(function(sel) {
      const el = document.querySelector(sel);
      if (el) el.textContent = pdiAudioEnabled ? '🔊' : '🔇';
    });
    const txt = document.getElementById('sound-text');
    if (txt) txt.textContent = pdiAudioEnabled ? 'So Activat' : 'Silenciat';
    if (pdiAudioEnabled) window.playPDISound('tap');
  };

  // Pantalla Completa Universal
  window.togglePDIFullscreen = function() {
    try { window.playPDISound('tap'); } catch(e) {}
    const isFs = document.body.classList.contains('pdi-fullscreen-mode');
    if (!isFs) {
      document.body.classList.add('pdi-fullscreen-mode');
      const el = document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(function() {});
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
    } else {
      document.body.classList.remove('pdi-fullscreen-mode');
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        if (document.exitFullscreen) document.exitFullscreen().catch(function() {});
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      }
    }
  };

  document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
      document.body.classList.remove('pdi-fullscreen-mode');
    }
  });

  // Mostrar Tauler
  window.showPDIDashboard = function() {
    try { window.playPDISound('tap'); } catch(e) {}
    const dash = document.getElementById('pdi-dashboard');
    const game = document.getElementById('pdi-game-view');
    if (dash) dash.style.display = 'block';
    if (game) game.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Llançar Activitat
  window.launchGameActivity = function(actId) {
    try { window.playPDISound('tap'); } catch(e) {}
    currentPDIActivityId = actId;
    const dash = document.getElementById('pdi-dashboard');
    const game = document.getElementById('pdi-game-view');
    if (dash) dash.style.display = 'none';
    if (game) game.style.display = 'flex';

    document.querySelectorAll('.pdi-activity-card').forEach(function(c) {
      c.classList.remove('active');
    });
    const card = document.getElementById(actId);
    if (card) {
      card.classList.add('active');
      updateGameTopBar(card);

      // Inicialitzar estat específic si cal
      const fmt = card.getAttribute('data-format');
      if (fmt === 'speedquiz') initSpeedQuiz(card);
      else if (fmt === 'intrus') initIntrus(card);
      else if (fmt === 'keypad') initKeypad(card);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function updateGameTopBar(card) {
    const unit = (card.getAttribute('data-unit') || 'UD').toUpperCase();
    const shortTitle = card.getAttribute('data-title') || 'Repte';
    const badge = document.getElementById('game-unit-badge');
    const title = document.getElementById('game-act-title');
    const counter = document.getElementById('game-counter');

    if (badge) badge.textContent = unit;
    if (title) title.textContent = shortTitle;

    const cardsInUnit = Array.from(document.querySelectorAll('.pdi-activity-card[data-unit="' + card.getAttribute('data-unit') + '"]'));
    const idx = cardsInUnit.indexOf(card);
    if (counter) counter.textContent = (idx + 1) + ' / ' + cardsInUnit.length;
  }

  // Navegar Relatiu
  window.navRelativeActivity = function(delta) {
    try { window.playPDISound('tap'); } catch(e) {}
    const allCards = Array.from(document.querySelectorAll('.pdi-activity-card'));
    const currentCard = document.getElementById(currentPDIActivityId);
    let idx = allCards.indexOf(currentCard);
    idx += delta;
    if (idx < 0) idx = allCards.length - 1;
    if (idx >= allCards.length) idx = 0;
    if (allCards[idx]) {
      window.launchGameActivity(allCards[idx].id);
    }
  };

  // Reiniciar Repte
  window.resetCurrentPDIActivity = function() {
    try { window.playPDISound('tap'); } catch(e) {}
    const card = document.getElementById(currentPDIActivityId);
    if (!card) return;
    const fmt = card.getAttribute('data-format');

    if (fmt === 'order' || fmt === 'category') {
      const pool = card.querySelector('.pdi-source-pool');
      const items = Array.from(card.querySelectorAll('.pdi-item'));
      items.sort(function() { return Math.random() - 0.5; });
      items.forEach(function(it) {
        it.style.borderColor = '#94a3b8';
        if (pool) pool.appendChild(it);
      });
      const msg = card.querySelector('.pdi-status-msg');
      if (msg) msg.textContent = '';
    } else if (fmt === 'speedquiz') {
      initSpeedQuiz(card, true);
    } else if (fmt === 'intrus') {
      initIntrus(card, true);
    } else if (fmt === 'keypad') {
      initKeypad(card, true);
    } else if (fmt === 'flipcard') {
      card.querySelectorAll('.flipcard-scene').forEach(function(c) {
        c.classList.remove('is-flipped');
      });
    }
  };

  // ==========================================
  // MOTOR 1: DRAG & DROP (ORDRE I CATEGORIES)
  // ==========================================
  window.checkOrderActivity = function(cardId) {
    const card = document.getElementById(cardId);
    const slots = card.querySelectorAll('.pdi-slot');
    const pool = card.querySelector('.pdi-source-pool');
    const remainingInPool = pool ? pool.querySelectorAll('.pdi-item').length : 0;
    const msg = card.querySelector('.pdi-status-msg');

    if (remainingInPool > 0) {
      if (msg) {
        msg.className = 'pdi-status-msg incorrect';
        msg.textContent = '⚠️ Encara queden ' + remainingInPool + ' passos per col·locar en el seu ordre!';
      }
      window.playPDISound('error');
      return;
    }

    let isAllCorrect = true;
    slots.forEach(function(slot) {
      const expected = slot.getAttribute('data-slot');
      const item = slot.querySelector('.pdi-item');
      if (item && item.getAttribute('data-order') === expected) {
        item.style.borderColor = '#10b981';
      } else {
        isAllCorrect = false;
        if (item) item.style.borderColor = '#ef4444';
      }
    });

    if (isAllCorrect) {
      if (msg) {
        msg.className = 'pdi-status-msg correct';
        msg.textContent = '🎉 Molt bé! Has ordenat tots els passos correctament!';
      }
      window.playPDISound('correct');
    } else {
      if (msg) {
        msg.className = 'pdi-status-msg incorrect';
        msg.textContent = "Hi ha algun pas fora d'ordre. Revisa els requadres en roig!";
      }
      window.playPDISound('error');
    }
  };

  window.checkCategoryActivity = function(cardId) {
    const card = document.getElementById(cardId);
    const boxes = card.querySelectorAll('.pdi-drop-box');
    const pool = card.querySelector('.pdi-source-pool');
    const remainingInPool = pool ? pool.querySelectorAll('.pdi-item').length : 0;
    const msg = card.querySelector('.pdi-status-msg');

    if (remainingInPool > 0) {
      if (msg) {
        msg.className = 'pdi-status-msg incorrect';
        msg.textContent = '⚠️ Queden ' + remainingInPool + ' elements per classificar a les caixes!';
      }
      window.playPDISound('error');
      return;
    }

    let totalItems = 0;
    let correctItems = 0;
    boxes.forEach(function(box) {
      const boxCat = box.getAttribute('data-cat');
      const items = box.querySelectorAll('.pdi-item');
      items.forEach(function(item) {
        totalItems++;
        if (item.getAttribute('data-cat') === boxCat) {
          correctItems++;
          item.style.borderColor = '#10b981';
        } else {
          item.style.borderColor = '#ef4444';
        }
      });
    });

    if (correctItems === totalItems) {
      if (msg) {
        msg.className = 'pdi-status-msg correct';
        msg.textContent = '🎉 Extraordinari! Has encertat tots ' + totalItems + '/' + totalItems + ' elements!';
      }
      window.playPDISound('correct');
    } else {
      if (msg) {
        msg.className = 'pdi-status-msg incorrect';
        msg.textContent = 'Has encertat ' + correctItems + ' de ' + totalItems + '. Els elements en roig estan a la caixa equivocada!';
      }
      window.playPDISound('error');
    }
  };

  // ==========================================
  // MOTOR 2: SPEED QUIZ (RONDA DE 5 PREGUNTES)
  // ==========================================
  function initSpeedQuiz(card, reset) {
    const cid = card.id;
    const container = card.querySelector('.pdi-speedquiz-container');
    if (!container) return;

    if (!speedQuizState[cid] || reset) {
      let questions = [];
      try {
        questions = JSON.parse(container.getAttribute('data-questions') || '[]');
      } catch(e) {
        questions = [];
      }
      speedQuizState[cid] = {
        questions: questions,
        currentIndex: 0,
        correctCount: 0,
        streak: 0,
        answered: false
      };
    }

    renderSpeedQuizQuestion(card);
  }

  function renderSpeedQuizQuestion(card) {
    const cid = card.id;
    const st = speedQuizState[cid];
    if (!st || !st.questions.length) return;

    const container = card.querySelector('.pdi-speedquiz-container');
    const curQ = st.questions[st.currentIndex];

    // Amagar resum si n'hi havia
    const summary = container.querySelector('.sq-summary-box');
    if (summary) summary.style.display = 'none';

    // Mostrar contingut de joc
    const mainArea = container.querySelector('.sq-main-play-area');
    if (mainArea) mainArea.style.display = 'flex';

    // Actualitzar comptadors
    const curRoundEl = container.querySelector('.sq-current-round');
    const totalRoundsEl = container.querySelector('.sq-total-rounds');
    const streakEl = container.querySelector('.sq-streak-val');
    const scoreEl = container.querySelector('.sq-score-val');
    const textEl = container.querySelector('.sq-statement-text');
    const fb = container.querySelector('.sq-feedback-box');

    if (curRoundEl) curRoundEl.textContent = (st.currentIndex + 1);
    if (totalRoundsEl) totalRoundsEl.textContent = st.questions.length;
    if (streakEl) streakEl.textContent = st.streak;
    if (scoreEl) scoreEl.textContent = st.correctCount;
    if (textEl) textEl.innerHTML = curQ.q;
    if (fb) fb.style.display = 'none';

    // Botons actius
    const btns = container.querySelectorAll('.btn-sq');
    btns.forEach(function(b) {
      b.disabled = false;
      b.style.opacity = '1';
    });

    st.answered = false;
  }

  window.answerSpeedQuiz = function(cardId, userAnswer) {
    const card = document.getElementById(cardId);
    const container = card.querySelector('.pdi-speedquiz-container');
    const st = speedQuizState[cardId];
    if (!st || st.answered) return;

    const curQ = st.questions[st.currentIndex];
    st.answered = true;

    // Desactivar botons momentàniament
    container.querySelectorAll('.btn-sq').forEach(function(b) {
      b.disabled = true;
      b.style.opacity = '0.7';
    });

    const isCorrect = (userAnswer === curQ.is_true);
    const fb = container.querySelector('.sq-feedback-box');
    const fbContent = container.querySelector('.sq-feedback-content');
    const streakEl = container.querySelector('.sq-streak-val');
    const scoreEl = container.querySelector('.sq-score-val');
    const nextBtn = container.querySelector('.btn-sq-next');

    if (fb) fb.style.display = 'block';

    if (isCorrect) {
      st.correctCount++;
      st.streak++;
      window.playPDISound('correct');
      if (fb) fb.className = 'sq-feedback-box correct';
      if (fbContent) fbContent.innerHTML = '<strong>🎉 ENCERTAT!</strong><br>' + curQ.exp;
    } else {
      st.streak = 0;
      window.playPDISound('error');
      if (fb) fb.className = 'sq-feedback-box incorrect';
      if (fbContent) fbContent.innerHTML = '<strong>❌ OOOPS! NO ÉS CORRECTE:</strong><br>' + curQ.exp;
    }

    if (streakEl) streakEl.textContent = st.streak;
    if (scoreEl) scoreEl.textContent = st.correctCount;

    if (nextBtn) {
      if (st.currentIndex + 1 < st.questions.length) {
        nextBtn.textContent = 'Següent Pregunta (' + (st.currentIndex + 2) + '/' + st.questions.length + ') ➔';
      } else {
        nextBtn.textContent = 'Veure Resultats de la Ronda 🏆';
      }
    }
  };

  window.nextSpeedQuizQuestion = function(cardId) {
    try { window.playPDISound('tap'); } catch(e) {}
    const card = document.getElementById(cardId);
    const st = speedQuizState[cardId];
    if (!st) return;

    st.currentIndex++;
    if (st.currentIndex < st.questions.length) {
      renderSpeedQuizQuestion(card);
    } else {
      // Final de la ronda
      showSpeedQuizSummary(card);
    }
  };

  function showSpeedQuizSummary(card) {
    const container = card.querySelector('.pdi-speedquiz-container');
    const st = speedQuizState[card.id];
    if (!container || !st) return;

    const mainArea = container.querySelector('.sq-main-play-area');
    const fb = container.querySelector('.sq-feedback-box');
    const summary = container.querySelector('.sq-summary-box');
    const finalScore = container.querySelector('.sq-final-correct');
    const totalEl = container.querySelector('.sq-final-total');

    if (mainArea) mainArea.style.display = 'none';
    if (fb) fb.style.display = 'none';
    if (summary) summary.style.display = 'flex';
    if (finalScore) finalScore.textContent = st.correctCount;
    if (totalEl) totalEl.textContent = st.questions.length;

    if (st.correctCount >= 4) {
      window.playPDISound('correct');
    } else {
      window.playPDISound('tap');
    }
  }

  window.restartSpeedQuiz = function(cardId) {
    const card = document.getElementById(cardId);
    initSpeedQuiz(card, true);
  };

  // ==========================================
  // MOTOR 3: TROBA L'INTRÚS (2 RONDES)
  // ==========================================
  function initIntrus(card, reset) {
    const cid = card.id;
    const container = card.querySelector('.pdi-intrus-container');
    if (!container) return;

    if (!intrusState[cid] || reset) {
      let rounds = [];
      try {
        rounds = JSON.parse(container.getAttribute('data-rounds') || '[]');
      } catch(e) {
        rounds = [];
      }
      intrusState[cid] = {
        rounds: rounds,
        currentRound: 0,
        solved: false
      };
    }

    renderIntrusRound(card);
  }

  function renderIntrusRound(card) {
    const cid = card.id;
    const st = intrusState[cid];
    if (!st || !st.rounds.length) return;

    const container = card.querySelector('.pdi-intrus-container');
    const rData = st.rounds[st.currentRound];

    const curRoundEl = container.querySelector('.intrus-cur-round');
    const totalRoundsEl = container.querySelector('.intrus-total-rounds');
    const qTextEl = container.querySelector('.intrus-question-text');
    const gridEl = container.querySelector('.intrus-cards-grid');
    const fb = container.querySelector('.intrus-feedback-box');
    const nextBtn = container.querySelector('.btn-intrus-next');

    if (curRoundEl) curRoundEl.textContent = (st.currentRound + 1);
    if (totalRoundsEl) totalRoundsEl.textContent = st.rounds.length;
    if (qTextEl) qTextEl.innerHTML = rData.question;
    if (fb) fb.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';

    // Generar targetes d'aquesta ronda
    if (gridEl) {
      gridEl.innerHTML = '';
      rData.options.forEach(function(opt, idx) {
        const div = document.createElement('div');
        div.className = 'intrus-card';
        div.setAttribute('data-intrus', opt.is_intrus ? 'true' : 'false');
        div.setAttribute('data-hint', opt.hint);
        div.setAttribute('onclick', "selectIntrus('" + cid + "', this)");
        div.innerHTML = '<span class="intrus-badge">Opció ' + String.fromCharCode(65 + idx) + '</span><p class="intrus-card-text">' + opt.text + '</p>';
        gridEl.appendChild(div);
      });
    }

    st.solved = false;
  }

  window.selectIntrus = function(cardId, cardEl) {
    const card = document.getElementById(cardId);
    const container = card.querySelector('.pdi-intrus-container');
    const st = intrusState[cardId];
    const isIntrus = (cardEl.getAttribute('data-intrus') === 'true');
    const hint = cardEl.getAttribute('data-hint') || '';
    const fb = container.querySelector('.intrus-feedback-box');
    const fbContent = container.querySelector('.intrus-feedback-content');
    const nextBtn = container.querySelector('.btn-intrus-next');

    if (fb) fb.style.display = 'block';

    if (isIntrus) {
      cardEl.className = 'intrus-card selected-correct';
      if (fb) fb.className = 'intrus-feedback-box correct';
      if (fbContent) fbContent.innerHTML = '🎉 <strong>MOLT BÉ! HAS CAÇAT L\'INTRÚS!</strong><br>' + hint;
      window.playPDISound('correct');

      if (st && st.currentRound + 1 < st.rounds.length) {
        if (nextBtn) {
          nextBtn.style.display = 'inline-block';
          nextBtn.textContent = 'Segona Ronda: Un altre Intrús! (' + (st.currentRound + 2) + '/' + st.rounds.length + ') ➔';
        }
      } else {
        if (nextBtn) {
          nextBtn.style.display = 'inline-block';
          nextBtn.textContent = '🎉 Repte Completat! Reiniciar 🔄';
        }
      }
    } else {
      cardEl.className = 'intrus-card selected-wrong';
      if (fb) fb.className = 'intrus-feedback-box incorrect';
      if (fbContent) fbContent.innerHTML = '❌ <strong>Aquest element NO és l\'intrús:</strong> ' + hint;
      window.playPDISound('error');
    }
  };

  window.nextIntrusRound = function(cardId) {
    try { window.playPDISound('tap'); } catch(e) {}
    const card = document.getElementById(cardId);
    const st = intrusState[cardId];
    if (!st) return;

    st.currentRound++;
    if (st.currentRound < st.rounds.length) {
      renderIntrusRound(card);
    } else {
      initIntrus(card, true);
    }
  };

  // ==========================================
  // MOTOR 4: TECLAT MENTAL (3 PROBLEMES)
  // ==========================================
  function initKeypad(card, reset) {
    const cid = card.id;
    const container = card.querySelector('.pdi-keypad-container');
    if (!container) return;

    if (!keypadState[cid] || reset) {
      let problems = [];
      try {
        problems = JSON.parse(container.getAttribute('data-problems') || '[]');
      } catch(e) {
        problems = [];
      }
      keypadState[cid] = {
        problems: problems,
        currentIndex: 0,
        currentInput: ''
      };
    }

    renderKeypadProblem(card);
  }

  function renderKeypadProblem(card) {
    const cid = card.id;
    const st = keypadState[cid];
    if (!st || !st.problems.length) return;

    const container = card.querySelector('.pdi-keypad-container');
    const pData = st.problems[st.currentIndex];

    const curProbEl = container.querySelector('.kp-cur-prob');
    const totalProbsEl = container.querySelector('.kp-total-probs');
    const textEl = container.querySelector('.kp-prob-text');
    const screen = document.getElementById('kp-screen-' + cid);
    const fb = container.querySelector('.kp-feedback-box');
    const nextBtn = container.querySelector('.btn-kp-next');

    if (curProbEl) curProbEl.textContent = (st.currentIndex + 1);
    if (totalProbsEl) totalProbsEl.textContent = st.problems.length;
    if (textEl) textEl.innerHTML = pData.text;
    st.currentInput = '';
    if (screen) screen.textContent = '--';
    if (fb) fb.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
  }

  window.pressKeypad = function(cardId, key) {
    try { window.playPDISound('tap'); } catch(e) {}
    const st = keypadState[cardId];
    if (!st) return;

    let cur = st.currentInput || '';

    if (key === 'C') {
      cur = '';
    } else if (key === 'DEL') {
      cur = cur.slice(0, -1);
    } else if (key === '-') {
      if (cur.startsWith('-')) cur = cur.slice(1);
      else cur = '-' + cur;
    } else if (key === '.') {
      if (!cur.includes('.')) cur += (cur === '' ? '0.' : '.');
    } else {
      if (cur.length < 10) cur += key;
    }

    st.currentInput = cur;
    const screen = document.getElementById('kp-screen-' + cardId);
    if (screen) screen.textContent = (cur === '' ? '--' : cur);
  };

  window.checkKeypad = function(cardId) {
    const card = document.getElementById(cardId);
    const container = card.querySelector('.pdi-keypad-container');
    const st = keypadState[cardId];
    if (!st || !st.problems.length) return;

    const pData = st.problems[st.currentIndex];
    const expected = (pData.expected || '').trim();
    const steps = pData.steps || '';
    const cur = (st.currentInput || '').trim();
    const fb = container.querySelector('.kp-feedback-box');
    const fbContent = container.querySelector('.kp-feedback-content');
    const nextBtn = container.querySelector('.btn-kp-next');

    if (fb) fb.style.display = 'block';

    if (!cur) {
      if (fb) fb.className = 'kp-feedback-box incorrect';
      if (fbContent) fbContent.textContent = '⚠️ Introdueix un valor abans de comprovar!';
      window.playPDISound('error');
      return;
    }

    const cleanCur = cur.replace(',', '.');
    const cleanExp = expected.replace(',', '.');

    if (parseFloat(cleanCur) === parseFloat(cleanExp) || cleanCur === cleanExp) {
      if (fb) fb.className = 'kp-feedback-box correct';
      if (fbContent) fbContent.innerHTML = '🎉 <strong>EXCEL·LENT! RESULTAT CORRECTE (' + cleanExp + ')</strong><br><small>' + steps + '</small>';
      window.playPDISound('correct');

      if (nextBtn) {
        nextBtn.style.display = 'inline-block';
        if (st.currentIndex + 1 < st.problems.length) {
          nextBtn.textContent = 'Següent Problema (' + (st.currentIndex + 2) + '/' + st.problems.length + ') ➔';
        } else {
          nextBtn.textContent = '🎉 Tots els Problemes Superats! Reiniciar 🔄';
        }
      }
    } else {
      if (fb) fb.className = 'kp-feedback-box incorrect';
      if (fbContent) fbContent.innerHTML = '❌ <strong>INCORRECTE (Has posat ' + cleanCur + ')</strong><br>Revisa el càlcul: ' + steps;
      window.playPDISound('error');
    }
  };

  window.nextKeypadProblem = function(cardId) {
    try { window.playPDISound('tap'); } catch(e) {}
    const card = document.getElementById(cardId);
    const st = keypadState[cardId];
    if (!st) return;

    st.currentIndex++;
    if (st.currentIndex < st.problems.length) {
      renderKeypadProblem(card);
    } else {
      initKeypad(card, true);
    }
  };

  // ==========================================
  // MOTOR 5: TARGETES 3D
  // ==========================================
  window.flipCard = function(cardScene) {
    try { window.playPDISound('flip'); } catch(e) {}
    cardScene.classList.toggle('is-flipped');
  };

  // ==========================================
  // CONFETTI ANIMATION
  // ==========================================
  function triggerConfetti() {
    const canvas = document.getElementById('pdi-confetti-canvas');
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';

    const ctx = canvas.getContext('2d');
    const particles = [];
    const colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 16,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10
      });
    }

    const startTime = Date.now();
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = Date.now() - startTime;

      particles.forEach(function(p) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rotation += p.rotSpeed;
        p.alpha = Math.max(0, 1 - elapsed / 2200);

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      if (elapsed < 2200) {
        requestAnimationFrame(render);
      } else {
        canvas.style.display = 'none';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(render);
  }

  // ==========================================
  // DRAG & DROP TÀCTIL I RATOLÍ
  // ==========================================
  function initDragAndDrop() {
    let draggedItem = null;

    document.querySelectorAll('.pdi-item').forEach(function(item) {
      item.addEventListener('dragstart', function(e) {
        draggedItem = item;
        item.classList.add('dragging');
        if (e.dataTransfer) e.dataTransfer.setData('text/plain', '');
      });

      item.addEventListener('dragend', function() {
        item.classList.remove('dragging');
        draggedItem = null;
      });

      // Touch Suport
      item.addEventListener('touchstart', function() {
        draggedItem = item;
        item.classList.add('dragging');
      }, { passive: true });

      item.addEventListener('touchend', function(e) {
        if (!draggedItem) return;
        const touch = e.changedTouches[0];
        const targetEl = document.elementFromPoint(touch.clientX, touch.clientY);
        if (targetEl) {
          const slot = targetEl.closest('.pdi-slot');
          const box = targetEl.closest('.pdi-drop-box');
          const pool = targetEl.closest('.pdi-source-pool');

          if (slot) {
            const currentInSlot = slot.querySelector('.pdi-item');
            if (currentInSlot && currentInSlot !== draggedItem) {
              draggedItem.parentElement.appendChild(currentInSlot);
            }
            slot.appendChild(draggedItem);
            window.playPDISound('tap');
          } else if (box) {
            const content = box.querySelector('.box-content');
            if (content) {
              content.appendChild(draggedItem);
              window.playPDISound('tap');
            }
          } else if (pool) {
            pool.appendChild(draggedItem);
            window.playPDISound('tap');
          }
        }
        item.classList.remove('dragging');
        draggedItem = null;
      });
    });

    document.querySelectorAll('.pdi-slot, .pdi-drop-box, .pdi-source-pool').forEach(function(zone) {
      zone.addEventListener('dragover', function(e) {
        e.preventDefault();
        zone.classList.add('drag-over');
      });

      zone.addEventListener('dragleave', function() {
        zone.classList.remove('drag-over');
      });

      zone.addEventListener('drop', function(e) {
        e.preventDefault();
        zone.classList.remove('drag-over');
        if (!draggedItem) return;

        if (zone.classList.contains('pdi-slot')) {
          const currentInSlot = zone.querySelector('.pdi-item');
          if (currentInSlot && currentInSlot !== draggedItem) {
            draggedItem.parentElement.appendChild(currentInSlot);
          }
          zone.appendChild(draggedItem);
          window.playPDISound('tap');
        } else if (zone.classList.contains('pdi-drop-box')) {
          const content = zone.querySelector('.box-content');
          if (content) {
            content.appendChild(draggedItem);
            window.playPDISound('tap');
          }
        } else if (zone.classList.contains('pdi-source-pool')) {
          zone.appendChild(draggedItem);
          window.playPDISound('tap');
        }
      });
    });
  }

  // EVENT DELEGATION GLOBAL
  document.addEventListener('click', function(e) {
    const launchBtn = e.target.closest('.btn-launch-act');
    if (launchBtn) {
      const actId = launchBtn.getAttribute('data-act-id') || 
                    (launchBtn.getAttribute('onclick') && launchBtn.getAttribute('onclick').match(/['"](act-[^'"]+)['"]/)?.[1]);
      if (actId) {
        e.preventDefault();
        e.stopPropagation();
        window.launchGameActivity(actId);
        return;
      }
    }

    const fsBtn = e.target.closest('#game-fs-btn, .btn-pdi-tool');
    if (fsBtn && (fsBtn.id === 'game-fs-btn' || fsBtn.textContent.includes('Pantalla Completa'))) {
      e.preventDefault();
      e.stopPropagation();
      window.togglePDIFullscreen();
      return;
    }

    const backBtn = e.target.closest('.btn-back-dash');
    if (backBtn) {
      e.preventDefault();
      e.stopPropagation();
      window.showPDIDashboard();
      return;
    }
  });

  // DOM READY
  function onReady() {
    initDragAndDrop();

    try {
      const targetUnit = localStorage.getItem('pdi-target-unit');
      if (targetUnit) {
        localStorage.removeItem('pdi-target-unit');
        const firstAct = document.querySelector('.pdi-activity-card[data-unit="' + targetUnit + '"]');
        if (firstAct) {
          window.launchGameActivity(firstAct.id);
          return;
        }
      }
    } catch(e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

})();
