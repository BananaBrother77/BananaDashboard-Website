// Elements

const downloadEls = {
  smartBtn: document.getElementById('smartDownloadBtn'),
  osLabel: document.getElementById('smartOsLabel'),
  osIcon: document.getElementById('smartOsIcon'),
  downloadWin: document.getElementById('downloadWin'),
  downloadMac: document.getElementById('downloadMac'),
  downloadLinux: document.getElementById('downloadLinux'),
  versionBadge: document.getElementById('versionBadge'),
};

const linuxModalEls = {
  linuxModal: document.getElementById('linuxModal'),
  closeLinuxModal: document.getElementById('closeLinuxModal'),
  linuxTabs: document.querySelectorAll('.linux-tab'),
  linuxPanels: document.querySelectorAll('.linux-panel'),
  linuxDownloadAppImage: document.getElementById('linuxDownloadAppImage'),
  linuxDownloadDeb: document.getElementById('linuxDownloadDeb'),
  linuxDownloadPacman: document.getElementById('linuxDownloadPacman'),
};

const lightboxEls = {
  lightbox: document.getElementById('screenshotLightbox'),
  lightboxImg: document.querySelector('.lightbox-img'),
  closeBtn: document.querySelector('.lightbox-close'),
  screenshots: document.querySelectorAll('.screenshot-img'),
};

// SVG's
const svg = {
  win: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M0 0h11.4v11.4H0zM12.6 0H24v11.4H12.6zM0 12.6h11.4V24H0zM12.6 12.6H24V24H12.6z"/></svg>`,
  linux: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336z"/></svg>`,
  mac: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>`,
};

// Loading animation

// Download auto-detect
const RELEASES_URL =
  'https://github.com/BananaBrother77/BananaDashboard/releases';
const GH_API =
  'https://api.github.com/repos/BananaBrother77/BananaDashboard/releases/latest';

function getOS() {
  const ua = navigator.userAgent;
  if (ua.includes('Win')) return 'win';
  if (ua.includes('Mac')) return 'mac';
  if (ua.includes('Linux')) return 'linux';
  return null;
}

function matchAsset(assets, pattern) {
  return assets.find(
    (a) => pattern.test(a.name) && !a.name.includes('blockmap'),
  );
}

async function initDownloads() {
  const os = getOS();

  try {
    const cached = sessionStorage.getItem('banana-release');
    let assets, tagName;
    if (cached) {
      const cachedData = JSON.parse(cached);
      assets = cachedData.assets;
      tagName = cachedData.tagName;
    } else {
      const res = await fetch(GH_API);
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      assets = data.assets;
      tagName = data.tag_name;
      sessionStorage.setItem(
        'banana-release',
        JSON.stringify({ assets, tagName }),
      );
    }

    // Version badge
    if (downloadEls.versionBadge) {
      downloadEls.versionBadge.textContent = tagName || 'v0.x';
    }

    const osNames = { win: 'Windows', linux: 'Linux', mac: 'macOS' };
    const osName = osNames[os] || null;
    const assetMap = {
      win: /\.exe$/,
      linux: /\.AppImage$/,
      mac: /\.dmg$/,
    };

    // Smart download button
    const pattern = os && assetMap[os];
    const asset = pattern && matchAsset(assets, pattern);
    if (os === 'linux') {
      if (downloadEls.smartBtn) {
        downloadEls.smartBtn.href = '#';
        downloadEls.smartBtn.dataset.os = 'linux';
      }
      if (downloadEls.osLabel) {
        downloadEls.osLabel.textContent = 'Linux';
        setDownloadIcon('linux');
      }
    } else if (asset && downloadEls.smartBtn && downloadEls.osLabel) {
      downloadEls.smartBtn.href = asset.browser_download_url;
      downloadEls.osLabel.textContent = osName;
      setDownloadIcon(os);
    } else if (downloadEls.osLabel) {
      downloadEls.osLabel.textContent = osName || 'your OS';
      setDownloadIcon(os);
    }

    // Platform cards
    const cards = {
      win: { el: downloadEls.downloadWin, pattern: /\.exe$/ },
      mac: { el: downloadEls.downloadMac, pattern: /\.dmg$/ },
    };

    for (const [, card] of Object.entries(cards)) {
      const a = matchAsset(assets, card.pattern);
      if (a && card.el) {
        card.el.href = a.browser_download_url;
      }
    }

    // Linux modal download links
    const linuxAssets = {
      appimage: matchAsset(assets, /\.AppImage$/),
      deb: matchAsset(assets, /\.deb$/),
      pacman: matchAsset(assets, /\.pacman$/),
    };
    const linuxLinks = {
      appimage: linuxModalEls.linuxDownloadAppImage,
      deb: linuxModalEls.linuxDownloadDeb,
      pacman: linuxModalEls.linuxDownloadPacman,
    };

    if (linuxLinks.appimage || linuxLinks.deb || linuxLinks.pacman) {
      for (const [key, link] of Object.entries(linuxLinks)) {
        if (link && linuxAssets[key]) {
          link.href = linuxAssets[key].browser_download_url;
        }
      }
    }
  } catch {
    if (downloadEls.osLabel) downloadEls.osLabel.textContent = 'your OS';
  }
}

function setDownloadIcon(os) {
  downloadEls.osIcon.innerHTML = os
    ? svg[os]
    : '<i data-lucide="download"></i>';
}

initDownloads();

// Linux install modal
(function () {
  const modal = linuxModalEls.linuxModal;
  const closeBtn = linuxModalEls.closeLinuxModal;
  const linuxCard = downloadEls.downloadLinux;
  const smartBtn = downloadEls.smartBtn;
  const tabs = linuxModalEls.linuxTabs;
  const panels = linuxModalEls.linuxPanels;

  if (!modal) return;

  function openModal() {
    modal.classList.add('show');
  }

  linuxCard?.addEventListener('click', openModal);

  if (smartBtn && smartBtn.dataset.os === 'linux') {
    smartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  closeBtn?.addEventListener('click', () => modal.classList.remove('show'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show'))
      modal.classList.remove('show');
  });

  if (tabs && panels) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        panels.forEach((p) =>
          p.classList.toggle(
            'active',
            p.dataset.linuxPanel === tab.dataset.linuxTab,
          ),
        );
      });
    });
  }

  // Copy command buttons
  modal.querySelectorAll('.code-copy').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.copy).then(() => {
        btn.innerHTML = '<i data-lucide="check" width="16" height="16"></i>';
        lucide.createIcons();
        setTimeout(() => {
          btn.innerHTML = '<i data-lucide="copy" width="16" height="16"></i>';
          lucide.createIcons();
        }, 2000);
      });
    });
  });
})();

// Screenshot lightbox
(function () {
  if (!lightboxEls.lightbox) return;

  lightboxEls.screenshots.forEach((img) => {
    img.addEventListener('click', () => {
      lightboxEls.lightboxImg.src = img.src;
      lightboxEls.lightboxImg.alt = img.alt;
      lightboxEls.lightbox.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    lightboxEls.lightbox.classList.remove('show');
    document.body.style.overflow = '';
  }

  lightboxEls.closeBtn.addEventListener('click', close);
  lightboxEls.lightbox.addEventListener('click', (e) => {
    if (e.target === lightboxEls.lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxEls.lightbox.classList.contains('show'))
      close();
  });
})();
