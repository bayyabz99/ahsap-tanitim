/**
 * ==============================================================================
 * VALEN AHŞAP & KERESTE - AĞAÇ TÜRLERİ BİLGİ REHBERİ (WOOD SPECIES DATA)
 * ==============================================================================
 * Müşterilerin hangi ağacın kendi projelerine en uygun olduğunu kolayca
 * anlayabilmesi için hazırlanan detaylı teknik ve karakteristik rehber verileri.
 */

const WOOD_SPECIES_GUIDE = [
  {
    id: "species-mese",
    slug: "mese",
    name: "Meşe Ağacı",
    latinName: "Quercus robur / Quercus petraea",
    family: "Fagaceae",
    origin: "Karadeniz ve Marmara Bölgesi / Avrupa",
    tagline: "Yüzyılların Zarafeti ve Tavizsiz Sağlamlık",
    badge: "En Çok Tercih Edilen",
    image: "https://images.unsplash.com/photo-1542456510-4710d436c4f2?auto=format&fit=crop&w=1000&q=80",
    grainTextureImage: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=800&q=80",
    
    // Teknik Özellikler
    jankaHardness: 1360, // lbf
    hardnessLevel: "Çok Sert",
    densityKgM3: "690 - 750",
    dryingShrinkage: "Orta / Kararlı",
    durabilityRating: "Mükemmel (Doğal Tanen Korumalı)",
    bendingStrength: "Çok Yüksek",
    
    // Karakteristik Bilgiler
    colorTone: "Açık bal renginden altın sarısına, zamanla asil bir kahveye evrilir.",
    grainStructure: "Geniş ve belirgin yıllık halkalar, dramatik hareli ve çizgili damar yapısı.",
    workability: "Sert yapısına rağmen makinelerde temiz işlenir, cila, yağ ve koruyucuları mükemmel emer.",
    
    // Açıklama & Hikaye
    summary: "Meşe, tarihten günümüze dayanıklılığın, soyluluğun ve zamansız güzelliğin simgesi olmuştur. Yüksek tanen oranı sayesinde mantar ve böcek saldırılarına karşı doğal bir kalkana sahiptir. Fırınlandığında boyutsal kararlılığı mükemmeldir.",
    
    highlights: [
      "Doğal tanen içeriği ile çürümeye karşı üstün bağışıklık",
      "Ağır darbelere ve sürekli aşınmaya karşı yüksek direnç",
      "Zaman geçtikçe derinleşen ve zenginleşen altın tonlu renk",
      "Doğal ahşap yağları ile nefes alan kusursuz yüzey uyumu"
    ],

    // Kullanım Alanları
    usageAreas: [
      "Lüks Masif Masalar & Tezgahlar",
      "İç Mimari & Özel Mobilya İmalatı",
      "Yoğun Trafikli Ahşap Zemin & Parke",
      "Tarihi Eser Restorasyonu & Doğrama",
      "Mimari Merdiven & Küpeşte İmalatı"
    ]
  },

  {
    id: "species-cam",
    slug: "cam",
    name: "Çam Ağacı (Sarıçam & Karaçam)",
    latinName: "Pinus sylvestris / Pinus nigra",
    family: "Pinaceae",
    origin: "Kuzey Anadolu Dağları & İskandinavya",
    tagline: "Doğal Reçine Koruması ve Çok Yönlü Yapı Gücü",
    badge: "Ekonomik & Güçlü",
    image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80",
    grainTextureImage: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80",

    jankaHardness: 690,
    hardnessLevel: "Yumuşak - Orta Sert",
    densityKgM3: "480 - 550",
    dryingShrinkage: "Düşük / Kolay Kurur",
    durabilityRating: "Orta - Yüksek (Reçineli Yapı)",
    bendingStrength: "Yüksek Esneklik",

    colorTone: "Açık saman sarısından pembemsi açık kahve tonlarına kadar uzanır.",
    grainStructure: "Düzgün elyaf, belirgin reçine kanalları ve sıcak budak karakteri.",
    workability: "Testereyle kesimi, çivilemesi ve vidalama tutuşu olağanüstü kolay ve güçlüdür.",

    summary: "Çam kereste, hafifliği ve yüksek taşıma mukavemetini bir arada sunan en verimli inşaat ve doğrama ahşabıdır. Kendi doğal reçinesi ağacı dış etkenlere karşı korurken, fırınlama işlemiyle reçinesi sabitlenerek üst sınıf yapı kerestesidir.",

    highlights: [
      "Hafif yapısına rağmen yüksek eğilme ve taşıma kapasitesi",
      "Fırınlandığında çatlama ve dönme yapmayan stabil lifler",
      "Çivi ve vida tutma kabiliyetinde mükemmel performans",
      "Emprenye işlemiyle açık hava koşullarına onlarca yıl dayanıklılık"
    ],

    usageAreas: [
      "Çatı Konstrüksiyonu & Taşıyıcı Dikmeler (5x10, 10x10)",
      "Kalıp ve İnşaat İskelesi Keresteleri",
      "Doğramalık Kapı ve Pencere Profilleri",
      "Bahçe Çitleri & Pergola Konstrüksiyonları",
      "İç ve Dış Mekan Lambiri Döşemeleri"
    ]
  },

  {
    id: "species-ceviz",
    slug: "ceviz",
    name: "Ceviz Ağacı",
    latinName: "Juglans regia / Juglans nigra",
    family: "Juglandaceae",
    origin: "Anadolu & Doğu Kuzey Amerika",
    tagline: "Eşsiz Hareler, Kraliyet Asaleti ve Lüks Dokunuş",
    badge: "Lüks Koleksiyon",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    grainTextureImage: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",

    jankaHardness: 1010,
    hardnessLevel: "Orta - Sert",
    densityKgM3: "620 - 680",
    dryingShrinkage: "Çok Kararlı (Minimum Dönme)",
    durabilityRating: "Çok Yüksek (Çürümez Kalp Odun)",
    bendingStrength: "Mükemmel Şok Emilimi",

    colorTone: "Derin espresso, sütlü çikolata tonları, morumsu ve gri gölgeli zengin geçişler.",
    grainStructure: "Kıvrımlı, dalgalı hareli, canlı kenar (live edge) kütüklerde büyüleyici desenler.",
    workability: "El aletleriyle ve makinelerle kusursuz işlenir; pürüzsüz ipeksi bir yüzey verir.",

    summary: "Ceviz ağacı, dünyanın en kıymetli masif ağaçlarından biridir. Çarpıcı hareleri ve derin çikolata rengi ile mobilya sanatçılarına ilham verir. Bünyesindeki doğal lif dengesi, ortam nem değişikliklerinde bile eğrilmesini önler.",

    highlights: [
      "Dünyada eşi olmayan büyüleyici dalgalı hareli damar yapısı",
      "Yıllar geçtikçe değerlenen antika ve sanat eseri niteliği",
      "Zımparalandığında kadifemsi pürüzsüzlükte yüzey dokusu",
      "Epoksi masa ve kütük plaka tasarımlarında rakipsiz estetik"
    ],

    usageAreas: [
      "Tek Parça Canlı Kenar (Live Edge) Kütük Masalar",
      "Özel Tasarım Ofis ve Yönetici Mobilyaları",
      "Dekoratif Ahşap Duvar Panelleri",
      "Silah Kundakları ve Hassas Ahşap Objeler",
      "Yat ve Özel Araç İç Kaplamaları"
    ]
  },

  {
    id: "species-kayin",
    slug: "kayin",
    name: "Kayın Ağacı (Buharlı & Beyaz)",
    latinName: "Fagus orientalis",
    family: "Fagaceae",
    origin: "Kuzey ve Doğu Anadolu Ormanları",
    tagline: "Homojen Gözenek, Esnek Büküm ve Sağlam İskelet",
    badge: "Sanayi & Mobilya",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    grainTextureImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",

    jankaHardness: 1300,
    hardnessLevel: "Sert",
    densityKgM3: "680 - 720",
    dryingShrinkage: "Yüksek (Özel Fırınlama Şarttır)",
    durabilityRating: "Orta (İç Mekan İçin Mükemmel)",
    bendingStrength: "Dünyanın En İyi Bükülen Ahşabı",

    colorTone: "Buharlandığında sıcak somon-pembe; buharsız beyaz kayında açık krem rengi.",
    grainStructure: "Çok ince ve homojen gözenekli, zarif ışın pulları barındıran temiz doku.",
    workability: "Torna, büküm ve freze işlemlerinde pürüzsüz netlik; boya ve cila tutuşu fevkalade.",

    summary: "Buharlı fırınlanmış kayın, Türkiye mobilya endüstrisinin omurgasıdır. Buhar kazanlarında fırınlanarak gerilimleri sıfırlanır, lifleri yumuşatılarak olağanüstü bir bükülme kabiliyeti kazanır. Sandalye ve koltuk iskeletlerinde kırılmaz güç oluşturur.",

    highlights: [
      "Buhar altında eğilerek kavisli formlar alabilen rakipsiz esneklik",
      "Kıymıksız, homojen ve pürüzsüz işlenebilen gözenek anatomisi",
      "Yüksek darbe emme ve mukavemet dayanıklılığı",
      "Gıda ile temasa uygun, kokusuz ve hijyenik ahşap yapısı"
    ],

    usageAreas: [
      "Sandalye, Koltuk ve Berjer İskelet Kerestesi",
      "Masif Merdiven Basamakları ve Korkulukları",
      "Okul Sıraları, Oyuncak ve Mutfak Teşhir Elemanları",
      "Parke ve Ağır Yük Zemin Blokları",
      "Torna Ayakları ve Bükümlü Ahşap Detaylar"
    ]
  },

  {
    id: "species-gurgen",
    slug: "gurgen",
    name: "Gürgen Ağacı",
    latinName: "Carpinus betulus",
    family: "Betulaceae",
    origin: "Trakya ve Karadeniz Kıyı Kuşağı Ormanları",
    tagline: "Aşınmaz Demir Ağaç, Maksimum Çekme Direnci",
    badge: "Ağır Hizmet",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1000&q=80",
    grainTextureImage: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=80",

    jankaHardness: 1630,
    hardnessLevel: "Ekstra Sert",
    densityKgM3: "750 - 820",
    dryingShrinkage: "Yüksek (Özel Kuru Kontrolü)",
    durabilityRating: "Yüksek Mekanik Aşınma Direnci",
    bendingStrength: "Aşırı Yüksek",

    colorTone: "Kirli beyazdan grimsi açık sarıya dönük donuk nötr tonlar.",
    grainStructure: "Çok sıkı, dalgalı ve iç içe geçmiş lifler; ayrışması imkansız yoğun doku.",
    workability: "Yüksek sertliği sebebiyle elmas uçlu makineler gerektirir; inanılmaz derecede sağlamdır.",

    summary: "Gürgen ağacı, halk arasında 'Demir Ağaç' adıyla anılır. Anadolu'nun en sert ve aşınmaya karşı en dirençli yerli ağacıdır. Ağır yüklerin, darbelerin ve mekanik stresin bulunduğu yerlerde çatlama ve kırılmaya meydan okur.",

    highlights: [
      "Ağır sanayi şartlarında aşınmaya uğramayan kaya gibi yoğunluk",
      "Darbe altında liflerin birbirinden ayrılmasını engelleyen kilitli doku",
      "Vidalı ve cıvatalı montajlarda yerinden oynamayan sağlamlık",
      "Yüksek sürtünmeli yüzeylerde sıfır deformasyon"
    ],

    usageAreas: [
      "Ağır Hizmet Taşıt Kasaları ve Kamyonet Tabanları",
      "El Aletleri Sapları (Balta, Çekiç, Balyoz Sapı)",
      "Jimnastik ve Spor Salonu Ekipmanları",
      "Tekstil Dokuma Masuraları ve Mengene Çeneleri",
      "Sağlamlık Odaklı Ağır Mobilya Taşıyıcıları"
    ]
  },

  {
    id: "species-ladin",
    slug: "ladin",
    name: "Ladin Ağacı",
    latinName: "Picea abies / Picea orientalis",
    family: "Pinaceae",
    origin: "Doğu Karadeniz Yüksek Rakımları & Kafkaslar",
    tagline: "İpeksi Parlaklık, Akustik Armoni ve Düzgün Lifler",
    badge: "Hafif & Akustik",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    grainTextureImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",

    jankaHardness: 480,
    hardnessLevel: "Yumuşak",
    densityKgM3: "440 - 480",
    dryingShrinkage: "Düşük / Hızlı ve Kolay Kurur",
    durabilityRating: "İç Mekan İçin Yüksek",
    bendingStrength: "Hafifliğine Göre Şaşırtıcı Direnç",

    colorTone: "Sedef beyazından açık krem ve saman sarısına, neredeyse renksiz berraklık.",
    grainStructure: "Çok düzgün, sık ve narin yıllık halkalar; ipeksi doğal bir ışıltı.",
    workability: "Çok rahat kesilir, rendelenir ve yüzeyi ayna gibi pürüzsüz hale gelir.",

    summary: "Doğu Karadeniz'in sarp dağlarında yetişen Kafkas Ladini, beyaz rengi ve düzgün elyafıyla ahşap mimarisinin en berrak temsilcisidir. Ses dalgalarını mükemmel ilettiği için dünyanın en iyi piyanoları ve yaylı enstrümanlarının gövdeleri ladinden üretilir.",

    highlights: [
      "Mekanları aydınlatan ferah, açık beyaz-krem ahşap tonu",
      "Eşsiz rezonans ve ses yalıtım kabiliyeti",
      "Kolay taşınabilir ve monte edilebilir hafif ağırlık",
      "Reçine ceplerinin azlığı sayesinde kolay cilalanabilirlik"
    ],

    usageAreas: [
      "İç Mekan Tavan ve Duvar Lambirileri",
      "Sauna ve SPA Ahşap Giydirmeleri",
      "Akustik Duvar Panelleri ve Müzik Odaları",
      "Çatı Kirişleri ve Dekoratif Mertekler",
      "Hafif Ambalaj ve Sandık Çözümleri"
    ]
  },

  {
    id: "species-iroko",
    slug: "iroko",
    name: "İroko Ağacı (Afrika Tik'i)",
    latinName: "Milicia excelsa",
    family: "Moraceae",
    origin: "Orta ve Batı Tropikal Afrika",
    tagline: "Doğal Yağlı Koruma, Suya ve Güneşe Meydan Okuyan Güç",
    badge: "Dış Mekan & Deck",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    grainTextureImage: "https://images.unsplash.com/photo-1542456510-4710d436c4f2?auto=format&fit=crop&w=800&q=80",

    jankaHardness: 1260,
    hardnessLevel: "Çok Sert",
    densityKgM3: "640 - 690",
    dryingShrinkage: "Minimum / Dış Şartlarda Boyut Sabit",
    durabilityRating: "Olağanüstü (Dış Mekan Sınıfı 1)",
    bendingStrength: "Yüksek Mukavemet",

    colorTone: "İlk kesildiğinde açık sarı, gün ışığıyla hızla asil bir altın-kahverengine dönüşür.",
    grainStructure: "Hafif kenetli lif yapısı, yağlı dokunuş hissi ve zengin teak görünümü.",
    workability: "Doğal yağlı yapısı nedeniyle özel deck yağları ve paslanmaz vidalarla mükemmel uyumludur.",

    summary: "İroko, Teak ağacına en kaliteli ve sürdürülebilir alternatiftir. Kendi bünyesinde barındırdığı doğal silis ve koruyucu yağlar sayesinde yağmur, kar, deniz suyu ve yakıcı güneş altında bile çürümez, mantarlaşmaz ve formunu kaybetmez.",

    highlights: [
      "Su, deniz tuzu ve UV ışınlarına karşı doğuştan koruma kalkanı",
      "Kimyasal emprenye maddesi gerektirmeyen %100 doğal dayanıklılık",
      "Zamanla grileşse bile basit bir periyodik teak yağı ile ilk günkü rengine dönüş",
      "Islak zeminlerde kaymayı önleyen güvenli yüzey tutuşu"
    ],

    usageAreas: [
      "Havuz Kenarları ve Bahçe Zemin Deck Döşemeleri",
      "Lüks Yat ve Tekne Güverteleri",
      "Dış Mekan Cephe Kaplamaları ve Güneş Kırıcılar",
      "Bahçe Mobilyaları, Pergola ve Kamelyalar",
      "Banyo ve Islak Hacim Ahşap Elemanları"
    ]
  }
];

window.WOOD_SPECIES_GUIDE = WOOD_SPECIES_GUIDE;

