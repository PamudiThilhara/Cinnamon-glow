<template>
  <div class="home-wrap">

    <!-- HERO -->
    <div class="hero-section">
      <img src="/hero32.jpg" class="hero-img" alt="Hero" />
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-eyebrow">New Collection 2025</p>
        <h1 class="hero-heading">Nature's Glow for<br/>Cinnamon Queens</h1>
        <RouterLink to="/products" class="hero-btn">[ Shop The Collection ]</RouterLink>
      </div>
    </div>

    <!-- DISCOVER -->
    <div class="discover-wrap">
      <div class="discover-section">
        <h2 class="section-heading">Discover Your Shade</h2>
        <p class="section-sub">Handcrafted beauty for warm, radiant skin tones</p>
        <div class="looks-grid">
          <div v-for="look in looks" :key="look.label" class="look-card" @click="$router.push('/products')">
            <img :src="look.img" :alt="look.label" class="look-img" />
            <p class="look-label">{{ look.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- TWO COL -->
    <div class="two-col">
      <div class="slider-wrap">
        <transition name="fade" mode="out-in">
          <img :key="currentImage" :src="aboutImages[currentImage]" class="slider-img" />
        </transition>
        <button @click="prevImage" class="nav-btn left">❮</button>
        <button @click="nextImage" class="nav-btn right">❯</button>
      </div>
      <div class="about-text">
        <h2 class="about-heading">Made for<br/>Your Glow</h2>
        <p class="about-body">Cinnamon Glow is crafted with pure cinnamon and natural ingredients to nourish and enhance your skin.</p>
        <RouterLink to="/products" class="about-btn">Shop Now →</RouterLink>
      </div>
    </div>

    <!-- FEATURED -->
    <div class="featured-section">
      <h2 class="section-heading">Featured Rituals</h2>
      <div class="featured-grid">
        <div v-for="item in featured" :key="item.id" class="product-card" @click="addToCart(item)">
          <img :src="item.image" class="product-img" />
          <div class="product-info">
            <p class="product-name">{{ item.name }}</p>
            <p class="product-price">${{ item.price }}.00</p>
            <button class="add-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <!-- CUSTOMERS -->
    <div class="customers-section">
      <h2 class="section-heading">Customer Favourites</h2>
      <p class="section-sub">Real people, real radiance</p>
      <div class="cust-grid">
        <img src="/hero30.png" class="cust-img" />
        <img src="/hero33.png" class="cust-img" />
        <img src="/hero26.png" class="cust-img" />
      </div>
    </div>

    <!-- SUBSCRIBE -->
    <div class="subscribe-section">
      <span class="subscribe-label">Subscribe for 15% off</span>
      <input type="email" placeholder="Enter email" class="subscribe-input" />
      <button class="subscribe-btn">Subscribe</button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()

const looks = [
  { img:'/hero9.jpg',  label:'Natural Glow Look' },
  { img:'/hero10.jpg', label:'Soft Petal Look' },
  { img:'/hero11.jpg', label:'Bold & Beautiful Look' },
  { img:'/hero12.jpg', label:'Signature Collection' }
]

const aboutImages = ['/hero13.jpg', '/hero21.jpg', '/hero15.png']

const featured = [
  { id:1, name:'Toasted Cinnamon Body Oil', price:38, image:'/hero8.jpg' },
  { id:2, name:'Crimson Rose Lip Stain',    price:24, image:'/hero6.jpg' },
  { id:3, name:'Melanin-Boost Serum',       price:52, image:'/hero7.jpg' }
]

const currentImage = ref(0)
function nextImage() { currentImage.value = (currentImage.value + 1) % aboutImages.length }
function prevImage() { currentImage.value = (currentImage.value - 1 + aboutImages.length) % aboutImages.length }
function addToCart(item) { cart.addItem(item) }

let timer
onMounted(() => { timer = setInterval(nextImage, 3000) })
onUnmounted(() => { clearInterval(timer) })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

/* ══════════════════════════════════════
   ROOT VARIABLES — Light Mode defaults
══════════════════════════════════════ */
:root {
  --bg-page:               #fdf8f3;
  --bg-featured:           #f5ede3;
  --bg-card:               #ffffff;
  --bg-subscribe:          #c17f3a;
  --bg-subscribe-btn:      #6b2d0f;
  --text-heading:          #6b2d0f;
  --text-sub:              #999999;
  --look-label:            #6b2d0f;
  --product-name:          #6b2d0f;
  --product-price:         #c17f3a;
  --card-shadow:           rgba(0,0,0,0.08);
  --subscribe-input-bg:    #ffffff;
  --subscribe-input-color: #3d1f0a;
}

/* ══════════════════════════════════════
   DARK MODE — via html.dark class (toggle)
   AND via system preference
══════════════════════════════════════ */
:global(html.dark),
:global([data-theme="dark"]) {
  --bg-page:               #1a0f0a;
  --bg-featured:           #120a06;
  --bg-card:               #2a1810;
  --bg-subscribe:          #6b2d0f;
  --bg-subscribe-btn:      #3d1f0a;
  --text-heading:          #c9a84c;
  --text-sub:              #7a5a48;
  --look-label:            #f0e0d0;
  --product-name:          #f0e0d0;
  --product-price:         #c9a84c;
  --card-shadow:           rgba(0,0,0,0.5);
  --subscribe-input-bg:    #2a1810;
  --subscribe-input-color: #f0e0d0;
}

/* ══════════════════════════════════════
   BASE
══════════════════════════════════════ */
.home-wrap {
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-family: 'DM Sans', sans-serif;
}

/* ══════════════════════════════════════
   HERO
══════════════════════════════════════ */
.hero-section {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}
.hero-img {
  position: absolute;
  top: 50%; left: 50%;
  width: auto; height: 100%;
  min-width: 100%; min-height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(61,31,10,0.88) 0%, rgba(61,31,10,0.1) 55%);
}
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  padding: 4rem 2rem;
  color: white;
}
.hero-eyebrow {
  color: #c9a84c;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}
.hero-heading {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 2rem;
  line-height: 1.2;
}
.hero-btn {
  display: inline-block;
  border: 2px solid #c9a84c;
  color: #c9a84c;
  padding: 1rem 3rem;
  font-size: 0.85rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.hero-btn:hover { background: #c9a84c; color: #1a0f0a; }

/* ══════════════════════════════════════
   DISCOVER
══════════════════════════════════════ */
.discover-wrap {
  background: var(--bg-page);
  transition: background 0.3s;
}
.discover-section {
  padding: 5rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
}
.section-heading {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--text-heading);
  text-align: center;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}
.section-sub {
  text-align: center;
  color: var(--text-sub);
  margin-bottom: 3rem;
  font-size: 0.9rem;
  transition: color 0.3s;
}
.looks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
.look-card {
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
}
.look-label {
  font-size: 0.9rem;
  color: var(--look-label);
  font-weight: 500;
  padding: 0.5rem;
  transition: color 0.3s;
}
.look-img, .cust-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.4s;
}
.look-img:hover, .cust-img:hover { transform: scale(1.05); }

/* ══════════════════════════════════════
   TWO COL
══════════════════════════════════════ */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.slider-wrap {
  position: relative;
  overflow: hidden;
}
.slider-img {
  width: 100%;
  height: 750px;
  object-fit: cover;
}
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
}
.left  { left: 15px; }
.right { right: 15px; }
.about-text {
  background: #6b2d0f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 4rem;
  color: white;
  min-height: 750px;
}
.about-heading {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #c9a84c;
  margin-bottom: 1.2rem;
  font-style: italic;
}
.about-body {
  color: #e8d5c4;
  line-height: 1.9;
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
}
.about-btn {
  display: inline-block;
  border: 2px solid #c9a84c;
  color: #c9a84c;
  padding: 1rem 2.5rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.about-btn:hover { background: #c9a84c; color: #3d1f0a; }

/* ══════════════════════════════════════
   FEATURED
══════════════════════════════════════ */
.featured-section {
  background: var(--bg-featured);
  padding: 5rem 3rem;
  transition: background 0.3s;
}
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 3rem auto;
}
.product-card {
  background: var(--bg-card);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 12px var(--card-shadow);
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
}
.product-card:hover { transform: translateY(-4px); }
.product-img { width: 100%; height: 220px; object-fit: cover; }
.product-info { padding: 1.2rem; text-align: center; }
.product-name {
  color: var(--product-name);
  font-family: 'Playfair Display', serif;
  margin-bottom: 0.4rem;
  transition: color 0.3s;
}
.product-price {
  color: var(--product-price);
  font-weight: bold;
  margin-bottom: 0.8rem;
  transition: color 0.3s;
}
.add-btn {
  background: #6b2d0f;
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.2s;
}
.add-btn:hover { background: #8b4513; }

/* ══════════════════════════════════════
   CUSTOMERS
══════════════════════════════════════ */
.customers-section {
  padding: 5rem 3rem;
  text-align: center;
  background: var(--bg-page);
  transition: background 0.3s;
}
.cust-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

/* ══════════════════════════════════════
   SUBSCRIBE
══════════════════════════════════════ */
.subscribe-section {
  background: var(--bg-subscribe);
  color: rgb(249, 249, 249);
  text-align: center;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  transition: background 0.3s;
}
.subscribe-label {
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.9rem;
}
.subscribe-input {
  padding: 0.7rem 1.3rem;
  border: none;
  border-radius: 50px;
  min-width: 260px;
  background: var(--subscribe-input-bg);
  color: var(--subscribe-input-color);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition: background 0.3s, color 0.3s;
}
.subscribe-input::placeholder { color: #b8926a; }
.subscribe-btn {
  background: var(--bg-subscribe-btn);
  color: rgb(255, 254, 254);
  border: none;
  padding: 0.7rem 1.8rem;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  transition: background 0.2s;
}
.subscribe-btn:hover { background: #2a1005; }

/* ══════════════════════════════════════
   TRANSITIONS & RESPONSIVE
══════════════════════════════════════ */
.fade-enter-active, .fade-leave-active { transition: opacity 0.6s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .looks-grid       { grid-template-columns: repeat(2, 1fr); }
  .two-col          { grid-template-columns: 1fr; }
  .featured-grid    { grid-template-columns: 1fr; }
  .cust-grid        { grid-template-columns: 1fr; }
  .slider-img       { height: 400px; }
  .about-text       { min-height: auto; padding: 3rem 2rem; }
  .discover-section { padding: 3rem 1.5rem; }
}
</style>