/**
 * ==============================================================================
 * VALEN AHŞAP & KERESTE - ÜRÜN VERİLERİ (PRODUCTS DATA)
 * ==============================================================================
 * Sitede sergilenen tüm ahşap, kereste, masif panel ve kalas ürünlerinin veritabanı.
 * Yeni ürün eklemek veya ölçüleri/özellikleri değiştirmek için bu dosyayı düzenleyebilirsiniz.
 */

const WOOD_PRODUCTS = [
  {
    id: "cam-kereste-5x10",
    name: "Çam Kereste 5x10 (Fırınlanmış Taşıyıcı)",
    categorySlug: "cam",
    categoryName: "Çam Ağacı",
    badge: "En Çok Satan",
    featured: true,
    priceNote: "Metreküp veya Adet Bazlı Fiyat Teklifi Alınız",
    shortDescription: "Fırınlanmış birinci sınıf sarıçam kereste; çatı konstrüksiyonu, karkas ve taşıyıcı yapılarda yüksek mukavemet.",
    fullDescription: "Valen Ahşap tesislerinde modern bilgisayar kontrollü fırınlarda %10-12 nem oranına kadar kurutulan sarıçam kerestelerimiz, dönme, çekme veya çatlama yapmaz. 4 tarafı silinmiş ve gönyelenmiş seçenekleri mevcuttur. Çatı iskeletleri, ahşap karkas evler, döşeme kirişleri ve dekoratif taşıyıcı kolonlarda güvenle kullanılır.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80",
        alt: "Fırınlanmış Çam Kereste 5x10 Deste Görünümü"
      },
      {
        url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
        alt: "Çam Ağacı Lif ve Yıllık Halka Dokusu"
      },
      {
        url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1000&q=80",
        alt: "Kereste Atölyesinde İşlenmiş Çam Kirişler"
      }
    ],
    dimensions: [
      "50 mm x 100 mm x 3000 mm",
      "50 mm x 100 mm x 4000 mm",
      "50 mm x 100 mm x 5000 mm",
      "Özel Boy Ebatlama Seçeneği"
    ],
    moisture: "%10 - %12 Fırın Kurusu (KD)",
    surface: "4 Yüzey Silinmiş (S4S) veya Ham Testere Çıkışı",
    origin: "Yerli Sarıçam / İskandinav İthal Çam",
    stockStatus: "Sürekli Stokta (Hemen Teslim)",
    features: [
      "Fırınlanmış (KD) yapısıyla çatlama ve eğrilmeye karşı koruma",
      "Mükemmel çivi, vida ve montaj tutuculuğu",
      "İsteğe bağlı daldırma emprenye ile böcek ve mantara tam koruma",
      "Homojen ölçü hassasiyeti ve pürüzsüz yüzey kalitesi"
    ],
    usageAreas: [
      "Çatı Karkası & Makasları",
      "Ahşap Karkas Yapı Taşıyıcıları",
      "Bölme Duvar ve Zemin Kirişleri",
      "İskele ve Ambalaj Konstrüksiyonu"
    ]
  },

  {
    id: "cam-kereste-10x10",
    name: "Çam Dikme Kereste 10x10 (Kolon & Kiriş)",
    categorySlug: "cam",
    categoryName: "Çam Ağacı",
    badge: "Taşıyıcı Seri",
    featured: true,
    priceNote: "Stok ve Proje Bazlı İndirimli Fiyat Sorunuz",
    shortDescription: "Ağır yük taşıyıcı ahşap kolon, pergola dikmesi ve veranda konstrüksiyonu için ideal fırınlanmış çam.",
    fullDescription: "Geniş kesitli 10x10 çam kerestelerimiz, yüksek dikey yük taşıma kapasitesine sahiptir. Öz odun dengesi gözetilerek seçilen tomruklardan biçilir ve kontrollü fırınlanarak iç gerilimleri hafifletilir. Rustik kamelyalar, açık hava çardakları ve tarihi yapı onarımları için idealdir.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
        alt: "Çam Dikme Kereste 10x10 Kesit"
      },
      {
        url: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80",
        alt: "Pergola ve Taşıyıcı Dikme Keresteleri"
      }
    ],
    dimensions: [
      "100 mm x 100 mm x 3000 mm",
      "100 mm x 100 mm x 4000 mm",
      "100 mm x 100 mm x 6000 mm",
      "Projenize Özel Kesitler"
    ],
    moisture: "%12 - %15 Fırınlanmış",
    surface: "Rendelenmiş / Pah Kırılmış veya Ham",
    origin: "Yerli Sarıçam / Karaçam",
    stockStatus: "Stokta Mevcut",
    features: [
      "Yüksek eksenel basma mukavemeti",
      "Dış ortama uygun kalın et payı",
      "Doğal reçine ile artırılmış dış ortam ömrü",
      "Pahlı kenar seçeneğiyle estetik köşe geçişleri"
    ],
    usageAreas: [
      "Pergola & Kamelya Taşıyıcı Ayakları",
      "Veranda ve Sundurma Kolonları",
      "Ağır Çatı Aşık ve Mertekleri",
      "Köprü ve İskele Dikmeleri"
    ]
  },

  {
    id: "mese-masif-panel-40mm",
    name: "Masif Meşe Panel (40mm A/B Kalite)",
    categorySlug: "mese",
    categoryName: "Meşe Ağacı",
    badge: "Premium Seçim",
    featured: true,
    priceNote: "Plaka Başına Özel Fiyat Teklifi Alınız",
    shortDescription: "A/B ekstra sınıf masif meşe plaka; lüks mutfak tezgahları, yemek masaları ve mimari zemin basamakları.",
    fullDescription: "En kaliteli meşe lamellerinin yüksek basma basıncı ve D4 suya dayanıklı poliüretan tutkallarla boyuna eklenmesiyle üretilir. Yüzeyi 150 kum zımparalanmış olup doğal yağ, cila veya epoksi uygulamalarına doğrudan hazırdır. Dönmez, eğrilmez ve onlarca yıl ilk günkü formunu muhafaza eder.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542456510-4710d436c4f2?auto=format&fit=crop&w=1000&q=80",
        alt: "Masif Meşe Panel Yüzeyi ve Damar Detayı"
      },
      {
        url: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1000&q=80",
        alt: "Meşe Masif Panel Mutfak Tezgahı Uygulaması"
      },
      {
        url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1000&q=80",
        alt: "Masif Meşe Ahşap Panel İstif Alanı"
      }
    ],
    dimensions: [
      "40 mm x 650 mm x 3000 mm (Tezgah Boyu)",
      "40 mm x 900 mm x 2500 mm (Masa Boyu)",
      "40 mm x 1000 mm x 3000 mm (Geniş Panel)",
      "30 mm ve 20 mm Kalınlık Opsiyonları"
    ],
    moisture: "%8 ± %2 Mobilya Fırın Kurusu",
    surface: "150 Kum Kalibre Zımparalanmış (Yağa Hazır)",
    origin: "Trakya / Doğu Avrupa Ak Meşe",
    stockStatus: "Stokta Hazır (Farklı Ölçüler)",
    features: [
      "Gıdaya uygun EN 204 D4 normunda suya dayanıklı lamel birleştirme",
      "Doğal meşe harelerini kesintisiz sergileyen geniş lamel yapısı",
      "Yüksek darbe ve çizilme direnci",
      "Yıllar sonra tekrar zımparalanıp sıfırlanabilen %100 masif yapı"
    ],
    usageAreas: [
      "Lüks Mutfak & Ada Tezgahları",
      "Yemek Masası & Çalışma Masası Tablaları",
      "Ahşap Merdiven Basamakları & Rıhtlar",
      "Özel Tasarım Banyo Dolabı Üst Tablaları"
    ]
  },

  {
    id: "mese-kalas-50mm",
    name: "Fırınlanmış Meşe Kalas (50mm Marangozluk)",
    categorySlug: "mese",
    categoryName: "Meşe Ağacı",
    badge: "1. Sınıf Seçme",
    featured: false,
    priceNote: "Metreküp Bazlı Güncel Teklif İsteyiniz",
    shortDescription: "Özenle fırınlanmış 50 mm kalınlığında doğal kenarlı veya kenarları temizlenmiş marangoz meşe kalası.",
    fullDescription: "Mobilya üreticileri ve iç mimarlar için tomruktan titizlikle dilimlenmiş, havalandırma kulelerinde ön kurutulup ardından bilgisayarlı fırınlarda gerilimsiz kurutulmuş meşe kalaslarıdır. Bünyesindeki nem dengesi sayesinde biçildiğinde bıçak sıkıştırmaz ve şekil değiştirmez.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1000&q=80",
        alt: "Fırınlanmış Meşe Kalas Stokları"
      },
      {
        url: "https://images.unsplash.com/photo-1542456510-4710d436c4f2?auto=format&fit=crop&w=1000&q=80",
        alt: "Meşe Kalas Doğal Doku Yakın Çekim"
      }
    ],
    dimensions: [
      "50 mm Kalınlık x 150-350 mm Serbest Genişlik x 2500-4000 mm Boy",
      "60 mm ve 80 mm Kalas Seçenekleri Mevcuttur"
    ],
    moisture: "%8 - %10 Fırınlanmış (KD)",
    surface: "Ham Kalas (Talep Halinde 4 Taraf Planya Yapılır)",
    origin: "Yerli Ak Meşe / Ukrayna İthal Meşe",
    stockStatus: "Sürekli Depoda Mevcut",
    features: [
      "Yüksek yoğunluklu ve homojen gözenek yapısı",
      "Doğal tanen zenginliği ile uzun ömür",
      "CNC ve frezede keskin hatlar çıkarma kabiliyeti",
      "Rustik ve budaksız ekstra seçenekleri"
    ],
    usageAreas: [
      "Masif Kapı ve Kasa İmalatı",
      "Özel Sipariş Salon ve Ofis Mobilyaları",
      "Restorasyon Projeleri & Ahşap Pencereler",
      "Tasarım Şarap Mahzenleri & Raf Sistemleri"
    ]
  },

  {
    id: "ceviz-kutuk-masa-tablasi",
    name: "Ceviz Kütük Masa Tablası (Canlı Kenar - Live Edge)",
    categorySlug: "ceviz",
    categoryName: "Ceviz Ağacı",
    badge: "Koleksiyon / Tek Parça",
    featured: true,
    priceNote: "Her Kütük Benzersizdir - Fotoğraf ve Ölçüye Göre Teklif Alınız",
    shortDescription: "Doğanın binbir haresi tek bir kütükte; doğal canlı kenarlı, kurutulmuş lüks ceviz masa plakası.",
    fullDescription: "Asırlık ceviz ağaçlarının gövde dilimlerinden elde edilen, her biri dünyada tek ve eşsiz birer sanat eseri olan kütük plakalardır. 3 yıl doğal açık hava kurutmasının ardından özel vakumlu fırınlarda %8 neme düşürülmüştür. Çatlama riskleri kelebek dikişler ve polimer gergi sistemleriyle emniyete alınmıştır.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
        alt: "Ceviz Canlı Kenar Masa Tablası"
      },
      {
        url: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80",
        alt: "Ceviz Ağacı Kütük Damarları ve Hareler"
      },
      {
        url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
        alt: "Modern Lüks Ceviz Yemek Masası Uygulaması"
      }
    ],
    dimensions: [
      "60-70 mm Kalınlık x 850-1100 mm Genişlik x 2200 mm Boy",
      "60-70 mm Kalınlık x 950-1200 mm Genişlik x 2800 mm Boy",
      "60-80 mm Kalınlık x 1000-1300 mm Genişlik x 3400 mm Boy (Toplantı Masası)"
    ],
    moisture: "%8 - %9 Vakum Fırın Kurusu",
    surface: "Doğal Canlı Kenar (Canlı Kabuk Temizlenmiş), Kalibre Edilmiş",
    origin: "Anadolu Yerli Ceviz / Amerikan Siyah Ceviz (Black Walnut)",
    stockStatus: "Atölyemizde Seçilebilir Stoklar",
    features: [
      "Dünyada eşi benzeri bulunmayan damar ve hare zenginliği",
      "Doğal çatlaklar için pirinç veya meşe kelebek kama detayları",
      "Epoksi dökümüne veya doğal mat ahşap yağına tam uygunluk",
      "İç mimarlar için atölyeden birebir kütük seçme imkanı"
    ],
    usageAreas: [
      "Lüks Yemek ve Ziyafet Masaları",
      "Yönetim Kurulu & VIP Toplantı Masaları",
      "Otel Giriş Karşılama (Resepsiyon) Bankoları",
      "Özel Sanatsal Sehpa ve Konsol Tasarımları"
    ]
  },

  {
    id: "ceviz-kereste-amerikan",
    name: "Amerikan Siyah Ceviz Kereste (FAS 1. Kalite)",
    categorySlug: "ceviz",
    categoryName: "Ceviz Ağacı",
    badge: "İthal / FAS Kalite",
    featured: false,
    priceNote: "m³ veya Boy Ebat Fiyatı İçin WhatsApp'tan Yazınız",
    shortDescription: "Koyu çikolata tonlarında, düzgün damarlı, fırınlanmış ithal Amerikan ceviz marangoz kerestesi.",
    fullDescription: "Kuzey Amerika'dan ithal edilen ve FAS (First and Seconds) kalite standardına sahip siyah ceviz (Juglans nigra) kerestelerimiz, zengin çikolata tonları ve tutarlı lif yapısıyla bilinir. Mobilya atölyelerinde minimum zayiatla işlenir ve cilalandığında derin 3 boyutlu bir parlaklık sunar.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80",
        alt: "Amerikan Siyah Ceviz Kalas Deste"
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
        alt: "İşlenmiş Amerikan Ceviz Ahşap Parçalar"
      }
    ],
    dimensions: [
      "26 mm (1 inç), 38 mm (1.5 inç), 52 mm (2 inç) Kalınlıklar",
      "Genişlikler: 120 mm - 280 mm | Boylar: 2100 mm - 3600 mm"
    ],
    moisture: "%7 - %9 Hassas Fırın Kurusu",
    surface: "Silinmemiş Ham Kalas / Hassas Gönyeli",
    origin: "Kuzey Amerika (USA İthal)",
    stockStatus: "Sürekli Stok",
    features: [
      "Kusursuz koyu kahve ve mürdüm geçişleri",
      "El ve makine aletlerinde mükemmel kesim hassasiyeti",
      "Zamansız ve değer kaybetmeyen lüks görünüm",
      "Az budaklı, temiz ve yüksek verimli kalas seçimi"
    ],
    usageAreas: [
      "Üst Düzey Yönetici Ofis Mobilyaları",
      "Özel Akustik Hoparlör Kabinleri",
      "Lüks Yat & Özel Tekne Kabin Ahşapları",
      "Mimar Çizimi Butik Mobilya Serileri"
    ]
  },

  {
    id: "kayin-kereste-buharli",
    name: "Buharlı Kayın Kereste (Fırınlanmış 1. Sınıf)",
    categorySlug: "kayin",
    categoryName: "Kayın Ağacı",
    badge: "İskelet & Torna",
    featured: true,
    priceNote: "Toptan m³ İndirimli Fiyat Teklifi Alınız",
    shortDescription: "Buharlanarak gerilimleri alınmış, homojen somon pembe renkli, yüksek dayanımlı kayın kereste.",
    fullDescription: "Özel buharlama odalarında hidrotermal işlemden geçirilerek ahşabın doğal gerilimleri sıfırlanmış ve rengi homojen sıcak bir pembe-somon tona kavuşturulmuştur. İskelet imalatında çatlamayan, vidaları kusursuz sıkan ve bükme mobilyalarda (Tonet tarzı) kırılmayan endüstri standardı ahşaptır.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
        alt: "Buharlı Kayın Kereste Paketleri"
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
        alt: "Kayın Ahşap Yüzey Pürüzsüz Doku"
      }
    ],
    dimensions: [
      "30 mm, 40 mm, 50 mm, 60 mm, 80 mm Kalınlıklar",
      "Genişlik: 120 mm ve üzeri | Boy: 2000 mm - 3500 mm"
    ],
    moisture: "%8 - %10 Fırın Kurusu",
    surface: "Ham Kalas (Rende ve Boy Ebatlama Yapılabilir)",
    origin: "Batı Karadeniz (Bolu, Düzce, Zonguldak)",
    stockStatus: "Yüksek Miktarlı Depo Stoku",
    features: [
      "Buharlama sayesinde çatlama ve lif dönmesi sıfıra indirilmiş yapı",
      "Torna makinelerinde pürüzsüz dairesel yüzey verme yeteneği",
      "Yüksek darbe emme ve basınç direnci",
      "Leke tutmayan ve boyayı homojen kabul eden ince gözenek"
    ],
    usageAreas: [
      "Sandalye, Berjer ve Koltuk İskeletleri",
      "Torna Ayaklar, Küpeşte ve Merdiven Dikmeleri",
      "Masif Parke ve Ağır Yük Zeminleri",
      "Mutfak Kesme Tahtaları ve Masif Gereçler"
    ]
  },

  {
    id: "kayin-masif-panel-30mm",
    name: "Kayın Masif Panel (30mm & 40mm)",
    categorySlug: "kayin",
    categoryName: "Kayın Ağacı",
    badge: "Merdiven & Masa",
    featured: false,
    priceNote: "Plaka Ebatına Göre Fiyat İsteyiniz",
    shortDescription: "Merdiven basamakları, mutfak dolap gövdeleri ve sağlam çalışma masaları için masif kayın plaka.",
    fullDescription: "Kayın lamellerinin finger-joint (boy ekli) veya solid (kesintisiz tam boy) olarak preslenmesiyle oluşturulan homojen masif panellerimiz, bükülmeye karşı en dirençli mühendislik ahşap plakaları arasındadır. Açık rengi ve temiz yüzeyi ile modern minimalist tasarımlara çok yakışır.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
        alt: "Kayın Masif Panel Plaka"
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
        alt: "Kayın Ahşap Merdiven Basamağı Detayı"
      }
    ],
    dimensions: [
      "30 mm x 650 mm x 3000 mm",
      "40 mm x 650 mm x 3000 mm (Merdiven Basamağı Boyu)",
      "40 mm x 1000 mm x 2500 mm (Masa Tablası)",
      "18 mm, 25 mm İnce Plakalar"
    ],
    moisture: "%8 ± %2 Mobilya Fırın Kurusu",
    surface: "120-150 Kum Kalibre Zımparalanmış",
    origin: "Yerli Karadeniz Buharlı Kayın",
    stockStatus: "Stokta Mevcut",
    features: [
      "D4 tutkallı, yüksek sıcaklık presli endüstriyel dayanım",
      "Boyutsal kararlılık; ortam sıcaklığında eğrilmez",
      "Merdiven basamaklarında aşınmaya karşı üstün tokluk",
      "Kolay renklendirilebilir açık doğal ton"
    ],
    usageAreas: [
      "Dubleks & Villa Merdiven Basamakları",
      "Restoran ve Kafe Masa Tablaları",
      "Okul Sıraları & Laboratuvar Masaları",
      "İç Mekan Kapı Kanatları & Kütüphane Rafları"
    ]
  },

  {
    id: "gurgen-kereste-firinlanmis",
    name: "Fırınlanmış Gürgen Kereste (Ekstra Sert)",
    categorySlug: "gurgen",
    categoryName: "Gürgen Ağacı",
    badge: "Maksimum Sertlik",
    featured: false,
    priceNote: "Sanayi & Toptan Siparişler İçin Teklif Alınız",
    shortDescription: "Aşırı aşınma direnci gerektiren ağır hizmet alanları, araç kasaları ve takım sapları için gürgen kalas.",
    fullDescription: "Gürgen ağacının olağanüstü lif yoğunluğu, ona metallerle yarışan bir darbe direnci kazandırır. Tesislerimizde çatlatmadan fırınlanan gürgen kerestelerimiz, özellikle ağır mobilya üreticileri ve endüstriyel ahşap parça imalatçıları tarafından ilk sırada tercih edilmektedir.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1000&q=80",
        alt: "Fırınlanmış Gürgen Kereste"
      },
      {
        url: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80",
        alt: "Ağır Hizmet Gürgen Ahşap Kalaslar"
      }
    ],
    dimensions: [
      "40 mm, 50 mm, 60 mm, 80 mm Kalınlık",
      "100 - 250 mm Genişlik | 2000 - 3200 mm Boy"
    ],
    moisture: "%10 - %12 Fırınlanmış",
    surface: "Ham Kalas",
    origin: "Trakya ve Doğu Karadeniz Ormanları",
    stockStatus: "Stokta Hazır",
    features: [
      "Kırılmaz kilitli lif örgüsü ile aşırı basma mukavemeti",
      "Aşınmaya ve sürtünmeye karşı Türkiye'nin en dirençli ağacı",
      "Vidalamada gevşeme yapmayan yüksek tutunma",
      "Vibrasyon ve titreşimleri sönümleyen gövde"
    ],
    usageAreas: [
      "Kamyon & Kamyonet Ahşap Taban Tahtaları",
      "Çekiç, Balta ve Kürek Sapları",
      "Ağır Yük Koltuk ve Çekyat Mekanizma Taşıyıcıları",
      "Sanayi Mengene Parçaları ve Takozlar"
    ]
  },

  {
    id: "ladin-lambiri-tavan-duvar",
    name: "Ladin Lambiri & Duvar Kaplaması (Ekstra Kalite)",
    categorySlug: "ladin",
    categoryName: "Ladin Ağacı",
    badge: "Hafif & Doğal",
    featured: true,
    priceNote: "m² Bazlı İndirimli Paket Fiyatı Sorunuz",
    shortDescription: "Açık sedef renginde, fırınlanmış geçmeli ladin lambiri; tavan, sauna ve duvar giydirmelerinde ferahlık.",
    fullDescription: "Kafkas ladininden hassas profil makinelerinde lamba-zıvana (geçmeli) olarak işlenen lambirilerimiz, kolay montaj sağlar. Açık rengi ve hoş kokusuyla mekanlara ferahlık ve nefes alan doğal bir ısı/ses yalıtımı katar. Reçine kanalları minimum düzeydedir.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
        alt: "Geçmeli Ladin Lambiri Döşeme Yüzeyi"
      },
      {
        url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1000&q=80",
        alt: "Ahşap Tavan Ladin Lambiri Uygulama"
      }
    ],
    dimensions: [
      "14 mm x 90 mm x 3000 mm (Paket Halinde)",
      "14 mm x 90 mm x 4000 mm",
      "18 mm x 120 mm x 4000 mm (Geniş Lambiri)"
    ],
    moisture: "%10 - %12 Fırın Kurusu",
    surface: "Ön Yüz Pürüzsüz Zımparalanmış, Arka Yüz Gerilim Kanallı",
    origin: "Doğu Karadeniz Ladini / İskandinav Ladin",
    stockStatus: "Sürekli Paket Stok",
    features: [
      "Lamba-zıvana geçme sistemiyle vidasız gizli montaj kolaylığı",
      "Arka yüz gerilim kanalları ile havalanma ve dönmeme garantisi",
      "Mekanları aydınlatan ferah, ipeksi beyaz ahşap dokusu",
      "Mükemmel doğal ısı ve akustik ses sönümleme"
    ],
    usageAreas: [
      "Villa ve Dağ Evi Tavan & Duvar Kaplamaları",
      "Geleneksel ve Modern Fin Saunaları",
      "Balkon & Teras Tavan Giydirmeleri",
      "Akustik Stüdyolar ve Konser Odaları"
    ]
  },

  {
    id: "iroko-deck-dis-mekan",
    name: "İroko Dış Mekan Deck (Klipsli / Gizli Vidalı)",
    categorySlug: "iroko",
    categoryName: "İroko & Egzotik",
    badge: "Suya Tam Dayanıklı",
    featured: true,
    priceNote: "m² ve Karkas Metrajına Göre Teklif İsteyiniz",
    shortDescription: "Havuz kenarları, teraslar ve marin yapılar için doğal yağlı, güneşe ve suya dayanıklı İroko zemin ahşabı.",
    fullDescription: "Afrika'nın tropik ormanlarından tedarik edilen orijinal İroko ağacı, doğal bünyesinde bulundurduğu yağlar ile suyu ve nemi itici özelliğe sahiptir. Çürümez, mantar yapmaz, güneş altında gevremez. Yan kanallarındaki klips yuvaları sayesinde vidalar görünmeden, kusursuz bir zemin oluşturulur.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
        alt: "İroko Ahşap Deck Havuz Kenarı Uygulaması"
      },
      {
        url: "https://images.unsplash.com/photo-1542456510-4710d436c4f2?auto=format&fit=crop&w=1000&q=80",
        alt: "İroko Ağacı Doğal Yağlı Doku"
      }
    ],
    dimensions: [
      "20 mm x 95 mm x 1500-3500 mm",
      "22 mm x 120 mm x 2000-4000 mm",
      "Özel Karkas ve Alt Taşıyıcı Profilleri Mevcuttur"
    ],
    moisture: "%12 - %14 Dış Mekan Dengesi",
    surface: "Düz Zımparalı veya Kaymaz İnce Çizgili Tırtıklı Yüzey",
    origin: "Orta ve Batı Tropikal Afrika",
    stockStatus: "Stokta Mevcut (Hemen Teslim)",
    features: [
      "Kimyasal koruyucu gerektirmeyen %100 doğal su ve güneş direnci",
      "Gizli plastik veya paslanmaz çelik klipsli montaj kanalları",
      "Yalınayak yürüyüşe uygun pürüzsüz ve kıymıksız dokunuş",
      "Tik (Teak) ağacına en ekonomik ve eşit mukavemette tek alternatif"
    ],
    usageAreas: [
      "Yüzme Havuzu Kenarları ve İskeleler",
      "Açık Hava Restoran & Kafe Terasları",
      "Bahçe Yürüyüş Yolları & Verandalar",
      "Lüks Yat, Kotra ve Tekne Güverteleri"
    ]
  },

  {
    id: "cam-tahta-cati-kalip",
    name: "Çam Çatı ve Kalıp Tahtası (2.5 x 10)",
    categorySlug: "cam",
    categoryName: "Çam Ağacı",
    badge: "İnşaat Serisi",
    featured: false,
    priceNote: "Bağ & Metreküp Toptan Fiyat Alınız",
    shortDescription: "Çatı kaplama altı tahtası, kiremit altı döşeme ve betonarme kalıp işleri için sağlam çam tahta.",
    fullDescription: "İnşaat ve şantiye sektörünün temel ihtiyacı olan çatı kaplama tahtalarımız, standart kalınlıkta dilimlenmiş ve temiz istiflenmiştir. Kiremit altı izolasyon tabanında ve beton döküm kalıplarında eğilmeden yüksek taşıyıcılık sunar.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80",
        alt: "Çam Çatı Tahtası İstifleri"
      },
      {
        url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80",
        alt: "İnşaatlık Çam Tahta Detay"
      }
    ],
    dimensions: [
      "25 mm x 100 mm x 3000 mm / 4000 mm",
      "25 mm x 120 mm x 3000 mm / 4000 mm",
      "25 mm x 150 mm x 3000 mm / 4000 mm"
    ],
    moisture: "Hava Kurusu (%16 - %20) veya Fırınlanmış",
    surface: "Ham Daire Testere Çıkışı",
    origin: "Yerli Karadeniz Sarıçam",
    stockStatus: "Sürekli Yüksek Tonajlı Stok",
    features: [
      "Standardize edilmiş nominal kalınlık garantisi",
      "Çatlama yapmadan rahat çivi ve vida çakılabilme kabiliyeti",
      "Yüksek esneklik modülü ile çatı yüklerine direnç",
      "Toptan kamyon ve tır bazlı hızlı sevk imkanı"
    ],
    usageAreas: [
      "Kiremit ve Shingle Altı Çatı Kaplama Döşemeleri",
      "Betonarme Kalıp ve Perde İmalatları",
      "Ahşap Palet, Sandık ve Ambalaj Sanayi",
      "Şantiye Çevre Güvenlik Perdeleri"
    ]
  }
];

window.WOOD_PRODUCTS = WOOD_PRODUCTS;

