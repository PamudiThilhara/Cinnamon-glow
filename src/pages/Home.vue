<template>
  <div style="width:100%;overflow-x:hidden;margin:0;padding:0;">

    <!-- HERO -->
    <div style="position:relative;height:100vh;width:100vw;overflow:hidden;display:flex;align-items:flex-end;">
      <img src="/hero32.jpg"
           style="position:absolute;top:50%;left:50%;width:auto;height:100%;min-width:100%;min-height:100%;transform:translate(-50%, -50%);object-fit:cover;"
           alt="Hero" />
      <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to top,rgba(61,31,10,0.88) 0%,rgba(61,31,10,0.1) 55%);"></div>
      <div style="position:relative;z-index:2;width:100%;text-align:center;padding:4rem 2rem;color:white;">
        <p style="color:#c9a84c;letter-spacing:0.3em;text-transform:uppercase;font-size:0.85rem;margin-bottom:1rem;">New Collection 2025</p>
        <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.2rem,5vw,4.5rem);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:2rem;line-height:1.2;">Nature's Glow for<br/>Cinnamon Queens</h1>
        <RouterLink to="/products" style="display:inline-block;border:2px solid #c9a84c;color:#c9a84c;padding:1rem 3rem;font-size:0.85rem;letter-spacing:0.25em;text-transform:uppercase;text-decoration:none;">[ Shop The Collection ]</RouterLink>
      </div>
    </div>

    <!-- DISCOVER -->
    <div style="padding:5rem 3rem;max-width:1200px;margin:0 auto;">
      <h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:#6b2d0f;text-align:center;margin-bottom:0.5rem;">Discover Your Shade</h2>
      <p style="text-align:center;color:#999;margin-bottom:3rem;font-size:0.9rem;">Handcrafted beauty for warm, radiant skin tones</p>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;">
        <div v-for="look in looks" :key="look.label"
          style="text-align:center;cursor:pointer;overflow:hidden;border-radius:8px;"
          @click="$router.push('/products')">
          <img :src="look.img" :alt="look.label" class="look-img" />
          <p style="font-size:0.9rem;color:#6b2d0f;font-weight:500;padding:0.5rem;">{{ look.label }}</p>
        </div>
      </div>
    </div>

    <!-- TWO COL -->
    <div style="display:grid;grid-template-columns:1fr 1fr;width:100%;">

      <!-- AUTO IMAGE SLIDER -->
      <div style="position:relative;overflow:hidden;">
        <transition name="fade" mode="out-in">
          <img :key="currentImage" :src="aboutImages[currentImage]" class="slider-img" />
        </transition>
        <button @click="prevImage" style="position:absolute;top:50%;left:15px;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:white;border:none;padding:10px 15px;border-radius:50%;cursor:pointer;">❮</button>
        <button @click="nextImage" style="position:absolute;top:50%;right:15px;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:white;border:none;padding:10px 15px;border-radius:50%;cursor:pointer;">❯</button>
        <!-- DOTS -->
        <div style="position:absolute;bottom:15px;left:50%;transform:translateX(-50%);display:flex;gap:8px;">
          <span v-for="(img, i) in aboutImages" :key="i"
            @click="currentImage = i"
            :style="i === currentImage ? 'background:#c9a84c;width:10px;height:10px;border-radius:50%;cursor:pointer;display:block;' : 'background:rgba(255,255,255,0.5);width:10px;height:10px;border-radius:50%;cursor:pointer;display:block;'">
          </span>
        </div>
      </div>

      <!-- TEXT -->
      <div style="background:#6b2d0f;display:flex;flex-direction:column;justify-content:center;padding:5rem 4rem;color:white;min-height:750px;">
        <h2 style="font-family:'Playfair Display',serif;font-size:2.8rem;color:#c9a84c;margin-bottom:1.2rem;font-style:italic;line-height:1.2;">Made for<br/>Your Glow</h2>
        <p style="color:#e8d5c4;line-height:1.9;margin-bottom:2.5rem;font-size:0.95rem;">Cinnamon Glow is crafted with pure cinnamon and natural ingredients to nourish, protect, and enhance your radiant skin. Our formulas help reveal your natural warm glow.</p>
        <RouterLink to="/products" style="display:inline-block;border:2px solid #c9a84c;color:#c9a84c;padding:1rem 2.5rem;font-size:0.85rem;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;width:fit-content;">Shop Now →</RouterLink>
      </div>

    </div>

    <!-- FEATURED -->
    <div style="background:#f5ede3;padding:5rem 3rem;width:100%;">
      <h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:#6b2d0f;text-align:center;margin-bottom:0.5rem;">Featured Rituals</h2>
      <p style="text-align:center;color:#999;margin-bottom:3rem;font-size:0.9rem;">Our bestselling beauty rituals</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:1000px;margin:0 auto;">
        <div v-for="item in featured" :key="item.id"
          style="text-align:center;cursor:pointer;background:white;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(107,45,15,0.08);"
          @click="addToCart(item)">
          <img :src="item.image" :alt="item.name" style="width:100%;height:220px;object-fit:cover;" />
          <div style="padding:1.2rem;">
            <p style="font-family:'Playfair Display',serif;font-size:0.95rem;color:#6b2d0f;margin-bottom:0.3rem;">{{ item.name }}</p>
            <p style="color:#c17f3a;font-weight:600;margin-bottom:0.8rem;">${{ item.price }}.00</p>
            <button style="background:#6b2d0f;color:white;border:none;border-radius:50px;padding:0.5rem 1.2rem;font-size:0.8rem;cursor:pointer;">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <!-- CUSTOMERS -->
    <div style="padding:5rem 3rem;text-align:center;width:100%;background:#fdf8f3;">
      <h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:#6b2d0f;margin-bottom:0.5rem;">Customer Favourites</h2>
      <p style="color:#999;margin-bottom:2rem;font-size:0.9rem;">Real people, real radiance</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;max-width:1000px;margin:0 auto;">
        <img src="/hero1.jpg" style="width:100%;height:350px;object-fit:cover;object-position:top;border-radius:8px;" />
        <img src="/hero2.jpg" style="width:100%;height:350px;object-fit:cover;object-position:top;border-radius:8px;" />
        <img src="/hero3.jpg" style="width:100%;height:350px;object-fit:cover;object-position:top;border-radius:8px;" />
      </div>
    </div>

    <!-- SUBSCRIBE -->
    <div style="background:#c17f3a;color:white;text-align:center;padding:2.5rem;display:flex;justify-content:center;align-items:center;gap:1rem;flex-wrap:wrap;width:100%;">
      <span style="font-size:0.85rem;letter-spacing:0.15em;text-transform:uppercase;">Subscribe for 15% off your first order</span>
      <input type="email" placeholder="Enter your email" style="border:none;padding:0.7rem 1.3rem;border-radius:50px;font-size:0.85rem;outline:none;min-width:260px;" />
      <button style="background:#6b2d0f;color:white;border:none;padding:0.7rem 1.8rem;border-radius:50px;cursor:pointer;font-size:0.85rem;">Subscribe</button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '../stores/cart'
