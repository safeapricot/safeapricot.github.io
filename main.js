// safeapricot.com

// ---------- Ayarlar ----------
const LINKS = {
  youtube: 'https://www.youtube.com/@safeapricot',
  kick: 'https://kick.com/safeapricot',
  instagram1: 'https://www.instagram.com/guvenlikayisi/',
  instagram2: 'https://www.instagram.com/safeapricot/',
  steam1: 'https://steamcommunity.com/id/safeapri',
  steam2: 'https://steamcommunity.com/id/safeapricot',
  github: 'https://github.com/safeapricot',
  book: 'kitap.html',
  discordServerId: '769981140345421854',
  discordUserId: '449937018898874378',
  discordInvite: 'https://discord.gg/VxYvWK4HSq',
  activityFeedUrl:
    'https://raw.githubusercontent.com/safeapricot/safeapricot.github.io/activity-data/activity.json',
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
    discord_online: (n) => `${n} kişi çevrimiçi`,
    discord_loading: 'sunucu durumu yükleniyor...',
    lanyard_loading: 'durum yükleniyor...',
    lanyard_spotify_now: 'şu an Spotify dinliyor',
    lanyard_playing: 'şu an oynuyor',
    lanyard_status_online: 'çevrimiçi',
    lanyard_status_idle: 'boşta',
    lanyard_status_dnd: 'rahatsız etmeyin',
    lanyard_status_offline: 'çevrimdışı',
    lanyard_no_music: 'şu an Spotify dinlemiyor',
    lanyard_on_desktop: 'masaüstünde',
    lanyard_on_mobile: 'mobilde',
    activity_title: 'günlük aktivite',
    activity_loading: 'aktivite verisi yükleniyor...',
    activity_empty: 'henüz kayıtlı aktivite yok',
    activity_updated: (t) => `OpenWidget ile senkron • ${t}`,
    activity_study: 'Ders',
    activity_game: 'Oyun',
    activity_pc: 'PC Açık',
    activity_pc_scale: 'PC Açık (0–8s)',
    activity_cap_note: '1 kare = 10 saat kapasite',
    activity_no_record: 'Bugün için kayıt yok',
    activity_months: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    activity_months_full: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    activity_days_short: ['Pzt', '', 'Çar', '', 'Cum', '', ''],
    activity_days_full: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    snake_title: 'gizli yılan oyunu',
    snake_score: 'skor',
    snake_best: 'rekor',
    snake_hint: 'ok tuşları veya WASD ile oyna',
    snake_over: 'oyun bitti!',
    snake_restart: 'tekrar oyna',
    snake_close: 'kapat',
    furret_credit_html:
      'Bütün Furret çizimleri Twitter <a href="https://x.com/ke_mo_suke" target="_blank" rel="noopener">けもすけ @ke_mo_suke</a> tarafından çizilmiştir.',
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
    discord_online: (n) => `${n} members online`,
    discord_loading: 'loading server status...',
    lanyard_loading: 'loading status...',
    lanyard_spotify_now: 'listening on Spotify',
    lanyard_playing: 'currently playing',
    lanyard_status_online: 'online',
    lanyard_status_idle: 'idle',
    lanyard_status_dnd: 'do not disturb',
    lanyard_status_offline: 'offline',
    lanyard_no_music: 'not listening to Spotify',
    lanyard_on_desktop: 'on desktop',
    lanyard_on_mobile: 'on mobile',
    activity_title: 'daily activity',
    activity_loading: 'loading activity data...',
    activity_empty: 'no activity logged yet',
    activity_updated: (t) => `Synced via OpenWidget • ${t}`,
    activity_study: 'Study',
    activity_game: 'Gaming',
    activity_pc: 'PC Uptime',
    activity_pc_scale: 'PC Uptime (0–8h)',
    activity_cap_note: '1 cell = 10h capacity',
    activity_no_record: 'No activity recorded on this day',
    activity_months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    activity_months_full: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    activity_days_short: ['Mon', '', 'Wed', '', 'Fri', '', ''],
    activity_days_full: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    snake_title: 'secret snake game',
    snake_score: 'score',
    snake_best: 'best',
    snake_hint: 'use arrow keys or WASD to play',
    snake_over: 'game over!',
    snake_restart: 'play again',
    snake_close: 'close',
    furret_credit_html:
      'All Furret illustrations were drawn by <a href="https://x.com/ke_mo_suke" target="_blank" rel="noopener">けもすけ @ke_mo_suke</a> on Twitter.',
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
  soundOn:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>',
  soundOff:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>',
};

// ---------- Üst Kontroller (Ses, Dil & Tema) ----------
const controls = document.createElement('div');
controls.className = 'top-controls';
controls.innerHTML = `
  <button class="ctrl-btn" id="soundBtn" type="button" title="Tel sesi / String sound"></button>
  <button class="ctrl-btn" id="langBtn" type="button" title="Dil / Language">EN</button>
  <button class="ctrl-btn" id="themeBtn" type="button" title="Tema / Theme"></button>
`;
document.body.appendChild(controls);

const langBtn = document.getElementById('langBtn');
const themeBtn = document.getElementById('themeBtn');
const soundBtn = document.getElementById('soundBtn');

let soundEnabled = localStorage.getItem('sound') !== 'off';
function applySound(on) {
  soundEnabled = on;
  localStorage.setItem('sound', on ? 'on' : 'off');
  soundBtn.innerHTML = on ? ICONS.soundOn : ICONS.soundOff;
}
applySound(soundEnabled);
soundBtn.addEventListener('click', () => applySound(!soundEnabled));

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeBtn.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
  if (snakeSection && snakeSection._drawBoard) {
    snakeSection._drawBoard();
  }
}

