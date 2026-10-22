// safeapricot.com

// ---------- Ayarlar ----------
const LINKS = {
  youtube: 'https://www.youtube.com/@safeapricot',
  kick: 'https://kick.com/safeapricot',
  instagram: 'https://www.instagram.com/safeapricot/',
  steam1: 'https://steamcommunity.com/id/safeapri',
  steam2: 'https://steamcommunity.com/id/safeapricot',
  book: 'kitap.html',
  discordServerId: '769981140345421854',
  discordInvite: 'https://discord.gg/VxYvWK4HSq',
  lastfmUser: 'safeapricot',
  lastfmApiKey: '5b901d1135ed755e11f44205477d4c63',
};

const FURRET_PICS = [
  'furrets/20230822_125908.JPEG',
  'furrets/20230822_125911.JPEG',
  'furrets/20230822_125914.JPEG',
  'furrets/20230822_125917.JPEG',
  'furrets/20230910_180314.JPEG',
  'furrets/20231012_155607.JPEG',
  'furrets/20231019_155051.JPEG',
  'furrets/20231022_180613.PNG',
  'furrets/20231226_203409.JPEG',
  'furrets/20231231_184429.JPEG',
  'furrets/20240101_161452.JPEG',
  'furrets/IMG_6833.JPEG',
  'furrets/IMG_6855.JPEG',
  'furrets/IMG_6867.JPEG',
  'furrets/EFCC6BB1-1AF8-4FF2-9670-C532BAAB9AF0.JPEG',
];

// ---------- Yaş (X) ve Sınıf (Y) Hesaplama ----------
function getAge() {
  const now = new Date();
  const birthYear = 2007;
  const birthMonth = 8; // Eylül (0-indeksli: 8)
  const birthDay = 19;
  let age = now.getFullYear() - birthYear;
  if (
    now.getMonth() < birthMonth ||
    (now.getMonth() === birthMonth && now.getDate() < birthDay)
  ) {
    age--;
  }
  return age;
}

function getStudyYear() {
  const now = new Date();
  const academicYear =
    now.getMonth() >= 8 ? now.getFullYear() : now.getFullYear() - 1;
  return Math.max(1, academicYear - 2024);
}

function ordinalEn(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// ---------- Dil Sözlüğü (TR / EN) ----------
const I18N = {
  tr: {
    hello: 'Hey selam. Ben Safa.',
    hello_sub: 'ama bana derler sefa',
    socials_title: 'Sosyal Medya',
    about_title: 'slm',
    contact_title: 'iletişim',
    contact_label: 'Herhangi bir şey sormak istersen:',
    tip_book: 'kitap',
    tip_secret: 'gizli kod',
    nav_about: 'slm',
    nav_contact: 'iletişim',
    secret_title: 'gizli kod',
    secret_placeholder: 'bir şey yaz...',
    secret_submit: 'gönder',
    secret_wrong: 'hmm, o değil.',
    popup_ok: 'tamam',
    mrb_reply: 'sana da mrb :3',
    book_title: 'kitap',
    book_sub: 'Yazdığım kitap ileride burada olacak.',
    book_soon: 'yakında...',
    back_home: '← ana sayfa',
    discord_join: 'Sunucuya Katıl',
    discord_online: (n) => `${n} kişi şu an çevrimiçi`,
    discord_loading: 'sunucu durumu yükleniyor...',
    spotify_now: 'şu an dinliyor',
    spotify_last: 'en son dinlediği',
    spotify_loading: 'müzik yükleniyor...',
    about_html: (x, y) =>
      `Ben <a class="name-link" href="${LINKS.youtube}" target="_blank" rel="noopener">Safa Açıkgöz</a>. Şu an <span class="hl">${x}</span> yaşındayım. Bilgisayar Mühendisliği <span class="hl">${y}.</span> sınıf öğrencisiyim. Boş zamanlarımda oyun oynamayı çok severim. Beni sosyal medyalarda <span class="hl">@safeapricot</span> olarak bulabilirsiniz.`,
  },
  en: {
    hello: "Hey there. I'm Safa.",
    hello_sub: 'ama bana derler sefa',
    socials_title: 'Social Media',
    about_title: 'slm',
    contact_title: 'contact',
    contact_label: 'If you want to ask anything:',
    tip_book: 'book',
    tip_secret: 'secret code',
    nav_about: 'slm',
    nav_contact: 'contact',
    secret_title: 'secret code',
    secret_placeholder: 'type something...',
    secret_submit: 'submit',
    secret_wrong: 'hmm, not that one.',
    popup_ok: 'okay',
    mrb_reply: 'sana da mrb :3',
    book_title: 'book',
    book_sub: 'The book I am writing will be here in the future.',
    book_soon: 'coming soon...',
    back_home: '← home',
    discord_join: 'Join Server',
    discord_online: (n) => `${n} members online right now`,
    discord_loading: 'loading server status...',
    spotify_now: 'currently listening',
    spotify_last: 'last listened to',
    spotify_loading: 'loading music...',
    about_html: (x, y) =>
      `I'm <a class="name-link" href="${LINKS.youtube}" target="_blank" rel="noopener">Safa Açıkgöz</a>. I am currently <span class="hl">${x}</span> years old and a <span class="hl">${ordinalEn(y)}</span> year Computer Engineering student. I love playing video games in my free time. You can find me on social media as <span class="hl">@safeapricot</span>.`,
  },
};

let currentLang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lang') || 'tr';
let currentTheme = new URLSearchParams(location.search).get('theme') || localStorage.getItem('theme') || 'light';

// Gizli kodlar
const SECRET_CODES = {
  mrb: () => showMessage(I18N[currentLang].mrb_reply),
};

// ---------- İkonlar ----------
const ICONS = {
  book:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/></svg>',
  moon:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
};

// ---------- Üst Kontroller (Dil & Tema) ----------
const controls = document.createElement('div');
controls.className = 'top-controls';
controls.innerHTML = `
  <button class="ctrl-btn" id="langBtn" type="button" title="Dil / Language">EN</button>
  <button class="ctrl-btn" id="themeBtn" type="button" title="Tema / Theme"></button>
`;
document.body.appendChild(controls);

const langBtn = document.getElementById('langBtn');
const themeBtn = document.getElementById('themeBtn');

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeBtn.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
}

