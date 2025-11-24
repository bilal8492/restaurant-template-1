# Quick Start Guide - Restaurant Website

## ⚡ 5-Minute Setup

### Step 1: Create Images Folder
```powershell
mkdir images
```

### Step 2: Add Sample Images
- Download any food images (Unsplash, Pexels, Pixabay)
- Save to `images/` folder with correct names
- Minimum images needed:
  - `hero.jpg` (any size, will be stretched to fit)
  - `about.jpg` (600x400px recommended)
  - `g1.jpg` through `g6.jpg` (gallery images)
  - A few menu item images

### Step 3: Run Locally
```powershell
# Option A: Python
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Step 4: Customize data.json
Update these fields:
```json
{
  "restaurant": {
    "name": "Your Restaurant Name",
    "tagline": "Your tagline",
    "phone": "+91 XXXXXXXXXX",
    "email": "your@email.com",
    "address": "Your address"
  }
}
```

### Step 5: Test in Browser
- Open http://localhost:8000
- Check all sections load
- Verify images display
- Test mobile view (F12 → Device Mode)

## 📋 What's Included

✅ Complete HTML structure
✅ Responsive CSS (all sizes)
✅ Vanilla JavaScript (no frameworks)
✅ Sample JSON data
✅ Mobile hamburger menu
✅ Menu filtering
✅ Image gallery with lightbox
✅ Social media links
✅ Contact information
✅ Opening hours
✅ Smooth animations

## 🎯 Key Features to Explore

### Mobile Menu
- Works on all screen sizes
- Click menu items to navigate
- Auto-closes when you click a link

### Menu Categories
- Click "Starters", "Main Course", etc.
- Filter shows only items in that category
- "All" button shows everything

### Gallery
- Click any image to open lightbox
- Press ESC or click close button to exit
- Auto-detects image size

### Responsive Design
- Try resizing browser window
- Or press F12 and toggle "Device Mode"
- Test on iPhone, iPad, Android sizes

## 🔧 Common Customizations

### Change Colors
Open `style.css` and find:
```css
background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
```
Replace hex colors (#ff6b6b, #ee5a6f) with your brand colors.

### Change Font
In `style.css`, find:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```
Replace with your preferred font.

### Add New Menu Category
In `data.json`:
```json
{
  "category": "New Category",
  "items": [
    {
      "name": "Dish Name",
      "price": "₹XXX",
      "image": "images/dish.jpg",
      "description": "Description"
    }
  ]
}
```

### Change Navigation Links
Edit the navbar in `index.html`:
```html
<li class="nav-item"><a href="#section-id">Link Name</a></li>
```

## ⚠️ Troubleshooting

### Images Not Showing
- Check if `images/` folder exists
- Verify filenames match exactly in `data.json`
- Check browser console (F12) for errors

### Menu Not Filtering
- Verify `data.json` has correct JSON syntax
- Check browser console for errors
- Reload the page

### Layout Broken on Mobile
- This is expected during development
- Use Device Mode (F12) to test properly
- Check `style.css` media queries

### Server Error "data.json not found"
- Ensure `data.json` is in root folder
- Restart your local server
- Clear browser cache (Ctrl+Shift+Del)

## 📱 Testing Checklist

- [ ] Hero section displays correctly
- [ ] Menu loads from JSON
- [ ] Filtering works
- [ ] Gallery images load
- [ ] Images open in lightbox
- [ ] Contact info shows
- [ ] Social icons clickable
- [ ] Mobile menu works
- [ ] No console errors
- [ ] All links work

## 🚀 Next Steps

1. **Add Real Images**
   - Replace placeholder images
   - Use restaurant's actual photos
   - Optimize for web

2. **Customize Content**
   - Update all text in `data.json`
   - Add real menu items and prices
   - Add actual contact info

3. **Test Thoroughly**
   - Desktop (Chrome, Firefox, Safari)
   - Mobile (iPhone, Android)
   - Tablet (iPad, Android Tablet)
   - Different networks (slow 3G, WiFi)

4. **Deploy**
   - GitHub Pages (free)
   - Netlify (free)
   - Traditional hosting (paid)

## 📞 Support

**Issues?** Check these files:
- `README.md` - Full documentation
- `IMAGES_SETUP.md` - Image setup guide
- Browser console (F12 → Console tab) - Error messages

## 💡 Pro Tips

1. Use Lighthouse (DevTools) to check performance
2. Test on real devices, not just browser
3. Optimize images before uploading
4. Keep `data.json` organized
5. Add comments for future updates

## 📊 File Sizes (Target)

- `index.html`: < 20KB
- `style.css`: < 50KB
- `script.js`: < 40KB
- `data.json`: < 30KB
- All images: < 10MB total

## 🎉 You're Ready!

Your restaurant website is production-ready. Just add your content and images!

Questions? Review the documentation files:
- README.md
- IMAGES_SETUP.md

Happy cooking! 🍽️
