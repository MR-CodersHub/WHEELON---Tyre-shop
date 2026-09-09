/* ==========================================================================
   APEXTYRE & WHEEL ALIGNMENT CENTER - PRODUCTS JAVASCRIPT (products.js)
   Products dataset, filtering system, live search, sorting, and quick view modal
   ========================================================================== */

const TYRE_PRODUCTS = [
  {
    id: 't1',
    name: 'Michelin Pilot Sport 5',
    brand: 'Michelin',
    category: 'performance',
    categoryLabel: 'Performance Tyres',
    size: '225/45 R17 94Y',
    rimSize: 'R17',
    price: 185,
    originalPrice: 215,
    rating: 4.9,
    reviewsCount: 128,
    badge: 'Best Seller',
    badgeType: 'badge-red',
    fuelGrade: 'C',
    wetGrip: 'A',
    noiseLevel: '69 dB',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=600&auto=format&fit=crop',
    description: 'Ultra-high performance road tyre offering exceptional longevity, precision steering feedback, and superior wet braking performance.'
  },
  {
    id: 't2',
    name: 'Bridgestone Turanza T005',
    brand: 'Bridgestone',
    category: 'car',
    categoryLabel: 'Car Tyres',
    size: '205/55 R16 91V',
    rimSize: 'R16',
    price: 135,
    originalPrice: 155,
    rating: 4.8,
    reviewsCount: 94,
    badge: 'Popular',
    badgeType: 'badge-dark',
    fuelGrade: 'B',
    wetGrip: 'A',
    noiseLevel: '71 dB',
    image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=600&auto=format&fit=crop',
    description: 'Premium touring tyre designed to help drivers stay in full control even on rainy days with outstanding wet grip capabilities.'
  },
  {
    id: 't3',
    name: 'Goodyear Eagle F1 Asymmetric 6',
    brand: 'Goodyear',
    category: 'performance',
    categoryLabel: 'Performance Tyres',
    size: '245/40 R18 97Y',
    rimSize: 'R18',
    price: 195,
    originalPrice: 230,
    rating: 4.9,
    reviewsCount: 76,
    badge: 'Hot Deal',
    badgeType: 'badge-red',
    fuelGrade: 'C',
    wetGrip: 'A',
    noiseLevel: '70 dB',
    image: 'https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=600&auto=format&fit=crop',
    description: 'Ready for electric and combustion engines, delivering dry handling performance and reduced rolling resistance.'
  },
  {
    id: 't4',
    name: 'Continental CrossContact ATR',
    brand: 'Continental',
    category: 'suv',
    categoryLabel: 'SUV & 4x4 Tyres',
    size: '265/65 R17 112H',
    rimSize: 'R17',
    price: 210,
    originalPrice: 245,
    rating: 4.7,
    reviewsCount: 82,
    badge: 'Heavy Duty',
    badgeType: 'badge-dark',
    fuelGrade: 'D',
    wetGrip: 'C',
    noiseLevel: '72 dB',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=600&auto=format&fit=crop',
    description: 'All-terrain crossover tyre offering great off-road traction combined with smooth, quiet highway driving.'
  },
  {
    id: 't5',
    name: 'Pirelli P Zero PZ4',
    brand: 'Pirelli',
    category: 'performance',
    categoryLabel: 'Performance Tyres',
    size: '275/35 R19 100Y',
    rimSize: 'R19',
    price: 260,
    originalPrice: 295,
    rating: 4.9,
    reviewsCount: 110,
    badge: 'Supercar Spec',
    badgeType: 'badge-red',
    fuelGrade: 'E',
    wetGrip: 'A',
    noiseLevel: '72 dB',
    image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=600&auto=format&fit=crop',
    description: 'Chosen as original equipment by prestige automakers worldwide. Maximum cornering stability and short wet braking distances.'
  },
  {
    id: 't6',
    name: 'Yokohama Geolandar A/T G015',
    brand: 'Yokohama',
    category: 'suv',
    categoryLabel: 'SUV & 4x4 Tyres',
    size: '235/70 R16 106H',
    rimSize: 'R16',
    price: 175,
    originalPrice: 195,
    rating: 4.6,
    reviewsCount: 65,
    badge: 'All-Terrain',
    badgeType: 'badge-green',
    fuelGrade: 'E',
    wetGrip: 'B',
    noiseLevel: '73 dB',
    image: 'https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=600&auto=format&fit=crop',
    description: 'Durable all-season, all-terrain tyre built to conquer dirt trails, deep mud, and wet asphalt while delivering long tread life.'
  },
  {
    id: 't7',
    name: 'Michelin City Grip 2',
    brand: 'Michelin',
    category: 'bike',
    categoryLabel: 'Bike & Moto Tyres',
    size: '120/70-15 M/C 56S',
    rimSize: 'R15',
    price: 85,
    originalPrice: 98,
    rating: 4.8,
    reviewsCount: 51,
    badge: 'Scooter / Moto',
    badgeType: 'badge-dark',
    fuelGrade: 'N/A',
    wetGrip: 'A',
    noiseLevel: 'N/A',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=600&auto=format&fit=crop',
    description: 'Renowned wet grip compound specially engineered for city scooters and commuter motorcycles with anti-slip sipes.'
  },
  {
    id: 't8',
    name: 'Bridgestone Duravis R660',
    brand: 'Bridgestone',
    category: 'commercial',
    categoryLabel: 'Commercial Tyres',
    size: '215/65 R16C 109/107R',
    rimSize: 'R16',
    price: 165,
    originalPrice: 185,
    rating: 4.7,
    reviewsCount: 44,
    badge: 'Van & Truck',
    badgeType: 'badge-dark',
    fuelGrade: 'C',
    wetGrip: 'B',
    noiseLevel: '72 dB',
    image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=600&auto=format&fit=crop',
    description: 'Long-lasting commercial van tyre delivering maximum mileage efficiency, heavy load handling, and reduced total cost of ownership.'
  },
  {
    id: 't9',
    name: 'Continental PremiumContact 7',
    brand: 'Continental',
    category: 'car',
    categoryLabel: 'Car Tyres',
    size: '225/50 R17 98Y',
    rimSize: 'R17',
    price: 160,
    originalPrice: 180,
    rating: 4.9,
    reviewsCount: 88,
    badge: 'Top Rated',
    badgeType: 'badge-red',
    fuelGrade: 'B',
    wetGrip: 'A',
    noiseLevel: '69 dB',
    image: 'https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=600&auto=format&fit=crop',
    description: 'Adaptable tread pattern ensures maximum safety and comfortable driving behavior across wide ambient temperature spectrums.'
  }
];

