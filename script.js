// ==========================================
// GLOBAL VARIABLES
// ==========================================

let restaurantData = null;
let allMenuItems = [];

// ==========================================
// FETCH AND LOAD DATA FROM JSON
// ==========================================

async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        restaurantData = await response.json();
        console.log('Data loaded successfully:', restaurantData);
        
        // Initialize all sections after data is loaded
        initializeRestaurant();
        initializeMenu();
        initializeGallery();
        initializeContact();
        initializeSocialMedia();
    } catch (error) {
        console.error('Error loading data:', error);
        alert('Failed to load restaurant data. Please ensure data.json is in the correct location.');
    }
}

// ==========================================
// INITIALIZE RESTAURANT DATA
// ==========================================

function initializeRestaurant() {
    const { name, tagline, heroImage, about } = restaurantData.restaurant;
    
    // Update HTML title
    document.title = name;
    
    // Update navigation logo
    document.getElementById('navLogo').textContent = name;
    
    // Update hero section
    const heroSection = document.getElementById('hero');
    if (heroImage) {
        heroSection.style.backgroundImage = `url('${heroImage}')`;
    }
    document.getElementById('heroTitle').textContent = name;
    document.getElementById('heroTagline').textContent = tagline;
    
    // Update about section
    document.getElementById('aboutDescription').textContent = about;
}

// ==========================================
// INITIALIZE MENU
// ==========================================

function initializeMenu() {
    const { menu } = restaurantData;
    const menuContainer = document.getElementById('menuContainer');
    const categoryButtons = document.getElementById('categoryButtons');
    
    // Clear previous content
    menuContainer.innerHTML = '';
    categoryButtons.innerHTML = '';
    allMenuItems = [];
    
    // Get unique categories
    const categories = menu.map(cat => cat.category);
    
    // Create category buttons
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.setAttribute('data-category', category);
        btn.textContent = category;
        btn.addEventListener('click', () => filterMenu(category));
        categoryButtons.appendChild(btn);
    });
    
    // Collect all menu items
    menu.forEach(categoryObj => {
        categoryObj.items.forEach(item => {
            allMenuItems.push({
                ...item,
                category: categoryObj.category
            });
        });
    });
    
    // Display all menu items initially
    displayMenuItems(allMenuItems);
}

function displayMenuItems(items) {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.innerHTML = '';
    
    if (items.length === 0) {
        menuContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666;">No items found</p>';
        return;
    }
    
    items.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.style.animationDelay = `${index * 0.1}s`;
        menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" crossorigin="anonymous" onerror="this.src='https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'">
            </div>
            <div class="menu-item-content">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <p class="menu-item-price">${item.price}</p>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}

function filterMenu(category) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.category-btn[data-category="${category}"]`).classList.add('active');
    
    // Filter and display items
    if (category === 'all') {
        displayMenuItems(allMenuItems);
    } else {
        const filteredItems = allMenuItems.filter(item => item.category === category);
        displayMenuItems(filteredItems);
    }
}

// ==========================================
// INITIALIZE GALLERY
// ==========================================

function initializeGallery() {
    const { gallery } = restaurantData;
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    gallery.forEach((imageUrl, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src="${imageUrl}" alt="Gallery Image ${index + 1}" crossorigin="anonymous" onerror="this.src='https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'">`;
        galleryItem.addEventListener('click', () => openImageModal(imageUrl));
        galleryGrid.appendChild(galleryItem);
    });
}

function openImageModal(imageUrl) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modal.style.display = 'block';
    modalImage.src = imageUrl;
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// ==========================================
// INITIALIZE CONTACT
// ==========================================

function initializeContact() {
    const { address, phone, email, hours } = restaurantData.restaurant;
    
    // Update contact information
    document.getElementById('contactAddress').textContent = address;
    document.getElementById('contactPhone').innerHTML = `<a href="tel:${phone}">${phone}</a>`;
    document.getElementById('contactEmail').innerHTML = `<a href="mailto:${email}">${email}</a>`;
    
    // Format opening hours
    const hoursText = `Monday - Friday: ${hours.monFri}<br>Saturday - Sunday: ${hours.satSun}`;
    document.getElementById('contactHours').innerHTML = hoursText;
    
    // Embed Google Map (using Google Maps Embed API)
    const mapFrame = document.getElementById('contactMap');
    const encodedAddress = encodeURIComponent(address);
    mapFrame.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.823697265625!2d72.82765!3d19.07283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9255555555d%3A0x123456789!2s${encodedAddress}!5e0!3m2!1sen!2sin!4v1234567890`;
    mapFrame.title = address;
}

// ==========================================
// INITIALIZE SOCIAL MEDIA
// ==========================================

function initializeSocialMedia() {
    const { social } = restaurantData.restaurant;
    const socialLinks = document.getElementById('socialLinks');
    socialLinks.innerHTML = '';
    
    const socialMedia = [
        {
            platform: 'instagram',
            icon: 'fab fa-instagram',
            url: social.instagram,
            label: 'Instagram'
        },
        {
            platform: 'facebook',
            icon: 'fab fa-facebook-f',
            url: social.facebook,
            label: 'Facebook'
        },
        {
            platform: 'whatsapp',
            icon: 'fab fa-whatsapp',
            url: social.whatsapp,
            label: 'WhatsApp'
        }
    ];
    
    socialMedia.forEach(media => {
        const link = document.createElement('a');
        link.href = media.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'social-icon';
        link.title = media.label;
        link.innerHTML = `<i class="${media.icon}"></i>`;
        socialLinks.appendChild(link);
    });
}

// ==========================================
// NAVIGATION FUNCTIONALITY
// ==========================================

function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ==========================================
// MODAL FUNCTIONALITY
// ==========================================

function setupModal() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeImageModal);
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeImageModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeImageModal();
        }
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections except hero
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'hero') {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        observer.observe(section);
    });
}

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION
// ==========================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// CATEGORY FILTER - ALL BUTTON
// ==========================================

function setupCategoryFilter() {
    const allButton = document.querySelector('.category-btn[data-category="all"]');
    if (allButton) {
        allButton.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            allButton.classList.add('active');
            displayMenuItems(allMenuItems);
        });
    }
}

// ==========================================
// INITIALIZATION ON PAGE LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Starting initialization');
    
    // Setup navigation
    setupNavigation();
    
    // Setup modal
    setupModal();
    
    // Setup smooth scroll
    setupSmoothScroll();
    
    // Load data from JSON
    loadData().then(() => {
        console.log('Data loaded - setting up interactions');
        
        // Setup category filter after menu is initialized
        setupCategoryFilter();
        
        // Setup scroll animations
        setupScrollAnimations();
    });
});

// ==========================================
// UTILITY: Responsive image fallback
// ==========================================

window.addEventListener('error', (event) => {
    if (event.target.tagName === 'IMG') {
        event.target.src = 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D';
    }
}, true);

// ==========================================
// SMOOTH SCROLL POLYFILL FOR OLDER BROWSERS
// ==========================================

if (!CSS.supports('scroll-behavior', 'smooth')) {
    const scrollElements = document.querySelectorAll('a[href^="#"]');
    scrollElements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href');
            if (targetID !== '#') {
                const target = document.querySelector(targetID);
                if (target) {
                    target.scrollIntoView({ behavior: 'auto' });
                }
            }
        });
    });
}
