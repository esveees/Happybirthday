// =====================================================
// HEART FAB BURST
// =====================================================
const heartFab = document.getElementById('heart-fab');
if (heartFab) {
  heartFab.addEventListener('click', (e) => {
    burstHearts(e.clientX, e.clientY, 8);
  });
}

document.addEventListener('click', (e) => {
  // Avoid double-bursting when clicking buttons/cards that already have handlers
  if (e.target.closest('.heart-fab, .modal-overlay, .letter-card, .btn-open, .btn-next-letter, .day-nav-link, #music-toggle')) return;
  burstHearts(e.clientX, e.clientY, 1);
});

function burstHearts(x, y, count) {
  const container = document.getElementById('click-hearts');
  if (!container) return;
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

if (musicBtn && audio) {
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
}

// =====================================================
// BACKGROUND CANVAS — floating hearts & sparkles
// =====================================================
const canvas = document.getElementById('bg-canvas');

if (canvas) {
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
}
