/* ════════════════════════════════════════════════════════
   MEDIEVAL LINKTREE - JAVASCRIPT
   ════════════════════════════════════════════════════════ */

// Firebase Config (Obfuscated)
const _0x4f2a = [
  'QUl6YVN5RGtWT0RwMGhMcGFsMlpiV0FJVWhkNHhZMmZxbXR6QmNN',
  'bGlua3RyZWUtcmFpZGVuLmZpcmViYXNlYXBwLmNvbQ==',
  'aHR0cHM6Ly9saW5rdHJlZS1yYWlkZW4tZGVmYXVsdC1ydGRiLmFzaWEtc291dGhlYXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcA==',
  'bGlua3RyZWUtcmFpZGVu',
  'bGlua3RyZWUtcmFpZGVuLmZpcmViYXNlc3RvcmFnZS5hcHA=',
  'Njk4OTc0MTkzNTg2',
  'MTo2OTg5NzQxOTM1ODY6d2ViOmQzYjIzMGU5YjEwYTdhNDhjZTg2YWI='
];

function _0xd3c0de(str) {
  try {
    return atob(str);
  } catch(e) {
    return str;
  }
}

const firebaseConfig = {
  apiKey: _0xd3c0de(_0x4f2a[0]),
  authDomain: _0xd3c0de(_0x4f2a[1]),
  databaseURL: _0xd3c0de(_0x4f2a[2]),
  projectId: _0xd3c0de(_0x4f2a[3]),
  storageBucket: _0xd3c0de(_0x4f2a[4]),
  messagingSenderId: _0xd3c0de(_0x4f2a[5]),
  appId: _0xd3c0de(_0x4f2a[6])
};

// Initialize Firebase
let firebaseApp;
let database;
let viewCounterEnabled = false;

try {
  firebaseApp = firebase.initializeApp(firebaseConfig);
  database = firebase.database();
  viewCounterEnabled = true;
  console.log('Firebase initialized successfully');
} catch (error) {
  console.log('Firebase initialization failed, using fallback');
  viewCounterEnabled = false;
}

// ════════════════════════════════════════════════════════
// VIEW COUNTER FUNCTIONS
// ════════════════════════════════════════════════════════

function updateViewCounter() {
  const viewCountElement = document.getElementById('viewCount');
  
  if (viewCounterEnabled && database) {
    const viewRef = database.ref('pageViews');
    
    viewRef.once('value').then((snapshot) => {
      let currentViews = snapshot.val() || 0;
      const hasVisited = sessionStorage.getItem('hasVisited');
      
      if (!hasVisited) {
        currentViews += 1;
        viewRef.set(currentViews);
        sessionStorage.setItem('hasVisited', 'true');
      }
      
      if (viewCountElement) {
        animateCounter(viewCountElement, currentViews);
      }
    }).catch((error) => {
      console.log('Firebase error, using fallback');
      fallbackViewCounter();
    });
    
    viewRef.on('value', (snapshot) => {
      const views = snapshot.val() || 0;
      if (viewCountElement && !viewCountElement.dataset.animating) {
        viewCountElement.textContent = formatNumber(views) + ' views';
      }
    });
  } else {
    fallbackViewCounter();
  }
}

function fallbackViewCounter() {
  try {
    let views = localStorage.getItem('pageViews') || 0;
    views = parseInt(views) + 1;
    localStorage.setItem('pageViews', views);
    
    const viewCountElement = document.getElementById('viewCount');
    if (viewCountElement) {
      animateCounter(viewCountElement, views);
    }
  } catch (error) {
    const viewCountElement = document.getElementById('viewCount');
    if (viewCountElement) {
      viewCountElement.textContent = '-- views';
    }
  }
}

function animateCounter(element, targetValue) {
  element.dataset.animating = 'true';
  let currentValue = 0;
  const duration = 1500;
  const increment = targetValue / (duration / 16);
  
  const timer = setInterval(() => {
    currentValue += increment;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(timer);
      element.dataset.animating = 'false';
    }
    element.textContent = formatNumber(Math.floor(currentValue)) + ' views';
  }, 16);
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ════════════════════════════════════════════════════════
// QR CODE GENERATOR
// ════════════════════════════════════════════════════════

