VALEN AHŞAP & KERESTE — PROFESYONEL TANITIM WEB SİTESİ

Talebiniz doğrultusunda, profesyonel ahşap, kereste ve masif tahta satışı yapan kurumsal bir işletme için modern, minimalist, doğal ve güven veren kurumsal tanıtım web sitesi sıfırdan eksiksiz olarak geliştirilmiştir.

Proje, herhangi bir harici frontend framework (React, Vue, Angular vb.) kullanılmadan, %100 saf HTML5, modern CSS3 ve Vanilla JavaScript (ES6+) ile temiz ve modüler bir mimariyle kodlanmıştır.

📁 Proje Dosya ve Klasör Mimarisi
anti1/
├── assets/
│   ├── css/
│   │   ├── style.css             # Ana tasarım sistemi, değişkenler, tipografi, kartlar, modal & drawer
│   │   └── responsive.css        # Mobil, tablet ve masaüstü duyarlı düzen kuralları, filtre stilleri
│   ├── js/
│   │   ├── config.js             # Merkezi işletme ayarları (İsim, WhatsApp, Telefon, Adres, Saatler)
│   │   ├── main.js               # Navigasyon, yapışkan menü, hamburger menü, toast bildirimleri, scroll reveal
│   │   ├── quote-list.js         # Çoklu ürün Talep Listesi, localStorage senkronizasyonu, WhatsApp mesaj derleyici
│   │   ├── modal.js              # Ürün detay modalı, fotoğraf galerisi, ölçü seçici, hızlı WhatsApp butonu
│   │   └── products-page.js      # Gerçek zamanlı arama, kategori filtreleme ve sıralama motoru
│   └── data/
│       ├── categories.js         # Ağaç ve kereste kategorileri veri tablosu
│       ├── wood-species.js       # Ağaç türleri teknik rehber verileri (Janka sertliği, yoğunluk, lif yapısı)
│       └── products.js           # 12+ zengin detaylı kereste, masif panel, kütük ve lambiri ürün veritabanı
├── index.html                    # Ana Sayfa (Hero, Kategoriler, Öne Çıkanlar, Neden Biz, Ahşabın Ruhu, CTA)
├── urunler.html                  # Ürün Kataloğu (Canlı arama, kategori filtreleme, detay modalı)
├── agac-turleri.html             # Ağaç Türleri Rehberi (Meşe, Çam, Ceviz, Kayın, Gürgen, Ladin, İroko)
├── hakkimizda.html               # Kurumsal Sayfa (Hizmet anlayışı, fırınlama teknolojisi, kalite yaklaşımı)
├── iletisim.html                 # İletişim & WhatsApp Hızlı Teklif Formu, Google Haritalar
├── sitemap.xml                   # Arama motorları için site haritası
└── robots.txt                    # Arama motoru tarama kuralları
🎨 1. Tasarım Dili ve Renk Paleti
Koyu Ceviz (#35251D & #2B1D16): Asil, kurumsal ve köklü marka ağırlığı.
Ahşap Kahvesi (#765239): Doğal kereste ve masif ahşap sıcaklığı.
Krem & Açık Bej (#F5F0E8 / #E8DFD1): Ferah, göz yormayan, okunaklı zeminler.
Kırık Beyaz (#FCFAF6): İçerik kartları ve net kontrast.
WhatsApp Yeşili (#25D366): Yüksek dönüşüm sağlayan, dikkat çekici eylem butonları.
Tipografi: Başlıklarda karakteristik ve zarif serif font (Marcellus / Playfair Display), gövde metinlerinde modern sans-serif font (Plus Jakarta Sans).
⚙️ 2. Tek Merkezden Yönetim (assets/js/config.js)

İşletme bilgilerini değiştirmek için sayfaları tek tek gezmenize gerek yoktur. config.js dosyasındaki değerleri güncellemeniz yeterlidir:

javascript
const SITE_CONFIG = {
  brand: {
    name: "Valen Ahşap & Kereste",
    shortName: "Valen Ahşap",
    slogan: "Doğanın Gücünü Ahşaba Dönüştürüyoruz."
  },
  contact: {
    whatsappNumber: "905321234567", // WhatsApp yönlendirme numarası
    whatsappDisplay: "+90 (532) 123 45 67",
    phoneNumber: "+90 (212) 555 12 34",
    email: "bilgi@valenahsap.com",
    address: "Keresteciler Sanayi Sitesi, 14. Blok No: 28, Başakşehir / İstanbul",
    workingHoursSummary: "Hafta İçi: 08:30 - 18:30 | Cmt: 09:00 - 16:00"
  }
  // ...
};

Bu dosyadaki WhatsApp numarası değiştirildiğinde, sitenin tüm sayfalarındaki butonlar, sabit widget'lar ve modal butonları tek seferde otomatik güncellenir.

💬 3. WhatsApp Yönlendirme ve Talep Sistemi

Sitede e-ticaret altyapısı bulunmaz; bunun yerine kurumsal kereste sektörüne en uygun WhatsApp Fiyat & Stok İletişim Mimarisi geliştirilmiştir:

Sabit WhatsApp Butonu: Tüm sayfaların sağ alt köşesinde nabız (pulse) animasyonlu sabit buton.
Ürün Bazlı Otomatik WhatsApp Mesajı: Kullanıcı örneğin Çam Kereste 5x10 ürününün "WhatsApp'tan Fiyat Sor" butonuna bastığında:

"Merhaba Valen Ahşap & Kereste, Web sitenizde yer alan Çam Kereste 5x10 (Çam Ağacı) - 50 mm x 100 mm x 3000 mm ürünü hakkında detaylı bilgi, güncel stok durumu ve metreküp/adet fiyat teklifi almak istiyorum. Yardımcı olabilir misiniz?" mesajı hazır olarak açılır.

Çoklu Ürün Talep Listesi (Talep Çekmecesi):
Kullanıcılar beğendikleri ürünleri "Talep Listeme Ekle" butonu ile sepete benzer bir listeye ekleyebilir.
Seçilen ürünler localStorage üzerinde saklanır; sayfa yenilense bile liste kaybolmaz.
Navigasyon ve sabit düğmede dinamik sayaç rozeti (badge) bulunur.
Sağdan açılan çekmecede ürün fotoğrafları, ölçü bilgileri ve silme butonları yer alır.
"WhatsApp ile Toplu Fiyat Teklifi Al" butonuna basıldığında listedeki tüm ürünler tek bir mesajda listelenerek iletilir:

"Merhaba Valen Ahşap & Kereste, Web siteniz üzerinden incelediğim ve teklif almak istediğim ürün listem aşağıdadır:
1. Çam Kereste 5x10 (Ölçü: 50x100x3000mm)
2. Masif Meşe Panel (40mm A/B)
Bu ürünlerin güncel stok durumları ve metreküp/adet fiyat teklifinizi rica ederim."

İnteraktif İletişim Formu (iletisim.html): Kullanıcının formda girdiği Ad, Telefon, İlgilenilen Ağaç Türü ve Mesaj bilgisi toplanarak doğrudan WhatsApp mesajına dönüştürülür; sahte bekleme veya veritabanı gerektirmez.
🌲 4. Sayfalar ve Özellikleri

index.html (Ana Sayfa):

Tam ekran etkileyici Hero alanı, büyük ahşap fotoğrafı, karanlık degrade ve tipografi.
Görsel kartlarla donatılmış Ürün Kategorilerimiz (hover zoom, karanlık overlay ve metin animasyonu).
Dinamik Öne Çıkan Ürünler ızgarası.
Kurumsal güven oluşturan Neden Bizi Tercih Etmelisiniz? kartları.
Ahşabın doğallığı ve hikayesini anlatan iki sütunlu "Ahşabın Ruhu" bölümü.
Büyük ve dikkat çekici İletişim Çağrısı (CTA) ve detaylı kurumsal Footer.

urunler.html (Ürün Kataloğu):

Canlı anlık arama (arama terimine göre ürün adı, türü ve kullanım alanlarında anında filtreleme).
Kategori filtre hapları (Tüm Ürünler, Çam, Meşe, Ceviz, Kayın, Gürgen, Ladin, İroko) ve her birinin güncel ürün sayaçları.
URL parametresi desteği: Ana sayfadan veya ağaç türlerinden gelindiğinde (örneğin ?kategori=mese), sayfa yenilenmeden ilgili kategori otomatik seçilir.
Responsive 3/2/1 sütunlu ürün kartları.
Ürün Detay Modalı: Çoklu fotoğraf galerisi, küçük resim seçici, teknik özellik tablosu (nem oranı, yüzey silimi, stok durumu), ölçü çipleri ve kullanım alanı etiketleri.

agac-turleri.html (Ağaç Türleri Rehberi):

Her ağaç için (Meşe, Çam, Ceviz, Kayın, Gürgen, Ladin, İroko):
Latince ismi ve familyası,
Janka sertlik değeri (lbf) ve sertlik seviyesi,
Hava kurusu yoğunluğu (
𝑘
𝑔
/
𝑚
3
kg/m
3
),
Renk ve doku özellikleri, lif yapısı,
Çürümeye ve neme dayanıklılık sınıfı,
Yaygın kullanım alanları,
"İlgili Ürünleri İncele" butonu (doğrudan urunler.html?kategori=... filtresine yönlendirir).

hakkimizda.html (Kurumsal):

İşletmenin ahşaba yaklaşımı, hammadde seçim kriterleri.
Fırınlama ve nem disiplini, ölçü hassasiyeti ve sürdürülebilir orman tedarik ilkeleri.
Kolayca özelleştirilebilir, uydurma sertifika/rakam içermeyen şık kurumsal metinler.

iletisim.html (İletişim & Konum):

WhatsApp, telefon, e-posta, çalışma saatleri ve fiziksel adres kartları.
İnteraktif WhatsApp teklif oluşturucu formu.
Responsive Google Haritalar yerleşimi.
🚀 Yayınlama ve Kullanım

Site tamamen statik dosyalardan oluştuğu için herhangi bir sunucu kurulumu gerektirmez. Dosyaları doğrudan Netlify, Vercel, GitHub Pages, cPanel veya Apache/Nginx sunucunuza yükleyerek anında yayına alabilirsiniz.
