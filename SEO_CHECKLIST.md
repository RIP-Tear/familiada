# SEO - Instrukcje i checklist

## ✅ Zaimplementowane usprawnienia SEO

### 1. **Meta tagi i podstawowe SEO**
   - ✅ Zoptymalizowane tytuły dla każdej strony
   - ✅ Meta opisy z odpowiednimi słowami kluczowymi
   - ✅ Canonical URLs (pamiętaj zastąpić `yourdomain.com` swoją domeną)
   - ✅ Meta robots z optymalnymi ustawieniami
   - ✅ Language i locale settings

### 2. **Open Graph i Social Media**
   - ✅ Open Graph tags dla Facebook
   - ✅ Twitter Card tags
   - ✅ Wymiary obrazów (1200x630)
   - ✅ Dynamiczny generator obrazów OG (opengraph-image.tsx)

### 3. **Structured Data (Schema.org)**
   - ✅ WebApplication structured data w layout.tsx
   - ✅ FAQPage structured data na stronie głównej
   - ✅ Prawidłowy format JSON-LD

### 4. **Technical SEO**
   - ✅ Sitemap.xml (src/app/sitemap.ts)
   - ✅ Robots.txt (src/app/robots.ts)
   - ✅ PWA manifest z pełnymi danymi
   - ✅ Favicon i ikony

### 5. **Metadata dla stron**
   - ✅ Strona główna (/)
   - ✅ Home (/home)
   - ✅ Zasady gry (/rules)
   - ✅ Stwórz grę (/host)
   - ✅ Dołącz do gry (/join)

## 🔧 Wymagane działania po implementacji

### 1. **Ustaw URL domeny przez zmienną środowiskową**

**✅ ZAIMPLEMENTOWANE:** System używa teraz zmiennej środowiskowej `NEXT_PUBLIC_SITE_URL`

**Co musisz zrobić:**

1. **Środowisko deweloperskie (local):**
   ```bash
   cp .env.example .env.local
   # Edytuj .env.local i ustaw:
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

2. **Środowisko produkcyjne:**
   W panelu hostingu (Vercel, Netlify, etc.) dodaj zmienną środowiskową:
   ```
   NEXT_PUBLIC_SITE_URL=https://www.familiada-online.pl
   ```

**Gdzie jest używana:**
- Canonical URLs w layout.tsx
- Open Graph URLs
- Sitemap.xml
- Robots.txt

### 2. **Dodaj obrazy Open Graph**
- Stwórz lub dodaj obraz `/public/og-image.png` (1200x630 px)
- Lub użyj automatycznego generatora (już zaimplementowany w `opengraph-image.tsx`)

### 3. **Dodaj ikony favicon**
Upewnij się że masz w `/public`:
- `favicon.ico`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `apple-touch-icon.png`

### 4. **Google Search Console**
- Potwierdź własność domeny
- Prześlij sitemap: `https://yourdomain.com/sitemap.xml`
- Sprawdź indeksację stron

### 5. **Testowanie SEO**
Sprawdź swoją stronę w:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Lighthouse (w Chrome DevTools)

## 📊 Wskaźniki do monitorowania

1. **Core Web Vitals**
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1

2. **Mobile-Friendly**
   - Responsywność
   - Viewport settings
   - Touch targets

3. **Page Speed**
   - Time to First Byte
   - Total Blocking Time
   - Speed Index

## 🚀 Dodatkowe usprawnienia (opcjonalne)

### 1. **Dodaj więcej structured data**
```typescript
// BreadcrumbList dla nawigacji
// VideoObject (jeśli dodasz tutorial video)
// Organization - dla strony kontaktowej
```

### 2. **Implementuj blog**
- Artykuły o strategiach gry
- Poradniki dla graczy
- Blog posts z keywords

### 3. **Multilingual support**
- Alternate hreflang tags
- Wersje językowe

### 4. **Performance optimization**
- Lazy loading obrazów
- Code splitting
- Preloading krytycznych zasobów
- CDN dla statycznych plików

## 📝 Zalecane słowa kluczowe

Główne:
- familiada online
- gra familiada
- familiada multiplayer
- teleturniej online
- gra rodzinna online

Long-tail:
- jak grać w familiadę online
- familiada gra przeglądarkowa
- familiada dla przyjaciół
- darmowa familiada online
- familiada bez rejestracji

## 🔍 Monitoring i analityka

### Dodaj narzędzia analityczne:
1. **Google Analytics 4**
2. **Google Search Console**
3. **Bing Webmaster Tools**
4. **Clarity lub Hotjar** (dla UX insights)

### Metryki do śledzenia:
- Organic traffic
- Bounce rate
- Average session duration
- Pages per session
- Conversion rate (rozpoczęte gry)
- Mobile vs Desktop traffic

## ✨ Best Practices zastosowane

1. ✅ Semantyczny HTML
2. ✅ Alt texts dla obrazów (gdy dodam)
3. ✅ Heading hierarchy (H1, H2, H3)
4. ✅ Internal linking
5. ✅ Mobile-first approach
6. ✅ Fast loading times
7. ✅ HTTPS ready
8. ✅ Clean URL structure

## 🎯 Następne kroki

1. [ ] Zastąp `yourdomain.com` prawdziwą domeną
2. [ ] Dodaj obrazy og-image.png
3. [ ] Skonfiguruj Google Search Console
4. [ ] Prześlij sitemap
5. [ ] Przetestuj w Rich Results Test
6. [ ] Sprawdź mobile-friendliness
7. [ ] Uruchom Lighthouse audit
8. [ ] Dodaj Google Analytics
9. [ ] Monitor rankings dla głównych keywords
10. [ ] Stwórz backlinks (social media, fora, etc.)

---

## 📞 Wsparcie

Jeśli potrzebujesz pomocy z:
- Konfiguracją domeny
- Testowaniem SEO
- Dalszą optymalizacją

Skontaktuj się z zespołem!
