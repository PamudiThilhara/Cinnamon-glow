<template>
  <Navbar @toggle-cart="cartOpen = !cartOpen" />
  <CartDrawer :open="cartOpen" @close="cartOpen = false" />
  <RouterView />
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import CartDrawer from './components/CartDrawer.vue'
const cartOpen = ref(false)
</script>