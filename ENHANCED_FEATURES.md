# Enhanced Features Guide

This guide covers optional enhancements you can add to your restaurant website.

## 🎨 Design Enhancements

### 1. Add Custom Google Font

In `index.html`, add before `<link rel="stylesheet" href="style.css">`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```

Update `style.css`:
```css
body {
    font-family: 'Lato', sans-serif;
}

h1, h2, h3, .section-title {
    font-family: 'Playfair Display', serif;
}
```

### 2. Dark Mode Toggle

Add to `data.json`:
```json
"theme": {
  "primary": "#ff6b6b",
  "dark": "#2c3e50",
  "light": "#f9f9f9"
}
```

Add button to navbar in `index.html`:
```html
<button class="theme-toggle" id="themeToggle">🌙</button>
```

Add to `script.js`:
```javascript
function setupThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const isDark = localStorage.getItem('darkMode') === 'true';
    
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', 
            document.body.classList.contains('dark-mode')
        );
    });
}

setupThemeToggle();
```

Add to `style.css`:
```css
body.dark-mode {
    background-color: #1a1a1a;
    color: #f0f0f0;
}

body.dark-mode .menu-item {
    background: #2a2a2a;
}
```

### 3. Animations on Scroll

Enhanced scroll animations already included! To add more:

```javascript
function addScrollAnimation(selector, animation) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = animation;
                observer.unobserve(entry.target);
            }
        });
    });
    elements.forEach(el => observer.observe(el));
}

// Usage
addScrollAnimation('.menu-item', 'slideInUp 0.5s ease-out');
```

## 📱 Feature Additions

### 1. Online Ordering Button

Add to hero section in `index.html`:
```html
<div class="cta-buttons">
    <a href="#menu" class="cta-button">Explore Menu</a>
    <a href="https://your-ordering-link.com" class="cta-button secondary">Order Now</a>
</div>
```

### 2. Reservation Form

Add new section before contact:
```html
<section id="reservations" class="reservations">
    <div class="container">
        <h2 class="section-title">Reserve a Table</h2>
        <form id="reservationForm" class="reservation-form">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <input type="tel" placeholder="Phone Number" required>
            <input type="date" required>
            <input type="time" required>
            <select required>
                <option value="">Select Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="4">4 Guests</option>
                <option value="6">6 Guests</option>
                <option value="8+">8+ Guests</option>
            </select>
            <button type="submit" class="cta-button">Reserve Now</button>
        </form>
    </div>
</section>
```

### 3. Newsletter Signup

Add to footer:
```html
<div class="newsletter">
    <h3>Subscribe to Our Newsletter</h3>
    <form id="newsletterForm">
        <input type="email" placeholder="Your Email" required>
        <button type="submit" class="cta-button">Subscribe</button>
    </form>
</div>
```

## 🔌 Integration Features

### 1. Google Maps Integration

Replace in contact section:
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
        width="100%" height="400" style="border:0;" allowfullscreen="" 
        loading="lazy"></iframe>
```

Get embed code: Google Maps > Share > Embed a map

### 2. WhatsApp Chat Widget

Add to `index.html` before `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/whatsapp-button@1.0.0/dist/index.js"></script>
<whatsapp-button 
    phone="+919876543210"
    message="Hello! I'd like to know more about your restaurant."
    position="right">
</whatsapp-button>
```

### 3. Live Chat Integration

Add Tidio, Drift, or similar:
```html
<!-- Tidio Live Chat -->
<script src="//code.tidio.co/XXXXXXXXXXXXXXXXXXXXXXXXXX.js"></script>
```

### 4. Analytics

Add Google Analytics to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Content Enhancements

### 1. Chef Recommendations

Add to `data.json`:
```json
"chef_picks": [
  {
    "name": "Butter Chicken",
    "reason": "Our signature dish with a modern twist"
  }
]
```

### 2. Special Offers

Add to `data.json`:
```json
"specialOffers": [
  {
    "title": "Happy Hour",
    "description": "30% off on all drinks 4-6 PM",
    "image": "images/offer.jpg"
  }
]
```

Display in hero or new section:
```javascript
// Add to initializeRestaurant()
if (restaurantData.specialOffers) {
    displaySpecialOffers(restaurantData.specialOffers);
}
```

### 3. Customer Reviews/Testimonials

Add to `data.json`:
```json
"reviews": [
  {
    "author": "John Doe",
    "rating": 5,
    "text": "Amazing food and service!",
    "date": "2024-01-15"
  }
]
```

## 🔒 Security Enhancements

### 1. Form Validation

```javascript
function validateReservationForm(formData) {
    if (!formData.name || formData.name.length < 2) {
        alert('Please enter a valid name');
        return false;
    }
    if (!formData.email.includes('@')) {
        alert('Please enter a valid email');
        return false;
    }
    return true;
}
```

### 2. HTTPS Security Headers

Add to server configuration (if using Node.js):
```javascript
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});
```

## ⚡ Performance Enhancements

### 1. Lazy Loading Images

Add to `index.html`:
```html
<img src="images/menu-item.jpg" loading="lazy" alt="description">
```

### 2. Image Optimization

Use WebP with fallback:
```html
<picture>
    <source srcset="images/menu.webp" type="image/webp">
    <img src="images/menu.jpg" alt="Menu">
</picture>
```

### 3. Service Worker (Offline Support)

Create `service-worker.js`:
```javascript
const CACHE_NAME = 'restaurant-v1';
const urlsToCache = ['/', '/index.html', '/style.css', '/script.js'];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
```

Register in `script.js`:
```javascript
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
```

## 📊 Analytics & Tracking

### 1. Page View Tracking

```javascript
// Track when sections come into view
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(`Viewed section: ${entry.target.id}`);
            // Send to analytics
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});
```

## 🌍 Localization

### 1. Multi-Language Support

Add to `data.json`:
```json
"languages": {
  "en": { "home": "Home", "menu": "Menu" },
  "es": { "home": "Inicio", "menu": "Menú" }
}
```

Add language selector:
```html
<select id="languageSelect">
    <option value="en">English</option>
    <option value="es">Español</option>
</select>
```

## 🎉 Advanced Features

### 1. Search Functionality

```javascript
function searchMenu(query) {
    return allMenuItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
}
```

### 2. Wishlist/Favorites

```javascript
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(itemId) {
    wishlist.push(itemId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
```

### 3. Rating System

Add star ratings to menu items:
```html
<div class="rating">
    <span class="star">⭐</span>
    <span class="rating-text">4.5/5 (124 reviews)</span>
</div>
```

---

## 📚 Resource Links

- **Font Awesome Icons**: https://fontawesome.com
- **Google Fonts**: https://fonts.google.com
- **Unsplash Images**: https://unsplash.com
- **TinyImg Compression**: https://tinypng.com
- **Lighthouse**: https://developers.google.com/web/tools/lighthouse

---

Pick and choose features that make sense for your restaurant! Start with the basics and add complexity as needed.
