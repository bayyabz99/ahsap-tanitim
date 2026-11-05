/**
 * ==============================================================================
 * VALEN AHŞAP & KERESTE - GENEL UYGULAMA MOTORU (MAIN JS)
 * ==============================================================================
 * Navigasyon, yapışkan başlık, mobil hamburger menü, bildirim (toast) sistemi,
 * scroll animasyonları, sayfa başına dön ve genel etkileşimleri yönetir.
 */

document.addEventListener("DOMContentLoaded", function () {
  initStickyHeader();
  initMobileMenu();
  initScrollAnimations();
  initBackToTop();
  highlightActiveNavLink();
  initSmoothScroll();
  initFloatingElements();
});

/**
 * 1. Yapışkan Başlık (Sticky Header)
 */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobil Menü ve Hamburger Butonu
 */
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger-btn");
  const mobileNav = document.getElementById("mobile-navigation");
  const overlay = document.getElementById("mobile-nav-overlay");
  const closeBtn = document.querySelector(".mobile-nav-close");

  if (!hamburger || !mobileNav) return;

  function openMenu() {
    hamburger.classList.add("active");
    mobileNav.classList.add("active");
    if (overlay) overlay.classList.add("active");
    document.body.classList.add("menu-open");
    hamburger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    hamburger.setAttribute("aria-expanded", "false");
  }

  hamburger.addEventListener("click", () => {
    if (mobileNav.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  // Mobil menüdeki linklere tıklandığında menüyü kapat
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

/**
 * 3. Scroll Reveal Animasyonları (Intersection Observer)
 */
let scrollRevealObserver = null;

function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    document.querySelectorAll(".reveal-on-scroll").forEach(el => el.classList.add("revealed"));
    return;
  }

  const revealElements = document.querySelectorAll(".reveal-on-scroll:not(.revealed)");
  if (revealElements.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach(el => el.classList.add("revealed"));
    return;
  }

  if (!scrollRevealObserver) {
    scrollRevealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -20px 0px"
    });
  }

  revealElements.forEach(el => scrollRevealObserver.observe(el));
}

// Global olarak erişilebilir yap
window.initScrollAnimations = initScrollAnimations;

/**
 * 4. Sayfa Başına Dön Butonu
 */
function initBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/**
 * 5. Aktif Menü Linkini Vurgulama
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href")?.split("/").pop()?.split("?")[0] || "";
    if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * 6. Pürüzsüz Sayfa İçi Çapa (Anchor) Kaydırması
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/**
 * 7. Sabit Elemanlar ve WhatsApp Butonu Enjeksiyonu
 */
function initFloatingElements() {
  // Sabit WhatsApp Butonu ve Talep Çubuğu
  if (!document.querySelector(".floating-whatsapp-btn")) {
    const waNumber = window.SITE_CONFIG?.contact?.whatsappNumber || "905321234567";
    const brandName = window.SITE_CONFIG?.brand?.name || "Valen Ahşap";
    const defaultMsg = encodeURIComponent(`Merhaba ${brandName}, web siteniz üzerinden ahşap ve kereste ürünleriniz hakkında bilgi ve teklif almak istiyorum.`);
    
    const floatingHTML = `
      <!-- Sabit Sağ Alt WhatsApp Butonu -->
      <aside class="floating-contact-group" aria-label="Hızlı İletişim">
        
        <!-- Talep Listesi Kısayol Butonu -->
        <button class="floating-quote-btn" onclick="QuoteList.openDrawer()" aria-label="Talep Listenizi Açın" title="Talep Listesi">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
          <span class="floating-quote-badge quote-badge-count" style="display:none;">0</span>
          <span class="floating-btn-tooltip">Talep Listeniz</span>
        </button>

        <!-- Sabit WhatsApp Butonu -->
        <a href="https://wa.me/${waNumber}?text=${defaultMsg}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="floating-whatsapp-btn" 
           aria-label="WhatsApp Canlı Destek ve Fiyat Hattı"
           title="WhatsApp ile İletişime Geçin">
          <span class="whatsapp-pulse"></span>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.99.54 1.766.793 2.796.793 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.815-1.24L2 22l1.507-5.074A9.957 9.957 0 0 1 2 11.938c0-5.518 4.482-10 10-10s10 4.482 10 10z"/>
          </svg>
          <span class="floating-btn-tooltip">WhatsApp İle Danışın</span>
        </a>

        <!-- Sayfa Başına Dön Butonu -->
        <button id="back-to-top-btn" class="back-to-top-btn" aria-label="Sayfanın Başına Dön" title="Yukarı Çık">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>

      </aside>
    `;

    document.body.insertAdjacentHTML("beforeend", floatingHTML);
  }
}

/**
 * 8. Toast Bildirim Sistemi (Toast Notifications)
 */
window.showToast = function (message, type = "info") {
  let toastContainer = document.getElementById("toast-notifications-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-notifications-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type}`;

  let iconSvg = "";
  if (type === "success") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "warning") {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
  } else {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-text">${message}</div>
    <button class="toast-close" aria-label="Kapat">&times;</button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  });

  toastContainer.appendChild(toast);

  // Animasyonla göster
  setTimeout(() => toast.classList.add("show"), 10);

  // 4 saniye sonra otomatik kaybolsun
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.add("hide");
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
};

