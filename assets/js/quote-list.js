/**
 * ==============================================================================
 * VALEN AHŞAP & KERESTE - ÇOKLU ÜRÜN TALEP LİSTESİ (QUOTE LIST / TALEP SİSTEMİ)
 * ==============================================================================
 * Kullanıcının beğendiği ahşap ve kereste ürünlerini sepete benzer şekilde
 * biriktirip, tek bir tıkla WhatsApp üzerinden toplu fiyat ve stok teklifi
 * almasını sağlayan e-ticaretsiz kurumsal talep yönetim modülü.
 */

const QuoteList = {
  STORAGE_KEY: "valen_wood_quote_items",

  /**
   * LocalStorage'dan mevcut listeyi alır
   * @returns {Array} Ürün listesi
   */
  getItems: function () {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Talep listesi okunurken hata oluştu:", e);
      return [];
    }
  },

  /**
   * Listeyi LocalStorage'a kaydeder ve arayüzü günceller
   * @param {Array} items
   */
  saveItems: function (items) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
      this.updateBadges();
      this.renderDrawer();
    } catch (e) {
      console.error("Talep listesi kaydedilemedi:", e);
    }
  },

  /**
   * Listeye ürün ekler
   * @param {Object} product - Ürün nesnesi
   * @param {string} selectedDimension - Kullanıcının seçtiği veya standart ölçü
   */
  addItem: function (product, selectedDimension = "") {
    if (!product || !product.id) return;

    let items = this.getItems();
    const dimensionToUse = selectedDimension || (product.dimensions && product.dimensions[0]) || "Standart Ebat";

    // Aynı ürün ve aynı ölçü zaten listede var mı kontrol et
    const existingIndex = items.findIndex(
      item => item.id === product.id && item.dimension === dimensionToUse
    );

    if (existingIndex > -1) {
      // Zaten varsa kullanıcıya bilgi ver
      if (window.showToast) {
        window.showToast(`"${product.name}" zaten talep listenizde yer alıyor.`, "info");
      }
      this.openDrawer();
      return;
    }

    // Yeni ürün ekle
    const newItem = {
      id: product.id,
      name: product.name,
      categoryName: product.categoryName || "",
      categorySlug: product.categorySlug || "",
      image: (product.images && product.images[0] && product.images[0].url) || "",
      dimension: dimensionToUse,
      addedAt: new Date().toISOString()
    };

    items.push(newItem);
    this.saveItems(items);

    if (window.showToast) {
      window.showToast(`"${product.name}" talep listenize eklendi!`, "success");
    }

    // Küçük bir sıçrama efekti
    this.pulseBadge();
  },

  /**
   * Listeden belirli bir öğeyi çıkarır
   * @param {string} productId
   * @param {string} dimension
   */
  removeItem: function (productId, dimension) {
    let items = this.getItems();
    items = items.filter(item => !(item.id === productId && item.dimension === dimension));
    this.saveItems(items);

    if (window.showToast) {
      window.showToast("Ürün talep listenizden kaldırıldı.", "info");
    }
  },

  /**
   * Tüm listeyi boşaltır
   */
  clearList: function () {
    if (confirm("Talep listenizdeki tüm ürünleri silmek istediğinize emin misiniz?")) {
      this.saveItems([]);
      if (window.showToast) {
        window.showToast("Talep listeniz temizlendi.", "info");
      }
    }
  },

  /**
   * Toplam ürün sayısını döner
   */
  getCount: function () {
    return this.getItems().length;
  },

  /**
   * Başlık ve gezinme çubuğundaki rozetleri günceller
   */
  updateBadges: function () {
    const count = this.getCount();
    const badges = document.querySelectorAll(".quote-badge-count");
    badges.forEach(badge => {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.remove("hidden");
        badge.style.display = "inline-flex";
      } else {
        badge.classList.add("hidden");
        badge.style.display = "none";
      }
    });

    const floatingBtn = document.querySelector(".floating-quote-btn");
    if (floatingBtn) {
      if (count > 0) {
        floatingBtn.classList.add("has-items");
      } else {
        floatingBtn.classList.remove("has-items");
      }
    }
  },

  /**
   * Rozet için dikkat çekici titreşim efekti
   */
  pulseBadge: function () {
    const badges = document.querySelectorAll(".quote-badge-count");
    badges.forEach(badge => {
      badge.classList.add("pulse-bounce");
      setTimeout(() => badge.classList.remove("pulse-bounce"), 600);
    });
  },

  /**
   * WhatsApp mesajı oluşturur ve yönlendirir
   */
  submitToWhatsApp: function () {
    const items = this.getItems();
    if (items.length === 0) {
      if (window.showToast) {
        window.showToast("Talep listenizde henüz ürün bulunmamaktadır.", "warning");
      }
      return;
    }

    let message = `Merhaba *${window.SITE_CONFIG?.brand?.name || "Valen Ahşap & Kereste"}*,\n`;
    message += `Web siteniz üzerinden incelediğim ve teklif almak istediğim ürün listem aşağıdadır:\n\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      if (item.categoryName) message += `   • Ağaç Türü: ${item.categoryName}\n`;
      if (item.dimension) message += `   • İlgilenilen Ölçü: ${item.dimension}\n`;
      message += `\n`;
    });

    message += `Bu ürünlerin güncel stok durumları, m³ veya adet birim fiyatları ve İstanbul/şehir dışı nakliye imkanları hakkında bilgi ve teklifinizi rica ederim.\nİyi çalışmalar.`;

    const whatsappUrl = window.SITE_CONFIG.getWhatsAppLink(message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  },

  /**
   * Talep listesi çekmecesini (Drawer) açar
   */
  openDrawer: function () {
    const drawer = document.getElementById("quote-drawer");
    const overlay = document.getElementById("quote-drawer-overlay");
    if (drawer && overlay) {
      this.renderDrawer();
      drawer.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("modal-open");
    }
  },

  /**
   * Talep listesi çekmecesini kapatır
   */
  closeDrawer: function () {
    const drawer = document.getElementById("quote-drawer");
    const overlay = document.getElementById("quote-drawer-overlay");
    if (drawer && overlay) {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  },

  /**
   * Çekmece içeriğini render eder
   */
  renderDrawer: function () {
    const container = document.getElementById("quote-drawer-items");
    const footer = document.getElementById("quote-drawer-footer");
    if (!container) return;

    const items = this.getItems();

    if (items.length === 0) {
      container.innerHTML = `
        <div class="empty-quote-state">
          <div class="empty-quote-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h4>Talep Listeniz Boş</h4>
          <p>İncelediğiniz kereste, kalas veya ahşap ürünlerini "Talep Listeme Ekle" butonu ile buraya ekleyebilir, tek tıkla toplu teklif alabilirsiniz.</p>
          <a href="urunler.html" class="btn btn-primary btn-sm" onclick="QuoteList.closeDrawer()">Ürünlerimizi Keşfedin</a>
        </div>
      `;
      if (footer) footer.style.display = "none";
      return;
    }

    if (footer) footer.style.display = "block";

    let html = '<div class="quote-items-list">';
    items.forEach(item => {
      html += `
        <div class="quote-item-row" data-id="${item.id}">
          <div class="quote-item-thumb">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
          </div>
          <div class="quote-item-details">
            <span class="quote-item-cat">${item.categoryName}</span>
            <h5 class="quote-item-name">${item.name}</h5>
            <div class="quote-item-dim">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 3L3 21M3 3l18 18"/>
              </svg>
              <span>${item.dimension}</span>
            </div>
          </div>
          <button class="quote-item-remove-btn" 
                  title="Listeden Kaldır" 
                  aria-label="Listeden Kaldır"
                  onclick="QuoteList.removeItem('${item.id}', '${item.dimension.replace(/'/g, "\\'")}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      `;
    });
    html += "</div>";

    container.innerHTML = html;
  },

  /**
   * Dinamik Drawer HTML yapısını sayfaya otomatik olarak ekler
   */
  injectDrawerHTML: function () {
    if (document.getElementById("quote-drawer")) return;

    const drawerHTML = `
      <div id="quote-drawer-overlay" class="quote-drawer-overlay" onclick="QuoteList.closeDrawer()"></div>
      <aside id="quote-drawer" class="quote-drawer" aria-label="Fiyat Teklif ve Talep Listesi" role="dialog" aria-modal="true">
        <div class="quote-drawer-header">
          <div class="quote-drawer-title-group">
            <div class="drawer-header-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            </div>
            <div>
              <h3>Talep Listeniz</h3>
              <p class="drawer-subtitle">Fiyat ve stok teklifi için seçtiğiniz ürünler</p>
            </div>
          </div>
          <button class="quote-drawer-close" onclick="QuoteList.closeDrawer()" aria-label="Kapat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div id="quote-drawer-items" class="quote-drawer-body">
          <!-- Dinamik Liste JS ile yüklenecek -->
        </div>

        <div id="quote-drawer-footer" class="quote-drawer-footer">
          <div class="drawer-info-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Bu işlem e-ticaret ödemesi değildir. Seçtiğiniz ürünler tek bir WhatsApp mesajında toplanıp doğrudan satış uzmanımıza iletilir.</span>
          </div>

          <button class="btn btn-whatsapp-full" onclick="QuoteList.submitToWhatsApp()">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.99.54 1.766.793 2.796.793 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.815-1.24L2 22l1.507-5.074A9.957 9.957 0 0 1 2 11.938c0-5.518 4.482-10 10-10s10 4.482 10 10z"/>
            </svg>
            <span>WhatsApp ile Toplu Fiyat Teklifi Al</span>
          </button>

          <div class="drawer-footer-actions">
            <button class="btn-clear-quote" onclick="QuoteList.clearList()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              Listeyi Temizle
            </button>
            <a href="urunler.html" class="btn-more-products" onclick="QuoteList.closeDrawer()">
              + Başka Ürün Ekle
            </a>
          </div>
        </div>
      </aside>
    `;

    document.body.insertAdjacentHTML("beforeend", drawerHTML);
  },

  /**
   * Başlatıcı fonksiyon
   */
  init: function () {
    this.injectDrawerHTML();
    this.updateBadges();

    // ESC tuşuna basıldığında drawer'ı kapat
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeDrawer();
      }
    });
  }
};

window.QuoteList = QuoteList;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => QuoteList.init());
} else {
  QuoteList.init();
}