function generateQR() {
  const currentURL = window.location.href;
  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentURL)}`;
  
  const qrWindow = window.open('', 'QR Code', 'width=400,height=450');
  qrWindow.document.write(`
    <html>
      <head>
        <title>QR Code - Raiden Nomaden</title>
        <style>
          body {
            font-family: 'Cinzel', serif;
            background: linear-gradient(135deg, #1a1410 0%, #2c1810 100%);
            color: #d4af37;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h2 { 
            margin-bottom: 20px; 
            text-shadow: 0 0 20px #d4af37;
          }
          img { 
            border-radius: 15px; 
            border: 3px solid #d4af37;
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.8); 
          }
          p { 
            margin-top: 20px; 
            font-size: 12px; 
            opacity: 0.8; 
          }
        </style>
      </head>
      <body>
        <h2>⚔️ Scan Royal Seal</h2>
        <img src="${qrURL}" alt="QR Code">
        <p>Scan to enter the kingdom</p>
      </body>
    </html>
  `);
}

// ════════════════════════════════════════════════════════
// LINKTREE DATA INITIALIZATION
// ════════════════════════════════════════════════════════

const linktreeData = {
  img: "https://files.catbox.moe/qzcoyr.jpg",
  nama: "Raiden Nomaden",
  deskripsi: "MBOETTT",
  medsos: [
    { platform: "instagram", url: "Xi_Hidenk" },
    { platform: "discord", url: "RaidenNomadenn" },
    { platform: "whatsapp", url: "https://wa.me/6285213859916" },
    { platform: "telegram", url: "RaidenNomaden" },
    { platform: "steam", url: "RaidenNomadennn" },
    { platform: "email", url: "yudhadobar2@gmail.com" },
    { platform: "youtube", url: "RaidenNomadens" },
    { platform: "github", url: "github.com/Xayn-NotDevs" }
  ],
  links: [
    { text: "🎮 Roblox Akoehh", url: "https://www.roblox.com/users/4091078601/profile" },
    { text: "📱 Saluran WhatsApp", url: "https://whatsapp.com/channel/0029Vb6wPKJISTkDBE1Eva3O" },
    { text: "✈️ Telegram Akoehh", url: "https://t.me/RaidenNomaden" }
  ],
  footer: "Hellowww, Beta Test btw"
};

const favoriteSingers = [
  {
    name: "Lana Del Rey",
    image: "https://files.catbox.moe/0vnpne.jpg",
    genre: "Alternative Pop"
  },
  {
    name: "Billie Eilish",
    image: "https://files.catbox.moe/8e8xtb.jpg",
    genre: "Pop"
  },
  {
    name: "Daniel Caesar",
    image: "https://files.catbox.moe/zl3opx.jpg",
    genre: "R&B / Soul"
  },
  {
    name: "NIKI",
    image: "https://files.catbox.moe/4kp155.jpg",
    genre: "R&B / Pop"
  },
  {
    name: "Tenxi",
    image: "https://www.deezer.com/us/artist/133850752",
    genre: "Pop"
  }
];

// ════════════════════════════════════════════════════════
// RENDER PROFILE BADGE
// ════════════════════════════════════════════════════════

function renderProfileBadge() {
  setTimeout(() => {
    const descElement = document.querySelector('.profile-description');
    if (descElement) {
      const badge = document.createElement('div');
      badge.className = 'profile-badge';
      badge.innerHTML = '<i class="fas fa-crown"></i> Developer & Gamer';
      descElement.after(badge);
    }
  }, 100);
}

// ════════════════════════════════════════════════════════
// RENDER FAVORITE SINGERS SECTION
// ════════════════════════════════════════════════════════

function renderFavoriteSingers() {
  setTimeout(() => {
    const appContainer = document.getElementById('app');
    if (appContainer) {
      const singersSection = document.createElement('div');
      singersSection.className = 'favorite-artists';
      singersSection.innerHTML = `
        <h2 class="artists-title">Penyanyi Favorit</h2>
        <div class="artists-grid">
          ${favoriteSingers.map(singer => `
            <div class="artist-card">
              <img src="${singer.image}" 
                   alt="${singer.name}" 
                   class="artist-image" 
                   loading="lazy"
                   onerror="this.src='https://via.placeholder.com/100/d4af37/2c1810?text=${encodeURIComponent(singer.name.substring(0, 2))}'">
              <div class="artist-name">${singer.name}</div>
              <div class="artist-genre">${singer.genre}</div>
            </div>
          `).join('')}
        </div>
      `;
      appContainer.appendChild(singersSection);
    }
  }, 500);
}

// ════════════════════════════════════════════════════════
// RENDER GOOGLE ADSENSE (ALWAYS AT BOTTOM)
// ════════════════════════════════════════════════════════

function renderGoogleAdsense() {
  setTimeout(() => {
    const appContainer = document.getElementById('app');
    if (appContainer) {
      const adsenseSection = document.createElement('div');
      adsenseSection.className = 'adsense-container';
      adsenseSection.innerHTML = `
        <div class="adsense-label">Sponsored Content</div>
        
        <!-- Google AdSense Auto Ads -->
       <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-2667119806951170"
     data-ad-slot="7961276998"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        
        <!-- Ganti data-ad-client dan data-ad-slot dengan kode dari AdSense -->
      `;
      appContainer.appendChild(adsenseSection);
    }
  }, 600);
}

// ════════════════════════════════════════════════════════
// LOADING SCREEN HANDLERS
// ════════════════════════════════════════════════════════

function hideLoadingScreen() {
  // Normal hide
  window.addEventListener('load', () => {
    console.log('Page loaded, initializing...');
    updateViewCounter();
    
    setTimeout(() => {
      const loadingElement = document.getElementById('loading');
      if (loadingElement) {
        loadingElement.classList.add('hidden');
        console.log('Loading screen hidden');
      }
    }, 800);
  });
  
  // Fallback: Force hide
  setTimeout(() => {
    const loadingElement = document.getElementById('loading');
    if (loadingElement && !loadingElement.classList.contains('hidden')) {
      loadingElement.classList.add('hidden');
      updateViewCounter();
      console.log('Loading screen force hidden');
    }
  }, 2000);
  
  // Emergency fallback
  setTimeout(() => {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.style.display = 'none';
      console.log('Loading screen emergency hidden');
    }
  }, 3000);
}

// ════════════════════════════════════════════════════════
// INITIALIZATION
// ════════════════════════════════════════════════════════

// Initialize Linktree
Linktree.init(linktreeData);

// Render all sections
renderProfileBadge();
renderFavoriteSingers();
renderGoogleAdsense();
hideLoadingScreen();

// ════════════════════════════════════════════════════════
// GOOGLE ADSENSE ACTIVATION
// ════════════════════════════════════════════════════════
// UNCOMMENT BARIS DI BAWAH SETELAH SETUP ADSENSE:
// (adsbygoogle = window.adsbygoogle || []).push({});

console.log('Medieval Linktree Initialized ⚔️');
