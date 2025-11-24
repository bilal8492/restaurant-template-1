# SEO & Marketing Guide

This guide helps you optimize your restaurant website for search engines and users.

## 🔍 SEO Optimization

### 1. Update Meta Tags

Edit the `<head>` section in `index.html`:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>Spice Aroma - Authentic Indian Restaurant in Mumbai</title>
    <meta name="description" content="Discover authentic Indian cuisine at Spice Aroma. Traditional recipes with modern flavors. Open 10 AM - 11 PM. Order online or visit us!">
    <meta name="keywords" content="Indian restaurant, authentic food, Mumbai, Indian cuisine, fine dining">
    <meta name="author" content="Spice Aroma">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph Tags (for social sharing) -->
    <meta property="og:title" content="Spice Aroma - Authentic Indian Restaurant">
    <meta property="og:description" content="Experience authentic Indian flavors at Spice Aroma.">
    <meta property="og:image" content="images/hero.jpg">
    <meta property="og:url" content="https://yourwebsite.com">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Spice Aroma - Authentic Indian Restaurant">
    <meta name="twitter:description" content="Experience authentic Indian flavors.">
    <meta name="twitter:image" content="images/hero.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://yourwebsite.com">
    
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
```

### 2. Add Schema Markup

Add to `index.html` before `</head>`:

```html
<!-- Restaurant Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Restaurant",
  "name": "Spice Aroma",
  "image": "images/hero.jpg",
  "description": "Authentic Indian restaurant with traditional recipes",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "MG Road",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "telephone": "+91 9876543210",
  "email": "contact@spicearoma.com",
  "url": "https://yourwebsite.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "00:00"
    }
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/spicearoma",
    "https://www.facebook.com/spicearoma"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "124"
  }
}
</script>

<!-- Menu Item Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "MenuItem",
  "name": "Paneer Tikka",
  "description": "Grilled cottage cheese marinated in spices",
  "offers": {
    "@type": "Offer",
    "price": "250",
    "priceCurrency": "INR"
  },
  "image": "images/paneer-tikka.jpg"
}
</script>
```

### 3. Image Alt Text

Update images in `index.html` with descriptive alt text:

```html
<img src="images/hero.jpg" alt="Spice Aroma restaurant entrance with traditional Indian decor">
<img src="images/paneer-tikka.jpg" alt="Paneer Tikka - grilled cottage cheese with spices">
```

### 4. URL Structure

Keep URLs clean and descriptive:
- ✅ Good: `https://spicearoma.com/menu#main-course`
- ❌ Bad: `https://spicearoma.com/page?id=123&cat=2`

### 5. Mobile Optimization

✅ Already implemented:
- Responsive design
- Mobile hamburger menu
- Touch-friendly buttons
- Fast loading

## 📊 Analytics Setup

### 1. Google Search Console

1. Go to https://search.google.com/search-console
2. Click "URL prefix" and enter your domain
3. Verify ownership (add HTML file or meta tag)
4. Submit sitemap

### 2. Google Analytics 4

Add to `index.html` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Get ID from Google Analytics 4 property.

### 3. Track User Interactions

Add to `script.js`:

```javascript
// Track menu category clicks
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        gtag('event', 'menu_filter', {
            'category': this.dataset.category
        });
    });
});

// Track social media clicks
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        gtag('event', 'social_click', {
            'platform': this.title
        });
    });
});

// Track section views
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gtag('event', 'section_view', {
                'section': entry.target.id
            });
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});
```

## 🔗 Backlink Strategy

### 1. Local Business Directories
- Google My Business (FREE - Essential!)
- Yelp
- TripAdvisor
- Zomato (if in India)
- Just Eat
- Uber Eats

### 2. Create Quality Content
- Blog about local events
- Share chef interviews
- Write about ingredient sourcing
- Post cooking tips

### 3. Build Local Citations
- Local newspaper reviews
- Chamber of commerce
- Local tourism websites
- Food blogging communities

## 📱 Social Media Integration

### 1. Social Sharing

Users can share your page:
- Open Graph tags enable rich previews
- Share buttons on each section

### 2. Social Media Strategy

Create content calendar:
- Food photography
- Behind-the-scenes
- Customer testimonials
- Daily specials
- Event announcements

