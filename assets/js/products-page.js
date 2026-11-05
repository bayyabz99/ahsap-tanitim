/**
 * ==============================================================================
 * VALEN AHŞAP & KERESTE - ÜRÜNLER SAYFASI FİLTRELEME & ARAMA (PRODUCTS CATALOG JS)
 * ==============================================================================
 * urunler.html sayfasında çalışan gerçek zamanlı kategori filtreleme, arama,
 * sıralama ve responsive kart render modülü.
 */

const ProductsPage = {
  activeCategory: "all",
  searchQuery: "",
  sortBy: "featured",

  /**
   * Başlatıcı fonksiyon
   */
  init: function () {
    const grid = document.getElementById("products-catalog-grid");
    if (!grid) return; // Başka bir sayfadaysak çalıştırma

    this.parseURLParams();
    this.renderCategoryFilters();
    this.bindEvents();
    this.filterAndRender();
  },

  /**
   * URL parametrelerini okur (?kategori=mese vb.)
   */
  parseURLParams: function () {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("kategori") || params.get("category");
    if (cat) {
      this.activeCategory = cat;
    }
    const q = params.get("ara") || params.get("search");
    if (q) {
      this.searchQuery = q.trim().toLowerCase();
      const searchInput = document.getElementById("product-search-input");
      if (searchInput) searchInput.value = q;
    }
  },

  /**
   * Kategori butonlarını dinamik olarak listeler ve ürün sayılarını hesaplar
   */
  renderCategoryFilters: function () {
    const container = document.getElementById("category-filter-buttons");
    if (!container || !window.WOOD_CATEGORIES || !window.WOOD_PRODUCTS) return;

    const totalProducts = window.WOOD_PRODUCTS.length;

    let html = `
      <button class="cat-filter-btn ${this.activeCategory === 'all' ? 'active' : ''}" data-category="all">
        <span>Tüm Ürünler</span>
        <span class="cat-count">(${totalProducts})</span>
      </button>
    `;

    window.WOOD_CATEGORIES.forEach(cat => {
      const count = window.WOOD_PRODUCTS.filter(p => p.categorySlug === cat.slug).length;
      if (count > 0) {
        html += `
          <button class="cat-filter-btn ${this.activeCategory === cat.slug ? 'active' : ''}" data-category="${cat.slug}">
            <span>${cat.name}</span>
            <span class="cat-count">(${count})</span>
          </button>
        `;
      }
    });

    container.innerHTML = html;

    // Tıklama olaylarını bağla
    container.querySelectorAll(".cat-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        container.querySelectorAll(".cat-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeCategory = btn.getAttribute("data-category");
        this.updateURL();
        this.filterAndRender();
      });
    });
  },

  /**
   * Form ve arama elemanlarını dinler
   */
  bindEvents: function () {
    const searchInput = document.getElementById("product-search-input");
    const clearSearchBtn = document.getElementById("btn-clear-search");
    const sortSelect = document.getElementById("product-sort-select");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        if (clearSearchBtn) {
          clearSearchBtn.style.display = this.searchQuery ? "block" : "none";
        }
        this.filterAndRender();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        this.searchQuery = "";
        clearSearchBtn.style.display = "none";
        this.filterAndRender();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.sortBy = e.target.value;
        this.filterAndRender();
      });
    }
  },

  /**
   * URL adresini günceller (Sayfa yenilenmeden filtre durumunu tarayıcı geçmişine yazar)
   */
  updateURL: function () {
    const url = new URL(window.location);
    if (this.activeCategory && this.activeCategory !== "all") {
      url.searchParams.set("kategori", this.activeCategory);
    } else {
      url.searchParams.delete("kategori");
    }
    window.history.replaceState({}, "", url);
  },

  /**
   * Filtreleme ve arama mantığı
   */
  filterAndRender: function () {
    const grid = document.getElementById("products-catalog-grid");
    const countDisplay = document.getElementById("products-results-count");
    if (!grid || !window.WOOD_PRODUCTS) return;

    let filtered = window.WOOD_PRODUCTS.filter(product => {
      // Kategori kontrolü
      const matchCategory = (this.activeCategory === "all") || (product.categorySlug === this.activeCategory);

      // Arama kontrolü (isim, kategori, açıklama veya kullanım alanlarında ara)
      let matchSearch = true;
      if (this.searchQuery) {
        const query = this.searchQuery;
        const inName = product.name.toLowerCase().includes(query);
        const inCategory = product.categoryName.toLowerCase().includes(query);
        const inDesc = product.shortDescription.toLowerCase().includes(query);
        const inFullDesc = product.fullDescription.toLowerCase().includes(query);
        const inUsage = product.usageAreas && product.usageAreas.some(u => u.toLowerCase().includes(query));
        matchSearch = inName || inCategory || inDesc || inFullDesc || inUsage;
      }

      return matchCategory && matchSearch;
    });

    // Sıralama
    if (this.sortBy === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name, "tr"));
    } else if (this.sortBy === "name-desc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name, "tr"));
    } else if (this.sortBy === "featured") {
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Sonuç sayacı
    if (countDisplay) {
      countDisplay.textContent = `${filtered.length} ürün listeleniyor`;
    }

    // Boş durum kontrolü
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-search-state">
          <div class="empty-icon-wrap">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
          <h3>Aradığınız Kriterlere Uygun Ahşap Bulunamadı</h3>
          <p>Lütfen arama teriminizi değiştirin veya kategori filtrelerini sıfırlayın.</p>
          <button class="btn btn-primary btn-sm" onclick="ProductsPage.resetFilters()">
            Filtreleri Temizle
          </button>
        </div>
      `;
      return;
    }

    // Kartları oluştur
    let cardsHTML = "";
    filtered.forEach(product => {
      const mainImg = (product.images && product.images[0] && product.images[0].url) || "";
      const firstDim = (product.dimensions && product.dimensions[0]) || "";
      const waLink = window.SITE_CONFIG.getProductWhatsAppLink(product.name, product.categoryName, firstDim);

      cardsHTML += `
        <article class="product-card" data-id="${product.id}">
          <div class="product-card-media">
            ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ""}
            <span class="product-category-pill">${product.categoryName}</span>
            <img src="${mainImg}" alt="${product.name}" loading="lazy" />
            <div class="product-card-overlay">
              <button class="btn-card-quick-view" onclick="ProductModal.open('${product.id}')" title="Ürünü İncele">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Detayları Gör
              </button>
            </div>
          </div>

          <div class="product-card-body">
            <div class="product-stock-tag">
              <span class="stock-dot"></span>
              <span>${product.stockStatus || 'Stokta'}</span>
            </div>

            <h3 class="product-card-title">
              <a href="javascript:void(0)" onclick="ProductModal.open('${product.id}')">
                ${product.name}
              </a>
            </h3>

            <p class="product-card-desc">${product.shortDescription}</p>

            ${firstDim ? `
              <div class="product-dim-preview">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 3L3 21M3 3l18 18"/>
                </svg>
                <span>${firstDim}</span>
              </div>
            ` : ""}

            <div class="product-price-note">
              ${product.priceNote || "Fiyat ve stok bilgisi için iletişime geçin"}
            </div>

            <div class="product-card-actions">
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-card-whatsapp" title="WhatsApp'tan Fiyat Sor">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.99.54 1.766.793 2.796.793 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.815-1.24L2 22l1.507-5.074A9.957 9.957 0 0 1 2 11.938c0-5.518 4.482-10 10-10s10 4.482 10 10z"/>
                </svg>
                <span>WhatsApp'tan Bilgi Al</span>
              </a>

              <button class="btn btn-card-add-quote" onclick="QuoteList.addItem(WOOD_PRODUCTS.find(p=>p.id==='${product.id}'))" title="Talep Listeme Ekle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Listeye Ekle</span>
              </button>
            </div>

          </div>
        </article>
      `;
    });

    grid.innerHTML = cardsHTML;
  },

  /**
   * Filtreleri sıfırlar
   */
  resetFilters: function () {
    this.activeCategory = "all";
    this.searchQuery = "";
    const searchInput = document.getElementById("product-search-input");
    if (searchInput) searchInput.value = "";
    const clearBtn = document.getElementById("btn-clear-search");
    if (clearBtn) clearBtn.style.display = "none";
    this.renderCategoryFilters();
    this.updateURL();
    this.filterAndRender();
  }
};

window.ProductsPage = ProductsPage;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => ProductsPage.init());
} else {
  ProductsPage.init();
}

