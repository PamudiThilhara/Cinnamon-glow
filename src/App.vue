<template>
  <div :style="{
    background: theme.isDark ? '#1a0a00' : '#fdf8f3',
    color: theme.isDark ? '#e8d5c4' : '#3d1f0a',
    minHeight: '100vh',
    transition: 'background 0.4s ease, color 0.4s ease'
  }">
    <div :style="{background: theme.isDark ? '#1a0a00' : '#c9a84c', color: theme.isDark ? '#c9a84c' : '#3d1f0a', textAlign:'center', padding:'0.7rem', fontSize:'0.8rem', letterSpacing:'0.2em', textTransform:'uppercase', width:'100%'}">
      ✨ CELEBRATING YOUR RADIANCE — FREE SHIPPING OVER $50 ✨
    </div>
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
import { useThemeStore } from './stores/theme'
const cartOpen = ref(false)
const theme = useThemeStore()
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { width: 100%; overflow-x: hidden; }
body { font-family: 'DM Sans', sans-serif; }
</style>