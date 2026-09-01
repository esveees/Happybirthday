// =====================================================
// CONFIG
// =====================================================
const BIRTHDAY = new Date(2026, 8, 9, 0, 0, 0); // September 9, 2026, 00:00:00

// Add each day's letter content here as you write them.
// Days 1–3 are filled in. Leave others as null and a "coming soon" note shows instead.
// `theme` controls the visual world for that letter: 'default', 'sunrise', or 'night'.
const LETTERS = {
  1: {
    title: "September 1",
    theme: "default",
    themeName: "",
    lockedMessage: "This letter is waiting for you.",
    paragraphs: [
      "My love,",
      "Today is September 1, and we officially have nine days until September 9. Our day. Our birthday.",
      "I really never thought I could love someone this much from the bottom of my heart. Honestly before you I never imagined that someone could become this important to me. But you really crossed all my expectations of what love could feel like and what kind of person I could ever want in my life.",
      "You make my days so much better, day by day. Sometimes I dont even realize it but just talking to you can completely change my mood everytime. Your presence in my life has become something I really love so much.",
      "And the funny thing is, out of all the 365 days in a year we somehow share the same birthday.",
      "Maybe it's just a coincidence. But I think its a really soo beautifull.",
      "September 9 is getting closer soo happyy bdayyy ♡",
      "And I'm already excited to celebrate with you."
    ],
    signoff: "With love yours,"
  },
  2: {
    title: "September 2",
    theme: "sunrise",
    themeName: "You Changed Me",
    lockedMessage: "This letter will open when a new day begins.",
    paragraphs: [
      "My love,",
      "Today is September 2, and this letter is about something you probably don't completely realize.",
      "You changed me.",
      "You really changed me in so many ways.",
      "After you came into my life, I started wanting to become better. I started trying to be more effective, more responsible, and more focused.",
      "And honestly, sometimes it feels like I started working harder for you than I ever worked for myself.",
      "Because when I think about you, I think about the future too.",
      "You became one of the reasons I want to do better.",
      "One of the reasons I want to grow.",
      "One of the reasons I want to become someone capable of giving you the happiness you deserve.",
      "And something else changed too.",
      "I started praying for you more than I prayed for myself.",
      "I don't know how to explain that properly, but whenever I pray, I genuinely want good things for you. I want you to be happy. I want you to be safe. I want life to be kind to you.",
      "That's when I realized how deeply I care about you. More than you know.",
      "You didn't force me to change.",
      "You didn't ask me to become better.",
      "But somehow, loving you made me want to.",
      "And I think that's something beautiful.",
      "Because you didn't just enter my life.",
      "You changed the way I look at it.",
      "And every day, without even realizing it, you make me want to become a better version of myself.",
      "Thank you for that.",
      "I love you soo much 🤍"
    ],
    signoff: "With love,"
  },
  3: {
    title: "September 3",
    theme: "night",
    themeName: "How Did I Get This Lucky?",
    lockedMessage: "Some feelings are worth waiting for...",
    paragraphs: [
      "My love,",
      "Sometimes I genuinely sit and wonder...",
      "How did I get you so close?",
      "How did someone like you become such an important part of my life?",
      "And honestly, I feel so lucky.",
      "Like really, really so lucky.",
      "There are moments when I just look at your childhood photos and admire you. I can spend so much time simply looking at your eyes and thinking about how pretty and gorgeous you are.",
      "And sometimes, I still can't believe that I actually have you in my life.",
      "I don't know how I got this lucky. 😭🫶🏼",
      "But the more I get to know you, the more I realize that it's not just about how you look.",
      "It's you.",
      "Your personality.",
      "Your kindness.",
      "The way you are.",
      "The way you treat people.",
      "The way you stay so simple.",
      "I really admire your kind and egoless character. You have something about you that feels different from everyone else.",
      "And honestly, nobody really feels like you.",
      "Everyone else feels unattractive and boring to me compared to how special you feel.",
      "No one makes me feel the way you do.",
      "And I think that's because you aren't just beautiful to me.",
      "You are beautiful in the way you exist.",
      "The way you talk.",
      "The way you think.",
      "The way you simply be yourself.",
      "I really don't think you understand how lucky I feel to have you.",
      "If someone asked me what one of the best things that happened to me was...",
      "I think knowing you would be the one thing I would say."
    ],
    signoff: "With love,"
  },
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: {
    title: "September 9 — Happy Birthday",
    theme: "default",
    themeName: "",
    lockedMessage: "This letter is waiting for you.",
    paragraphs: ["Happy birthday to us. ♡"],
    signoff: "With love yours,"
  }
};

// Locked-state icon and next-unlocked icon per theme
const THEME_ICONS = {
  default: { locked: "🔒", unlocked: "💌" },
  sunrise: { locked: "✉️", unlocked: "🌅" },
  night: { locked: "🌙", unlocked: "✨" }
};

// =====================================================
// HELPERS
// =====================================================
function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function unlockDateForDay(day) {
  return new Date(2026, 8, day); // September `day`, 2026
}

function isUnlocked(day) {
  const today = startOfDay(new Date());
  return today >= unlockDateForDay(day);
}

