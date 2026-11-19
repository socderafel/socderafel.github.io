/**
 * PISSARRA DIGITAL INTERACTIVA (PDI) — CIÈNCIES NATURALS
 * Motor de joc interactiu per a PDI i pantalles tàctils de classe.
 */

(function() {
  'use strict';

  let currentActivityId = 'act-nat02-1';
  let soundEnabled = true;
  let audioCtx = null;

  const activityStates = {
    speedquiz: {},
    intrus: {},
    keypad: {},
    connect: {},
    category: {},
    order: {},
    case: {}
  };

  const allActivityIds = [];

  function ensureActivityIds() {
    if (allActivityIds.length === 0) {
      document.querySelectorAll('.pdi-activity-card').forEach(function(card) {
        allActivityIds.push(card.id);
      });
    }
  }

  // ==========================================
  // SÍNTESI D'ÀUDIO WEB (PDI SOUND EFFECTS)
  // ==========================================
  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  window.playPDISound = function(type) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;

      if (type === 'tap') {
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.09);
        osc.frequency.setValueAtTime(783.99, now + 0.18);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.18);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.22);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === 'win') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.connect(g);
          g.connect(ctx.destination);
          o.type = 'triangle';
          o.frequency.setValueAtTime(freq, now + i * 0.08);
          g.gain.setValueAtTime(0.15, now + i * 0.08);
          g.gain.linearRampToValueAtTime(0.01, now + i * 0.08 + 0.25);
          o.start(now + i * 0.08);
          o.stop(now + i * 0.08 + 0.25);
        });
      }
    } catch(e) {}
  };

  // ==========================================
  // CONFETTI ANIMATION
  // ==========================================
  function triggerConfetti() {
    window.playPDISound('win');
    const canvas = document.getElementById('pdi-confetti-canvas');
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pieces = [];
    const colors = ['#10b981', '#059669', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6', '#14b8a6'];
    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: -10 - Math.random() * 80,
        w: 8 + Math.random() * 8,
        h: 10 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vy: 2.5 + Math.random() * 4,
        vx: (Math.random() - 0.5) * 3,
        rot: Math.random() * 360,
        vrot: (Math.random() - 0.5) * 8
      });
    }

    let frames = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.vy;
        p.x += p.vx;
        p.rot += p.vrot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frames++;
      if (frames < 110) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = 'none';
      }
    }
    requestAnimationFrame(animate);
  }

  function resolveCard(target) {
    if (!target) return null;
    if (typeof target === 'string') {
      return document.getElementById(target);
    }
    if (target.nodeType) {
      return target.classList.contains('pdi-activity-card') ? target : target.closest('.pdi-activity-card');
    }
    return null;
  }

  // ==========================================
  // TOPBAR HUD UPDATE
  // ==========================================
  function updateGameTopBar(card) {
    ensureActivityIds();
    const unit = (card.getAttribute('data-unit') || 'UD').toUpperCase();
    const shortTitle = card.getAttribute('data-title') || 'Repte';
    const badge = document.getElementById('game-unit-badge');
    const title = document.getElementById('game-act-title');
    const counter = document.getElementById('game-counter');
    const prevBtn = document.getElementById('btn-prev-act');
    const nextBtn = document.getElementById('btn-next-act');

    if (badge) badge.textContent = unit;
    if (title) title.textContent = shortTitle;

    const idx = allActivityIds.indexOf(card.id);
    if (counter && idx !== -1) {
      counter.textContent = (idx + 1) + ' / ' + allActivityIds.length;
    }
    if (prevBtn) prevBtn.disabled = (idx <= 0);
    if (nextBtn) nextBtn.disabled = (idx === -1 || idx >= allActivityIds.length - 1);
  }

  // ==========================================
  // 1. SPEED QUIZ
  // ==========================================
  function initSpeedQuiz(card, reset) {
    const cid = card.id;
    const container = card.querySelector('.pdi-speedquiz-container');
    if (!container) return;

    if (!activityStates.speedquiz[cid] || reset) {
      let questions = [];
      try {
        const raw = container.getAttribute('data-questions') || '[]';
        questions = JSON.parse(raw);
      } catch(e) {
        questions = [];
      }
      activityStates.speedquiz[cid] = {
        questions: questions,
        currentIndex: 0,
        score: 0,
        streak: 0,
        answered: false
      };
    }

    renderSpeedQuiz(card);
  }

  function renderSpeedQuiz(card) {
    const cid = card.id;
    const st = activityStates.speedquiz[cid];
    if (!st || !st.questions.length) return;

    const container = card.querySelector('.pdi-speedquiz-container');
    const qData = st.questions[st.currentIndex];

    const curRoundEl = container.querySelector('.sq-cur-round');
    if (curRoundEl) curRoundEl.textContent = (st.currentIndex + 1);
    const scoreValEl = container.querySelector('.sq-score-val');
    if (scoreValEl) scoreValEl.textContent = st.score;
    const streakValEl = container.querySelector('.sq-streak-val');
    if (streakValEl) streakValEl.textContent = '🔥 ' + st.streak;

    const timerBar = container.querySelector('.sq-timer-bar');
    if (timerBar) {
      const pct = ((st.currentIndex) / st.questions.length) * 100;
      timerBar.style.width = pct + '%';
    }

    const qText = container.querySelector('.sq-question-text');
    if (qText) qText.innerHTML = qData.q;

    const optsGrid = container.querySelector('.sq-options-grid');
    if (optsGrid) {
      optsGrid.innerHTML = '';
      (qData.opts || []).forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'sq-btn-opt';
        btn.innerHTML = '<span class="opt-badge">' + String.fromCharCode(65 + idx) + '</span><span class="opt-label">' + optText + '</span>';
        btn.onclick = function() {
          handleSpeedQuizSelect(card, idx, btn);
        };
        optsGrid.appendChild(btn);
      });
    }

    const fbRow = container.querySelector('.sq-feedback-row');
    if (fbRow) fbRow.style.display = 'none';
    const sumBox = container.querySelector('.sq-summary-box');
    if (sumBox) sumBox.style.display = 'none';

    const mainArea = container.querySelector('.sq-main-play-area');
    if (mainArea) mainArea.style.display = 'block';

    st.answered = false;
  }

  function handleSpeedQuizSelect(card, chosenIdx, btnEl) {
    const cid = card.id;
    const st = activityStates.speedquiz[cid];
    if (!st || st.answered) return;

    st.answered = true;
    const container = card.querySelector('.pdi-speedquiz-container');
    const qData = st.questions[st.currentIndex];
    const isCorrect = (chosenIdx === qData.ans);

    const allBtns = container.querySelectorAll('.sq-btn-opt');
    allBtns.forEach((b, i) => {
      b.disabled = true;
      if (i === qData.ans) {
        b.classList.add('correct');
      } else if (i === chosenIdx) {
        b.classList.add('wrong');
      } else {
        b.style.opacity = '0.5';
      }
    });

    if (isCorrect) {
      st.score += 20;
      st.streak++;
      window.playPDISound('correct');
    } else {
      st.streak = 0;
      window.playPDISound('error');
    }

    const scoreValEl = container.querySelector('.sq-score-val');
    if (scoreValEl) scoreValEl.textContent = st.score;
    const streakValEl = container.querySelector('.sq-streak-val');
    if (streakValEl) streakValEl.textContent = '🔥 ' + st.streak;

    const fbRow = container.querySelector('.sq-feedback-row');
    const expText = container.querySelector('.sq-explanation-text');
    if (expText) {
      const prefix = isCorrect ? '<strong style="color:#059669;">✅ RESPOSTA CORRECTA!</strong> ' : '<strong style="color:#dc2626;">❌ RESPOSTA INCORRECTA.</strong> ';
      expText.innerHTML = prefix + (qData.exp || '');
    }
    if (fbRow) fbRow.style.display = 'flex';
  }

  window.nextSpeedQuizQuestion = function(target) {
    const card = resolveCard(target);
    if (!card) return;
    const st = activityStates.speedquiz[card.id];
    if (!st) return;

    st.currentIndex++;
    if (st.currentIndex < st.questions.length) {
      renderSpeedQuiz(card);
      window.playPDISound('tap');
    } else {
      const container = card.querySelector('.pdi-speedquiz-container');
      const mainArea = container.querySelector('.sq-main-play-area');
      const fbRow = container.querySelector('.sq-feedback-row');
      const sumBox = container.querySelector('.sq-summary-box');
      const finalScore = container.querySelector('.sq-final-score');
      const timerBar = container.querySelector('.sq-timer-bar');

      if (mainArea) mainArea.style.display = 'none';
      if (fbRow) fbRow.style.display = 'none';
      if (timerBar) timerBar.style.width = '100%';

      if (finalScore) {
        finalScore.innerHTML = 'Has aconseguit <strong>' + st.score + ' punts</strong> sobre un total possible de ' + (st.questions.length * 20) + '!';
      }
      if (sumBox) sumBox.style.display = 'block';

      if (st.score >= (st.questions.length * 15)) {
        triggerConfetti();
      } else {
        window.playPDISound('correct');
      }
    }
  };

  window.restartSpeedQuiz = function(target) {
    const card = resolveCard(target);
    if (!card) return;
    initSpeedQuiz(card, true);
    window.playPDISound('tap');
  };

  // ==========================================
  // 2. TROBA L'INTRÚS
  // ==========================================
  function initIntrus(card, reset) {
    const cid = card.id;
    const container = card.querySelector('.pdi-intrus-container');
    if (!container) return;

    if (!activityStates.intrus[cid] || reset) {
      let rounds = [];
      try {
        rounds = JSON.parse(container.getAttribute('data-rounds') || '[]');
      } catch(e) {
        rounds = [];
      }
      activityStates.intrus[cid] = {
        rounds: rounds,
        currentRound: 0,
        solved: false
      };
    }

    renderIntrus(card);
  }

  function renderIntrus(card) {
    const cid = card.id;
    const st = activityStates.intrus[cid];
    if (!st || !st.rounds.length) return;

    const container = card.querySelector('.pdi-intrus-container');
    const rData = st.rounds[st.currentRound];

    const curRoundEl = container.querySelector('.intrus-cur-round');
    if (curRoundEl) curRoundEl.textContent = (st.currentRound + 1);

    const themeTitle = container.querySelector('.intrus-theme-title');
    if (themeTitle) themeTitle.textContent = rData.theme || rData.title || '';

    const grid = container.querySelector('.intrus-grid');
    if (grid) {
      grid.innerHTML = '';
      const cardsList = rData.cards || rData.options || [];
      cardsList.forEach((cItem) => {
        const btn = document.createElement('button');
        btn.className = 'intrus-card-btn';
        const cardText = cItem.t || cItem.text || '';
        btn.innerHTML = '<span class="intrus-icon">🔍</span><span class="intrus-label">' + cardText + '</span>';
        btn.onclick = function() {
          handleIntrusSelect(card, cItem, btn);
        };
        grid.appendChild(btn);
      });
    }

    const fbPanel = container.querySelector('.intrus-fb-panel');
    if (fbPanel) fbPanel.style.display = 'none';

    st.solved = false;
  }

  function handleIntrusSelect(card, cItem, btnEl) {
    const cid = card.id;
    const st = activityStates.intrus[cid];
    if (!st || st.solved) return;

    const isIntrus = (cItem.intrus === true || cItem.is_intrus === true);
    const container = card.querySelector('.pdi-intrus-container');
    const fbPanel = container.querySelector('.intrus-fb-panel');
    const fbText = container.querySelector('.intrus-fb-text');
    const nextBtn = container.querySelector('.btn-intrus-next');

    if (isIntrus) {
      st.solved = true;
      btnEl.classList.add('intrus-hit');
      window.playPDISound('correct');

      if (fbText) {
        fbText.innerHTML = '<strong style="color:#059669;">🎯 ENHORABONA, HAS DETECTAT L\'INTRÚS!</strong><br>' + (cItem.why || cItem.hint || '');
      }
      if (fbPanel) fbPanel.style.display = 'flex';

      const isLast = (st.currentRound >= st.rounds.length - 1);
      if (nextBtn) {
        nextBtn.textContent = isLast ? '🏆 Repte Superat! (Repetir)' : 'Següent Ronda ➔';
      }
    } else {
      btnEl.classList.add('intrus-miss');
      window.playPDISound('error');
      setTimeout(() => {
        btnEl.classList.remove('intrus-miss');
      }, 700);
    }
  }

  window.nextIntrusRound = function(target) {
    const card = resolveCard(target);
    if (!card) return;
    const st = activityStates.intrus[card.id];
    if (!st) return;

    if (st.currentRound < st.rounds.length - 1) {
      st.currentRound++;
      renderIntrus(card);
      window.playPDISound('tap');
    } else {
      triggerConfetti();
      initIntrus(card, true);
    }
  };

  window.restartIntrus = function(target) {
    const card = resolveCard(target);
    if (!card) return;
    initIntrus(card, true);
  };

  // ==========================================
  // 3. CÀLCUL TÀCTIL (KEYPAD)
  // ==========================================
  function initKeypad(card, reset) {
    const cid = card.id;
    const container = card.querySelector('.pdi-keypad-container');
    if (!container) return;

    if (!activityStates.keypad[cid] || reset) {
      let problems = [];
      try {
        problems = JSON.parse(container.getAttribute('data-problems') || '[]');
      } catch(e) {
        problems = [];
      }
      activityStates.keypad[cid] = {
        problems: problems,
        currentProb: 0,
        currentInput: ''
      };
    }

    renderKeypad(card);
  }

  function renderKeypad(card) {
    const cid = card.id;
    const st = activityStates.keypad[cid];
    if (!st || !st.problems.length) return;

    const container = card.querySelector('.pdi-keypad-container');
    const pData = st.problems[st.currentProb];

    const curProbNum = container.querySelector('.cur-prob-num');
    if (curProbNum) curProbNum.textContent = (st.currentProb + 1);

    const probStatement = container.querySelector('.prob-statement');
    if (probStatement) probStatement.innerHTML = pData.problem || pData.text || '';

    const displayVal = container.querySelector('.display-val');
    if (displayVal) displayVal.textContent = st.currentInput || '0';

    const displayUnit = container.querySelector('.display-unit');
    if (displayUnit) displayUnit.textContent = pData.unit || '';

    const fbPanel = container.querySelector('.keypad-solution-feedback');
    if (fbPanel) {
      fbPanel.style.display = 'none';
      fbPanel.innerHTML = '';
    }
  }

  window.pressKeypad = function(btnEl, char) {
    const card = resolveCard(btnEl);
    if (!card) return;
    const st = activityStates.keypad[card.id];
    if (!st) return;

    window.playPDISound('tap');
    const container = card.querySelector('.pdi-keypad-container');
    const displayVal = container.querySelector('.display-val');

    if (char === 'C') {
      st.currentInput = '';
    } else if (char === 'DEL') {
      st.currentInput = st.currentInput.slice(0, -1);
    } else {
      if (char === '.' && st.currentInput.includes('.')) return;
      if (st.currentInput.length < 10) {
        st.currentInput += char;
      }
    }

    if (displayVal) {
      displayVal.textContent = st.currentInput || '0';
    }
  };

  window.checkKeypad = function(target) {
    const card = resolveCard(target);
    if (!card) return;
    const st = activityStates.keypad[card.id];
    if (!st || !st.problems.length) return;

    const container = card.querySelector('.pdi-keypad-container');
    const pData = st.problems[st.currentProb];
    const userVal = parseFloat(st.currentInput.replace(',', '.'));
    const targetVal = parseFloat((pData.solution !== undefined ? pData.solution : pData.ans).toString().replace(',', '.'));
    const tol = pData.tolerance || 0.05;

    const fbPanel = container.querySelector('.keypad-solution-feedback');
    const isCorrect = !isNaN(userVal) && Math.abs(userVal - targetVal) <= tol;

    if (isCorrect) {
      window.playPDISound('correct');
      if (fbPanel) {
        fbPanel.className = 'keypad-solution-feedback correct';
        fbPanel.style.display = 'block';
        fbPanel.innerHTML = '<strong>✅ RESULTAT EXACTE!</strong><br>' + (pData.exp || ('Valor obtingut: ' + targetVal + ' ' + (pData.unit || '')));
      }

      setTimeout(() => {
        st.currentProb++;
        st.currentInput = '';
        if (st.currentProb < st.problems.length) {
          renderKeypad(card);
        } else {
          triggerConfetti();
          if (fbPanel) {
            fbPanel.innerHTML = '🏆 <strong>TOTS ELS CÀLCULS COMPLETATS AMB ÈXIT!</strong>';
          }
          st.currentProb = 0;
        }
      }, 1600);
    } else {
      window.playPDISound('error');
      if (fbPanel) {
        fbPanel.className = 'keypad-solution-feedback wrong';
        fbPanel.style.display = 'block';
        fbPanel.innerHTML = '<strong>❌ RESULTAT INCORRECTE.</strong> Revisa les dades i la fórmula.';
      }
    }
  };

  // ==========================================
  // 4. CONNECTA PARELLES
  // ==========================================
  function initConnect(card, reset) {
    const cid = card.id;
    const container = card.querySelector('.pdi-connect-container');
    if (!container) return;

    if (!activityStates.connect[cid] || reset) {
      let pairs = [];
      try {
        pairs = JSON.parse(container.getAttribute('data-pairs') || '[]');
      } catch(e) {
        pairs = [];
      }
      activityStates.connect[cid] = {
        pairs: pairs,
        selectedLeft: null,
        selectedRight: null,
        matchedCount: 0
      };
    }

    renderConnect(card);
  }

  function renderConnect(card) {
    const cid = card.id;
    const st = activityStates.connect[cid];
    if (!st || !st.pairs.length) return;

    const container = card.querySelector('.pdi-connect-container');
    const colLeft = container.querySelector('.connect-column.col-left');
    const colRight = container.querySelector('.connect-column.col-right');
    const scoreVal = container.querySelector('.connect-score-val');
    const fbPanel = container.querySelector('.connect-final-feedback');

    if (scoreVal) scoreVal.textContent = st.matchedCount + ' / ' + st.pairs.length;
    if (fbPanel) fbPanel.style.display = 'none';

    if (colLeft && colRight) {
      colLeft.innerHTML = '';
      colRight.innerHTML = '';

      const leftItems = st.pairs.map((p, idx) => ({ id: idx, text: p.left }));
      const rightItems = st.pairs.map((p, idx) => ({ id: idx, text: p.right }));
      
      rightItems.sort(() => Math.random() - 0.5);

      leftItems.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'connect-tile';
        btn.setAttribute('data-pair-id', item.id);
        btn.innerHTML = '<span class="tile-dot">🔵</span><span class="tile-label">' + item.text + '</span>';
        btn.onclick = function() {
          handleConnectClick(card, 'left', item.id, btn);
        };
        colLeft.appendChild(btn);
      });

      rightItems.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'connect-tile';
        btn.setAttribute('data-pair-id', item.id);
        btn.innerHTML = '<span class="tile-dot">🟢</span><span class="tile-label">' + item.text + '</span>';
        btn.onclick = function() {
          handleConnectClick(card, 'right', item.id, btn);
        };
        colRight.appendChild(btn);
      });
    }
  }

  function handleConnectClick(card, side, pairId, btnEl) {
    const cid = card.id;
    const st = activityStates.connect[cid];
    if (!st || btnEl.classList.contains('matched')) return;

    window.playPDISound('tap');
    const container = card.querySelector('.pdi-connect-container');

    if (side === 'left') {
      container.querySelectorAll('.col-left .connect-tile').forEach(b => b.classList.remove('selected'));
      btnEl.classList.add('selected');
      st.selectedLeft = { id: pairId, el: btnEl };
    } else {
      container.querySelectorAll('.col-right .connect-tile').forEach(b => b.classList.remove('selected'));
      btnEl.classList.add('selected');
      st.selectedRight = { id: pairId, el: btnEl };
    }

    if (st.selectedLeft && st.selectedRight) {
      if (st.selectedLeft.id === st.selectedRight.id) {
        window.playPDISound('correct');
        st.selectedLeft.el.classList.remove('selected');
        st.selectedRight.el.classList.remove('selected');
        st.selectedLeft.el.classList.add('matched');
        st.selectedRight.el.classList.add('matched');
        st.matchedCount++;

        const scoreVal = container.querySelector('.connect-score-val');
        if (scoreVal) scoreVal.textContent = st.matchedCount + ' / ' + st.pairs.length;

        st.selectedLeft = null;
        st.selectedRight = null;

        if (st.matchedCount === st.pairs.length) {
          triggerConfetti();
          const fb = container.querySelector('.connect-final-feedback');
          if (fb) {
            fb.className = 'connect-final-feedback correct';
            fb.style.display = 'block';
            fb.innerHTML = '🎉 <strong>MOLT BÉ! HAS CONNECTAT TOTES LES PARELLES DE CIÈNCIES!</strong>';
          }
        }
      } else {
        window.playPDISound('error');
        const lEl = st.selectedLeft.el;
        const rEl = st.selectedRight.el;
        lEl.classList.add('wrong');
        rEl.classList.add('wrong');

        setTimeout(() => {
          lEl.classList.remove('selected', 'wrong');
          rEl.classList.remove('selected', 'wrong');
        }, 550);

        st.selectedLeft = null;
        st.selectedRight = null;
      }
    }
  }

  window.restartConnectActivity = function(target) {
    const card = resolveCard(target);
    if (!card) return;
    initConnect(card, true);
  };

  // ==========================================
  // 5. CLASSIFICACIÓ EN BUCKETS (CATEGORIES)
  // ==========================================
  function initCategoryActivity(card) {
    const cards = card.querySelectorAll('.pdi-cat-card');
    const buckets = card.querySelectorAll('.pdi-cat-bucket');
    const pool = card.querySelector('.pdi-cat-source-pool');

    let draggedItem = null;

    cards.forEach(item => {
      item.addEventListener('dragstart', function(e) {
        draggedItem = item;
        item.classList.add('dragging');
        if (e.dataTransfer) e.dataTransfer.setData('text/plain', '');
      });
      item.addEventListener('dragend', function() {
        item.classList.remove('dragging');
        draggedItem = null;
      });

      item.addEventListener('click', function() {
        window.playPDISound('tap');
        card.querySelectorAll('.pdi-cat-card').forEach(c => c.classList.remove('cat-selected'));
        item.classList.add('cat-selected');
      });
    });

    buckets.forEach(bucket => {
      const dropZone = bucket.querySelector('.bucket-drop-zone') || bucket;
      dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        bucket.classList.add('drag-over');
      });
      dropZone.addEventListener('dragleave', function() {
        bucket.classList.remove('drag-over');
      });
      dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        bucket.classList.remove('drag-over');
        if (draggedItem) {
          dropZone.appendChild(draggedItem);
          window.playPDISound('tap');
        }
      });

      bucket.addEventListener('click', function(e) {
        const selected = card.querySelector('.pdi-cat-card.cat-selected');
        if (selected && e.target !== selected) {
          dropZone.appendChild(selected);
          selected.classList.remove('cat-selected');
          window.playPDISound('tap');
        }
      });
    });

    if (pool) {
      pool.addEventListener('dragover', function(e) { e.preventDefault(); });
      pool.addEventListener('drop', function(e) {
        e.preventDefault();
        if (draggedItem) {
          pool.appendChild(draggedItem);
          window.playPDISound('tap');
        }
      });
      pool.addEventListener('click', function(e) {
        const selected = card.querySelector('.pdi-cat-card.cat-selected');
        if (selected && e.target === pool) {
          pool.appendChild(selected);
          selected.classList.remove('cat-selected');
          window.playPDISound('tap');
        }
      });
    }
  }

  window.checkCategoryActivity = function(cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;

    const buckets = card.querySelectorAll('.pdi-cat-bucket');
    const pool = card.querySelector('.pdi-cat-source-pool');
    const fbBox = document.getElementById('fb-' + cardId) || card.querySelector('.act-feedback-msg');

    let totalCardsInBuckets = 0;
    let mistakes = 0;

    buckets.forEach(bucket => {
      const expectedCat = bucket.getAttribute('data-category');
      const cardsInBucket = bucket.querySelectorAll('.pdi-cat-card');
      cardsInBucket.forEach(c => {
        totalCardsInBuckets++;
        const cardCat = c.getAttribute('data-cat');
        if (cardCat === expectedCat) {
          c.classList.remove('cat-error');
          c.classList.add('cat-success');
        } else {
          mistakes++;
          c.classList.add('cat-error');
          c.classList.remove('cat-success');
        }
      });
    });

    const poolCards = pool ? pool.querySelectorAll('.pdi-cat-card').length : 0;

    if (poolCards > 0) {
      window.playPDISound('error');
      if (fbBox) {
        fbBox.className = 'act-feedback-msg warning';
        fbBox.innerHTML = '⚠️ Encara queden ' + poolCards + ' elements per classificar al panell inferior!';
      }
      return;
    }

    if (mistakes === 0 && totalCardsInBuckets > 0) {
      triggerConfetti();
      if (fbBox) {
        fbBox.className = 'act-feedback-msg correct';
        fbBox.innerHTML = '🎉 <strong>CLASSIFICACIÓ PERFECTA!</strong> Has assignat correctament tots els materials científics.';
      }
    } else {
      window.playPDISound('error');
      if (fbBox) {
        fbBox.className = 'act-feedback-msg error';
        fbBox.innerHTML = '❌ <strong>Hi ha ' + mistakes + ' elements en la categoria errònia (marcats en vermell).</strong> Torna a moure\'ls!';
      }
    }
  };

  // ==========================================
  // 6. SEQÜÈNCIA TEMPORAL I ORDRE (ORDER)
  // ==========================================
  function initOrderActivity(card) {
    const items = card.querySelectorAll('.pdi-item');
    const slots = card.querySelectorAll('.pdi-slot');
    const pool = card.querySelector('.pdi-source-pool');

    let draggedItem = null;

    items.forEach(item => {
      item.addEventListener('dragstart', function(e) {
        draggedItem = item;
        item.classList.add('dragging');
        if (e.dataTransfer) e.dataTransfer.setData('text/plain', '');
      });
      item.addEventListener('dragend', function() {
        item.classList.remove('dragging');
        draggedItem = null;
      });

      item.addEventListener('click', function() {
        window.playPDISound('tap');
        card.querySelectorAll('.pdi-item').forEach(it => it.classList.remove('order-selected'));
        item.classList.add('order-selected');
      });
    });

    slots.forEach(slot => {
      slot.addEventListener('dragover', function(e) {
        e.preventDefault();
        slot.classList.add('drag-over');
      });
      slot.addEventListener('dragleave', function() {
        slot.classList.remove('drag-over');
      });
      slot.addEventListener('drop', function(e) {
        e.preventDefault();
        slot.classList.remove('drag-over');
        if (draggedItem) {
          slot.appendChild(draggedItem);
          window.playPDISound('tap');
        }
      });

      slot.addEventListener('click', function() {
        const selected = card.querySelector('.pdi-item.order-selected');
        if (selected) {
          slot.appendChild(selected);
          selected.classList.remove('order-selected');
          window.playPDISound('tap');
        }
      });
    });

    if (pool) {
      pool.addEventListener('dragover', function(e) { e.preventDefault(); });
      pool.addEventListener('drop', function(e) {
        e.preventDefault();
        if (draggedItem) {
          pool.appendChild(draggedItem);
          window.playPDISound('tap');
        }
      });
      pool.addEventListener('click', function(e) {
        const selected = card.querySelector('.pdi-item.order-selected');
        if (selected && e.target === pool) {
          pool.appendChild(selected);
          selected.classList.remove('order-selected');
          window.playPDISound('tap');
        }
      });
    }
  }

  window.checkOrderActivity = function(cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;

    const slots = card.querySelectorAll('.pdi-slot');
    const fbBox = document.getElementById('fb-' + cardId) || card.querySelector('.act-feedback-msg');

    let emptySlots = 0;
    let mistakes = 0;

    slots.forEach(slot => {
      const slotNum = slot.getAttribute('data-slot');
      const item = slot.querySelector('.pdi-item');
      if (!item) {
        emptySlots++;
        slot.classList.remove('slot-correct', 'slot-error');
      } else {
        const itemOrder = item.getAttribute('data-order');
        if (itemOrder === slotNum) {
          slot.classList.add('slot-correct');
          slot.classList.remove('slot-error');
        } else {
          mistakes++;
          slot.classList.add('slot-error');
          slot.classList.remove('slot-correct');
        }
      }
    });

    if (emptySlots > 0) {
      window.playPDISound('error');
      if (fbBox) {
        fbBox.className = 'act-feedback-msg warning';
        fbBox.innerHTML = '⚠️ Has de col·locar tots els passos a les caselles!';
      }
      return;
    }

    if (mistakes === 0) {
      triggerConfetti();
      if (fbBox) {
        fbBox.className = 'act-feedback-msg correct';
        fbBox.innerHTML = '🎉 <strong>ORDRE EXACTE!</strong> Has establit correctament la seqüència temporal i física.';
      }
    } else {
      window.playPDISound('error');
      if (fbBox) {
        fbBox.className = 'act-feedback-msg error';
        fbBox.innerHTML = '❌ <strong>Hi ha ' + mistakes + ' passos desordenats (en vermell).</strong> Revisa l\'ordre lògic!';
      }
    }
  };

  // ==========================================
  // 7. CASOS PRÀCTICS DE TALLER (CASES)
  // ==========================================
  function initCase(card, reset) {
    const cid = card.id;
    const container = card.querySelector('.pdi-case-container');
    if (!container) return;

    if (!activityStates.case[cid] || reset) {
      let scenarios = [];
      try {
        const raw = container.getAttribute('data-scenarios') || container.getAttribute('data-cases') || '[]';
        scenarios = JSON.parse(raw);
      } catch(e) {
        scenarios = [];
      }
      activityStates.case[cid] = {
        scenarios: scenarios,
        currentStep: 0,
        answered: false
      };
    }

    renderCase(card);
  }

  function renderCase(card) {
    const cid = card.id;
    const st = activityStates.case[cid];
    if (!st || !st.scenarios.length) return;

    const container = card.querySelector('.pdi-case-container');
    const sData = st.scenarios[st.currentStep];

    const curStep = container.querySelector('.case-cur-step');
    if (curStep) curStep.textContent = (st.currentStep + 1);

    const ctxText = container.querySelector('.case-context-text');
    if (ctxText) ctxText.innerHTML = sData.context || '';

    const qText = container.querySelector('.case-question-text');
    if (qText) qText.innerHTML = sData.question || '';

    const optsList = container.querySelector('.case-options-list') || container.querySelector('.case-options-grid');
    if (optsList) {
      optsList.innerHTML = '';
      (sData.options || []).forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'btn-case-opt';
        btn.innerHTML = '<span class="case-opt-letter">' + String.fromCharCode(65 + idx) + '</span><span class="case-opt-text">' + opt.text + '</span>';
        btn.onclick = function() {
          handleCaseOptionSelect(card, opt, btn);
        };
        optsList.appendChild(btn);
      });
    }

    const fbPanel = container.querySelector('.case-feedback-panel') || container.querySelector('.case-feedback-box');
    if (fbPanel) fbPanel.style.display = 'none';

    const sumBox = container.querySelector('.case-final-summary') || container.querySelector('.case-summary-box');
    if (sumBox) sumBox.style.display = 'none';

    st.answered = false;
  }

  function handleCaseOptionSelect(card, opt, btnEl) {
    const cid = card.id;
    const st = activityStates.case[cid];
    if (!st || st.answered) return;

    const isCorrect = (opt.correct === true || opt.is_correct === true);
    const container = card.querySelector('.pdi-case-container');
    const fbPanel = container.querySelector('.case-feedback-panel') || container.querySelector('.case-feedback-box');
    const fbMsg = container.querySelector('.case-fb-message') || container.querySelector('.case-feedback-content');
    const nextBtn = container.querySelector('.btn-case-next');

    if (isCorrect) {
      st.answered = true;
      btnEl.classList.add('correct');
      window.playPDISound('correct');

      container.querySelectorAll('.btn-case-opt').forEach(b => {
        if (b !== btnEl) b.style.opacity = '0.5';
      });

      if (fbMsg) {
        fbMsg.innerHTML = '<strong style="color:#059669;">✅ DECISIÓ TÈCNICA CORRECTA!</strong><br>' + (opt.exp || '');
      }
      if (fbPanel) fbPanel.style.display = 'flex';
      if (nextBtn) nextBtn.style.display = 'inline-block';
    } else {
      btnEl.classList.add('wrong');
      window.playPDISound('error');

      if (fbMsg) {
        fbMsg.innerHTML = '<strong style="color:#dc2626;">❌ DECISIÓ INCORRECTA:</strong><br>' + (opt.exp || 'Revisa la normativa de seguretat o criteri ambiental.');
      }
      if (fbPanel) fbPanel.style.display = 'flex';
      if (nextBtn) nextBtn.style.display = 'none';
    }
  }

  window.nextCaseScenario = function(target) {
    const card = resolveCard(target);
    if (!card) return;
    const st = activityStates.case[card.id];
    if (!st) return;

    st.currentStep++;
    if (st.currentStep < st.scenarios.length) {
      renderCase(card);
      window.playPDISound('tap');
    } else {
      triggerConfetti();
      const container = card.querySelector('.pdi-case-container');
      const bodyArea = container.querySelector('.case-body-area');
      const fbPanel = container.querySelector('.case-feedback-panel') || container.querySelector('.case-feedback-box');
      const sumBox = container.querySelector('.case-final-summary') || container.querySelector('.case-summary-box');
      const scoreTxt = container.querySelector('.case-summary-score');

      if (bodyArea) bodyArea.style.display = 'none';
      if (fbPanel) fbPanel.style.display = 'none';
      if (scoreTxt) scoreTxt.innerHTML = 'Has completat satisfactòriament les ' + st.scenarios.length + ' decisions tècniques del cas de laboratori i taller!';
      if (sumBox) sumBox.style.display = 'block';
    }
  };

  window.restartCaseActivity = function(target) {
    const card = resolveCard(target);
    if (!card) return;
    const container = card.querySelector('.pdi-case-container');
    const bodyArea = container.querySelector('.case-body-area');
    if (bodyArea) bodyArea.style.display = 'block';
    initCase(card, true);
    window.playPDISound('tap');
  };

  // ==========================================
  // NAVEGACIÓ I CONTROL GENERAL DE LA PDI
  // ==========================================
  window.launchGameActivity = function(actId) {
    ensureActivityIds();
    currentActivityId = actId;
    try { window.playPDISound('tap'); } catch(e) {}

    const dash = document.getElementById('pdi-dashboard');
    const gameView = document.getElementById('pdi-game-view');
    if (dash) dash.style.display = 'none';
    if (gameView) gameView.style.display = 'flex';

    const cards = document.querySelectorAll('.pdi-activity-card');
    cards.forEach(c => {
      c.classList.remove('active');
    });

    const activeCard = document.getElementById(actId);
    if (activeCard) {
      activeCard.classList.add('active');
      updateGameTopBar(activeCard);

      const fmt = activeCard.getAttribute('data-format');
      if (fmt === 'speedquiz') initSpeedQuiz(activeCard);
      else if (fmt === 'intrus') initIntrus(activeCard);
      else if (fmt === 'keypad') initKeypad(activeCard);
      else if (fmt === 'connect') initConnect(activeCard);
      else if (fmt === 'category') initCategoryActivity(activeCard);
      else if (fmt === 'order') initOrderActivity(activeCard);
      else if (fmt === 'case') initCase(activeCard);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.showPDIDashboard = function() {
    try { window.playPDISound('tap'); } catch(e) {}
    const dash = document.getElementById('pdi-dashboard');
    const gameView = document.getElementById('pdi-game-view');
    if (gameView) gameView.style.display = 'none';
    if (dash) dash.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.navRelativeActivity = function(direction) {
    ensureActivityIds();
    const idx = allActivityIds.indexOf(currentActivityId);
    if (idx === -1) return;
    const nextIdx = idx + direction;
    if (nextIdx >= 0 && nextIdx < allActivityIds.length) {
      window.launchGameActivity(allActivityIds[nextIdx]);
    }
  };

  window.resetCurrentPDIActivity = function() {
    if (!currentActivityId) return;
    const card = document.getElementById(currentActivityId);
    if (!card) return;
    try { window.playPDISound('tap'); } catch(e) {}

    const fmt = card.getAttribute('data-format');
    if (fmt === 'speedquiz') initSpeedQuiz(card, true);
    else if (fmt === 'intrus') initIntrus(card, true);
    else if (fmt === 'keypad') initKeypad(card, true);
    else if (fmt === 'connect') initConnect(card, true);
    else if (fmt === 'category') {
      const pool = card.querySelector('.pdi-cat-source-pool');
      card.querySelectorAll('.pdi-cat-card').forEach(c => {
        c.classList.remove('cat-success', 'cat-error', 'cat-selected');
        if (pool) pool.appendChild(c);
      });
      const fb = document.getElementById('fb-' + currentActivityId);
      if (fb) fb.innerHTML = '';
    } else if (fmt === 'order') {
      const pool = card.querySelector('.pdi-source-pool');
      card.querySelectorAll('.pdi-item').forEach(it => {
        it.classList.remove('order-selected');
        if (pool) pool.appendChild(it);
      });
      card.querySelectorAll('.pdi-slot').forEach(s => s.classList.remove('slot-correct', 'slot-error'));
      const fb = document.getElementById('fb-' + currentActivityId);
      if (fb) fb.innerHTML = '';
    } else if (fmt === 'case') initCase(card, true);
  };

  window.togglePDIFullscreen = function() {
    const app = document.querySelector('.pdi-app-wrapper') || document.documentElement;
    if (!document.fullscreenElement) {
      if (app.requestFullscreen) app.requestFullscreen();
      else if (app.webkitRequestFullscreen) app.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  window.togglePDISound = function() {
    soundEnabled = !soundEnabled;
    const soundBtns = [document.getElementById('sound-text'), document.getElementById('game-sound-btn')];
    if (soundBtns[0]) soundBtns[0].textContent = soundEnabled ? 'So Activat' : 'Mut';
    if (soundBtns[1]) soundBtns[1].textContent = soundEnabled ? '🔊' : '🔇';
  };

  function onReady() {
    ensureActivityIds();

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const gameView = document.getElementById('pdi-game-view');
        if (gameView && gameView.style.display !== 'none') {
          window.showPDIDashboard();
        }
      }
    });

    // Hash direct navigation (e.g. #act-nat02-1)
    if (window.location.hash && window.location.hash.startsWith('#act-')) {
      const targetId = window.location.hash.substring(1);
      if (document.getElementById(targetId)) {
        window.launchGameActivity(targetId);
      }
    }

    console.log('PDI Ciències Naturals inicialitzada correctament. Total activitats:', allActivityIds.length);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

})();