const cart = useCartStore()

const looks = [
  { img: '/hero9.jpg',  label: 'Natural Glow Look' },
  { img: '/hero10.jpg', label: 'Soft Petal Look' },
  { img: '/hero11.jpg', label: 'Bold & Beautiful Look' },
  { img: '/hero12.jpg', label: 'Signature Collection' },
]

const aboutImages = [
  '/hero13.jpg',
  '/hero21.jpg',
  '/hero15.png',
]

const featured = [
  { id:1, name:'Toasted Cinnamon Body Oil', price:38, image:'/hero8.jpg' },
  { id:2, name:'Crimson Rose Lip Stain',    price:24, image:'/hero6.jpg' },
  { id:3, name:'Melanin-Boost Serum',       price:52, image:'/hero7.jpg' },
]

const currentImage = ref(0)

function nextImage() {
  currentImage.value = (currentImage.value + 1) % aboutImages.length
}

function prevImage() {
  currentImage.value = (currentImage.value - 1 + aboutImages.length) % aboutImages.length
}

function addToCart(item) {
  cart.addItem(item)
}

let timer
onMounted(() => {
  timer = setInterval(() => {
    nextImage()
  }, 3000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.look-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  object-position: top;
  border-radius: 8px;
  margin-bottom: 0.8rem;
  display: block;
  transition: transform 0.3s ease;
}
.look-img:hover {
  transform: scale(1.05) rotate(1.5deg);
}
.slider-img {
  width: 100%;
  height: 750px;
  object-fit: cover;
  object-position: top;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>