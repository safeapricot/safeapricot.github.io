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
    activity_study: 'Çalışma',
    activity_study_only: 'Ders',
    activity_work_only: 'İş',
    activity_game: 'Oyun',
    activity_pc: 'PC Açık',
    activity_pc_scale: 'PC Açık (0–8s)',
    activity_cap_note: '1 kare = 10 saat kapasite',
    activity_no_record: 'Bugün için kayıt yok',
    activity_journal_chip: 'Günlük⋆˙◇',
    activity_journal_close: 'kapat',
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
    side_left: 'Sol',
    side_right: 'Sağ',
    inst_default: 'Varsayılan (Akustik)',
    inst_continued: (sideLabel, instName) => `${sideLabel}: ${instName} (devam)`,
    mario_egg: "it's-a me, furret! 🍄✨",
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
    activity_study: 'Focus',
    activity_study_only: 'Study',
    activity_work_only: 'Work',
    activity_game: 'Gaming',
    activity_pc: 'PC Uptime',
    activity_pc_scale: 'PC Uptime (0–8h)',
    activity_cap_note: '1 cell = 10h capacity',
    activity_no_record: 'No activity recorded on this day',
    activity_journal_chip: 'Journal⋆˙◇',
    activity_journal_close: 'close',
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
    side_left: 'Left',
    side_right: 'Right',
    inst_default: 'Default (Acoustic)',
    inst_continued: (sideLabel, instName) => `${sideLabel}: ${instName} (continued)`,
    mario_egg: "it's-a me, furret! 🍄✨",
    about_html: (x, y) =>
      `I'm <a class="name-link" href="${LINKS.youtube}" target="_blank" rel="noopener">Safa Açıkgöz</a>. I am currently <span class="hl">${x}</span> years old and a <span class="hl">${ordinalEn(y)}</span> year Computer Engineering student. I love playing video games in my free time. You can find me on social media as <span class="hl">@safeapricot</span>.`,
  },
};

let currentLang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('lang') || 'tr';
let currentTheme = new URLSearchParams(location.search).get('theme') || localStorage.getItem('theme') || 'light';