// =====================================================
// COUNTDOWN
// =====================================================
function updateCountdown() {
  const now = new Date();
  let diff = BIRTHDAY - now;
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('cd-seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// =====================================================
// SCROLL TO LETTER
// =====================================================
document.getElementById('open-letter-btn').addEventListener('click', () => {
  document.getElementById('letter').scrollIntoView({ behavior: 'smooth' });
});

// =====================================================
// LETTER FADE-IN ON SCROLL
// =====================================================
const letterPaper = document.getElementById('letter-paper');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      letterPaper.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
observer.observe(letterPaper);

// =====================================================
// 9 DAYS OF LETTERS GRID (re-rendered live so unlocks appear
// automatically at midnight, without a page refresh)
// =====================================================
const grid = document.getElementById('letters-grid');
const nextLetterBtn = document.getElementById('next-letter-btn');
let knownUnlockState = {};

function themeFor(day) {
  const data = LETTERS[day];
  return (data && data.theme) || 'default';
}

function renderLettersGrid() {
  const today = startOfDay(new Date());
  grid.innerHTML = '';

  for (let day = 1; day <= 9; day++) {
    const unlocked = isUnlocked(day);
    const isToday = today.getTime() === unlockDateForDay(day).getTime();
    const isBirthday = day === 9;
    const icons = THEME_ICONS[themeFor(day)];

    const card = document.createElement('button');
    card.className = 'letter-card' + (unlocked ? '' : ' locked') + (isToday ? ' today' : '') + (isBirthday ? ' birthday' : '');
    card.innerHTML = `
      <span class="icon">${unlocked ? (isBirthday ? '🎂' : icons.unlocked) : icons.locked}</span>
      <span class="label">Sept ${day}</span>
    `;
    card.addEventListener('click', () => openLetterModal(day));
    grid.appendChild(card);
  }

  updateNextLetterButton();
}

function updateNextLetterButton() {
  let nextDay = 9;
  for (let day = 1; day <= 9; day++) {
    if (!isUnlocked(day)) { nextDay = day; break; }
  }
  const unlocked = isUnlocked(nextDay);
  nextLetterBtn.dataset.day = nextDay;
  nextLetterBtn.textContent = unlocked
    ? `Open September ${nextDay} Letter ${THEME_ICONS[themeFor(nextDay)].unlocked}`
    : `Open September ${nextDay} Letter 🔒`;
}

nextLetterBtn.addEventListener('click', () => {
  openLetterModal(Number(nextLetterBtn.dataset.day));
});

renderLettersGrid();

// Re-check unlock status every second so a letter unlocks itself the
// moment midnight arrives — no manual refresh needed.
setInterval(() => {
  let changed = false;
  for (let day = 1; day <= 9; day++) {
    const unlocked = isUnlocked(day);
    if (knownUnlockState[day] !== unlocked) {
      knownUnlockState[day] = unlocked;
      changed = true;
    }
  }
  if (changed) renderLettersGrid();
}, 1000);

// =====================================================
// LETTER MODAL (locked view <-> letter view, themed per day)
// =====================================================
const modal = document.getElementById('letter-modal');
const modalPaper = document.getElementById('modal-paper-el');
const modalTitle = document.getElementById('modal-title');
const modalThemeName = document.getElementById('modal-theme-name');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const lockedView = document.getElementById('modal-locked-view');
const letterView = document.getElementById('modal-letter-view');
const lockGlyph = document.getElementById('modal-lock-glyph');
const lockMessage = document.getElementById('modal-lock-message');
const starsLayer = document.getElementById('stars-layer');

let modalCountdownTimer = null;
let currentModalDay = null;

function clearModalTheme() {
  modal.classList.remove('theme-default', 'theme-sunrise', 'theme-night', 'locked-mode');
}

function buildStars(count) {
  starsLayer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.className = 'star-dot';
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${Math.random() * 70}%`;
    s.style.animationDelay = `${Math.random() * 2.6}s`;
    starsLayer.appendChild(s);
  }
}

function openLetterModal(day) {
  currentModalDay = day;
  const data = LETTERS[day];
  const theme = themeFor(day);
  const unlocked = isUnlocked(day);

  clearModalTheme();
  modal.classList.add(`theme-${theme}`);
  if (theme === 'night') buildStars(50);

  if (!unlocked) {
    modal.classList.add('locked-mode');
    lockedView.hidden = false;
    letterView.hidden = true;
    lockGlyph.textContent = THEME_ICONS[theme].locked;
    lockMessage.textContent = (data && data.lockedMessage) || 'This letter is waiting for you.';
    startModalCountdown(day);
  } else {
    lockedView.hidden = true;
    letterView.hidden = false;
    stopModalCountdown();
    modalTitle.textContent = data ? data.title : `September ${day}`;
    modalThemeName.textContent = data && data.themeName ? data.themeName : '';
    modalThemeName.style.display = data && data.themeName ? 'block' : 'none';
    if (data) {
      modalBody.innerHTML = data.paragraphs.map(p => `<p>${p}</p>`).join('') +
        `<p class="letter-signoff">${data.signoff}<br><span class="script-name">NIHAL ♡</span></p>`;
    } else {
      modalBody.innerHTML = `<p>This letter is being written with love — check back soon. ♡</p>`;
    }
  }

  modal.classList.add('show');
}

function startModalCountdown(day) {
  stopModalCountdown();
  const target = unlockDateForDay(day);
  const hEl = document.getElementById('modal-cd-h');
  const mEl = document.getElementById('modal-cd-m');
  const sEl = document.getElementById('modal-cd-s');

  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      // Midnight arrived while the modal was open — swap straight to the letter.
      stopModalCountdown();
      openLetterModal(day);
      return;
    }
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    hEl.textContent = String(h).padStart(2, '0');
    mEl.textContent = String(m).padStart(2, '0');
    sEl.textContent = String(s).padStart(2, '0');
  }
  tick();
  modalCountdownTimer = setInterval(tick, 1000);
}

function stopModalCountdown() {
  if (modalCountdownTimer) {
    clearInterval(modalCountdownTimer);
    modalCountdownTimer = null;
  }
}

function closeModal() {
  modal.classList.remove('show');
  stopModalCountdown();
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.id === 'modal-decor') closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Subtle mouse/gyroscope-free parallax for the night theme
modal.addEventListener('mousemove', (e) => {
  if (!modal.classList.contains('theme-night') || !modal.classList.contains('show')) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 14;
  const y = (e.clientY / window.innerHeight - 0.5) * 14;
  modalPaper.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  const moon = modal.querySelector('.moon');
  if (moon) moon.style.transform = `translate(${x}px, ${y}px)`;
});
modal.addEventListener('mouseleave', () => {
  modalPaper.style.transform = '';
});

// =====================================================
// HEART FAB BURST
// =====================================================
document.getElementById('heart-fab').addEventListener('click', (e) => {
  burstHearts(e.clientX, e.clientY, 8);
});

document.addEventListener('click', (e) => {
  // Avoid double-bursting when clicking buttons/cards that already have handlers
  if (e.target.closest('.heart-fab, .modal-overlay, .letter-card, .btn-open, .btn-next-letter, #music-toggle')) return;
  burstHearts(e.clientX, e.clientY, 1);
});

function burstHearts(x, y, count) {
  const container = document.getElementById('click-hearts');
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'click-heart';
    heart.textContent = Math.random() > 0.5 ? '♡' : '♥';
    const offsetX = (Math.random() - 0.5) * 60;
    heart.style.left = `${x + offsetX}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${0.9 + Math.random() * 0.8}rem`;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}

// =====================================================
// MUSIC TOGGLE
// =====================================================
const musicBtn = document.getElementById('music-toggle');
const audio = document.getElementById('bg-audio');
let playing = false;

musicBtn.addEventListener('click', () => {
  if (!playing) {
    audio.play().catch(() => {
      // No audio file added yet — placeholder source, fail silently
    });
    playing = true;
    musicBtn.classList.add('playing');
    musicBtn.querySelector('.note-status').textContent = '♫';
    musicBtn.setAttribute('aria-label', 'Pause music');
  } else {
    audio.pause();
    playing = false;
    musicBtn.classList.remove('playing');
    musicBtn.querySelector('.note-status').textContent = '♡';
    musicBtn.setAttribute('aria-label', 'Play music');
  }
});

// =====================================================
// BACKGROUND CANVAS — floating hearts & sparkles
// =====================================================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.documentElement.scrollHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const particleCount = prefersReducedMotion ? 0 : (window.innerWidth < 600 ? 14 : 26);

function makeParticle() {
  const isSparkle = Math.random() > 0.7;
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: isSparkle ? 2 + Math.random() * 2 : 8 + Math.random() * 10,
    speed: 0.15 + Math.random() * 0.35,
    drift: (Math.random() - 0.5) * 0.3,
    opacity: 0.15 + Math.random() * 0.25,
    isSparkle,
    sway: Math.random() * Math.PI * 2
  };
}

for (let i = 0; i < particleCount; i++) particles.push(makeParticle());

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = '#e598b4';
  ctx.translate(x, y);
  ctx.beginPath();
  const s = size / 16;
  ctx.moveTo(0, 4 * s);
  ctx.bezierCurveTo(-8 * s, -6 * s, -16 * s, 2 * s, 0, 12 * s);
  ctx.bezierCurveTo(16 * s, 2 * s, 8 * s, -6 * s, 0, 4 * s);
  ctx.fill();
  ctx.restore();
}

function drawSparkle(x, y, size, opacity) {
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = '#f2d9a8';
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.y -= p.speed;
    p.sway += 0.01;
    p.x += Math.sin(p.sway) * p.drift;
    if (p.y < -20) {
      p.y = canvas.height + 20;
      p.x = Math.random() * canvas.width;
    }
    if (p.isSparkle) {
      drawSparkle(p.x, p.y, p.size, p.opacity * (0.6 + 0.4 * Math.sin(p.sway * 2)));
    } else {
      drawHeart(p.x, p.y, p.size, p.opacity);
    }
  });
  requestAnimationFrame(animate);
}
if (!prefersReducedMotion) animate();