### 3. Hashtag Strategy

Research and use:
- Brand hashtags (#spicearoma)
- Location hashtags (#MumbaiFood)
- Cuisine hashtags (#IndianFood)
- Trending food hashtags (#foodie)

## 💡 Conversion Optimization

### 1. Clear Call-to-Actions

✅ Good CTAs:
- "Reserve a Table"
- "Order Now"
- "Call for Delivery"
- "View Full Menu"

❌ Avoid:
- Vague CTAs like "Click Here"
- Unclear value proposition

### 2. Loading Speed

Test at: https://pagespeed.web.dev

Recommendations:
- Compress images (TinyPNG)
- Minimize CSS/JS
- Use CDN for assets
- Enable caching

### 3. User Experience

- Clear navigation
- Easy contact information
- Mobile-friendly design
- Fast page load
- Obvious CTAs

## 📧 Email Marketing

### 1. Build Email List

Add newsletter signup (see ENHANCED_FEATURES.md):
```html
<form id="newsletterForm">
    <input type="email" placeholder="Your email" required>
    <button type="submit">Subscribe</button>
</form>
```

### 2. Email Campaigns

Use Mailchimp, ConvertKit, or similar:
- Weekly menu updates
- Special promotions
- Event announcements
- Birthday specials

## 🎯 Local SEO Checklist

- [ ] Google My Business setup (CRITICAL)
- [ ] Meta tags optimized
- [ ] Schema markup added
- [ ] Mobile-friendly verified
- [ ] Local keywords in content
- [ ] Alt text on images
- [ ] Canonical URLs set
- [ ] Sitemap created
- [ ] robots.txt configured
- [ ] Social links added
- [ ] Local citations created
- [ ] Google Analytics setup
- [ ] Google Search Console verified

## 📋 Keyword Strategy

### Restaurant Industry Keywords

**Branded**: Spice Aroma, [Your name] restaurant

**Local**: 
- Indian restaurant near me
- Best Indian food in Mumbai
- Authentic cuisine Mumbai
- Indian restaurant MG Road

**Long-tail**:
- Best paneer tikka in Mumbai
- Vegan Indian food options
- Family dining Indian restaurant
- Lunch delivery Indian restaurant

### Keyword Placement

1. **Page Title**: Primary keyword
2. **Meta Description**: 2-3 keywords naturally
3. **H1 (Hero)**: Target keyword
4. **Headings**: Related keywords
5. **Alt Text**: Descriptive with keywords
6. **URL**: When possible
7. **Content**: Naturally throughout

## 🚀 Ranking Factors

**Google Priorities** (2024):

1. **E-E-A-T**
   - Experience
   - Expertise
   - Authoritativeness
   - Trustworthiness

2. **Core Web Vitals**
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)
   - First Input Delay (FID)

3. **Mobile-First Indexing**
   - Mobile experience
   - Mobile performance
   - Mobile usability

4. **Content Quality**
   - Original content
   - User intent match
   - Content depth

5. **Backlinks**
   - Quality over quantity
   - Relevant links
   - Natural link profile

## 📈 Performance Targets

**Page Speed**:
- Desktop: > 90
- Mobile: > 85
- (Measured on Google PageSpeed Insights)

**Lighthouse Scores**:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 100

## 🔄 Ongoing Optimization

### Monthly Tasks
- [ ] Check Google Analytics
- [ ] Review top-performing pages
- [ ] Check keyword rankings
- [ ] Update menu/prices
- [ ] Monitor loading speed

### Quarterly Tasks
- [ ] Audit backlinks
- [ ] Review content gaps
- [ ] Update schema markup
- [ ] Test mobile experience
- [ ] Analyze competitor websites

### Annually
- [ ] Full SEO audit
- [ ] Update meta tags
- [ ] Refresh old content
- [ ] Revise keyword strategy
- [ ] Plan new content

## 📚 Tools & Resources

**Free Tools**:
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- Google PageSpeed Insights: https://pagespeed.web.dev
- Google My Business: https://business.google.com
- Lighthouse: Built into Chrome DevTools

**Paid Tools**:
- SEMrush
- Ahrefs
- Moz
- Ubersuggest

---

**Remember**: SEO is a long-term strategy. Consistency and quality content matter most!