themeBtn.addEventListener('click', () => {
  document.documentElement.classList.add('theme-ready');
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

// Çoklu hesap menüleri (Instagram & Steam - mobil dokunma desteği)
const socialDropdowns = document.querySelectorAll('.social-dropdown');
socialDropdowns.forEach((dropdown) => {
  const btn = dropdown.querySelector('button.social');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    socialDropdowns.forEach((other) => {
      if (other !== dropdown) other.classList.remove('open');
    });
    dropdown.classList.toggle('open');
  });
});
document.addEventListener('click', (e) => {
  socialDropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
  });
});

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

// ---------- Lanyard Canlı Spotify & Discord Durum Kartı ----------
let lastLanyardData = null;
let lanyardProgressTimer = null;

const LANYARD_ICONS = {
  spotify:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
  game:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4"/><path d="M8 10v4"/><circle cx="15" cy="11" r="1" fill="currentColor"/><circle cx="17.5" cy="13" r="1" fill="currentColor"/></svg>',
  discord:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.44.87-.61 1.25a18.27 18.27 0 0 0-5.48 0 12.64 12.64 0 0 0-.62-1.25.08.08 0 0 0-.08-.04 19.74 19.74 0 0 0-4.89 1.52.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.05 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.87-.9.08.08 0 0 1-.01-.13c.13-.09.25-.19.37-.29a.08.08 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.07 0a.08.08 0 0 1 .08.01c.12.1.25.2.37.29a.08.08 0 0 1 0 .13c-.6.35-1.22.65-1.87.9a.08.08 0 0 0-.04.11c.36.7.77 1.37 1.22 2a.08.08 0 0 0 .08.03 19.83 19.83 0 0 0 6-3.03.08.08 0 0 0 .03-.05c.5-5.18-.84-9.68-3.55-13.66a.06.06 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42z"/></svg>',
};

function fmtMmSs(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, '0')}`;
}

function getDiscordAvatarUrl(u) {
  if (!u || !u.avatar) return 'furrets/uykulufurret.JPEG';
  const ext = u.avatar.startsWith('a_') ? 'gif' : 'png';
  return `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.${ext}?size=128`;
}

function resolveActivityImage(act, fallbackUrl) {
  const img = act?.assets?.large_image;
  if (!img) return fallbackUrl;
  if (img.startsWith('mp:external/')) {
    return `https://media.discordapp.net/external/${img.slice('mp:external/'.length)}`;
  }
  if (act.application_id) {
    return `https://cdn.discordapp.com/app-assets/${act.application_id}/${img}.png`;
  }
  return fallbackUrl;
}

function updateSpotifyProgressBar(spotify) {
  const card = document.getElementById('lanyardWidget');
  if (!card || !spotify?.timestamps?.start || !spotify?.timestamps?.end) return;
  const total = Math.max(1, spotify.timestamps.end - spotify.timestamps.start);
  const elapsed = Math.max(0, Math.min(total, Date.now() - spotify.timestamps.start));
  const fill = card.querySelector('.spotify-progress-fill');
  const curEl = card.querySelector('.spotify-time-cur');
  const totEl = card.querySelector('.spotify-time-tot');
  if (fill) fill.style.width = `${((elapsed / total) * 100).toFixed(2)}%`;
  if (curEl) curEl.textContent = fmtMmSs(elapsed);
  if (totEl) totEl.textContent = fmtMmSs(total);
}

function renderLanyardCard(data) {
  const card = document.getElementById('lanyardWidget');
  if (!card || !data) return;

  if (lanyardProgressTimer) {
    clearInterval(lanyardProgressTimer);
    lanyardProgressTimer = null;
  }

  const dict = I18N[currentLang];
  const iconWrap = card.querySelector('.lanyard-badge-icon');
  const statusEl = card.querySelector('.spotify-status-text');
  const barsEl = card.querySelector('.music-bars');
  const coverEl = card.querySelector('.spotify-cover');
  const dotEl = card.querySelector('.lanyard-status-dot');
  const trackEl = card.querySelector('.spotify-track');
  const artistEl = card.querySelector('.spotify-artist');
  const progEl = card.querySelector('.spotify-progress');

  const user = data.discord_user;
  const status = data.discord_status || 'offline';
  const avatarUrl = getDiscordAvatarUrl(user);

  card.classList.remove('mode-spotify', 'mode-game', 'mode-idle', 'is-static');

  if (data.listening_to_spotify && data.spotify) {
    const sp = data.spotify;
    card.classList.add('mode-spotify');
    card.href = sp.track_id
      ? `https://open.spotify.com/track/${encodeURIComponent(sp.track_id)}`
      : 'https://open.spotify.com';
    if (iconWrap) iconWrap.innerHTML = LANYARD_ICONS.spotify;
    if (statusEl) statusEl.textContent = dict.lanyard_spotify_now;
    if (barsEl) {
      barsEl.hidden = false;
      barsEl.classList.remove('paused');
    }
    if (coverEl) coverEl.src = sp.album_art_url || avatarUrl;
    if (dotEl) dotEl.hidden = true;
    if (trackEl) trackEl.textContent = sp.song || '—';
    if (artistEl) {
      artistEl.hidden = false;
      artistEl.textContent = sp.artist || sp.album || '';
    }
    if (progEl) {
      const hasTs = !!(sp.timestamps?.start && sp.timestamps?.end);
      progEl.hidden = !hasTs;
      if (hasTs) {
        updateSpotifyProgressBar(sp);
        lanyardProgressTimer = setInterval(() => updateSpotifyProgressBar(sp), 1000);
      }
    }
    return;
  }

  const gameAct = Array.isArray(data.activities)
    ? data.activities.find((a) => a.type === 0 && a.name)
    : null;

  if (gameAct) {
    card.classList.add('mode-game', 'is-static');
    card.removeAttribute('href');
    if (iconWrap) iconWrap.innerHTML = LANYARD_ICONS.game;
    if (statusEl) statusEl.textContent = dict.lanyard_playing;
    if (barsEl) barsEl.hidden = true;
    if (coverEl) coverEl.src = resolveActivityImage(gameAct, avatarUrl);
    if (dotEl) {
      dotEl.hidden = false;
      dotEl.className = `lanyard-status-dot ${status}`;
    }
    if (trackEl) trackEl.textContent = gameAct.name;
    if (artistEl) {
      const sub = gameAct.details || gameAct.state || '';
      artistEl.textContent = sub;
      artistEl.hidden = !sub;
    }
    if (progEl) progEl.hidden = true;
    return;
  }

  // Idle / online fallback (live Discord presence via Lanyard)
  card.classList.add('mode-idle', 'is-static');
  card.removeAttribute('href');
  if (iconWrap) iconWrap.innerHTML = LANYARD_ICONS.discord;
  const statusLabel = dict[`lanyard_status_${status}`] || dict.lanyard_status_offline;
  const platform = data.active_on_discord_desktop
    ? ` · ${dict.lanyard_on_desktop}`
    : data.active_on_discord_mobile
      ? ` · ${dict.lanyard_on_mobile}`
      : '';
  if (statusEl) statusEl.textContent = `${statusLabel}${platform}`;
  if (barsEl) {
    barsEl.hidden = true;
  }
  if (coverEl) coverEl.src = avatarUrl;
  if (dotEl) {
    dotEl.hidden = false;
    dotEl.className = `lanyard-status-dot ${status}`;
  }
  if (trackEl) trackEl.textContent = user?.global_name || user?.username || 'Safa';
  if (artistEl) {
    artistEl.textContent = '';
    artistEl.hidden = true;
  }
  if (progEl) progEl.hidden = true;
}

