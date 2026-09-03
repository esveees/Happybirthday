// =====================================================
// This page loads letters-data.js (LETTERS/theme helpers) and
// common.js (background, hearts, music) before this file.
// =====================================================

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
    card.addEventListener('click', () => handleDayClick(day));
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
  handleDayClick(Number(nextLetterBtn.dataset.day));
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
// DAY NAVIGATION + LOCKED-STATE MODAL
// Unlocked days now open their own page (day1.html, day2.html...).
// The modal only ever shows the locked/countdown view.
// =====================================================
const modal = document.getElementById('letter-modal');
const modalPaper = document.getElementById('modal-paper-el');
const modalClose = document.getElementById('modal-close');
const lockedView = document.getElementById('modal-locked-view');
const lockGlyph = document.getElementById('modal-lock-glyph');
const lockMessage = document.getElementById('modal-lock-message');
const starsLayer = document.getElementById('stars-layer');

let modalCountdownTimer = null;

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

function handleDayClick(day) {
  if (isUnlocked(day)) {
    window.location.href = `day${day}.html`;
  } else {
    openLockedModal(day);
  }
}

function openLockedModal(day) {
  const data = LETTERS[day];
  const theme = themeFor(day);

  clearModalTheme();
  modal.classList.add(`theme-${theme}`, 'locked-mode');
  if (theme === 'night') buildStars(50);

  lockedView.hidden = false;
  lockGlyph.textContent = THEME_ICONS[theme].locked;
  lockMessage.textContent = (data && data.lockedMessage) || 'This letter is waiting for you.';
  startModalCountdown(day);

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
      // Midnight arrived while the modal was open — go straight to the letter page.
      stopModalCountdown();
      closeModal();
      window.location.href = `day${day}.html`;
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

// Subtle mouse parallax for the night theme
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