// Gizli kodlar
const SECRET_CODES = {
  mrb: () => showMessage(I18N[currentLang].mrb_reply),
  openwidget: () => {
    closePopup();
    if (!document.getElementById('activityWidget')) {
      sessionStorage.setItem('openActivityOnce', '1');
      window.location.href = 'index.html#activityWidget';
      return;
    }
    revealActivityWidget();
  },
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

// ---------- Üst Navbar (Ağaç Dalı Çizgili + Kontroller) ----------
const siteNav = document.getElementById('siteNav');
siteNav.innerHTML = `
  <div class="nav-inner">
    <a class="nav-brand" href="index.html" aria-label="Ana sayfa">
      <span class="nav-avatar">
        <img src="furrets/uykulufurret.JPEG" alt="Safa">
      </span>
      <span class="nav-name">safeapricot</span>
    </a>
    <nav class="nav-links" aria-label="Ana menü">
      <a class="nav-link" href="index.html#hakkimda" data-i18n="nav_about">slm</a>
      <a class="nav-link" href="index.html#iletisim" data-i18n="nav_contact">iletişim</a>
      <a class="nav-link nav-link-book" href="${LINKS.book}">${ICONS.book}<span data-i18n="tip_book">kitap</span></a>
    </nav>
    <div class="nav-actions">
      <button class="ctrl-btn nav-secret" id="secretBtn" type="button" title="Gizli kod / Secret code" aria-label="Gizli kod">?</button>
      <button class="ctrl-btn" id="soundBtn" type="button" title="Tel sesi / String sound"></button>
      <button class="ctrl-btn" id="langBtn" type="button" title="Dil / Language">EN</button>
      <button class="ctrl-btn" id="themeBtn" type="button" title="Tema / Theme"></button>
    </div>
  </div>
  <svg class="nav-branch-svg" viewBox="0 0 1000 16" preserveAspectRatio="none" aria-hidden="true">
    <path class="branch-main" d="M 0 8 Q 125 13 250 8 T 500 9 T 750 8 T 1000 9"/>
    <path class="branch-bark" d="M 0 8 Q 125 13 250 8 T 500 9 T 750 8 T 1000 9"/>
  </svg>
  <span class="nav-leaf nav-leaf-l" aria-hidden="true"></span>
  <span class="nav-leaf nav-leaf-m" aria-hidden="true"></span>
  <span class="nav-leaf nav-leaf-r" aria-hidden="true"></span>
`;

const secretBtn = document.getElementById('secretBtn');
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

siteNav.querySelector('.nav-brand').addEventListener('click', (e) => {
  if (!window.location.pathname.endsWith('kitap.html')) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

let lastScrollY = window.scrollY;
function updateNavOnScroll() {
  const y = window.scrollY;
  siteNav.classList.toggle('scrolled', y > 12);

  if (window.innerWidth <= 680) {
    const delta = y - lastScrollY;
    if (y <= 40) {
      siteNav.classList.remove('nav-hidden');
    } else if (y > 72 && delta > 6) {
      siteNav.classList.add('nav-hidden');
    } else if (delta < -4) {
      siteNav.classList.remove('nav-hidden');
    }
  } else {
    siteNav.classList.remove('nav-hidden');
  }
  lastScrollY = y;
}
window.addEventListener('scroll', updateNavOnScroll, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 680) siteNav.classList.remove('nav-hidden');
});
updateNavOnScroll();

// Çoklu hesap menüleri (Instagram & Steam - mobil dokunma desteği)
const socialDropdowns = document.querySelectorAll('.social-dropdown');
socialDropdowns.forEach((dropdown) => {
  const btn = dropdown.querySelector('button.social');
  if (!btn) return;
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    socialDropdowns.forEach((other) => {
      if (other !== dropdown) {
        other.classList.remove('open');
        const otherBtn = other.querySelector('button.social');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      }
    });
    const isOpen = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    if (!isOpen) btn.blur();
  });
});
document.addEventListener('click', (e) => {
  socialDropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      const btn = dropdown.querySelector('button.social');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
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

// ---------- Tel Sesleri, 12 Çalgı Modu & Melodi Easter Egg Altyapısı ----------
// Varsayılan mod: D majör pentatonik, iki oktav (yumuşak gezinme sesi)
const STRING_NOTES = [
  587.33, 659.25, 739.99, 880.0, 987.77, 1174.66,
  1318.51, 1479.98, 1760.0, 1975.53, 2349.32, 2637.02,
];

// Çalgı modları: C majör diyatonik dizi (Sol: C4–A4, Sağ: B4–G5 — gerçek melodiler çalınabilir)
const MELODY_NOTES = [
  261.63, 293.66, 329.63, 349.23, 392.0, 440.0,
  493.88, 523.25, 587.33, 659.25, 698.46, 783.99,
];
const MELODY_PITCH_CLASSES = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

const LEFT_INSTRUMENTS = [
  'grand_piano',
  'kalimba',
  'electric_guitar',
  'organ',
  'synth',
  'rhodes',
];
const RIGHT_INSTRUMENTS = [
  'music_box',
  'marimba',
  'chiptune',
  'cello',
  'flute',
  'harp',
];

const INSTRUMENTS = {
  grand_piano:     { tr: '🎹 Grand Piano',     en: '🎹 Grand Piano' },
  kalimba:         { tr: '🪵 Kalimba',         en: '🪵 Kalimba' },
  electric_guitar: { tr: '🎸 Elektro Gitar',   en: '🎸 Electric Guitar' },
  organ:           { tr: '🎼 Organ',           en: '🎼 Organ' },
  synth:           { tr: '🎛️ Synth',           en: '🎛️ Synth' },
  rhodes:          { tr: '✨ Rhodes',          en: '✨ Rhodes' },
  music_box:       { tr: '🎵 Müzik Kutusu',    en: '🎵 Music Box' },
  marimba:         { tr: '🥁 Marimba',         en: '🥁 Marimba' },
  chiptune:        { tr: '👾 8-Bit Chiptune',  en: '👾 8-Bit Chiptune' },
  cello:           { tr: '🎻 Çello',           en: '🎻 Cello' },
  flute:           { tr: '🌬️ Flüt',            en: '🌬️ Flute' },
  harp:            { tr: '🪽 Kristal Arp',     en: '🪽 Crystal Harp' },
};

function getInstrumentLabel(id) {
  if (id === 'default' || !INSTRUMENTS[id]) return I18N[currentLang].inst_default;
  return INSTRUMENTS[id][currentLang] || INSTRUMENTS[id].tr;
}

let audioCtx = null;
let masterGain = null;
const pluckBuffers = new Map();
let noiseBufferCache = null;
let overdriveCurveCache = null;

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
  soften.frequency.value = 5800;
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

function getPluckBuffer(freq, decayRate = 0.9965, dur = 1.6) {
  const key = `${freq}_${decayRate}`;
  if (pluckBuffers.has(key)) return pluckBuffers.get(key);
  const sr = audioCtx.sampleRate;
  const length = Math.floor(sr * dur);
  const buffer = audioCtx.createBuffer(1, length, sr);
  const data = buffer.getChannelData(0);
  const period = Math.max(2, Math.round(sr / freq));

  let last = 0;
  for (let i = 0; i < period; i++) {
    const noise = Math.random() * 2 - 1;
    last = last * 0.55 + noise * 0.45;
    data[i] = last;
  }
  for (let i = period; i < length; i++) {
    data[i] = decayRate * 0.5 * (data[i - period] + data[Math.max(i - period - 1, 0)]);
  }
  pluckBuffers.set(key, buffer);
  return buffer;
}

function getNoiseBuffer() {
  if (noiseBufferCache) return noiseBufferCache;
  const sr = audioCtx.sampleRate;
  const len = Math.floor(sr * 0.6);
  const buf = audioCtx.createBuffer(1, len, sr);
  const ch = buf.getChannelData(0);
  for (let i = 0; i < len; i++) ch[i] = Math.random() * 2 - 1;
  noiseBufferCache = buf;
  return buf;
}

function getOverdriveCurve() {
  if (overdriveCurveCache) return overdriveCurveCache;
  const samples = 256;
  const curve = new Float32Array(samples);
  const k = 14;
  for (let i = 0; i < samples; i++) {
    const x = (i * 2) / samples - 1;
    curve[i] = ((3 + k) * x * 20 * (Math.PI / 180)) / (Math.PI + k * Math.abs(x));
  }
  overdriveCurveCache = curve;
  return curve;
}

function createPanDest(pan) {
  if (audioCtx.createStereoPanner) {
    const panner = audioCtx.createStereoPanner();
    panner.pan.value = Math.max(-0.85, Math.min(0.85, pan * 2 - 1));
    panner.connect(masterGain);
    return panner;
  }
  return masterGain;
}

function pluckString(freq, intensity, pan, decayRate = 0.9965) {
  if (!soundEnabled || !audioCtx || audioCtx.state !== 'running') return;
  const now = audioCtx.currentTime;

  const src = audioCtx.createBufferSource();
  src.buffer = getPluckBuffer(freq, decayRate, decayRate > 0.997 ? 2.2 : 1.6);

  // Ses şiddeti imleç hızıyla orantılı (yavaş geçince fısıltı gibi)
  const gain = audioCtx.createGain();
  const vol = 0.02 + 0.28 * intensity * intensity;
  gain.gain.setValueAtTime(vol, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + (decayRate > 0.997 ? 2.1 : 1.5));

  const tone = audioCtx.createBiquadFilter();
  tone.type = 'lowpass';
  tone.frequency.value = 1800 + 5200 * intensity;

  src.connect(tone).connect(gain).connect(createPanDest(pan));
  src.start(now);
  src.stop(now + (decayRate > 0.997 ? 2.2 : 1.6));
}

function playCoinChime() {
  if (!soundEnabled || !audioCtx || audioCtx.state !== 'running') return;
  const now = audioCtx.currentTime;
  [
    { f: 987.77, t: 0, d: 0.09 },
    { f: 1318.51, t: 0.085, d: 0.34 },
  ].forEach((n) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(n.f, now + n.t);
    g.gain.setValueAtTime(0.0001, now + n.t);
    g.gain.linearRampToValueAtTime(0.14, now + n.t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + n.t + n.d);
    osc.connect(g).connect(masterGain);
    osc.start(now + n.t);
    osc.stop(now + n.t + n.d + 0.03);
  });
}

function playInstrumentNote(instrumentId, freq, intensity, pan) {
  if (!soundEnabled || !audioCtx || audioCtx.state !== 'running') return;
  if (instrumentId === 'default' || !INSTRUMENTS[instrumentId]) {
    pluckString(freq, intensity, pan);
    return;
  }

  const now = audioCtx.currentTime;
  const dest = createPanDest(pan);
  const vel = 0.14 + 0.86 * intensity;

  switch (instrumentId) {
    case 'grand_piano': {
      const filt = audioCtx.createBiquadFilter();
      filt.type = 'lowpass';
      filt.frequency.setValueAtTime(1600 + 4800 * vel, now);
      filt.frequency.exponentialRampToValueAtTime(420 + freq * 1.4, now + 1.3);

      const env = audioCtx.createGain();
      env.gain.setValueAtTime(0.0001, now);
      env.gain.linearRampToValueAtTime(0.24 * vel, now + 0.007);
      env.gain.exponentialRampToValueAtTime(0.06 * vel, now + 0.38);
      env.gain.exponentialRampToValueAtTime(0.0001, now + 1.65);

      filt.connect(env).connect(dest);

      [
        { mult: 1, det: -3, type: 'triangle', gain: 0.72 },
        { mult: 1, det: 3, type: 'sine', gain: 0.52 },
        { mult: 2, det: 0, type: 'sine', gain: 0.24 },
        { mult: 3, det: 0, type: 'sine', gain: 0.1 },
      ].forEach((p) => {
        const osc = audioCtx.createOscillator();
        const pg = audioCtx.createGain();
        osc.type = p.type;
        osc.frequency.setValueAtTime(freq * p.mult, now);
        osc.detune.setValueAtTime(p.det, now);
        pg.gain.value = p.gain;
        osc.connect(pg).connect(filt);
        osc.start(now);
        osc.stop(now + 1.7);
      });
      break;
    }

    case 'kalimba': {
      const body = audioCtx.createOscillator();
      const bodyG = audioCtx.createGain();
      body.type = 'sine';
      body.frequency.setValueAtTime(freq, now);
      bodyG.gain.setValueAtTime(0.0001, now);
      bodyG.gain.linearRampToValueAtTime(0.32 * vel, now + 0.004);
      bodyG.gain.exponentialRampToValueAtTime(0.0001, now + 1.15);
      body.connect(bodyG).connect(dest);
      body.start(now);
      body.stop(now + 1.2);

      // Metalik kalimba dili tınısı
      const tine = audioCtx.createOscillator();
      const tineG = audioCtx.createGain();
      tine.type = 'sine';
      tine.frequency.setValueAtTime(freq * 2.92, now);
      tineG.gain.setValueAtTime(0.0001, now);
      tineG.gain.linearRampToValueAtTime(0.11 * vel, now + 0.002);
      tineG.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
      tine.connect(tineG).connect(dest);
      tine.start(now);
      tine.stop(now + 0.18);
      break;
    }

    case 'electric_guitar': {
      const src = audioCtx.createBufferSource();
      src.buffer = getPluckBuffer(freq * 0.5, 0.997, 1.8);

      const drive = audioCtx.createWaveShaper();
      drive.curve = getOverdriveCurve();
      drive.oversample = '2x';

      const preGain = audioCtx.createGain();
      preGain.gain.value = 1.4 + 2.2 * vel;

      const cab = audioCtx.createBiquadFilter();
      cab.type = 'lowpass';
      cab.frequency.value = 2100 + 1800 * vel;
      cab.Q.value = 1.6;

      const env = audioCtx.createGain();
      env.gain.setValueAtTime(0.16 * vel, now);
      env.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

      src.connect(preGain).connect(drive).connect(cab).connect(env).connect(dest);
      src.start(now);
      src.stop(now + 1.8);
      break;
    }

    case 'organ': {
      const filt = audioCtx.createBiquadFilter();
      filt.type = 'lowpass';
      filt.frequency.value = 2400 + 1400 * vel;

      const env = audioCtx.createGain();
      env.gain.setValueAtTime(0.0001, now);
      env.gain.linearRampToValueAtTime(0.16 * vel, now + 0.025);
      env.gain.setValueAtTime(0.14 * vel, now + 0.35);
      env.gain.exponentialRampToValueAtTime(0.0001, now + 0.95);

      const lfo = audioCtx.createOscillator();
      const lfoG = audioCtx.createGain();
      lfo.frequency.value = 5.4;
      lfoG.gain.value = 4.5;
      lfo.connect(lfoG);
      lfo.start(now);
      lfo.stop(now + 1.0);

      filt.connect(env).connect(dest);

      [
        { mult: 0.5, g: 0.35 },
        { mult: 1, g: 0.65 },
        { mult: 2, g: 0.4 },
        { mult: 3, g: 0.2 },
      ].forEach((d) => {
        const osc = audioCtx.createOscillator();
        const og = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * d.mult, now);
        lfoG.connect(osc.detune);
        og.gain.value = d.g;
        osc.connect(og).connect(filt);
        osc.start(now);
        osc.stop(now + 1.0);
      });
      break;
    }

    case 'synth': {
      const filt = audioCtx.createBiquadFilter();
      filt.type = 'lowpass';
      filt.Q.value = 5.2;
      filt.frequency.setValueAtTime(320 + 3600 * vel, now);
      filt.frequency.exponentialRampToValueAtTime(280 + freq * 0.8, now + 0.85);

      const env = audioCtx.createGain();
      env.gain.setValueAtTime(0.0001, now);
      env.gain.linearRampToValueAtTime(0.17 * vel, now + 0.018);
      env.gain.exponentialRampToValueAtTime(0.0001, now + 1.05);

      filt.connect(env).connect(dest);

      [-9, 9].forEach((det, idx) => {
        const osc = audioCtx.createOscillator();
        osc.type = idx === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        osc.detune.setValueAtTime(det, now);
        osc.connect(filt);
        osc.start(now);
        osc.stop(now + 1.1);
      });
      break;
    }

    case 'rhodes': {
      const env = audioCtx.createGain();
      env.gain.setValueAtTime(0.0001, now);
      env.gain.linearRampToValueAtTime(0.24 * vel, now + 0.008);
      env.gain.exponentialRampToValueAtTime(0.0001, now + 1.65);
      env.connect(dest);

      const warm = audioCtx.createOscillator();
      warm.type = 'sine';
      warm.frequency.setValueAtTime(freq, now);
      warm.connect(env);
      warm.start(now);
      warm.stop(now + 1.7);

      const tine = audioCtx.createOscillator();
      const tineG = audioCtx.createGain();
      tine.type = 'sine';
      tine.frequency.setValueAtTime(freq * 4, now);
      tineG.gain.setValueAtTime(0.0001, now);
      tineG.gain.linearRampToValueAtTime(0.09 * vel, now + 0.003);
      tineG.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
      tine.connect(tineG).connect(dest);
      tine.start(now);
      tine.stop(now + 0.26);
      break;
    }

    case 'music_box': {
      const fHi = freq * 2;
      [
        { mult: 1, g: 0.22 * vel, dur: 1.45 },
        { mult: 2.756, g: 0.07 * vel, dur: 0.35 },
      ].forEach((p) => {
        const osc = audioCtx.createOscillator();
        const og = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(fHi * p.mult, now);
        og.gain.setValueAtTime(0.0001, now);
        og.gain.linearRampToValueAtTime(p.g, now + 0.002);
        og.gain.exponentialRampToValueAtTime(0.0001, now + p.dur);
        osc.connect(og).connect(dest);
        osc.start(now);
        osc.stop(now + p.dur + 0.04);
      });
      break;
    }

    case 'marimba': {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.linearRampToValueAtTime(0.32 * vel, now + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.6);

      const ov = audioCtx.createOscillator();
      const ovG = audioCtx.createGain();
      ov.type = 'sine';
      ov.frequency.setValueAtTime(freq * 4, now);
      ovG.gain.setValueAtTime(0.0001, now);
      ovG.gain.linearRampToValueAtTime(0.11 * vel, now + 0.002);
      ovG.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
      ov.connect(ovG).connect(dest);
      ov.start(now);
      ov.stop(now + 0.12);
      break;
    }

    case 'chiptune': {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, now);
      g.gain.setValueAtTime(0.0001, now);
      g.gain.linearRampToValueAtTime(0.13 * vel, now + 0.004);
      g.gain.setValueAtTime(0.1 * vel, now + 0.14);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
      osc.connect(g).connect(dest);
      osc.start(now);
      osc.stop(now + 0.46);
      break;
    }

    case 'cello': {
      const fLow = freq * 0.5;
      const filt = audioCtx.createBiquadFilter();
      filt.type = 'lowpass';
      filt.frequency.setValueAtTime(750 + 1100 * vel, now);
      filt.Q.value = 1.2;

      const env = audioCtx.createGain();
      env.gain.setValueAtTime(0.0001, now);
      env.gain.linearRampToValueAtTime(0.22 * vel, now + 0.085);
      env.gain.setValueAtTime(0.18 * vel, now + 0.55);
      env.gain.exponentialRampToValueAtTime(0.0001, now + 1.35);

      const vib = audioCtx.createOscillator();
      const vibG = audioCtx.createGain();
      vib.frequency.value = 5.2;
      vibG.gain.value = 9;
      vib.connect(vibG);
      vib.start(now);
      vib.stop(now + 1.4);

      filt.connect(env).connect(dest);

      [-6, 6].forEach((det) => {
        const osc = audioCtx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(fLow, now);
        osc.detune.setValueAtTime(det, now);
        vibG.connect(osc.detune);
        osc.connect(filt);
        osc.start(now);
        osc.stop(now + 1.4);
      });
      break;
    }

    case 'flute': {
      const env = audioCtx.createGain();
      env.gain.setValueAtTime(0.0001, now);
      env.gain.linearRampToValueAtTime(0.2 * vel, now + 0.055);
      env.gain.setValueAtTime(0.16 * vel, now + 0.4);
      env.gain.exponentialRampToValueAtTime(0.0001, now + 0.95);

      const vib = audioCtx.createOscillator();
      const vibG = audioCtx.createGain();
      vib.frequency.value = 5.0;
      vibG.gain.value = 8;
      vib.connect(vibG);
      vib.start(now);
      vib.stop(now + 1.0);

      const osc = audioCtx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      vibG.connect(osc.detune);
      osc.connect(env).connect(dest);
      osc.start(now);
      osc.stop(now + 1.0);

      // Hafif nefes sesi
      const breath = audioCtx.createBufferSource();
      breath.buffer = getNoiseBuffer();
      const bp = audioCtx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = freq;
      bp.Q.value = 4.5;
      const bg = audioCtx.createGain();
      bg.gain.setValueAtTime(0.0001, now);
      bg.gain.linearRampToValueAtTime(0.03 * vel, now + 0.04);
      bg.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
      breath.connect(bp).connect(bg).connect(dest);
      breath.start(now);
      breath.stop(now + 0.3);
      break;
    }

    case 'harp': {
      pluckString(freq, Math.min(1, intensity * 0.9 + 0.1), pan, 0.9982);
      break;
    }

    default:
      pluckString(freq, intensity, pan);
  }
}