let activeFilterCategory = 'all';
let activeFilterBrand = 'all';
let activeFilterRim = 'all';
let searchQuery = '';
let currentSort = 'featured';

document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('productsGrid');
  if (productsContainer) {
    renderProducts();
    initFilterListeners();
  }
});

const starSvg = `<svg viewBox="0 0 24 24" width="14" height="14" fill="var(--star-yellow)"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;

function renderProducts() {
  const productsContainer = document.getElementById('productsGrid');
  if (!productsContainer) return;

  let filtered = TYRE_PRODUCTS.filter(p => {
    const matchCategory = activeFilterCategory === 'all' || p.category === activeFilterCategory;
    const matchBrand = activeFilterBrand === 'all' || p.brand.toLowerCase() === activeFilterBrand.toLowerCase();
    const matchRim = activeFilterRim === 'all' || p.rimSize === activeFilterRim;
    const matchSearch = searchQuery === '' || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.size.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchBrand && matchRim && matchSearch;
  });

  // Sort
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const resultsCountEl = document.getElementById('resultsCount');
  if (resultsCountEl) {
    resultsCountEl.textContent = `${filtered.length} Tyres Found`;
  }

  if (filtered.length === 0) {
    productsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 60px 20px;" class="card">
        <h3 style="margin-bottom:10px;">No Tyres Found</h3>
        <p style="color:var(--text-muted); margin-bottom:20px;">Try adjusting your search criteria, brand filters, or rim size selection.</p>
        <button class="btn btn-outline" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  productsContainer.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-badge-group">
        ${p.badge ? `<span class="badge ${p.badgeType}">${p.badge}</span>` : ''}
      </div>
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-brand-title">
        <span class="product-brand">${p.brand}</span>
        <span class="badge badge-gray">${p.categoryLabel}</span>
      </div>
      <h3 class="product-name">${p.name}</h3>
      <div class="product-specs">Size: ${p.size}</div>
      
      <div class="product-ratings">
        <span class="stars-icon">${starSvg} ${p.rating}</span>
        <span>(${p.reviewsCount} reviews)</span>
        <span style="margin-left:auto; font-size:0.75rem; color:var(--success-green); font-weight:700;">In Stock</span>
      </div>

      <div class="product-price-row">
        <div class="price-container">
          ${p.originalPrice ? `<span class="original-price">$${p.originalPrice}</span>` : ''}
          <span class="current-price">$${p.price}</span>
        </div>
        <div style="font-size:0.75rem; color:var(--text-muted);">Incl. VAT & Fitting</div>
      </div>

      <div class="product-card-actions">
        <button class="btn btn-secondary btn-sm" onclick="openProductQuickView('${p.id}')">Quick View</button>
        <button class="btn btn-primary btn-sm" onclick="openBookingModalForProduct('${p.name}', '${p.size}')">Book Service</button>
      </div>
    </div>
  `).join('');
}