async function fetchLanyardWidget() {
  const card = document.getElementById('lanyardWidget');
  if (!card) return;
  try {
    const res = await fetch(
      `https://api.lanyard.rest/v1/users/${encodeURIComponent(LINKS.discordUserId)}`,
      { cache: 'no-cache' }
    );
    if (!res.ok) return;
    const json = await res.json();
    if (json?.success && json.data) {
      lastLanyardData = json.data;
      renderLanyardCard(json.data);
    }
  } catch (_) {}
}
fetchLanyardWidget();
setInterval(fetchLanyardWidget, 15000);

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

// ---------- Narin Tel Sesi (Karplus-Strong telli çalgı sentezi) ----------
// D majör pentatonik, iki oktav: D5 E5 F#5 A5 B5 D6 E6 F#6 A6 B6 D7 E7
const STRING_NOTES = [
  587.33, 659.25, 739.99, 880.0, 987.77, 1174.66,
  1318.51, 1479.98, 1760.0, 1975.53, 2349.32, 2637.02,
];

let audioCtx = null;
let masterGain = null;
const pluckBuffers = new Map();

function ensureAudio() {
  if (audioCtx) return audioCtx;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  audioCtx = new Ctx();
  masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.35;

  // Sesi yumuşatan hafif alçak geçiren filtre
  const soften = audioCtx.createBiquadFilter();
  soften.type = 'lowpass';
  soften.frequency.value = 5200;
  soften.Q.value = 0.4;

  masterGain.connect(soften);
  soften.connect(audioCtx.destination);
  return audioCtx;
}

// Tarayıcılar sesi ancak kullanıcı sayfaya tıkladıktan/dokunduktan sonra açar
['pointerdown', 'keydown', 'touchstart'].forEach((evt) =>
  window.addEventListener(
    evt,
    () => {
      const ctx = ensureAudio();
      if (ctx && ctx.state === 'suspended') ctx.resume();
    },
    { passive: true }
  )
);

function getPluckBuffer(freq) {
  if (pluckBuffers.has(freq)) return pluckBuffers.get(freq);
  const sr = audioCtx.sampleRate;
  const length = Math.floor(sr * 1.6);
  const buffer = audioCtx.createBuffer(1, length, sr);
  const data = buffer.getChannelData(0);
  const period = Math.round(sr / freq);

  // Yumuşak (filtrelenmiş) gürültü ile teli "çek"
  let last = 0;
  for (let i = 0; i < period; i++) {
    const noise = Math.random() * 2 - 1;
    last = last * 0.55 + noise * 0.45;
    data[i] = last;
  }
  // Karplus-Strong: geciktir + ortala + sönümle
  const decay = 0.9965;
  for (let i = period; i < length; i++) {
    data[i] = decay * 0.5 * (data[i - period] + data[Math.max(i - period - 1, 0)]);
  }
  pluckBuffers.set(freq, buffer);
  return buffer;
}

