/**
 * ==============================================================================
 * VALEN AHŞAP & KERESTE - ÜRÜN DETAY MODAL SİSTEMİ (PRODUCT MODAL)
 * ==============================================================================
 * Herhangi bir ürün kartındaki "Detayları İncele" butonuna tıklandığında açılan,
 * çoklu fotoğraf galerisi, ölçü seçici ve WhatsApp/Talep butonlarını içeren
 * modern ve responsive modal penceresi.
 */

const ProductModal = {
  currentProduct: null,
  selectedDimension: "",

  /**
   * Modal HTML iskeletini sayfaya enjekte eder
   */
  injectModalHTML: function () {
    if (document.getElementById("product-detail-modal")) return;

    const modalHTML = `
      <div id="product-modal-backdrop" class="modal-backdrop" onclick="ProductModal.close()"></div>
      <div id="product-detail-modal" class="product-modal" role="dialog" aria-modal="true" aria-labelledby="modal-prod-title">
        <button class="modal-close-btn" onclick="ProductModal.close()" aria-label="Pencereyi Kapat">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="modal-inner-grid">
          <!-- Sol Sütun: Galeri -->
          <div class="modal-gallery-col">
            <div class="modal-main-image-wrap">
              <span id="modal-prod-badge" class="modal-badge-tag"></span>
              <img id="modal-main-image" src="" alt="" />
            </div>
            <div id="modal-gallery-thumbs" class="modal-thumbs-row">
              <!-- Küçük Resimler -->
            </div>
          </div>

          <!-- Sağ Sütun: Detaylar & Aksiyonlar -->
          <div class="modal-info-col">
            <div class="modal-category-breadcrumb">
              <span id="modal-prod-category"></span>
              <span class="breadcrumb-sep">/</span>
              <span id="modal-prod-origin"></span>
            </div>

            <h2 id="modal-prod-title" class="modal-title"></h2>

            <p id="modal-prod-short-desc" class="modal-short-desc"></p>

            <!-- Ölçü Seçici Bölümü -->
            <div class="modal-dimensions-group">
              <label class="modal-section-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 3L3 21M3 3l18 18"/>
                </svg>
                <span>Mevcut Ölçü Seçenekleri:</span>
              </label>
              <div id="modal-dimensions-container" class="dimensions-chips-list">
                <!-- Ölçü Butonları -->
              </div>
            </div>

            <!-- Teknik Özellikler Tablosu -->
            <div class="modal-specs-box">
              <div class="spec-row">
                <span class="spec-label">Nem Oranı:</span>
                <span id="modal-spec-moisture" class="spec-value"></span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Yüzey İşlemi:</span>
                <span id="modal-spec-surface" class="spec-value"></span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Stok Durumu:</span>
                <span id="modal-spec-stock" class="spec-value highlight-stock"></span>
              </div>
            </div>

            <!-- Detaylı Açıklama -->
            <div class="modal-full-desc-wrap">
              <h4 class="modal-subheading">Ürün Hakkında</h4>
              <p id="modal-prod-full-desc"></p>
            </div>

            <!-- Öne Çıkan Nitelikler -->
            <div class="modal-features-wrap">
              <h4 class="modal-subheading">Öne Çıkan Özellikler</h4>
              <ul id="modal-prod-features" class="modal-features-list"></ul>
            </div>

            <!-- Kullanım Alanları Etiketleri -->
            <div class="modal-usage-wrap">
              <h4 class="modal-subheading">Yaygın Kullanım Alanları</h4>
              <div id="modal-usage-tags" class="usage-tags-row"></div>
            </div>

            <!-- Aksiyon Butonları -->
            <div class="modal-action-buttons">
              <button id="modal-btn-whatsapp" class="btn btn-whatsapp-modal" onclick="ProductModal.sendWhatsAppInquiry()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.99.54 1.766.793 2.796.793 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.815-1.24L2 22l1.507-5.074A9.957 9.957 0 0 1 2 11.938c0-5.518 4.482-10 10-10s10 4.482 10 10z"/>
                </svg>
                <span>WhatsApp'tan Fiyat & Stok Sor</span>
              </button>

              <button id="modal-btn-add-quote" class="btn btn-secondary-modal" onclick="ProductModal.addToQuoteList()">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Talep Listeme Ekle</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
  },

  /**
   * Belirtilen ID'ye sahip ürünü açar
   * @param {string} productId
   */
  open: function (productId) {
    if (!window.WOOD_PRODUCTS) {
      console.error("WOOD_PRODUCTS verisi bulunamadı.");
      return;
    }

    const product = window.WOOD_PRODUCTS.find(p => p.id === productId);
    if (!product) {
      console.warn(`Ürün bulunamadı: ${productId}`);
      return;
    }

    this.currentProduct = product;
    this.selectedDimension = (product.dimensions && product.dimensions[0]) || "";

    const modal = document.getElementById("product-detail-modal");
    const backdrop = document.getElementById("product-modal-backdrop");
    if (!modal || !backdrop) return;

    // Verileri Doldur
    document.getElementById("modal-prod-title").textContent = product.name;
    document.getElementById("modal-prod-category").textContent = product.categoryName;
    document.getElementById("modal-prod-origin").textContent = product.origin || "Yerli Üretim";
    document.getElementById("modal-prod-short-desc").textContent = product.shortDescription;
    document.getElementById("modal-prod-full-desc").textContent = product.fullDescription;
    
    // Rozet
    const badgeEl = document.getElementById("modal-prod-badge");
    if (product.badge) {
      badgeEl.textContent = product.badge;
      badgeEl.style.display = "inline-block";
    } else {
      badgeEl.style.display = "none";
    }

    // Teknik Detaylar
    document.getElementById("modal-spec-moisture").textContent = product.moisture || "Standart";
    document.getElementById("modal-spec-surface").textContent = product.surface || "Temiz Kesim";
    document.getElementById("modal-spec-stock").textContent = product.stockStatus || "Stokta Var";

    // Galeri & Küçük Resimler
    const mainImg = document.getElementById("modal-main-image");
    const thumbsContainer = document.getElementById("modal-gallery-thumbs");
    thumbsContainer.innerHTML = "";

    if (product.images && product.images.length > 0) {
      mainImg.src = product.images[0].url;
      mainImg.alt = product.images[0].alt || product.name;

      product.images.forEach((imgObj, idx) => {
        const thumb = document.createElement("button");
        thumb.className = `modal-thumb-btn ${idx === 0 ? "active" : ""}`;
        thumb.setAttribute("aria-label", `Fotoğraf ${idx + 1}`);
        thumb.innerHTML = `<img src="${imgObj.url}" alt="${imgObj.alt || product.name}" loading="lazy" />`;
        
        thumb.addEventListener("click", () => {
          mainImg.src = imgObj.url;
          mainImg.alt = imgObj.alt || product.name;
          document.querySelectorAll(".modal-thumb-btn").forEach(b => b.classList.remove("active"));
          thumb.classList.add("active");
        });

        thumbsContainer.appendChild(thumb);
      });
    }

    // Ölçü Çipleri
    const dimContainer = document.getElementById("modal-dimensions-container");
    dimContainer.innerHTML = "";
    if (product.dimensions && product.dimensions.length > 0) {
      product.dimensions.forEach((dim, idx) => {
        const chip = document.createElement("button");
        chip.className = `dim-chip ${idx === 0 ? "active" : ""}`;
        chip.textContent = dim;
        chip.type = "button";
        chip.addEventListener("click", () => {
          document.querySelectorAll(".dim-chip").forEach(c => c.classList.remove("active"));
          chip.classList.add("active");
          ProductModal.selectedDimension = dim;
        });
        dimContainer.appendChild(chip);
      });
    } else {
      dimContainer.innerHTML = `<span class="text-muted">Projenize özel ebatlama yapılabilir.</span>`;
    }

    // Öne Çıkan Özellikler Listesi
    const featuresList = document.getElementById("modal-prod-features");
    featuresList.innerHTML = "";
    if (product.features && product.features.length > 0) {
      product.features.forEach(feat => {
        const li = document.createElement("li");
        li.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${feat}</span>
        `;
        featuresList.appendChild(li);
      });
    }

    // Kullanım Alanları
    const usageContainer = document.getElementById("modal-usage-tags");
    usageContainer.innerHTML = "";
    if (product.usageAreas && product.usageAreas.length > 0) {
      product.usageAreas.forEach(tag => {
        const span = document.createElement("span");
        span.className = "usage-pill";
        span.textContent = tag;
        usageContainer.appendChild(span);
      });
    }

    // Göster
    modal.classList.add("active");
    backdrop.classList.add("active");
    document.body.classList.add("modal-open");
  },

  /**
   * Modalı kapatır
   */
  close: function () {
    const modal = document.getElementById("product-detail-modal");
    const backdrop = document.getElementById("product-modal-backdrop");
    if (modal && backdrop) {
      modal.classList.remove("active");
      backdrop.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  },

  /**
   * Seçili ürün için WhatsApp mesajını başlatır
   */
  sendWhatsAppInquiry: function () {
    if (!this.currentProduct) return;
    const url = window.SITE_CONFIG.getProductWhatsAppLink(
      this.currentProduct.name,
      this.currentProduct.categoryName,
      this.selectedDimension
    );
    window.open(url, "_blank", "noopener,noreferrer");
  },

  /**
   * Seçili ürünü Talep Listesi'ne ekler
   */
  addToQuoteList: function () {
    if (!this.currentProduct || !window.QuoteList) return;
    window.QuoteList.addItem(this.currentProduct, this.selectedDimension);
  },

  /**
   * Başlatıcı fonksiyon
   */
  init: function () {
    this.injectModalHTML();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });

    // Sayfa URL parametresi kontrolü (?urun=cam-kereste-5x10)
    const urlParams = new URLSearchParams(window.location.search);
    const productParam = urlParams.get("urun") || urlParams.get("id");
    if (productParam) {
      setTimeout(() => this.open(productParam), 300);
    }
  }
};

window.ProductModal = ProductModal;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => ProductModal.init());
} else {
  ProductModal.init();
}

