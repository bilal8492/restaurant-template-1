# Image Setup Guide

## Required Images

All images should be placed in the `images/` folder.

### 1. Hero Section
- **Filename**: `hero.jpg`
- **Recommended Size**: 1920x1080px or higher
- **Format**: JPG or PNG
- **Description**: Background image for the hero section

### 2. About Section
- **Filename**: `about.jpg`
- **Recommended Size**: 600x400px
- **Format**: JPG or PNG
- **Description**: Image for the About Us section

### 3. Menu Items
Place images for menu items in the `images/` folder:
- `paneer-tikka.jpg` (250x250px recommended)
- `samosa.jpg`
- `chicken-65.jpg`
- `pakora.jpg`
- `tandoori-prawns.jpg`
- `spring-rolls.jpg`
- `butter-chicken.jpg`
- `biryani.jpg`
- `palak-paneer.jpg`
- `rogan-josh.jpg`
- `chole-bhature.jpg`
- `fish-curry.jpg`
- `naan.jpg`
- `garlic-naan.jpg`
- `roti.jpg`
- `kulcha.jpg`
- `puri.jpg`
- `paratha.jpg`
- `gulab-jamun.jpg`
- `kheer.jpg`
- `jalebi.jpg`
- `rasmalai.jpg`
- `mango-lassi.jpg`
- `kulfi.jpg`
- `chai.jpg`
- `iced-tea.jpg`
- `sugarcane-juice.jpg`
- `lemonade.jpg`
- `coffee.jpg`

**Recommended Size**: 300x250px or 400x300px for square aspect ratio

### 4. Gallery Images
- **Filenames**: `g1.jpg`, `g2.jpg`, ... `g12.jpg`
- **Recommended Size**: 600x600px (square for grid layout)
- **Format**: JPG or PNG
- **Count**: Minimum 6, up to 12 (or more)

### 5. Placeholder Image
- **Filename**: `placeholder.jpg`
- **Size**: 300x250px
- **Description**: Fallback image if any image fails to load
- **Purpose**: Prevents broken image icons

## Image Optimization Tips

1. **Format Selection**:
   - Use JPG for photographs
   - Use PNG for graphics with transparency

2. **File Size**:
   - Hero image: 200-500KB
   - Menu items: 30-100KB each
   - Gallery images: 50-150KB each

3. **Compression Tools**:
   - TinyJPG or TinyPNG (online)
   - ImageMagick (command-line)
   - GIMP (free image editor)

4. **Responsive Images**:
   - Consider WebP format for modern browsers
   - Provide fallbacks for older browsers

## How to Add Images

### Quick Method (Drag & Drop)
1. Create `images` folder in project root
2. Drag images from File Explorer to `images` folder
3. Update `data.json` with correct filenames

### Using Command Line (PowerShell)
```powershell
# Create images folder
mkdir images

# Copy images from a source folder
Copy-Item "C:\path\to\your\images\*" -Destination ".\images\" -Recurse
```

## Update data.json

For each menu item, update the image path:
```json
{
  "name": "Paneer Tikka",
  "price": "₹250",
  "image": "images/paneer-tikka.jpg",  // Make sure filename matches
  "description": "Grilled cottage cheese..."
}
```

For gallery images:
```json
"gallery": [
  "images/g1.jpg",
  "images/g2.jpg",
  "images/g3.jpg",
  ...
]
```

## Troubleshooting

### Images Not Loading
1. Check filename spelling (case-sensitive on some servers)
2. Verify image is in `images/` folder
3. Check browser console for 404 errors
4. Use absolute path starting with `images/`

### Quality Issues
1. Image too compressed: Re-export with higher quality
2. Image too large: Resize to recommended dimensions
3. Wrong aspect ratio: Use recommended sizes

### Performance Issues
1. Images too large: Compress using optimization tools
2. Too many high-res images: Reduce resolution slightly
3. Unoptimized format: Convert to WebP with JPG fallback

## Sample Image Sources

If you need placeholder images:
- **Unsplash**: https://unsplash.com (free high-quality)
- **Pexels**: https://pexels.com (free stock photos)
- **Pixabay**: https://pixabay.com (free images)
- **Food photos**: Search "restaurant food" on any of above

## Next Steps

1. Create `images` folder
2. Add all required images
3. Update `data.json` with correct filenames
4. Test website locally
5. Verify all images load correctly
6. Deploy!

---

**Note**: The website includes a fallback to `images/placeholder.jpg` for broken image links, so users won't see broken image icons.
