// =====================================================
// DAY PAGE — expects a global `DAY` number set inline before this
// script loads. Renders that day's letter, sends visitors back
// home if they land here before it unlocks, and wires prev/next.
// =====================================================
(function () {
  const unlocked = isUnlocked(DAY);

  if (!unlocked) {
    // Not open yet — don't let the content be seen early.
    window.location.href = 'index.html';
    return;
  }

  const data = LETTERS[DAY];
  const theme = themeFor(DAY);
  document.body.classList.add(`theme-${theme}`);
  document.title = `September ${DAY} — A Letter For You ♡`;

  const titleEl = document.getElementById('day-title');
  const themeNameEl = document.getElementById('day-theme-name');
  const bodyEl = document.getElementById('day-body');

  titleEl.textContent = data ? data.title : `September ${DAY}`;
  if (data && data.themeName) {
    themeNameEl.textContent = data.themeName;
  } else {
    themeNameEl.style.display = 'none';
  }

  if (data) {
    bodyEl.innerHTML = data.paragraphs.map(p => `<p>${p}</p>`).join('') +
      `<p class="letter-signoff">${data.signoff}<br><span class="script-name">NIHAL ♡</span></p>`;
  } else {
    bodyEl.innerHTML = `<p>This letter is being written with love — check back soon. ♡</p>`;
  }

  document.getElementById('letter-paper').classList.add('in-view');

  // Night-theme starfield
  if (theme === 'night') {
    const starsLayer = document.getElementById('stars-layer');
    if (starsLayer) {
      for (let i = 0; i < 60; i++) {
        const s = document.createElement('span');
        s.className = 'star-dot';
        s.style.left = `${Math.random() * 100}%`;
        s.style.top = `${Math.random() * 100}%`;
        s.style.animationDelay = `${Math.random() * 2.6}s`;
        starsLayer.appendChild(s);
      }
    }
  }

  // Prev / next navigation. A locked neighbor still gets a link —
  // the guard above bounces the visitor home if they follow it early.
  const prevBtn = document.getElementById('day-prev');
  const nextBtn = document.getElementById('day-next');

  if (DAY <= 1) {
    prevBtn.classList.add('disabled');
    prevBtn.removeAttribute('href');
  } else {
    prevBtn.href = `day${DAY - 1}.html`;
  }

  if (DAY >= 9) {
    nextBtn.classList.add('disabled');
    nextBtn.removeAttribute('href');
  } else {
    nextBtn.href = `day${DAY + 1}.html`;
  }
})();
