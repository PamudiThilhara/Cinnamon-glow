<template>
  <div style="width:100%;overflow-x:hidden;margin:0;padding:0;">
    <div style="background:#c9a84c;color:#3d1f0a;text-align:center;padding:0.7rem;font-size:0.8rem;letter-spacing:0.2em;text-transform:uppercase;width:100%;font-weight:600;">✨ CELEBRATING YOUR RADIANCE — FREE SHIPPING OVER $50 ✨</div>
    <Navbar @toggle-cart="cartOpen = !cartOpen" />
    <CartDrawer :open="cartOpen" @close="cartOpen = false" />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import CartDrawer from './components/CartDrawer.vue'
import Footer from './components/Footer.vue'
const cartOpen = ref(false)
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 100%; overflow-x: hidden; }
body { font-family: 'DM Sans', sans-serif; background: #fdf8f3; color: #3d1f0a; }
:root {
  --brown: #6b2d0f;
  --cinnamon: #8b4513;
  --warm: #c17f3a;
  --cream: #fdf8f3;
  --light: #f5ede3;
  --gold: #c9a84c;
}
</style>