themeBtn.addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ---------- Ağaç Dalı Üst Menü (Sağ ve Sol Kenara Bağlı + Filizlenen Fidanlar) ----------
const garland = document.getElementById('garland');

garland.innerHTML = `
  <svg aria-hidden="true">
    <path class="curtain"></path>
    <g class="branch-twigs"></g>
    <path class="branch-main"></path>
    <path class="branch-bark"></path>
    <g class="branch-leaves"></g>
  </svg>
  <a class="bead link book" data-t="0.22" href="${LINKS.book}" aria-label="Kitap">
    ${ICONS.book}<span class="tip" data-i18n="tip_book">kitap</span>
  </a>
  <div class="profile" data-t="0.5">
    <button class="profile-photo" type="button" aria-label="Ana sayfa">
      <img src="furrets/uykulufurret.JPEG" alt="Safa">
    </button>
    <nav class="profile-menu">
      <a href="index.html#hakkimda" data-i18n="nav_about">slm</a>
      <a href="index.html#iletisim" data-i18n="nav_contact">iletişim</a>
    </nav>
  </div>
  <button class="bead link secret" data-t="0.78" type="button" aria-label="Gizli kod">
    ?<span class="tip" data-i18n="tip_secret">gizli kod</span>
  </button>
`;

const svg = garland.querySelector('svg');
const curtain = garland.querySelector('.curtain');
const branchMain = garland.querySelector('.branch-main');
const branchBark = garland.querySelector('.branch-bark');
const branchTwigs = garland.querySelector('.branch-twigs');
const branchLeaves = garland.querySelector('.branch-leaves');
const profile = garland.querySelector('.profile');
const items = garland.querySelectorAll('[data-t]');

