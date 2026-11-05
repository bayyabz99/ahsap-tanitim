/**
 * ==============================================================================
 * VALEN AHŞAP & KERESTE - MERKEZİ YAPILANDIRMA DOSYASI (CONFIG)
 * ==============================================================================
 * İşletme ile ilgili tüm iletişim, adres ve marka bilgileri tek bir merkezden yönetilir.
 * WhatsApp numarası veya telefon değiştiğinde sitenin tüm sayfaları, butonları ve
 * bağlantıları bu dosya sayesinde otomatik olarak güncellenir.
 */

const SITE_CONFIG = {
  // Marka Bilgileri
  brand: {
    name: "Valen Ahşap & Kereste",
    shortName: "Valen Ahşap",
    legalName: "Valen Ahşap Sanayi ve Dış Ticaret Ltd. Şti.",
    slogan: "Doğanın Gücünü Ahşaba Dönüştürüyoruz.",
    subSlogan: "Fırınlanmış kereste, masif panel ve birinci sınıf endüstriyel ahşap çözümleri.",
    foundedYear: 2012
  },

  // İletişim Bilgileri
  contact: {
    // WhatsApp Yönlendirme Numarası (Ülke kodu ile, başında + veya boşluk olmadan yazınız: 905321234567)
    whatsappNumber: "905321234567",
    whatsappDisplay: "+90 (532) 123 45 67",
    
    // Sabit Telefon
    phoneNumber: "+90 (212) 555 12 34",
    phoneTelLink: "tel:+902125551234",

    // E-posta Adresleri
    email: "bilgi@valenahsap.com",
    salesEmail: "siparis@valenahsap.com",

    // Fiziksel Adres & Konum
    address: "Keresteciler Sanayi Sitesi, 14. Blok No: 28, İkitelli OSB, Başakşehir / İstanbul",
    city: "İstanbul / Türkiye",
    postalCode: "34490",
    
    // Çalışma Saatleri
    workingHoursWeekday: "Pazartesi - Cuma: 08:30 - 18:30",
    workingHoursSaturday: "Cumartesi: 09:00 - 16:00",
    workingHoursSunday: "Pazar: Kapalı (WhatsApp ile 7/24 talep iletebilirsiniz)",
    workingHoursSummary: "Hafta İçi: 08:30 - 18:30 | Cmt: 09:00 - 16:00",

    // Google Haritalar Embed URL
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8284719266023!2d28.788448976527588!3d41.07270921545624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5e927c9b84d%3A0x6e8f498c8c519da5!2zxLBraXRlbGxpIE9TRiwgS2VyZXN0ZWNpbGVyIFNpdGVzaSwgQmHFn2FrxZ9laGlyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
  },

  // Sosyal Medya Bağlantıları
  social: {
    instagram: "https://instagram.com/valenahsap",
    linkedin: "https://linkedin.com/company/valenahsap",
    facebook: "https://facebook.com/valenahsap",
    youtube: "https://youtube.com/@valenahsap"
  },

  // Site Meta Bilgileri
  seo: {
    siteUrl: "https://www.valenahsap.com",
    defaultTitle: "Valen Ahşap & Kereste | Profesyonel Ahşap ve Kereste Çözümleri",
    defaultDescription: "Birinci sınıf fırınlanmış kereste, meşe, ceviz, çam, kayın ve ladin ağaç çeşitleri, masif paneller ve endüstriyel ahşap ürünleri.",
    keywords: "kereste, ahşap, masif panel, çam kereste, meşe kalas, ceviz kütük, kayın kereste, fırınlanmış kereste, inşaatlık kereste, lambiri, deck"
  },

  /**
   * Özel metin içeren standart WhatsApp yönlendirme linki üretir
   * @param {string} customMessage - Gönderilecek varsayılan mesaj
   * @returns {string} wa.me URL
   */
  getWhatsAppLink: function (customMessage) {
    const defaultMsg = `Merhaba ${this.brand.name}, web siteniz üzerinden ulaşıyorum. Ahşap ve kereste ürünleriniz hakkında bilgi ve fiyat teklifi almak istiyorum.`;
    const message = customMessage || defaultMsg;
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  },

  /**
   * Belirli bir ürün için özelleştirilmiş WhatsApp mesaj linki üretir
   * @param {string} productName - Ürün adı
   * @param {string} category - Kategori / Ağaç türü
   * @param {string} dimensions - Seçili veya standart ölçü
   * @returns {string} wa.me URL
   */
  getProductWhatsAppLink: function (productName, category = "", dimensions = "") {
    let msg = `Merhaba ${this.brand.name},\nWeb sitenizde yer alan *${productName}*`;
    if (category) msg += ` (${category})`;
    if (dimensions) msg += ` - ${dimensions}`;
    msg += ` ürünü hakkında detaylı bilgi, güncel stok durumu ve metreküp/adet fiyat teklifi almak istiyorum. Yardımcı olabilir misiniz?`;
    return `https://wa.me/${this.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  },

  /**
   * DOM üzerindeki dinamik alanları merkezi config verileriyle günceller
   */
  initDOM: function () {
    // Şirket Adı
    document.querySelectorAll('[data-config="brandName"]').forEach(el => {
      el.textContent = this.brand.name;
    });

    // Kısa İsim
    document.querySelectorAll('[data-config="brandShortName"]').forEach(el => {
      el.textContent = this.brand.shortName;
    });

    // Slogan
    document.querySelectorAll('[data-config="brandSlogan"]').forEach(el => {
      el.textContent = this.brand.slogan;
    });

    // WhatsApp Numarası (Metin)
    document.querySelectorAll('[data-config="whatsappDisplay"]').forEach(el => {
      el.textContent = this.contact.whatsappDisplay;
    });

    // WhatsApp Linkleri
    document.querySelectorAll('[data-config="whatsappLink"]').forEach(el => {
      el.setAttribute("href", this.getWhatsAppLink());
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });

    // Telefon (Metin)
    document.querySelectorAll('[data-config="phoneDisplay"]').forEach(el => {
      el.textContent = this.contact.phoneNumber;
    });

    // Telefon Linkleri
    document.querySelectorAll('[data-config="phoneLink"]').forEach(el => {
      el.setAttribute("href", this.contact.phoneTelLink);
    });

    // E-posta (Metin & Link)
    document.querySelectorAll('[data-config="email"]').forEach(el => {
      el.textContent = this.contact.email;
      if (el.tagName.toLowerCase() === 'a') {
        el.setAttribute("href", `mailto:${this.contact.email}`);
      }
    });

    // Adres
    document.querySelectorAll('[data-config="address"]').forEach(el => {
      el.textContent = this.contact.address;
    });

    // Çalışma Saatleri Özeti
    document.querySelectorAll('[data-config="workingHours"]').forEach(el => {
      el.textContent = this.contact.workingHoursSummary;
    });

    // Yıl
    document.querySelectorAll('[data-config="currentYear"]').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  }
};

// Global nesne olarak pencereye iliştir
window.SITE_CONFIG = SITE_CONFIG;

// DOM içeriği hazır olduğunda yapılandırmayı bağla
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => SITE_CONFIG.initDOM());
} else {
  SITE_CONFIG.initDOM();
}