// ---------- Çalgı Modu Bildirimi (Toast) ----------
let instrumentToastEl = null;
let instrumentToastTimer = null;

function showInstrumentToast(text) {
  if (!instrumentToastEl) {
    instrumentToastEl = document.createElement('div');
    instrumentToastEl.className = 'instrument-toast';
    instrumentToastEl.setAttribute('aria-live', 'polite');
    document.body.appendChild(instrumentToastEl);
  }
  instrumentToastEl.textContent = text;
  instrumentToastEl.classList.add('show');
  clearTimeout(instrumentToastTimer);
  instrumentToastTimer = setTimeout(() => {
    instrumentToastEl.classList.remove('show');
  }, 2200);
}

// ---------- Genişletilebilir Melodi Bazlı Easter Egg Sistemi ----------
// Yeni melodi easter egg eklemek için bu diziye bir nesne eklemen yeterli:
// { id, instrument (isteğe bağlı), sequence: ['E','E','E','C','E','G'], cooldownMs, onTrigger }
const MELODY_EASTER_EGGS = [
  {
    id: 'mario_piano',
    instrument: 'grand_piano',
    sequence: ['E', 'E', 'E', 'C', 'E', 'G'],
    cooldownMs: 3000,
    lastTriggered: -Infinity,
    onTrigger: () => {
      playCoinChime();
      showMessage(I18N[currentLang].mario_egg);
    },
  },
];