function layoutGarland() {
  const w = garland.clientWidth;
  const progress = Math.min(window.scrollY / 350, 1);

  const small = w < 520;
  // Masaüstünde aşağı kaydırınca büyür/sarkar; mobilde ise ekranı kapatmaması için yukarı toplanıp kompaktlaşır
  const photoMin = small ? 64 : 84;
  const photoMax = small ? 52 : 128;
  const size = photoMin + (photoMax - photoMin) * progress;

  // Ağaç dalı kağıdın sol ve sağ kenarlarına doğal biçimde bağlanır
  const x0 = -8;
  const x1 = w + 8;
  const y0 = small ? 12 - 4 * progress : 16;
  const sag = small ? 52 - 18 * progress : 88 + 18 * progress;
  const cx = w / 2;
  const cy = y0 + sag * 2;

  const point = (t) => {
    const a = (1 - t) * (1 - t);
    const b = 2 * (1 - t) * t;
    const c = t * t;
    const baseY = a * y0 + b * cy + c * y0;
    const bump = Math.sin(t * Math.PI * 5) * 3.0;
    return {
      x: a * x0 + b * cx + c * x1,
      y: baseY + bump,
    };
  };

  // Dalın organik kıvrımlı yolunu oluştur
  const steps = 28;
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    pts.push(point(i / steps));
  }

  let branchD = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const mx = ((prev.x + curr.x) * 0.5).toFixed(1);
    const my = ((prev.y + curr.y) * 0.5).toFixed(1);
    branchD += ` Q ${prev.x.toFixed(1)} ${prev.y.toFixed(1)} ${mx} ${my}`;
  }
  const last = pts[pts.length - 1];
  branchD += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;

  // Yan dal sürgünleri ve sağ/soldaki filizlenen fidan noktaları
  const sLeft = point(0.08);
  const sRight = point(0.92);
  const pMidLeft = point(0.35);
  const pMidRight = point(0.65);

  const twigsD = [
    // Sol ve sağ uçlarda kağıt kenarına tutunan yan kök dallar
    `M -10 ${(y0 + 18).toFixed(1)} Q 16 ${(y0 + 12).toFixed(1)} ${sLeft.x.toFixed(1)} ${sLeft.y.toFixed(1)}`,
    `M ${(w + 10).toFixed(1)} ${(y0 + 18).toFixed(1)} Q ${(w - 16).toFixed(1)} ${(y0 + 12).toFixed(1)} ${sRight.x.toFixed(1)} ${sRight.y.toFixed(1)}`,
    // Orta yan sürgünler
    `M ${pMidLeft.x.toFixed(1)} ${pMidLeft.y.toFixed(1)} Q ${(pMidLeft.x - 14).toFixed(1)} ${(pMidLeft.y + 15).toFixed(1)} ${(pMidLeft.x - 24).toFixed(1)} ${(pMidLeft.y + 18).toFixed(1)}`,
    `M ${pMidRight.x.toFixed(1)} ${pMidRight.y.toFixed(1)} Q ${(pMidRight.x + 14).toFixed(1)} ${(pMidRight.y + 15).toFixed(1)} ${(pMidRight.x + 24).toFixed(1)} ${(pMidRight.y + 18).toFixed(1)}`,
  ].join(' ');

  // Sol ve sağ uçtaki küçük filizlenen fidan gövdeleri (yukarı doğru boy veren taze filizler)
  const sproutStemsD = [
    `M ${sLeft.x.toFixed(1)} ${(sLeft.y - 2).toFixed(1)} Q ${(sLeft.x + 3).toFixed(1)} ${(sLeft.y - 14).toFixed(1)} ${(sLeft.x + 1).toFixed(1)} ${(sLeft.y - 22).toFixed(1)}`,
    `M ${sRight.x.toFixed(1)} ${(sRight.y - 2).toFixed(1)} Q ${(sRight.x - 3).toFixed(1)} ${(sRight.y - 14).toFixed(1)} ${(sRight.x - 1).toFixed(1)} ${(sRight.y - 22).toFixed(1)}`,
  ].join(' ');

  const h = y0 + sag + size;
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  svg.setAttribute('height', h);
  branchMain.setAttribute('d', branchD);
  branchBark.setAttribute('d', branchD);
  branchTwigs.innerHTML = `
    <path class="branch-twig" d="${twigsD}"></path>
    <path class="sprout-stem" d="${sproutStemsD}"></path>
  `;
  curtain.setAttribute(
    'd',
    `M0 0 L0 ${y0} L${x0} ${y0} Q${cx} ${cy} ${x1} ${y0} L${w} ${y0} L${w} 0 Z`
  );

  // Fidan yaprakları + dal üstündeki yapraklar
  const leafSpots = [
    // Sol fidanın çift yaprağı
    { x: sLeft.x + 1, y: sLeft.y - 21, rot: -145, scale: 1.05 },
    { x: sLeft.x + 1, y: sLeft.y - 21, rot: -35, scale: 1.05 },
    // Sağ fidanın çift yaprağı
    { x: sRight.x - 1, y: sRight.y - 21, rot: -145, scale: 1.05 },
    { x: sRight.x - 1, y: sRight.y - 21, rot: -35, scale: 1.05 },
    // Orta sürgün yaprakları
    { x: pMidLeft.x - 24, y: pMidLeft.y + 18, rot: 145, scale: 1 },
    { x: pMidRight.x + 24, y: pMidRight.y + 18, rot: 35, scale: 1 },
  ];

  branchLeaves.innerHTML = leafSpots
    .map(
      (l) =>
        `<path class="branch-leaf" transform="translate(${l.x.toFixed(1)}, ${l.y.toFixed(1)}) rotate(${l.rot}) scale(${l.scale})" d="M 0 0 C 6 -6 14 -6 18 0 C 14 6 6 6 0 0 Z"/>`
    )
    .join('');

  items.forEach((el) => {
    const p = point(parseFloat(el.dataset.t));
    el.style.left = `${p.x}px`;
    el.style.top = `${p.y}px`;
  });

  profile.style.setProperty('--size', `${size}px`);
  profile.style.top = `${y0 + sag + size / 2 - 6}px`;
}