function initFilterListeners() {
  const categoryBtns = document.querySelectorAll('.category-tab-btn');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilterCategory = btn.getAttribute('data-category') || 'all';
      renderProducts();
    });
  });

  const brandSelect = document.getElementById('brandFilter');
  if (brandSelect) {
    brandSelect.addEventListener('change', (e) => {
      activeFilterBrand = e.target.value;
      renderProducts();
    });
  }

  const rimSelect = document.getElementById('rimFilter');
  if (rimSelect) {
    rimSelect.addEventListener('change', (e) => {
      activeFilterRim = e.target.value;
      renderProducts();
    });
  }

  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  const sortSelect = document.getElementById('productSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }
}

function resetFilters() {
  activeFilterCategory = 'all';
  activeFilterBrand = 'all';
  activeFilterRim = 'all';
  searchQuery = '';
  currentSort = 'featured';

  const categoryBtns = document.querySelectorAll('.category-tab-btn');
  categoryBtns.forEach(b => b.classList.remove('active'));
  if (categoryBtns[0]) categoryBtns[0].classList.add('active');

  const brandSelect = document.getElementById('brandFilter');
  if (brandSelect) brandSelect.value = 'all';

  const rimSelect = document.getElementById('rimFilter');
  if (rimSelect) rimSelect.value = 'all';

  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('productSortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  renderProducts();
}

function openProductQuickView(productId) {
  const p = TYRE_PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const modalBody = document.getElementById('quickViewModalBody');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1.2fr; gap:24px; align-items:center;">
      <div style="background:var(--bg-surface-elevated); padding:20px; border-radius:var(--radius-md); text-align:center;">
        <img src="${p.image}" alt="${p.name}" style="max-height:220px; margin:0 auto; object-fit:contain;">
      </div>
      <div>
        <span class="product-brand">${p.brand}</span>
        <h2 style="margin:4px 0 12px 0;">${p.name}</h2>
        <div style="font-family:var(--font-heading); font-size:1.1rem; color:var(--primary-red); margin-bottom:16px;">Size: ${p.size}</div>
        
        <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:20px;">${p.description}</p>
        
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; background:var(--bg-surface-elevated); padding:12px; border-radius:var(--radius-sm); margin-bottom:20px; text-align:center;">
          <div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Fuel Efficiency</div>
            <div style="font-weight:700; color:var(--primary-red);">${p.fuelGrade}</div>
          </div>
          <div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Wet Grip</div>
            <div style="font-weight:700; color:var(--success-green);">${p.wetGrip}</div>
          </div>
          <div>
            <div style="font-size:0.75rem; color:var(--text-muted);">External Noise</div>
            <div style="font-weight:700; color:var(--text-main);">${p.noiseLevel}</div>
          </div>
        </div>

        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:24px;">
          <div>
            <div style="font-size:0.85rem; color:var(--text-muted);">Unit Price</div>
            <div style="font-family:var(--font-heading); font-size:2rem; font-weight:800; color:var(--primary-red);">$${p.price}</div>
          </div>
          <button class="btn btn-primary btn-lg" onclick="closeModal('quickViewModal'); openBookingModalForProduct('${p.name}', '${p.size}')">
            Book Fitting Service
          </button>
        </div>
      </div>
    </div>
  `;

  openModal('quickViewModal');
}

function openBookingModalForProduct(productName, productSize) {
  const serviceSelect = document.getElementById('modalServiceSelect');
  const notesField = document.getElementById('modalNotes');
  
  if (serviceSelect) {
    serviceSelect.value = 'Tyre Replacement & Fitting';
  }
  if (notesField) {
    notesField.value = `Interested in fitting: ${productName} (${productSize})`;
  }

  openModal('appointmentModal');
}