let melodyHistory = [];

function matchesMelodySequence(entries, egg) {
  const seq = egg.sequence;
  if (!entries.length || entries.length < seq.length) return false;

  const last = entries[entries.length - 1];
  if (last.pitchClass !== seq[seq.length - 1]) return false;
  if (egg.instrument && last.instrument !== egg.instrument) return false;

  let si = seq.length - 2;
  let nextMatched = last;
  let skipped = 0;

  for (let i = entries.length - 2; i >= 0 && si >= 0; i--) {
    const entry = entries[i];
    if (egg.instrument && entry.instrument !== egg.instrument) break;

    if (entry.pitchClass === seq[si]) {
      si--;
      nextMatched = entry;
      skipped = 0;
    } else if (skipped < 3 && nextMatched.t - entry.t <= 220) {
      // İki nota arasına hızlıca geçilen ara teller (ör. E'den C'ye giderken D telinden geçiş)
      skipped++;
    } else {
      return false;
    }
  }
  return si < 0;
}

function recordMelodyNote(instrument, pitchClass, side, sideIndex, now) {
  melodyHistory.push({ instrument, pitchClass, side, sideIndex, t: now });
  melodyHistory = melodyHistory.filter((item) => now - item.t <= 7000);
  if (melodyHistory.length > 28) {
    melodyHistory = melodyHistory.slice(-28);
  }

  for (const egg of MELODY_EASTER_EGGS) {
    if (now - (egg.lastTriggered ?? -Infinity) < (egg.cooldownMs || 2500)) continue;
    if (matchesMelodySequence(melodyHistory, egg)) {
      egg.lastTriggered = now;
      melodyHistory = [];
      egg.onTrigger();
      break;
    }
  }
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

  const sideMode = { left: 'default', right: 'default' };
  const sideFlash = { left: 0, right: 0 };
  const repeatTracker = {
    left: { idx: 0, count: 0, lastT: 0 },
    right: { idx: 0, count: 0, lastT: 0 },
  };
  const sweepTracker = {
    left: { pass: 0, pos: 0, lastT: 0 },
    right: { pass: 0, pos: 0, lastT: 0 },
  };

  // Klavye kısayolları (soldan sağa 12 tel: 1 2 3 4 5 6 | 7 8 9 0 * -)
  const KEY_CODE_TO_STRING = {
    Digit1: 0,
    Digit2: 1,
    Digit3: 2,
    Digit4: 3,
    Digit5: 4,
    Digit6: 5,
    Digit7: 6,
    Digit8: 7,
    Digit9: 8,
    Digit0: 9,
    Minus: 10,
    Equal: 11,
  };
  const KEY_CHAR_TO_STRING = {
    '1': 0,
    '2': 1,
    '3': 2,
    '4': 3,
    '5': 4,
    '6': 5,
    '7': 6,
    '8': 7,
    '9': 8,
    '0': 9,
    '*': 10,
    '-': 11,
  };

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
        const globalIdx = noteIndex++;
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
          defaultNote: STRING_NOTES[globalIdx % STRING_NOTES.length],
          melodyNote: MELODY_NOTES[globalIdx % MELODY_NOTES.length],
          pitchClass: MELODY_PITCH_CLASSES[globalIdx % MELODY_PITCH_CLASSES.length],
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

  function triggerSideChange(side, modeId, isContinuation) {
    sideMode[side] = modeId;
    sideFlash[side] = 1;
    melodyHistory = [];
    const dict = I18N[currentLang];
    const sideLabel = side === 'left' ? dict.side_left : dict.side_right;
    const instLabel = getInstrumentLabel(modeId);
    showInstrumentToast(
      isContinuation ? dict.inst_continued(sideLabel, instLabel) : `${sideLabel}: ${instLabel}`
    );
  }

  // 3 turluk gidiş-geliş kaydırma takipçisi (Sağ: 1→6→1→6, Sol: 6→1→6→1)
  function advanceThreeSweep(st, idx, now, startIdx) {
    const dir0 = startIdx === 1 ? 1 : -1;
    const endIdx = startIdx === 1 ? 6 : 1;
    const step = st.pass % 2 === 0 ? dir0 : -dir0;
    const targetEnd = st.pass % 2 === 0 ? endIdx : startIdx;

    if (now - st.lastT > 1500) {
      st.pass = 0;
      st.pos = 0;
    }

    if (st.pass === 0 && st.pos === 0) {
      if (idx === startIdx) {
        st.pos = startIdx;
        st.lastT = now;
      }
      return false;
    }

    if (st.pos === targetEnd && st.pass < 2) {
      if (idx === targetEnd) {
        st.pass++;
        st.pos = targetEnd;
        st.lastT = now;
        return false;
      }
      if (idx === targetEnd - step) {
        st.pass++;
        st.pos = idx;
        st.lastT = now;
        return false;
      }
    }

    if (idx === st.pos + step) {
      st.pos = idx;
      st.lastT = now;
      if (st.pass === 2 && idx === endIdx) {
        st.pass = 0;
        st.pos = 0;
        st.lastT = 0;
        return true;
      }
      return false;
    }

    st.pass = 0;
    st.pos = idx === startIdx ? startIdx : 0;
    st.lastT = now;
    return false;
  }

  function triggerLinePluck(line, intensity, dir, hitY, now) {
    // Telin sapması doğrudan imleç hızıyla (veya tuş şiddetiyle) orantılı
    const force = (2 + 46 * intensity) * dir;
    const radius = 90 + 120 * intensity;
    for (let k = 1; k < N - 1; k++) {
      const py = (k / (N - 1)) * height;
      const distY = Math.abs(py - hitY);
      if (distY < radius) {
        const falloff = Math.cos((distY / radius) * (Math.PI / 2));
        line.vx[k] += force * falloff * 0.42;
      }
    }

    // Nota çal (aynı tel için kısa bekleme süresi)
    if (now - line.lastPluck <= 45) return;
    line.lastPluck = now;

    // 1) Aynı teli art arda 10 kez çalınca o tarafın çalgısını değiştir (tekrarda varsayılana dön)
    const rep = repeatTracker[line.side];
    if (rep.idx === line.sideIndex && now - rep.lastT < 1800) {
      rep.count++;
    } else {
      rep.idx = line.sideIndex;
      rep.count = 1;
    }
    rep.lastT = now;

    if (rep.count >= 10) {
      rep.count = 0;
      const list = line.side === 'left' ? LEFT_INSTRUMENTS : RIGHT_INSTRUMENTS;
      const targetId = list[line.sideIndex - 1] || 'default';
      const nextMode = sideMode[line.side] === targetId ? 'default' : targetId;
      triggerSideChange(line.side, nextMode, false);
    }

    // 2) Karşı tarafın çalgısını devam ettirme kaydırması (3 kere art arda: 123456-654321-123456 veya 654321-123456-654321)
    if (line.side === 'right') {
      if (advanceThreeSweep(sweepTracker.right, line.sideIndex, now, 1)) {
        rep.count = 0;
        triggerSideChange('right', sideMode.left, true);
      }
    } else {
      if (advanceThreeSweep(sweepTracker.left, line.sideIndex, now, 6)) {
        rep.count = 0;
        triggerSideChange('left', sideMode.right, true);
      }
    }

    // Seçili moda göre nota ve çalgıyı çal
    const activeMode = sideMode[line.side];
    const activeFreq = activeMode === 'default' ? line.defaultNote : line.melodyNote;
    playInstrumentNote(activeMode, activeFreq, intensity, line.baseX / width);

    if (activeMode !== 'default') {
      recordMelodyNote(activeMode, line.pitchClass, line.side, line.sideIndex, now);
    }

    // Sağdaki 6 telden ortadaki ikisi (3. ve 4. tel) ardarda 5 kere çalınırsa Snake açılır
    clearTimeout(rightMidTimer);
    if (line.isRightMid) {
      rightMidPlucks.push(line.sideIndex);
      const count3 = rightMidPlucks.filter((x) => x === 3).length;
      const count4 = rightMidPlucks.filter((x) => x === 4).length;
      if (count3 >= 5 && count4 >= 5) {
        rightMidPlucks = [];
        openSnakeGame();
      } else if (rightMidPlucks.length >= 5 && count3 >= 2 && count4 >= 2) {
        rightMidTimer = setTimeout(() => {
          rightMidPlucks = [];
          openSnakeGame();
        }, 400);
      }
    } else {
      rightMidPlucks = [];
    }
  }

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

        // Fare sola gidiyorsa telleri sağdan sola sırada tara ki melodi ve 6→1 kaydırması doğru sırada işlensin
        const orderedLines = mvx < 0 ? [...lines].reverse() : lines;
        orderedLines.forEach((line) => {
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

          triggerLinePluck(line, intensity, Math.sign(mvx) || 1, my, now);
        });
      }
      prevMouse = { x: mx, y: my, t: now };
    },
    { passive: true }
  );

  window.addEventListener('keydown', (e) => {
    if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
    if (document.querySelector('.popup-backdrop.show')) return;
    const isEditable = (el) =>
      el &&
      (el.tagName === 'INPUT' ||
        el.tagName === 'TEXTAREA' ||
        el.tagName === 'SELECT' ||
        el.isContentEditable);
    if (isEditable(e.target) || isEditable(document.activeElement)) return;

    let idx = KEY_CODE_TO_STRING[e.code];
    if (idx === undefined) idx = KEY_CHAR_TO_STRING[e.key];
    if (idx === undefined || !lines[idx]) return;

    const ctx = ensureAudio();
    if (ctx && ctx.state === 'suspended') ctx.resume();

    const dir = idx % 2 === 0 ? 1 : -1;
    triggerLinePluck(lines[idx], 0.72, dir, height * 0.5, performance.now());
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);
    if (lines.length) {
      const rootStyle = getComputedStyle(document.documentElement);
      const waveColor =
        rootStyle.getPropertyValue('--wave-color').trim() || '#faf4eb';
      const accentColor =
        rootStyle.getPropertyValue('--accent').trim() || '#e2925c';

      sideFlash.left = Math.max(0, sideFlash.left - 0.032);
      sideFlash.right = Math.max(0, sideFlash.right - 0.032);
      ctx.lineCap = 'round';

      lines.forEach((line) => {
        const flash = sideFlash[line.side];
        ctx.strokeStyle = flash > 0.35 ? accentColor : waveColor;
        ctx.lineWidth = 2.2 + 1.3 * flash;
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = flash > 0.01 ? 10 * flash : 0;

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
      ctx.shadowBlur = 0;
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}
initBackgroundWaves();

// ---------- Başlık Altı Rastgele Cümle (yazi.txt) ----------
const FALLBACK_HELLO_SUBS = [
  'ama bana derler sefa',
  've... ne diyeceğimi unuttum.',
  've bugün de hayattayım.',
  've watashi wa hatice ga daisuki.',
  've uykum var.',
  've furretleri severim.',
  've canım sıkıldı.',
  'ammavelakin sefa değil.',
  've evet. zamanımı kullanmakta hic iyi değilim.',
  've yeşili çok severim.',
  "ve cs'de ana hesabımda banlıyım.",
  've sen de bugün şanslı günündesin:)',
  'amaamamamamaamama aamaaaaa!!!!',
];

async function loadRandomHelloSub() {
  const el = document.getElementById('helloSub');
  if (!el) return;

  let lines = FALLBACK_HELLO_SUBS;
  try {
    const res = await fetch('yazi.txt', { cache: 'no-cache' });
    if (res.ok) {
      const text = await res.text();
      const parsed = text
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);
      if (parsed.length > 0) lines = parsed;
    }
  } catch (_) {}

  el.textContent = lines[Math.floor(Math.random() * lines.length)];
}
loadRandomHelloSub();

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

function buildFocusSplitGradient(studyCol, workCol) {
  return `linear-gradient(135deg, ${studyCol} 50%, ${workCol} 50%) padding-box no-repeat`;
}

function buildHeatmapCellBackground(rec, studyColor, workColor, gameColor, accentColor) {
  if (
    !rec ||
    ((rec.study || 0) <= 0 && (rec.work || 0) <= 0 && (rec.game || 0) <= 0 && (rec.pc || 0) <= 0)
  ) {
    return 'var(--hm-empty)';
  }
  const studyH = Math.max(0, rec.study || 0) / 3600;
  const workH = Math.max(0, rec.work || 0) / 3600;
  const gameH = Math.max(0, rec.game || 0) / 3600;
  const pcH = Math.max(0, rec.pc || 0) / 3600;
  const totalH = studyH + workH + gameH;

  const denom = totalH >= 10 ? totalH : 10;
  const studyFrac = studyH / denom;
  const workFrac = workH / denom;
  const gameFrac = gameH / denom;

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
  if (workFrac > 0.001 && cur < 99.95) {
    const next = Math.min(100, cur + workFrac * 100);
    stops.push(`${workColor} ${cur.toFixed(2)}%`, `${workColor} ${next.toFixed(2)}%`);
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
  return `linear-gradient(to top, ${stops.join(', ')}) padding-box no-repeat`;
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
  const workCol = colors.work || '#1D4ED8';
  const gameCol = colors.game || '#A78BFA';
  const accentCol = colors.accent || '#E2925C';

  const rec = days[dateKey] || { study: 0, work: 0, game: 0, pc: 0 };
  const parts = dateKey.split('-').map(Number);
  const dt = new Date(parts[0], parts[1] - 1, parts[2]);

  const studySec = rec.study || 0;
  const workSec = rec.work || 0;
  const focusSec = studySec + workSec;
  const gameSec = rec.game || 0;
  const pcSec = rec.pc || 0;
  const noteText = typeof rec.note === 'string' ? rec.note.trim() : '';

  const studyH = studySec / 3600;
  const workH = workSec / 3600;
  const gameH = gameSec / 3600;
  const totalH = studyH + workH + gameH;
  const cap = Math.max(10, totalH);
  const studyW = (studyH / cap) * 100;
  const workW = (workH / cap) * 100;
  const gameW = (gameH / cap) * 100;
  const pcRatio = Math.min(1, (pcSec / 3600) / 8);
  const remW = Math.max(0, 100 - studyW - workW - gameW);

  detailEl.innerHTML = '';

  const head = document.createElement('div');
  head.className = 'activity-detail-head';

  const dateSpan = document.createElement('span');
  dateSpan.className = 'activity-detail-date';
  dateSpan.textContent = formatActivityDateLabel(dt, currentLang);
  head.appendChild(dateSpan);

  const metrics = document.createElement('div');
  metrics.className = 'activity-detail-metrics';
  if (focusSec <= 0 && gameSec <= 0 && pcSec <= 0) {
    const emptySpan = document.createElement('span');
    emptySpan.style.color = 'var(--ink-soft)';
    emptySpan.textContent = dict.activity_no_record;
    metrics.appendChild(emptySpan);
  } else {
    const items = [
      { col: buildFocusSplitGradient(studyCol, workCol), label: dict.activity_study, val: formatActivityDuration(focusSec, currentLang) },
      { col: gameCol, label: dict.activity_game, val: formatActivityDuration(gameSec, currentLang) },
      { col: accentCol, label: dict.activity_pc, val: formatActivityDuration(pcSec, currentLang) },
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
  if (workW > 0.1) {
    const w = document.createElement('span');
    w.style.width = `${workW.toFixed(2)}%`;
    w.style.background = workCol;
    bar.appendChild(w);
  }
  if (gameW > 0.1) {
    const g = document.createElement('span');
    g.style.width = `${gameW.toFixed(2)}%`;
    g.style.background = gameCol;
    bar.appendChild(g);
  }
  if (remW > 0.1 && pcSec > 0) {
    const r = document.createElement('span');
    r.style.width = `${remW.toFixed(2)}%`;
    r.style.background = hexToRgba(accentCol, 0.2 + pcRatio * 0.65);
    bar.appendChild(r);
  }
  detailEl.appendChild(bar);

  const hasGames = rec.games && Object.keys(rec.games).some((k) => rec.games[k] > 0);
  if (hasGames || noteText.length > 0) {
    const gamesRow = document.createElement('div');
    gamesRow.className = 'activity-games-row';
    if (hasGames) {
      Object.entries(rec.games)
        .sort((a, b) => b[1] - a[1])
        .forEach(([gName, gSec]) => {
          if (gSec <= 0) return;
          const chip = document.createElement('span');
          chip.className = 'activity-game-chip';
          chip.textContent = `${gName} · ${formatActivityDuration(gSec, currentLang)}`;
          gamesRow.appendChild(chip);
        });
    }
    if (noteText.length > 0) {
      const noteBtn = document.createElement('button');
      noteBtn.type = 'button';
      noteBtn.className = 'activity-game-chip activity-journal-chip';
      noteBtn.textContent = dict.activity_journal_chip;
      noteBtn.addEventListener('click', () => {
        openJournalPopup(formatActivityDateLabel(dt, currentLang), noteText);
      });
      gamesRow.appendChild(noteBtn);
    }
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
  const workCol = colors.work || '#1D4ED8';
  const gameCol = colors.game || '#A78BFA';
  const accentCol = colors.accent || '#E2925C';

  if (legendStudy) {
    legendStudy.style.background = buildFocusSplitGradient(studyCol, workCol);
    legendStudy.title = `${dict.activity_study_only} / ${dict.activity_work_only}`;
  }
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
    if (d && ((d.study || 0) > 0 || (d.work || 0) > 0 || (d.game || 0) > 0 || (d.pc || 0) > 0 || (typeof d.note === 'string' && d.note.trim()))) {
      latestActiveKey = sortedKeys[i];
      break;
    }
  }
  if (!selectedActivityDateKey) selectedActivityDateKey = latestActiveKey;

  Object.entries(days).forEach(([k, d]) => {
    if (!d) return;
    sumStudy += (d.study || 0) + (d.work || 0);
    sumGame += d.game || 0;
  });

  if (summaryEl) {
    summaryEl.innerHTML = '';
    const pills = [
      { col: buildFocusSplitGradient(studyCol, workCol), text: `${dict.activity_study} ${formatActivityDuration(sumStudy, currentLang)}` },
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
        btn.style.background = buildHeatmapCellBackground(rec, studyCol, workCol, gameCol, accentCol);
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
          const recFocus = rec ? ((rec.study || 0) + (rec.work || 0)) : 0;
          const recGame = rec ? (rec.game || 0) : 0;
          const recPc = rec ? (rec.pc || 0) : 0;
          const recNote = rec && typeof rec.note === 'string' ? rec.note.trim() : '';
          if (!rec || (recFocus <= 0 && recGame <= 0 && recPc <= 0)) {
            const tEmpty = document.createElement('div');
            tEmpty.style.color = 'var(--ink-soft)';
            tEmpty.textContent = dict.activity_no_record;
            tooltip.appendChild(tEmpty);
          } else {
            const tBody = document.createElement('div');
            tBody.textContent = `${dict.activity_study}: ${formatActivityDuration(recFocus, currentLang)} • ${dict.activity_game}: ${formatActivityDuration(recGame, currentLang)}`;
            tooltip.appendChild(tBody);
            const tPc = document.createElement('div');
            tPc.style.color = 'var(--ink-soft)';
            tPc.textContent = `${dict.activity_pc}: ${formatActivityDuration(recPc, currentLang)}`;
            tooltip.appendChild(tPc);
          }
          if (recNote) {
            const tNote = document.createElement('div');
            tNote.style.color = 'var(--accent-dark)';
            tNote.textContent = `⋆˙◇ ${dict.activity_journal_chip}`;
            tooltip.appendChild(tNote);
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
function revealActivityWidget() {
  const widget = document.getElementById('activityWidget');
  if (!widget) return;

  widget.hidden = false;
  widget.classList.remove('revealed');
  void widget.offsetWidth;
  widget.classList.add('revealed');

  // Hafif bir açılış tınısı çal
  [659.25, 880.0, 1174.66].forEach((n, idx) => {
    setTimeout(() => pluckString(n, 0.55, 0.5), idx * 70);
  });

  if (!lastActivityData) {
    loadActivityWidget();
  } else {
    const scrollWrap = document.getElementById('activityScroll');
    if (scrollWrap) {
      requestAnimationFrame(() => {
        scrollWrap.scrollLeft = scrollWrap.scrollWidth;
      });
    }
  }

  requestAnimationFrame(() => {
    widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

if (
  sessionStorage.getItem('openActivityOnce') === '1' &&
  document.getElementById('activityWidget')
) {
  sessionStorage.removeItem('openActivityOnce');
  revealActivityWidget();
}

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
  clearSecretBubbles();
  popup.classList.remove('popup-journal');
  popup.innerHTML = html;
  backdrop.classList.add('show');
}

function closePopup() {
  clearSecretBubbles();
  backdrop.classList.remove('show');
}

function openJournalPopup(dateLabel, noteText) {
  clearSecretBubbles();
  const dict = I18N[currentLang];
  popup.innerHTML = '';
  popup.classList.add('popup-journal');

  const head = document.createElement('div');
  head.className = 'journal-popup-head';

  const title = document.createElement('h3');
  title.className = 'journal-popup-date';
  title.textContent = dateLabel;

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'journal-popup-close';
  closeBtn.setAttribute('data-close', '');
  closeBtn.setAttribute('aria-label', dict.activity_journal_close);
  closeBtn.textContent = '✕';

  head.appendChild(title);
  head.appendChild(closeBtn);

  const body = document.createElement('div');
  body.className = 'journal-popup-body';
  body.textContent = noteText;

  popup.appendChild(head);
  popup.appendChild(body);
  backdrop.classList.add('show');
  closeBtn.focus();
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
const FOUND_CODES_KEY = 'foundSecretCodes';
let secretBubblesRaf = null;
let secretBubblesWrap = null;

function getFoundSecretCodes() {
  try {
    const raw = localStorage.getItem(FOUND_CODES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const seen = new Set();
    return parsed.filter((c) => {
      if (typeof c !== 'string' || !SECRET_CODES[c] || seen.has(c)) return false;
      seen.add(c);
      return true;
    });
  } catch {
    return [];
  }
}

function saveFoundSecretCode(code) {
  const found = getFoundSecretCodes();
  if (!found.includes(code)) {
    found.push(code);
    try {
      localStorage.setItem(FOUND_CODES_KEY, JSON.stringify(found));
    } catch {}
  }
}

function runSecretCode(code) {
  const action = SECRET_CODES[code];
  if (!action) return false;
  saveFoundSecretCode(code);
  action();
  return true;
}

function clearSecretBubbles() {
  if (secretBubblesRaf) {
    cancelAnimationFrame(secretBubblesRaf);
    secretBubblesRaf = null;
  }
  if (secretBubblesWrap) {
    secretBubblesWrap.remove();
    secretBubblesWrap = null;
  }
}

function spawnSecretBubbles() {
  clearSecretBubbles();
  const codes = getFoundSecretCodes();
  if (!codes.length) return;

  const wrap = document.createElement('div');
  wrap.className = 'secret-bubbles';
  backdrop.insertBefore(wrap, popup);
  secretBubblesWrap = wrap;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const margin = 16;
  const pad = 14;
  const popW = Math.max(popup.offsetWidth, 280);
  const popH = Math.max(popup.offsetHeight, 180);
  const exLeft = (vw - popW) / 2 - margin;
  const exRight = (vw + popW) / 2 + margin;
  const exTop = (vh - popH) / 2 - margin;
  const exBottom = (vh + popH) / 2 + margin;

  const bubbles = codes.map((code, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'secret-bubble';
    btn.textContent = code;
    btn.setAttribute('aria-label', code);
    wrap.appendChild(btn);

    const w = btn.offsetWidth || 100;
    const h = btn.offsetHeight || 40;

    // Pop-up kutusunun dışındaki açık alanlarda başlangıç noktası seç
    let x = pad;
    let y = pad;
    let placed = false;
    for (let attempt = 0; attempt < 40; attempt++) {
      const cx = pad + Math.random() * Math.max(10, vw - w - pad * 2);
      const cy = pad + Math.random() * Math.max(10, vh - h - pad * 2);
      const overlapsPopup =
        cx + w > exLeft && cx < exRight && cy + h > exTop && cy < exBottom;
      if (!overlapsPopup) {
        x = cx;
        y = cy;
        placed = true;
        break;
      }
    }
    if (!placed) {
      x = Math.max(pad, Math.min(vw - w - pad, vw * ((i + 1) / (codes.length + 1)) - w / 2));
      y = i % 2 === 0 ? Math.max(pad, exTop - h - 10) : Math.min(vh - h - pad, exBottom + 10);
    }

    const angle = Math.random() * Math.PI * 2;
    const speed = 0.55 + Math.random() * 0.35;
    const b = {
      el: btn,
      x,
      y,
      w,
      h,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      phase: Math.random() * Math.PI * 2,
      paused: false,
    };

    btn.addEventListener('mouseenter', () => { b.paused = true; });
    btn.addEventListener('mouseleave', () => { b.paused = false; });
    btn.addEventListener('focus', () => { b.paused = true; });
    btn.addEventListener('blur', () => { b.paused = false; });
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      runSecretCode(code);
    });

    btn.style.transform = `translate3d(${b.x.toFixed(1)}px, ${b.y.toFixed(1)}px, 0)`;
    return b;
  });

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  let tick = 0;
  function stepBubbles() {
    if (!secretBubblesWrap) return;
    tick += 0.03;

    const curW = window.innerWidth;
    const curH = window.innerHeight;
    const pW = Math.max(popup.offsetWidth, 280);
    const pH = Math.max(popup.offsetHeight, 180);
    const eL = (curW - pW) / 2 - margin;
    const eR = (curW + pW) / 2 + margin;
    const eT = (curH - pH) / 2 - margin;
    const eB = (curH + pH) / 2 + margin;

    for (let i = 0; i < bubbles.length; i++) {
      const b = bubbles[i];
      if (!b.paused) {
        b.x += b.vx;
        b.y += b.vy;

        // Ekran kenarlarından sek
        if (b.x < pad) {
          b.x = pad;
          b.vx = Math.abs(b.vx);
        } else if (b.x + b.w > curW - pad) {
          b.x = Math.max(pad, curW - pad - b.w);
          b.vx = -Math.abs(b.vx);
        }
        if (b.y < pad) {
          b.y = pad;
          b.vy = Math.abs(b.vy);
        } else if (b.y + b.h > curH - pad) {
          b.y = Math.max(pad, curH - pad - b.h);
          b.vy = -Math.abs(b.vy);
        }

        // Ortadaki pop-up penceresinin içine girmesin
        if (b.x + b.w > eL && b.x < eR && b.y + b.h > eT && b.y < eB) {
          const penLeft = b.x + b.w - eL;
          const penRight = eR - b.x;
          const penTop = b.y + b.h - eT;
          const penBottom = eB - b.y;
          const minPen = Math.min(penLeft, penRight, penTop, penBottom);
          if (minPen === penLeft) {
            b.x = eL - b.w;
            b.vx = -Math.abs(b.vx);
          } else if (minPen === penRight) {
            b.x = eR;
            b.vx = Math.abs(b.vx);
          } else if (minPen === penTop) {
            b.y = eT - b.h;
            b.vy = -Math.abs(b.vy);
          } else {
            b.y = eB;
            b.vy = Math.abs(b.vy);
          }
        }
      }

      // Baloncuklar birbirinin üstüne binmesin
      for (let j = i + 1; j < bubbles.length; j++) {
        const o = bubbles[j];
        const dx = (b.x + b.w / 2) - (o.x + o.w / 2);
        const dy = (b.y + b.h / 2) - (o.y + o.h / 2);
        const minX = (b.w + o.w) / 2 + 8;
        const minY = (b.h + o.h) / 2 + 8;
        if (Math.abs(dx) < minX && Math.abs(dy) < minY) {
          const ox = minX - Math.abs(dx);
          const oy = minY - Math.abs(dy);
          if (ox < oy) {
            const sign = dx >= 0 ? 1 : -1;
            if (!b.paused) b.x += sign * ox * 0.35;
            if (!o.paused) o.x -= sign * ox * 0.35;
          } else {
            const sign = dy >= 0 ? 1 : -1;
            if (!b.paused) b.y += sign * oy * 0.35;
            if (!o.paused) o.y -= sign * oy * 0.35;
          }
        }
      }

      const bobY = b.paused ? 0 : Math.sin(tick + b.phase) * 3;
      const scale = b.paused ? 1.1 : 1;
      b.el.style.transform = `translate3d(${b.x.toFixed(1)}px, ${(b.y + bobY).toFixed(1)}px, 0) scale(${scale})`;
    }

    secretBubblesRaf = requestAnimationFrame(stepBubbles);
  }
  secretBubblesRaf = requestAnimationFrame(stepBubbles);
}

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

  spawnSecretBubbles();

  const form = popup.querySelector('form');
  const input = form.querySelector('input');
  const hint = popup.querySelector('.secret-hint');
  input.focus();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = input.value.trim().toLocaleLowerCase('tr');

    if (!runSecretCode(code)) {
      hint.textContent = I18N[currentLang].secret_wrong;
      form.classList.remove('shake');
      void form.offsetWidth;
      form.classList.add('shake');
      input.select();
    }
  });
}

secretBtn.addEventListener('click', showSecretForm);