let ticking = false;
function requestLayout() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    layoutGarland();
    ticking = false;
  });
}

window.addEventListener('scroll', requestLayout, { passive: true });
window.addEventListener('resize', requestLayout);
layoutGarland();

// Profil fotoğrafına tıklanınca:
// - Ana sayfadaysak en yukarı kaydır
// - Kitap vb. başka bir sayfadaysak ana sayfaya (index.html) git
profile.querySelector('.profile-photo').addEventListener('click', (e) => {
  e.stopPropagation();
  const path = window.location.pathname;
  const isHomePage =
    path.endsWith('/') ||
    path.endsWith('/index.html') ||
    path.endsWith('\\index.html') ||
    !path.endsWith('kitap.html');

  if (!isHomePage) {
    window.location.href = 'index.html';
    return;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Steam 2 hesap menüsü (mobil dokunma desteği)
const steamDropdown = document.querySelector('.social-dropdown');
if (steamDropdown) {
  const steamBtn = steamDropdown.querySelector('.social.steam');
  steamBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    steamDropdown.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!steamDropdown.contains(e.target)) steamDropdown.classList.remove('open');
  });
}

// ---------- Discord Canlı Sunucu Widget'ı ----------
let lastDiscordData = null;

function renderDiscordCard(data) {
  const card = document.getElementById('discordWidget');
  if (!card || !data) return;

  const dict = I18N[currentLang];
  const nameEl = card.querySelector('.discord-name');
  const countEl = card.querySelector('.discord-online-text');
  const joinEl = card.querySelector('.discord-join');
  const membersEl = card.querySelector('.discord-members');

  if (nameEl && data.name) nameEl.textContent = data.name;
  if (countEl) {
    countEl.textContent = dict.discord_online(data.presence_count ?? 0);
  }
  if (joinEl) {
    // Sınırsız davet kodu sabit olarak kullanılır
    joinEl.href = LINKS.discordInvite;
  }

  if (membersEl && Array.isArray(data.members)) {
    const shown = data.members.slice(0, 10);
    membersEl.innerHTML = shown
      .map(
        (m) => `
        <div class="discord-avatar-wrap" title="${m.username}">
          <img src="${m.avatar_url}" alt="${m.username}" loading="lazy">
          <span class="discord-avatar-status ${m.status || 'online'}"></span>
        </div>
      `
      )
      .join('');
  }
}

async function fetchDiscordWidget() {
  const card = document.getElementById('discordWidget');
  if (!card) return;
  try {
    const res = await fetch(
      `https://discord.com/api/guilds/${LINKS.discordServerId}/widget.json`
    );
    if (!res.ok) return;
    lastDiscordData = await res.json();
    renderDiscordCard(lastDiscordData);
  } catch (_) {}
}
fetchDiscordWidget();

// ---------- Spotify / Last.fm Canlı Şarkı Widget'ı ----------
let lastTrackData = null;

function renderSpotifyCard(track) {
  const card = document.getElementById('spotifyWidget');
  if (!card || !track) return;

  const dict = I18N[currentLang];
  const isNowPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';

  const statusEl = card.querySelector('.spotify-status-text');
  const barsEl = card.querySelector('.music-bars');
  const coverEl = card.querySelector('.spotify-cover');
  const trackEl = card.querySelector('.spotify-track');
  const artistEl = card.querySelector('.spotify-artist');

  if (statusEl) {
    statusEl.textContent = isNowPlaying ? dict.spotify_now : dict.spotify_last;
  }
  if (barsEl) {
    barsEl.classList.toggle('paused', !isNowPlaying);
  }
  if (trackEl) {
    trackEl.textContent = track.name || '—';
  }
  if (artistEl) {
    const artistName =
      (track.artist && (track.artist['#text'] || track.artist.name)) || '';
    artistEl.textContent = artistName;
  }
  if (coverEl && Array.isArray(track.image)) {
    const largeImg =
      track.image.find((img) => img.size === 'extralarge') ||
      track.image.find((img) => img.size === 'large') ||
      track.image[track.image.length - 1];
    if (largeImg && largeImg['#text']) {
      coverEl.src = largeImg['#text'];
    }
  }
  if (track.url) {
    card.href = track.url;
  }
}

