<template>
  <nav class="bg-white shadow px-6 py-4 flex justify-between items-center">
    <RouterLink to="/" class="text-2xl font-bold text-rose-500">💄 GlowShop</RouterLink>
    <div class="flex gap-4 items-center text-gray-700">
      <RouterLink to="/products" class="hover:text-rose-500">Products</RouterLink>
      <RouterLink v-if="!auth.isLoggedIn" to="/login" class="hover:text-rose-500">Login</RouterLink>
      <button v-else @click="auth.logout" class="hover:text-rose-500">Logout</button>
      <button @click="$emit('toggle-cart')" class="relative">
        🛒
        <span v-if="cart.count > 0"
          class="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {{ cart.count }}
        </span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/auth'
const cart = useCartStore()
const auth = useAuthStore()
defineEmits(['toggle-cart'])
</script>