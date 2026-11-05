/**
 * ==============================================================================
 * VALEN AHŞAP & KERESTE - KATEGORİ VERİLERİ (CATEGORIES DATA)
 * ==============================================================================
 * Sitedeki ahşap ve kereste türlerinin kategori tanımlarını içerir.
 * Yeni bir kategori eklemek veya görselleri güncellemek için bu dosyayı düzenleyebilirsiniz.
 */

const WOOD_CATEGORIES = [
  {
    id: "cat-cam",
    slug: "cam",
    name: "Çam Ağacı",
    title: "Çam Kereste & Yapı Ahşabı",
    shortDescription: "Yüksek reçine mukavemeti, kolay işlenebilirlik ve inşaat/çatı konstrüksiyonlarında üstün dayanıklılık.",
    description: "Sarıçam ve karaçam varyantları ile inşaat, çatı iskeleti, doğrama, ambalaj ve lambiri uygulamalarında Türkiye'nin en çok tercih edilen fırınlanmış dayanıklı yapı ahşabıdır.",
    image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=900&q=80",
    bannerImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1600&q=80",
    hardness: "Yumuşak - Orta Sert",
    moistureRate: "%10 - %14 Fırınlanmış",
    density: "520 kg/m³",
    featured: true,
    accentColor: "#8D6E63"
  },
  {
    id: "cat-mese",
    slug: "mese",
    name: "Meşe Ağacı",
    title: "Masif Meşe & Mobilyalık Kalas",
    shortDescription: "Tarihin ve zarafetin simgesi; yoğun lif dokusu, yüksek sertlik ve asil damar deseni.",
    description: "Yüksek tanen içeriği sayesinde çürümeye ve zararlılara karşı olağanüstü dirençlidir. Lüks zemin kaplamaları, masif masalar, mutfak tezgahları ve mimari restorasyonların vazgeçilmezidir.",
    image: "https://images.unsplash.com/photo-1542456510-4710d436c4f2?auto=format&fit=crop&w=900&q=80",
    bannerImage: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1600&q=80",
    hardness: "Çok Sert",
    moistureRate: "%8 - %10 KD (Kiln Dried)",
    density: "720 kg/m³",
    featured: true,
    accentColor: "#5D4037"
  },
  {
    id: "cat-ceviz",
    slug: "ceviz",
    name: "Ceviz Ağacı",
    title: "Lüks Amerikan & Anadolu Cevizi",
    shortDescription: "Derin çikolata ve kahve tonları, kıvrımlı hareli damarlar ve eşsiz masif kütük estetiği.",
    description: "Lüks mobilya tasarımcılarının ve epoksi masa ustalarının bir numaralı tercihi. Şok emilimi yüksek, boyutsal stabilitesi mükemmel ve zamanla paha biçilmez bir asalet kazanan değerli ağaç türüdür.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
    bannerImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=80",
    hardness: "Orta - Sert",
    moistureRate: "%8 - %10 Fırınlanmış",
    density: "650 kg/m³",
    featured: true,
    accentColor: "#3E2723"
  },
  {
    id: "cat-kayin",
    slug: "kayin",
    name: "Kayın Ağacı",
    title: "Buharlı & Beyaz Kayın Kereste",
    shortDescription: "Homojen gözenek yapısı, mükemmel bükülme ve torna kabiliyeti, açık somon-krem tonları.",
    description: "Buharlama işlemiyle gerilimleri giderilen kayın kereste, sandalye iskeletleri, merdiven basamakları, mutfak gereçleri ve dayanıklı mobilya üretiminde rakipsiz mekanik mukavemet sağlar.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
    bannerImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
    hardness: "Sert",
    moistureRate: "%8 - %11 Fırın Kurusu",
    density: "700 kg/m³",
    featured: true,
    accentColor: "#A1887F"
  },
  {
    id: "cat-gurgen",
    slug: "gurgen",
    name: "Gürgen Ağacı",
    title: "Yüksek Mukavemetli Gürgen Kereste",
    shortDescription: "Anadolu'nun demir ağacı; aşırı aşınma direnci, kırılmaz lif örgüsü ve endüstriyel dayanım.",
    description: "Ağır hizmet şartlarına maruz kalan taşıt kasaları, takım sapları, jimnastik aletleri ve ağır oturma grubu iskeletlerinde darbelere karşı en dirençli yerli sert ağaç seçeneğidir.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
    bannerImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    hardness: "Ekstra Sert",
    moistureRate: "%10 - %12 Fırınlanmış",
    density: "780 kg/m³",
    featured: true,
    accentColor: "#4E342E"
  },
  {
    id: "cat-ladin",
    slug: "ladin",
    name: "Ladin Ağacı",
    title: "Ladin Lambiri, Tavan & Cephe Kerestesi",
    shortDescription: "Düzgün doğrusal damarlar, hafiflik, rezonans kabiliyeti ve estetik açık renkli ahşap yüzeyler.",
    description: "Açık rengi ve ipeksi parlaklığıyla modern ahşap mimarinin gözdesidir. Tavan kaplamaları, sauna tahtaları, lambiriler ve akustik enstrüman yapımında dünya standardında kullanılır.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
    bannerImage: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1600&q=80",
    hardness: "Yumuşak",
    moistureRate: "%10 - %12 Fırınlanmış",
    density: "470 kg/m³",
    featured: true,
    accentColor: "#BCAAA4"
  },
  {
    id: "cat-iroko",
    slug: "iroko",
    name: "İroko & Egzotik",
    title: "İroko Deck, Teak Alternatifi Dış Mekan Ahşabı",
    shortDescription: "Doğal yağlı koruyucu doku, suya ve güneşe tam bağışıklık, havuz kenarı ve lüks bahçe zeminleri.",
    description: "Afrika menşeili İroko ahşabı, suya, neme ve UV ışınlarına karşı doğuştan koruyucu yağ barındırır. Dış mekan deck zeminleri, cephe giydirme ve yat güvertelerinde en güvenilir çözümdür.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    bannerImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    hardness: "Çok Sert",
    moistureRate: "%12 - %14 Dış Ortam",
    density: "660 kg/m³",
    featured: true,
    accentColor: "#6D4C41"
  }
];

window.WOOD_CATEGORIES = WOOD_CATEGORIES;

