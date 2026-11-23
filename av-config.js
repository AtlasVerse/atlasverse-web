/* AtlasVerse sunucu ayarları. Sunucuyu kurunca aşağıdaki üç satırın başındaki // işaretini kaldırıp adresi yaz. */
// window.AV_SSO_ENDPOINT = 'https://PROJE.supabase.co/functions/v1/av-api/sso';
// window.AV_LIKE_ENDPOINT = 'https://PROJE.supabase.co/functions/v1/av-api/like';
// window.AV_LIKE_COUNT_URL = 'https://PROJE.supabase.co/functions/v1/av-api/count';

// Atlasverse Kid erken erişim listesi (yalnızca https). Boşsa form "yakında" der.
// window.AV_KID_ENDPOINT = "https://...";

/* YAYIN ANAHTARLARI (GitHub'da bu dosyayı düzenleyerek değiştir):
   Atlasverse Kid: yayına almak için aşağıdaki satırı  window.AV_KID_LIVE = true;  yap (gizlilik sayfası hazır olunca). */
window.AV_KID_LIVE = false;
/* İstediğin başka bir kartı gizlemek için kart numarasını yaz, örnek: window.AV_HIDDEN = [25, 31]; */
window.AV_HIDDEN = [];

/* Yayında olan proje domainleri. Bir domain hazır olunca buraya yaz (örnek: window.AV_LIVE_DOMAINS = ["figolive.com", "balbaari.com"];). Listede olmayan domainlere dokunulunca "çok yakında hizmetinizde" mesajı çıkar. */
window.AV_LIVE_DOMAINS = [];
