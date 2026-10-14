# safeapricot.com - Kişisel Web Sitesi

Bu repo, **Ahmed Safa Açıkgöz** için hazırlanan kişisel web sitesi ve portfolyo projesidir. **GitHub Pages** ve **safeapricot.com** özel alan adı (custom domain) ile uyumlu olacak şekilde yapılandırılmıştır.

---

## 🚀 Özellikler

- **Sıfır Dış Bağımlılık (Zero-Dependency):** Harici kütüphanelere gerek olmadan saf HTML5, modern CSS3 ve Vanilla JavaScript ile çalışır. Hızlı açılır ve kesintisiz çalışır.
- **Karanlık / Aydınlık Mod (Dark/Light Mode):** Varsayılan olarak şık modern koyu tema ile gelir, kullanıcı tercihini tarayıcıda (`localStorage`) saklar.
- **Çift Dil Desteği (TR / EN):** Sayfa üzerinde tek tıkla Türkçe ve İngilizce dilleri arasında anında geçiş yapabilir.
- **Duyarlı (Responsive) Tasarım:** Masaüstü, tablet ve mobil cihazlarda mükemmel uyum.
- **Gömülü İnteraktif Bileşenler:** Terminal simülasyonu, tek tıkla e-posta kopyalama paneli ve hızlı bağlantılar.
- **GitHub Pages & Cloudflare Uyumlu:** İçinde hazır `CNAME` dosyası bulunur.

---

## 🛠️ GitHub Pages'e Dağıtım (Adım Adım Kurulum)

### Adım 1: GitHub Reposu Oluşturun
1. GitHub hesabınızda (`safeapricot`) yeni bir repo oluşturun:
   - Repo adı olarak `safeapricot.github.io` (User Page) veya `safeapricot-website` (Project Page) seçebilirsiniz.
   - Repoyu **Public** yapın.

### Adım 2: Dosyaları Yükleyin
Bu klasördeki dosyaları reponun ana dizinine (`root`) yükleyin veya git ile push edin:
- `index.html` (Ana sayfa)
- `CNAME` (`safeapricot.com` alan adınız için)

```bash
git init
git add .
git commit -m "feat: initial commit for safeapricot.com"
git branch -M main
git remote add origin https://github.com/safeapricot/safeapricot.github.io.git
git push -u origin main
```

### Adım 3: GitHub Pages Ayarları
1. GitHub reponuzda **Settings** > **Pages** menüsüne gidin.
2. **Build and deployment** bölümünde:
   - Source: `Deploy from a branch`
   - Branch: `main` ve folder olarak `/ (root)` seçin, **Save** butonuna tıklayın.
3. **Custom domain** alanında `safeapricot.com` yazdığından emin olun (CNAME dosyanız sayesinde otomatik gelecektir).
4. **Enforce HTTPS** kutucuğunu işaretleyin.

### Adım 4: Cloudflare DNS Ayarları
Domaininiz Cloudflare üzerinde kayıtlı olduğu için DNS yönetim paneline gidip aşağıdaki kayıtları ekleyin:

| Tür (Type) | Ad (Name) | Hedef (Target / IPv4) | Proxy Durumu |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | DNS Only / Proxied |
| **A** | `@` | `185.199.109.153` | DNS Only / Proxied |
| **A** | `@` | `185.199.110.153` | DNS Only / Proxied |
| **A** | `@` | `185.199.111.153` | DNS Only / Proxied |
| **CNAME** | `www` | `safeapricot.github.io` | DNS Only / Proxied |

*Not: Cloudflare'de SSL/TLS ayarınızı **Full** modunda tutmanız önerilir.*

---

## 📧 İletişim
- **E-posta:** safa@safeapricot.com / safaacikgoz43@gmail.com
- **GitHub:** [@safeapricot](https://github.com/safeapricot)
- **Web Sitesi:** [safeapricot.com](https://safeapricot.com)