function pluckString(freq, intensity, pan) {
  if (!soundEnabled || !audioCtx || audioCtx.state !== 'running') return;
  const now = audioCtx.currentTime;

  const src = audioCtx.createBufferSource();
  src.buffer = getPluckBuffer(freq);

  // Ses şiddeti imleç hızıyla orantılı (yavaş geçince fısıltı gibi)
  const gain = audioCtx.createGain();
  const vol = 0.02 + 0.28 * intensity * intensity;
  gain.gain.setValueAtTime(vol, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

  // Hızlı geçişte biraz daha parlak, yavaşta daha yumuşak tını
  const tone = audioCtx.createBiquadFilter();
  tone.type = 'lowpass';
  tone.frequency.value = 1800 + 5200 * intensity;

  let node = src.connect(tone).connect(gain);
  if (audioCtx.createStereoPanner) {
    const panner = audioCtx.createStereoPanner();
    panner.pan.value = Math.max(-0.8, Math.min(0.8, pan * 2 - 1));
    node = node.connect(panner);
  }
  node.connect(masterGain);

  src.start(now);
  src.stop(now + 1.6);
}

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

    const countPerSide = 6;
    let noteIndex = 0;

    ['left', 'right'].forEach((side) => {
      const startX = side === 'left' ? 0 : width - sideW;
      const step = sideW / (countPerSide + 1);
      for (let i = 1; i <= countPerSide; i++) {
        lines.push({
          side,
          sideIndex: i,
          // Sağdaki 6 telden ortadaki ikisi (3. ve 4. tel)
          isRightMid: side === 'right' && (i === 3 || i === 4),
          baseX: startX + step * i,
          phase: i * 1.15 + (side === 'right' ? 2.1 : 0),
          speed: 0.028 * (i % 2 === 0 ? 1 : -1),
          amp: 6.5,
          freq: 0.017,
          dx: new Float32Array(N),
          vx: new Float32Array(N),
          // Soldan sağa yükselen pentatonik notalar (hep uyumlu tınlar)
          note: STRING_NOTES[noteIndex++ % STRING_NOTES.length],
          lastPluck: 0,
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
  let rightMidPlucks = [];
  let rightMidTimer = null;

  window.addEventListener(
    'mousemove',
    (e) => {
      const mx = e.clientX;
      const my = e.clientY;
      const now = performance.now();
      if (prevMouse) {
        const mvx = mx - prevMouse.x;
        const mvy = my - prevMouse.y;
        const dt = Math.max(now - prevMouse.t, 4);
        // İmleç hızı (px/ms) -> 0..1 arası şiddet
        const velocity = Math.hypot(mvx, mvy) / dt;
        const intensity = Math.min(velocity / 3.2, 1);

        lines.forEach((line) => {
          const tNow = now * 0.001;
          const lineXAtMouse =
            line.baseX +
            Math.sin(my * line.freq + tNow * (line.speed * 60) + line.phase) *
              line.amp;
          const prevWaveX =
            line.baseX +
            Math.sin(
              prevMouse.y * line.freq + tNow * (line.speed * 60) + line.phase
            ) *
              line.amp;

          // Sadece imleç teli gerçekten geçtiğinde tetiklenir
          const crossed =
            (prevMouse.x - prevWaveX) * (mx - lineXAtMouse) <= 0 &&
            prevMouse.x !== mx;
          if (!crossed) return;

          const dir = Math.sign(mvx) || 1;
          // Telin sapması doğrudan imleç hızıyla orantılı
          const force = (2 + 46 * intensity) * dir;
          const radius = 90 + 120 * intensity;
          for (let k = 1; k < N - 1; k++) {
            const py = (k / (N - 1)) * height;
            const distY = Math.abs(py - my);
            if (distY < radius) {
              const falloff = Math.cos((distY / radius) * (Math.PI / 2));
              line.vx[k] += force * falloff * 0.42;
            }
          }

          // Nota çal (aynı tel için kısa bekleme süresi)
          if (now - line.lastPluck > 45) {
            line.lastPluck = now;
            pluckString(line.note, intensity, line.baseX / width);

            // Sağdaki 6 telden ortadaki ikisi (3. ve 4. tel) ardarda 5 kere çalınırsa Snake açılır
            clearTimeout(rightMidTimer);
            if (line.isRightMid) {
              rightMidPlucks.push(line.sideIndex);
              const count3 = rightMidPlucks.filter((x) => x === 3).length;
              const count4 = rightMidPlucks.filter((x) => x === 4).length;
              if (count3 >= 5 && count4 >= 5) {
                // İki orta nota da 5'er kez (toplam 5 çift geçiş) çalındıysa anında aç
                rightMidPlucks = [];
                openSnakeGame();
              } else if (rightMidPlucks.length >= 5 && count3 >= 2 && count4 >= 2) {
                // Toplam 5 nota çalıp durduysa da 400ms sonra aç
                rightMidTimer = setTimeout(() => {
                  rightMidPlucks = [];
                  openSnakeGame();
                }, 400);
              }
            } else {
              rightMidPlucks = [];
            }
          }
        });
      }
      prevMouse = { x: mx, y: my, t: now };
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

  const creditBox = document.getElementById('furretCredit');
  if (creditBox) {
    creditBox.innerHTML = dict.furret_credit_html;
  }

  if (lastDiscordData) {
    renderDiscordCard(lastDiscordData);
  }
  if (lastLanyardData) {
    renderLanyardCard(lastLanyardData);
  }
  if (lastActivityData) {
    renderActivityWidget(lastActivityData);
  }
  if (typeof updateSnakeTexts === 'function') {
    updateSnakeTexts();
  }
}

// ---------- OpenWidget Günlük Aktivite Heatmap ----------
let lastActivityData = null;
let selectedActivityDateKey = null;
let hmTooltipEl = null;

function formatActivityDuration(sec, lang) {
  if (!sec || sec <= 0) return lang === 'en' ? '0m' : '0dk';
  if (sec < 60) return lang === 'en' ? `${sec}s` : `${sec}sn`;
  const totalMin = Math.floor(sec / 60);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) return lang === 'en' ? `${m}m` : `${m}dk`;
  if (m === 0) return lang === 'en' ? `${h}h` : `${h}s`;
  return lang === 'en'
    ? `${h}h ${String(m).padStart(2, '0')}m`
    : `${h}s ${String(m).padStart(2, '0')}dk`;
}

function formatActivityDateLabel(dateObj, lang) {
  const dict = I18N[lang];
  const dayName = dict.activity_days_full[dateObj.getDay()];
  const monthName = dict.activity_months_full[dateObj.getMonth()];
  if (lang === 'en') {
    return `${dayName}, ${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
  }
  return `${dateObj.getDate()} ${monthName} ${dateObj.getFullYear()} ${dayName}`;
}

function formatRelativeSyncTime(isoStr, lang) {
  if (!isoStr) return '';
  const dt = new Date(isoStr);
  if (Number.isNaN(dt.getTime())) return '';
  const diffMin = Math.max(0, Math.round((Date.now() - dt.getTime()) / 60000));
  if (diffMin < 2) return lang === 'en' ? 'just now' : 'az önce';
  if (diffMin < 60) return lang === 'en' ? `${diffMin}m ago` : `${diffMin} dk önce`;
  const diffHr = Math.round(diffMin / 60);
  if (diffHr < 24) return lang === 'en' ? `${diffHr}h ago` : `${diffHr} sa önce`;
  return dt.toLocaleDateString(lang === 'en' ? 'en-US' : 'tr-TR', { day: 'numeric', month: 'short' });
}

function hexToRgba(hex, alpha) {
  const clean = (hex || '#E2925C').replace('#', '').trim();
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean;
  if (full.length !== 6) return `rgba(226, 146, 92, ${alpha})`;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
}

function buildHeatmapCellBackground(rec, studyColor, gameColor, accentColor) {
  if (!rec || (rec.study <= 0 && rec.game <= 0 && rec.pc <= 0)) {
    return 'var(--hm-empty)';
  }
  const studyH = Math.max(0, rec.study || 0) / 3600;
  const gameH = Math.max(0, rec.game || 0) / 3600;
  const pcH = Math.max(0, rec.pc || 0) / 3600;
  const totalH = studyH + gameH;

  let studyFrac = 0;
  let gameFrac = 0;
  if (totalH >= 10) {
    studyFrac = studyH / totalH;
    gameFrac = gameH / totalH;
  } else {
    studyFrac = studyH / 10;
    gameFrac = gameH / 10;
  }

  const uptimeRatio = Math.min(1, pcH / 8);
  const defaultColor =
    pcH > 0 ? hexToRgba(accentColor, 0.16 + uptimeRatio * 0.72) : 'var(--hm-empty)';

  const stops = [];
  let cur = 0;
  if (studyFrac > 0.001) {
    const next = Math.min(100, cur + studyFrac * 100);
    stops.push(`${studyColor} ${cur.toFixed(2)}%`, `${studyColor} ${next.toFixed(2)}%`);
    cur = next;
  }
  if (gameFrac > 0.001 && cur < 99.95) {
    const next = Math.min(100, cur + gameFrac * 100);
    stops.push(`${gameColor} ${cur.toFixed(2)}%`, `${gameColor} ${next.toFixed(2)}%`);
    cur = next;
  }
  if (cur < 99.95) {
    stops.push(`${defaultColor} ${cur.toFixed(2)}%`, `${defaultColor} 100%`);
  }
  return `linear-gradient(to top, ${stops.join(', ')})`;
}

function ensureHmTooltip() {
  if (hmTooltipEl) return hmTooltipEl;
  hmTooltipEl = document.createElement('div');
  hmTooltipEl.className = 'hm-tooltip';
  hmTooltipEl.setAttribute('role', 'tooltip');
  document.body.appendChild(hmTooltipEl);
  return hmTooltipEl;
}

function renderActivityDetail(dateKey, data) {
  const detailEl = document.getElementById('activityDetail');
  if (!detailEl || !data) return;
  const dict = I18N[currentLang];
  const days = data.days || {};
  const colors = data.colors || {};
  const studyCol = colors.study || '#2EA043';
  const gameCol = colors.game || '#A78BFA';
  const accentCol = colors.accent || '#E2925C';

  const rec = days[dateKey] || { study: 0, game: 0, pc: 0 };
  const parts = dateKey.split('-').map(Number);
  const dt = new Date(parts[0], parts[1] - 1, parts[2]);

  const studyH = (rec.study || 0) / 3600;
  const gameH = (rec.game || 0) / 3600;
  const totalH = studyH + gameH;
  const cap = Math.max(10, totalH);
  const studyW = (studyH / cap) * 100;
  const gameW = (gameH / cap) * 100;
  const pcRatio = Math.min(1, ((rec.pc || 0) / 3600) / 8);
  const remW = Math.max(0, 100 - studyW - gameW);

  detailEl.innerHTML = '';

  const head = document.createElement('div');
  head.className = 'activity-detail-head';

  const dateSpan = document.createElement('span');
  dateSpan.className = 'activity-detail-date';
  dateSpan.textContent = formatActivityDateLabel(dt, currentLang);
  head.appendChild(dateSpan);

  const metrics = document.createElement('div');
  metrics.className = 'activity-detail-metrics';
  if (rec.study <= 0 && rec.game <= 0 && rec.pc <= 0) {
    const emptySpan = document.createElement('span');
    emptySpan.style.color = 'var(--ink-soft)';
    emptySpan.textContent = dict.activity_no_record;
    metrics.appendChild(emptySpan);
  } else {
    const items = [
      { col: studyCol, label: dict.activity_study, val: formatActivityDuration(rec.study, currentLang) },
      { col: gameCol, label: dict.activity_game, val: formatActivityDuration(rec.game, currentLang) },
      { col: accentCol, label: dict.activity_pc, val: formatActivityDuration(rec.pc, currentLang) },
    ];
    items.forEach((it) => {
      const m = document.createElement('span');
      m.className = 'activity-metric';
      const dot = document.createElement('span');
      dot.className = 'activity-pill-dot';
      dot.style.background = it.col;
      m.appendChild(dot);
      m.appendChild(document.createTextNode(`${it.label}: ${it.val}`));
      metrics.appendChild(m);
    });
  }
  head.appendChild(metrics);
  detailEl.appendChild(head);

  const bar = document.createElement('div');
  bar.className = 'activity-detail-bar';
  if (studyW > 0.1) {
    const s = document.createElement('span');
    s.style.width = `${studyW.toFixed(2)}%`;
    s.style.background = studyCol;
    bar.appendChild(s);
  }
  if (gameW > 0.1) {
    const g = document.createElement('span');
    g.style.width = `${gameW.toFixed(2)}%`;
    g.style.background = gameCol;
    bar.appendChild(g);
  }
  if (remW > 0.1 && rec.pc > 0) {
    const r = document.createElement('span');
    r.style.width = `${remW.toFixed(2)}%`;
    r.style.background = hexToRgba(accentCol, 0.2 + pcRatio * 0.65);
    bar.appendChild(r);
  }
  detailEl.appendChild(bar);

  if (rec.games && Object.keys(rec.games).length > 0) {
    const gamesRow = document.createElement('div');
    gamesRow.className = 'activity-games-row';
    Object.entries(rec.games)
      .sort((a, b) => b[1] - a[1])
      .forEach(([gName, gSec]) => {
        if (gSec <= 0) return;
        const chip = document.createElement('span');
        chip.className = 'activity-game-chip';
        chip.textContent = `${gName} · ${formatActivityDuration(gSec, currentLang)}`;
        gamesRow.appendChild(chip);
      });
    if (gamesRow.children.length > 0) detailEl.appendChild(gamesRow);
  }
}

function renderActivityWidget(data) {
  const board = document.getElementById('activityBoard');
  const summaryEl = document.getElementById('activitySummary');
  const updatedEl = document.getElementById('activityUpdated');
  const legendStudy = document.getElementById('legendStudy');
  const legendGame = document.getElementById('legendGame');
  const scrollWrap = document.getElementById('activityScroll');
  if (!board || !data) return;

  const dict = I18N[currentLang];
  const days = data.days || {};
  const colors = data.colors || {};
  const studyCol = colors.study || '#2EA043';
  const gameCol = colors.game || '#A78BFA';
  const accentCol = colors.accent || '#E2925C';

  if (legendStudy) legendStudy.style.background = studyCol;
  if (legendGame) legendGame.style.background = gameCol;

  const rel = formatRelativeSyncTime(data.updatedAt, currentLang);
  if (updatedEl) {
    updatedEl.textContent = rel ? dict.activity_updated(rel) : 'OpenWidget';
  }

  // Last 52 weeks ending on current week's Sunday (Monday-first grid)
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const dowMon = (today.getDay() + 6) % 7; // Mon=0 .. Sun=6
  const endSun = new Date(today);
  endSun.setDate(today.getDate() + (6 - dowMon));
  const WEEKS = 52;
  const startMon = new Date(endSun);
  startMon.setDate(endSun.getDate() - (WEEKS * 7 - 1));

  // Compute totals across all logged days in visible window
  let sumStudy = 0;
  let sumGame = 0;
  let latestActiveKey = todayKey;
  const sortedKeys = Object.keys(days).sort();
  for (let i = sortedKeys.length - 1; i >= 0; i--) {
    const d = days[sortedKeys[i]];
    if (d && (d.study > 0 || d.game > 0 || d.pc > 0)) {
      latestActiveKey = sortedKeys[i];
      break;
    }
  }
  if (!selectedActivityDateKey) selectedActivityDateKey = latestActiveKey;

  Object.entries(days).forEach(([k, d]) => {
    if (!d) return;
    sumStudy += d.study || 0;
    sumGame += d.game || 0;
  });

  if (summaryEl) {
    summaryEl.innerHTML = '';
    const pills = [
      { col: studyCol, text: `${dict.activity_study} ${formatActivityDuration(sumStudy, currentLang)}` },
      { col: gameCol, text: `${dict.activity_game} ${formatActivityDuration(sumGame, currentLang)}` },
    ];
    pills.forEach((p) => {
      const span = document.createElement('span');
      span.className = 'activity-pill';
      const dot = document.createElement('span');
      dot.className = 'activity-pill-dot';
      dot.style.background = p.col;
      span.appendChild(dot);
      span.appendChild(document.createTextNode(p.text));
      summaryEl.appendChild(span);
    });
  }

  board.innerHTML = '';

  const monthsRow = document.createElement('div');
  monthsRow.className = 'activity-months';
  const CELL_STEP = 13.3; // 10.5px cell + 2.8px gap
  monthsRow.style.width = `${WEEKS * CELL_STEP}px`;

  const weekdaysCol = document.createElement('div');
  weekdaysCol.className = 'activity-weekdays';
  dict.activity_days_short.forEach((lbl) => {
    const s = document.createElement('span');
    s.textContent = lbl;
    weekdaysCol.appendChild(s);
  });

  const grid = document.createElement('div');
  grid.className = 'activity-grid';

  let lastMonth = -1;
  const tooltip = ensureHmTooltip();

  for (let w = 0; w < WEEKS; w++) {
    const weekStart = new Date(startMon);
    weekStart.setDate(startMon.getDate() + w * 7);
    const m = weekStart.getMonth();
    if (m !== lastMonth && (w > 0 || weekStart.getDate() <= 7)) {
      const ml = document.createElement('span');
      ml.className = 'activity-month-lbl';
      ml.style.left = `${w * CELL_STEP}px`;
      ml.textContent = dict.activity_months[m];
      monthsRow.appendChild(ml);
      lastMonth = m;
    }

    for (let d = 0; d < 7; d++) {
      const cellDate = new Date(weekStart);
      cellDate.setDate(weekStart.getDate() + d);
      const key = `${cellDate.getFullYear()}-${String(cellDate.getMonth() + 1).padStart(2, '0')}-${String(cellDate.getDate()).padStart(2, '0')}`;
      const isFuture = cellDate > today;
      const rec = days[key];

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'hm-cell';
      btn.dataset.date = key;
      if (isFuture) btn.classList.add('is-future');
      if (key === todayKey) btn.classList.add('is-today');
      if (key === selectedActivityDateKey) btn.classList.add('is-selected');
      if (!isFuture) {
        btn.style.background = buildHeatmapCellBackground(rec, studyCol, gameCol, accentCol);
      }

      const dateLabel = formatActivityDateLabel(cellDate, currentLang);
      btn.setAttribute('aria-label', dateLabel);

      if (!isFuture) {
        const showTip = () => {
          const r = btn.getBoundingClientRect();
          tooltip.innerHTML = '';
          const tDate = document.createElement('div');
          tDate.className = 'hm-tooltip-date';
          tDate.textContent = dateLabel;
          tooltip.appendChild(tDate);
          if (!rec || (rec.study <= 0 && rec.game <= 0 && rec.pc <= 0)) {
            const tEmpty = document.createElement('div');
            tEmpty.style.color = 'var(--ink-soft)';
            tEmpty.textContent = dict.activity_no_record;
            tooltip.appendChild(tEmpty);
          } else {
            const tBody = document.createElement('div');
            tBody.textContent = `${dict.activity_study}: ${formatActivityDuration(rec.study, currentLang)} • ${dict.activity_game}: ${formatActivityDuration(rec.game, currentLang)}`;
            tooltip.appendChild(tBody);
            const tPc = document.createElement('div');
            tPc.style.color = 'var(--ink-soft)';
            tPc.textContent = `${dict.activity_pc}: ${formatActivityDuration(rec.pc, currentLang)}`;
            tooltip.appendChild(tPc);
          }
          const left = Math.max(120, Math.min(window.innerWidth - 120, r.left + r.width / 2));
          tooltip.style.left = `${left}px`;
          tooltip.style.top = `${r.top}px`;
          tooltip.classList.add('show');
        };

        btn.addEventListener('mouseenter', () => {
          showTip();
          renderActivityDetail(key, data);
        });
        btn.addEventListener('mouseleave', () => {
          tooltip.classList.remove('show');
          renderActivityDetail(selectedActivityDateKey, data);
        });
        btn.addEventListener('focus', () => {
          showTip();
          renderActivityDetail(key, data);
        });
        btn.addEventListener('blur', () => {
          tooltip.classList.remove('show');
          renderActivityDetail(selectedActivityDateKey, data);
        });
        btn.addEventListener('click', () => {
          selectedActivityDateKey = key;
          grid.querySelectorAll('.hm-cell.is-selected').forEach((el) => el.classList.remove('is-selected'));
          btn.classList.add('is-selected');
          renderActivityDetail(key, data);
        });
      }

      grid.appendChild(btn);
    }
  }

  board.appendChild(monthsRow);
  board.appendChild(weekdaysCol);
  board.appendChild(grid);

  renderActivityDetail(selectedActivityDateKey, data);

  if (scrollWrap) {
    requestAnimationFrame(() => {
      scrollWrap.scrollLeft = scrollWrap.scrollWidth;
    });
  }
}

async function loadActivityWidget() {
  const widget = document.getElementById('activityWidget');
  if (!widget) return;
  try {
    const resp = await fetch(`${LINKS.activityFeedUrl}?t=${Math.floor(Date.now() / 60000)}`, {
      cache: 'no-cache',
    });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const data = await resp.json();
    lastActivityData = data;
    renderActivityWidget(data);
  } catch {
    const updatedEl = document.getElementById('activityUpdated');
    if (updatedEl) updatedEl.textContent = I18N[currentLang].activity_empty;
  }
}
loadActivityWidget();

// ---------- Ortadaki Beyaz Bölgede Gizli Snake Oyunu ----------
let snakeSection = null;
let snakeLoopId = null;
let snakeActive = false;
let updateSnakeTexts = null;

function openSnakeGame() {
  const paper = document.querySelector('.paper');
  if (!paper) return;

  // Tatlı bir açılış akoru çal
  [880.0, 1174.66, 1479.98, 1760.0].forEach((n, idx) => {
    setTimeout(() => pluckString(n, 0.65, 0.5), idx * 75);
  });

  if (!snakeSection) {
    snakeSection = document.createElement('section');
    snakeSection.className = 'snake-section';
    snakeSection.innerHTML = `
      <div class="snake-card">
        <div class="snake-header">
          <h2 class="snake-title"></h2>
          <div class="snake-stats">
            <span class="snake-stat"><strong class="snake-score-lbl"></strong>: <span class="snake-score-val">0</span></span>
            <span class="snake-stat"><strong class="snake-best-lbl"></strong>: <span class="snake-best-val">0</span></span>
          </div>
          <button type="button" class="snake-close-btn" aria-label="Kapat">✕</button>
        </div>
        <div class="snake-board-wrap">
          <canvas class="snake-canvas" width="400" height="400"></canvas>
          <div class="snake-overlay" hidden>
            <p class="snake-over-text"></p>
            <button type="button" class="btn snake-restart-btn"></button>
          </div>
        </div>
        <div class="snake-footer">
          <p class="snake-hint"></p>
          <div class="snake-dpad" aria-label="Yön tuşları">
            <button type="button" data-dir="up">↑</button>
            <div class="snake-dpad-row">
              <button type="button" data-dir="left">←</button>
              <button type="button" data-dir="down">↓</button>
              <button type="button" data-dir="right">→</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Ortadaki beyaz kağıtta başlığın hemen altına yerleştir
    const helloSub = paper.querySelector('.hello-sub');
    if (helloSub && helloSub.nextSibling) {
      paper.insertBefore(snakeSection, helloSub.nextSibling);
    } else {
      paper.prepend(snakeSection);
    }

    const canvas = snakeSection.querySelector('.snake-canvas');
    const ctx = canvas.getContext('2d');
    const scoreVal = snakeSection.querySelector('.snake-score-val');
    const bestVal = snakeSection.querySelector('.snake-best-val');
    const overlay = snakeSection.querySelector('.snake-overlay');
    const restartBtn = snakeSection.querySelector('.snake-restart-btn');
    const closeBtn = snakeSection.querySelector('.snake-close-btn');

    const GRID = 20;
    const CELL = canvas.width / GRID;
    let snake = [];
    let dir = { x: 1, y: 0 };
    let nextDir = { x: 1, y: 0 };
    let food = { x: 14, y: 10 };
    let score = 0;
    let best = parseInt(localStorage.getItem('snakeBest') || '0', 10);
    let gameOver = false;
    bestVal.textContent = best;

    updateSnakeTexts = () => {
      const dict = I18N[currentLang];
      snakeSection.querySelector('.snake-title').textContent = `🐍 ${dict.snake_title}`;
      snakeSection.querySelector('.snake-score-lbl').textContent = dict.snake_score;
      snakeSection.querySelector('.snake-best-lbl').textContent = dict.snake_best;
      snakeSection.querySelector('.snake-hint').textContent = dict.snake_hint;
      snakeSection.querySelector('.snake-over-text').textContent = dict.snake_over;
      restartBtn.textContent = dict.snake_restart;
      closeBtn.title = dict.snake_close;
    };
    updateSnakeTexts();

    function spawnFood() {
      while (true) {
        const fx = Math.floor(Math.random() * GRID);
        const fy = Math.floor(Math.random() * GRID);
        if (!snake.some((s) => s.x === fx && s.y === fy)) {
          food = { x: fx, y: fy };
          break;
        }
      }
    }

    function drawBoard() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      ctx.fillStyle = isDark ? '#1c1c1c' : '#fdf7ee';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Hafif noktalı kare zemin
      ctx.fillStyle = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(107,76,53,0.12)';
      for (let gx = 0; gx < GRID; gx++) {
        for (let gy = 0; gy < GRID; gy++) {
          ctx.beginPath();
          ctx.arc(gx * CELL + CELL / 2, gy * CELL + CELL / 2, 1.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Kayısı yem (#e2925c + küçük yeşil yaprak)
      const fx = food.x * CELL + CELL / 2;
      const fy = food.y * CELL + CELL / 2;
      ctx.fillStyle = '#e2925c';
      ctx.strokeStyle = isDark ? '#f2f2f2' : '#2b2420';
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.arc(fx, fy + 1, CELL * 0.38, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#4fa858';
      ctx.beginPath();
      ctx.ellipse(fx + 3, fy - 6, 4, 2.2, -0.5, 0, Math.PI * 2);
      ctx.fill();

      // Yılan
      snake.forEach((seg, i) => {
        const sx = seg.x * CELL;
        const sy = seg.y * CELL;
        const pad = i === 0 ? 1.5 : 2.5;
        ctx.fillStyle = i === 0 ? '#4fa858' : i % 2 === 0 ? '#68b96f' : '#56a85e';
        ctx.strokeStyle = isDark ? '#101010' : '#2b2420';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(sx + pad, sy + pad, CELL - pad * 2, CELL - pad * 2, 6);
        } else {
          ctx.rect(sx + pad, sy + pad, CELL - pad * 2, CELL - pad * 2);
        }
        ctx.fill();
        ctx.stroke();

        // Baş kısmına tatlı gözler
        if (i === 0) {
          ctx.fillStyle = '#fff';
          const ex1 = sx + CELL / 2 + dir.x * 3 - dir.y * 3.5;
          const ey1 = sy + CELL / 2 + dir.y * 3 - dir.x * 3.5;
          const ex2 = sx + CELL / 2 + dir.x * 3 + dir.y * 3.5;
          const ey2 = sy + CELL / 2 + dir.y * 3 + dir.x * 3.5;
          ctx.beginPath();
          ctx.arc(ex1, ey1, 2.2, 0, Math.PI * 2);
          ctx.arc(ex2, ey2, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#161616';
          ctx.beginPath();
          ctx.arc(ex1 + dir.x * 0.7, ey1 + dir.y * 0.7, 1.1, 0, Math.PI * 2);
          ctx.arc(ex2 + dir.x * 0.7, ey2 + dir.y * 0.7, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    function step() {
      if (!snakeActive || gameOver) return;
      dir = nextDir;
      const head = {
        x: (snake[0].x + dir.x + GRID) % GRID,
        y: (snake[0].y + dir.y + GRID) % GRID,
      };

      // Kendine çarpma kontrolü
      if (snake.some((s) => s.x === head.x && s.y === head.y)) {
        gameOver = true;
        overlay.hidden = false;
        pluckString(587.33, 0.7, 0.5);
        return;
      }

      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        score += 1;
        scoreVal.textContent = score;
        if (score > best) {
          best = score;
          bestVal.textContent = best;
          localStorage.setItem('snakeBest', String(best));
        }
        const note = STRING_NOTES[(score + 4) % STRING_NOTES.length];
        pluckString(note, 0.55, 0.5);
        spawnFood();
      } else {
        snake.pop();
      }
      drawBoard();
    }

    function startSnake() {
      clearInterval(snakeLoopId);
      snake = [
        { x: 6, y: 10 },
        { x: 5, y: 10 },
        { x: 4, y: 10 },
      ];
      dir = { x: 1, y: 0 };
      nextDir = { x: 1, y: 0 };
      score = 0;
      gameOver = false;
      scoreVal.textContent = '0';
      overlay.hidden = true;
      spawnFood();
      drawBoard();
      snakeLoopId = setInterval(step, 115);
    }

    function setDir(nx, ny) {
      if (nx === -dir.x && ny === -dir.y) return;
      nextDir = { x: nx, y: ny };
    }

    window.addEventListener('keydown', (e) => {
      if (!snakeActive) return;
      const k = e.key.toLowerCase();
      if (k === 'arrowup' || k === 'w') {
        e.preventDefault();
        setDir(0, -1);
      } else if (k === 'arrowdown' || k === 's') {
        e.preventDefault();
        setDir(0, 1);
      } else if (k === 'arrowleft' || k === 'a') {
        e.preventDefault();
        setDir(-1, 0);
      } else if (k === 'arrowright' || k === 'd') {
        e.preventDefault();
        setDir(1, 0);
      } else if (k === ' ' && gameOver) {
        e.preventDefault();
        startSnake();
      }
    });

    snakeSection.querySelectorAll('[data-dir]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const d = btn.getAttribute('data-dir');
        if (d === 'up') setDir(0, -1);
        if (d === 'down') setDir(0, 1);
        if (d === 'left') setDir(-1, 0);
        if (d === 'right') setDir(1, 0);
      });
    });

    restartBtn.addEventListener('click', startSnake);
    closeBtn.addEventListener('click', () => {
      snakeActive = false;
      clearInterval(snakeLoopId);
      snakeSection.hidden = true;
    });

    snakeSection._startSnake = startSnake;
    snakeSection._drawBoard = drawBoard;
  }

  snakeSection.hidden = false;
  snakeActive = true;
  snakeSection._startSnake();
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
