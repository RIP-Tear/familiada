# Szybki Start - Implementacja SEO

## 🎯 Priorytetowe działania (zrób to TERAZ)

### 1. **Ustaw URL swojej domeny (⚠️ WYMAGANE)**

Dodaj swoją domenę do zmiennej środowiskowej:

**Kroki:**
1. Skopiuj plik `.env.example` do `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edytuj `.env.local` i zamień wartość `NEXT_PUBLIC_SITE_URL`:
   ```bash
   # Dla rozwoju (development)
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Dla produkcji (production)
   NEXT_PUBLIC_SITE_URL=https://www.familiada-online.pl
   ```

3. **WAŻNE:** Dla środowiska produkcyjnego (Vercel, Netlify, etc.) dodaj zmienną środowiskową:
   ```
   NEXT_PUBLIC_SITE_URL=https://www.familiada-online.pl
   ```

**Gdzie jest używana:**
- Canonical URLs
- Open Graph URLs
- Sitemap.xml
- Robots.txt

---

## 📋 Checklist przed deployment

### ✅ Podstawowe
- [ ] Ustawiono `NEXT_PUBLIC_SITE_URL` w `.env.local` (rozwój)
- [ ] Dodano `NEXT_PUBLIC_SITE_URL` do zmiennych środowiskowych na hostingu (produkcja)
- [ ] Sprawdzono czy favicon.ico istnieje w /public
- [ ] Zweryfikowano Google Search Console meta tag

### ✅ Obrazy
- [ ] Dodano obrazy ikon lub wygenerowano je
  - favicon.ico
  - android-chrome-192x192.png
  - android-chrome-512x512.png
  - apple-touch-icon.png
- [ ] (Opcjonalnie) Dodano statyczny og-image.png (1200x630)

### ✅ Testing przed live
```bash
# Build projektu
npm run build

# Sprawdź czy nie ma błędów
npm run start

# Otwórz w przeglądarce
open http://localhost:3000
```

---

## 🧪 Testing po deployment

### 1. Google Rich Results Test
https://search.google.com/test/rich-results
- Wklej URL swojej strony
- Sprawdź czy structured data są poprawne

### 2. Facebook Sharing Debugger
https://developers.facebook.com/tools/debug/
- Wklej URL
- Sprawdź Open Graph tags
- Kliknij "Scrape Again" jeśli coś zmieniłeś

### 3. Twitter Card Validator
https://cards-dev.twitter.com/validator
- Wklej URL
- Sprawdź preview

### 4. Lighthouse Audit (w Chrome)
1. Otwórz Chrome DevTools (F12)
2. Zakładka "Lighthouse"
3. Wybierz "SEO" i "Performance"
4. Kliknij "Generate report"
5. Cel: Score > 90 dla SEO

### 5. Mobile-Friendly Test
https://search.google.com/test/mobile-friendly
- Wklej URL
- Sprawdź responsywność

---

## 🚀 Po uruchomieniu strony

### Google Search Console Setup

1. **Dodaj property:**
   - Idź do https://search.google.com/search-console
   - Kliknij "Add property"
   - Wybierz "URL prefix"
   - Wpisz swoją domenę

2. **Weryfikacja:**
   - Metoda HTML tag już dodana w layout.tsx
   - Lub użyj DNS verification
   - Kliknij "Verify"

3. **Submit Sitemap:**
   - W Search Console → Sitemaps
   - Wpisz: `sitemap.xml`
   - Kliknij "Submit"

4. **Request Indexing:**
   - URL Inspection tool
   - Wklej swoją główną URL
   - Kliknij "Request Indexing"

### Google Analytics 4 (opcjonalne)

1. Stwórz konto w https://analytics.google.com
2. Uzyskaj Measurement ID (G-XXXXXXXXXX)
3. Dodaj do layout.tsx:

```tsx
import Script from 'next/script'

// W <head> lub na początku <body>:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 📊 Monitoring (pierwsze 30 dni)

### Co śledzić:

**W Google Search Console:**
- [ ] Impressions (wyświetlenia w wynikach)
- [ ] Clicks (kliknięcia)
- [ ] Average position (średnia pozycja)
- [ ] Coverage issues (problemy z indeksacją)

**W Google Analytics:**
- [ ] Sessions (sesje)
- [ ] Users (użytkownicy)
- [ ] Bounce rate (współczynnik odrzuceń)
- [ ] Average session duration (średni czas sesji)
- [ ] Pages per session (strony na sesję)

**Keywords to track:**
- familiada online
- gra familiada
- familiada multiplayer
- teleturniej online
- gra rodzinna online

---

## ⚡ Quick Wins (szybkie rezultaty)

### 1. Social Media
Po uruchomieniu, udostępnij na:
- [ ] Facebook (osobisty + grupy gier)
- [ ] Twitter/X
- [ ] Reddit (r/webgames, r/Polska)
- [ ] LinkedIn
- [ ] Discord servers o grach

### 2. Gaming Directories
Dodaj swoją grę do:
- [ ] Product Hunt
- [ ] Indie Hackers
- [ ] Hacker News (Show HN)
- [ ] Polish gaming forums

### 3. Content Marketing
Napisz post:
- [ ] "Jak stworzyłem Familiadę online"
- [ ] Tutorial video na YouTube
- [ ] Gif/Demo na Twitter
- [ ] Article on Medium/Dev.to

---

## 🐛 Troubleshooting

### Problem: Strona nie pojawia się w Google
**Rozwiązanie:**
1. Sprawdź robots.txt: `https://www.familiada-online.pl/robots.txt`
2. Verify sitemap: `https://www.familiada-online.pl/sitemap.xml`
3. Check Search Console → Coverage
4. Request indexing ręcznie

### Problem: Open Graph nie działa
**Rozwiązanie:**
1. Użyj Facebook Debugger
2. Kliknij "Scrape Again"
3. Sprawdź czy obrazy są dostępne publicznie
4. Verify meta tags w source code

### Problem: Niska pozycja w wynikach
**Rozwiązanie:**
1. SEO to proces - daj 2-3 miesiące
2. Buduj backlinks
3. Dodaj więcej contentu
4. Popraw user engagement
5. Zwiększ page speed

### Problem: Lighthouse SEO score < 90
**Rozwiązanie:**
1. Sprawdź konkretne błędy w raporcie
2. Najczęstsze: brak meta description, missing alt texts
3. Fix each issue individually
4. Re-run audit

---

## 📞 Wsparcie i Resources

### Dokumentacja:
- Next.js SEO: https://nextjs.org/learn/seo/introduction-to-seo
- Google SEO Guide: https://developers.google.com/search/docs
- Schema.org: https://schema.org/

### Community:
- r/SEO
- r/bigseo
- SEO Discord servers

### Tools (darmowe):
- Google Search Console
- Google Analytics
- Bing Webmaster Tools
- Ubersuggest (limited free)
- AnswerThePublic

---

## ✨ Success Metrics (3 miesiące)

**Cel 1 miesiąc:**
- [ ] 100+ organic impressions/day
- [ ] 10+ organic clicks/day
- [ ] Indexed in Google

**Cel 3 miesiące:**
- [ ] 500+ organic impressions/day
- [ ] 50+ organic clicks/day
- [ ] Ranking for 5+ keywords
- [ ] 100+ users/week

**Cel 6 miesięcy:**
- [ ] 1000+ organic impressions/day
- [ ] 100+ organic clicks/day
- [ ] First page for main keywords
- [ ] 500+ users/week

---

**Powodzenia! 🎮🚀**

*Pamiętaj: SEO to maraton, nie sprint. Cierpliwość i konsystencja są kluczowe!*