async function fetchSpotifyWidget() {
  const card = document.getElementById('spotifyWidget');
  if (!card) return;
  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(
      LINKS.lastfmUser
    )}&api_key=${encodeURIComponent(LINKS.lastfmApiKey)}&format=json&limit=1`;
    const res = await fetch(url);
    if (!res.ok) return;
    const data = await res.json();
    const tracks = data?.recenttracks?.track;
    const latest = Array.isArray(tracks) ? tracks[0] : tracks;
    if (latest) {
      lastTrackData = latest;
      renderSpotifyCard(latest);
    }
  } catch (_) {}
}
fetchSpotifyWidget();
setInterval(fetchSpotifyWidget, 30000);

// ---------- 4 Adet Rastgele ve Benzersiz Furret Çerçevesi (2 Sol, 2 Sağ) ----------
function assignRandomFurrets() {
  const frames = document.querySelectorAll('.furret-side img');
  if (!frames.length) return;
  const pool = [...FURRET_PICS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  frames.forEach((img, idx) => {
    img.src = pool[idx % pool.length];
  });
}
assignRandomFurrets();

// ---------- Sağ & Sol Arkaplan Dalgalı Gitar Telleri ----------
function initBackgroundWaves() {
  const canvas = document.createElement('canvas');
  canvas.id = 'bgWaves';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');

  let width = 0;
  let height = 0;
  let dpr = 1;
  let lines = [];
  const N = 40;

  function buildLines() {
    lines = [];
    const paperEl = document.querySelector('.paper');
    const paperW = paperEl ? paperEl.offsetWidth : 960;
    const sideW = (width - paperW) / 2;
    if (sideW < 50) return;

    const countPerSide = Math.max(3, Math.min(6, Math.floor(sideW / 44)));

    ['left', 'right'].forEach((side) => {
      const startX = side === 'left' ? 0 : width - sideW;
      const step = sideW / (countPerSide + 1);
      for (let i = 1; i <= countPerSide; i++) {
        lines.push({
          baseX: startX + step * i,
          phase: i * 1.15 + (side === 'right' ? 2.1 : 0),
          speed: 0.028 * (i % 2 === 0 ? 1 : -1),
          amp: 6.5,
          freq: 0.017,
          dx: new Float32Array(N),
          vx: new Float32Array(N),
        });
      }
    });
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildLines();
  }

  window.addEventListener('resize', resize);
  resize();

  let prevMouse = null;
  window.addEventListener(
    'mousemove',
    (e) => {
      const mx = e.clientX;
      const my = e.clientY;
      if (prevMouse) {
        const mvx = mx - prevMouse.x;
        const mvy = my - prevMouse.y;
        const speed = Math.hypot(mvx, mvy);

        lines.forEach((line) => {
          const tNow = performance.now() * 0.001;
          const waveAtY =
            Math.sin(my * line.freq + tNow * (line.speed * 60) + line.phase) *
            line.amp;
          const lineXAtMouse = line.baseX + waveAtY;
          const prevWaveX =
            line.baseX +
            Math.sin(
              prevMouse.y * line.freq + tNow * (line.speed * 60) + line.phase
            ) *
              line.amp;

          const crossed =
            (prevMouse.x - prevWaveX) * (mx - lineXAtMouse) <= 0 &&
            Math.abs(mx - lineXAtMouse) < 55;
          const near = Math.abs(mx - lineXAtMouse) < 26 && speed > 1.2;

          if (crossed || near) {
            const dir =
              mvx !== 0 ? Math.sign(mvx) : mx > lineXAtMouse ? 1 : -1;
            const force = Math.min(Math.max(Math.abs(mvx) * 0.85, 8), 28) * dir;
            for (let k = 1; k < N - 1; k++) {
              const py = (k / (N - 1)) * height;
              const distY = Math.abs(py - my);
              const radius = 140;
              if (distY < radius) {
                const falloff = Math.cos((distY / radius) * (Math.PI / 2));
                line.vx[k] += force * falloff * 0.42;
              }
            }
          }
        });
      }
      prevMouse = { x: mx, y: my };
    },
    { passive: true }
  );

  function animate() {
    ctx.clearRect(0, 0, width, height);
    if (lines.length) {
      const waveColor =
        getComputedStyle(document.documentElement)
          .getPropertyValue('--wave-color')
          .trim() || '#faf4eb';
      ctx.strokeStyle = waveColor;
      ctx.lineWidth = 2.2;
      ctx.lineCap = 'round';

      lines.forEach((line) => {
        line.phase += line.speed;

        for (let k = 1; k < N - 1; k++) {
          const spring = -0.14 * line.dx[k];
          const neighbors =
            0.22 * (line.dx[k - 1] + line.dx[k + 1] - 2 * line.dx[k]);
          line.vx[k] = (line.vx[k] + spring + neighbors) * 0.91;
        }
        for (let k = 1; k < N - 1; k++) {
          line.dx[k] += line.vx[k];
        }

        ctx.beginPath();
        for (let k = 0; k < N; k++) {
          const y = (k / (N - 1)) * height;
          const wave = Math.sin(y * line.freq + line.phase) * line.amp;
          const x = line.baseX + wave + line.dx[k];
          if (k === 0) {
            ctx.moveTo(x, y);
          } else {
            const prevY = ((k - 1) / (N - 1)) * height;
            const prevWave =
              Math.sin(prevY * line.freq + line.phase) * line.amp;
            const prevX = line.baseX + prevWave + line.dx[k - 1];
            const midX = (prevX + x) * 0.5;
            const midY = (prevY + y) * 0.5;
            ctx.quadraticCurveTo(prevX, prevY, midX, midY);
          }
        }
        ctx.stroke();
      });
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}
initBackgroundWaves();

// ---------- Dil Uygulama ----------
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  langBtn.textContent = lang === 'tr' ? 'EN' : 'TR';

  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  const aboutBox = document.getElementById('aboutText');
  if (aboutBox) {
    aboutBox.innerHTML = dict.about_html(getAge(), getStudyYear());
  }

  if (lastDiscordData) {
    renderDiscordCard(lastDiscordData);
  }
  if (lastTrackData) {
    renderSpotifyCard(lastTrackData);
  }
}

langBtn.addEventListener('click', () => {
  applyLang(currentLang === 'tr' ? 'en' : 'tr');
});

applyTheme(currentTheme);
applyLang(currentLang);

// ---------- Pop-up ----------
const backdrop = document.createElement('div');
backdrop.className = 'popup-backdrop';
backdrop.innerHTML = `<div class="popup" role="dialog" aria-modal="true"></div>`;
document.body.appendChild(backdrop);
const popup = backdrop.querySelector('.popup');

function openPopup(html) {
  popup.innerHTML = html;
  backdrop.classList.add('show');
}

function closePopup() {
  backdrop.classList.remove('show');
}

backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop || e.target.closest('[data-close]')) closePopup();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePopup();
});

function showMessage(text) {
  const dict = I18N[currentLang];
  openPopup(`
    <img src="furrets/20231022_180613.PNG" alt="Furret">
    <p class="popup-text"></p>
    <button class="btn" type="button" data-close>${dict.popup_ok}</button>
  `);
  popup.querySelector('.popup-text').textContent = text;
  popup.querySelector('button').focus();
}

// ---------- Gizli kod ----------
function showSecretForm() {
  const dict = I18N[currentLang];
  openPopup(`
    <p class="popup-text">${dict.secret_title}</p>
    <form class="secret-form" autocomplete="off">
      <input type="text" name="code" placeholder="${dict.secret_placeholder}" aria-label="${dict.secret_title}">
      <button class="btn" type="submit">${dict.secret_submit}</button>
    </form>
    <p class="secret-hint"></p>
  `);

  const form = popup.querySelector('form');
  const input = form.querySelector('input');
  const hint = popup.querySelector('.secret-hint');
  input.focus();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = input.value.trim().toLocaleLowerCase('tr');
    const action = SECRET_CODES[code];

    if (action) {
      action();
    } else {
      hint.textContent = I18N[currentLang].secret_wrong;
      form.classList.remove('shake');
      void form.offsetWidth;
      form.classList.add('shake');
      input.select();
    }
  });
}

garland.querySelector('.secret').addEventListener('click', showSecretForm);
