<template>
  <div v-if="open" class="fixed inset-0 z-50 flex justify-end">
    <div class="bg-black/40 flex-1" @click="$emit('close')"></div>
    <div class="bg-white w-80 p-6 flex flex-col shadow-xl">
      <h2 class="text-xl font-bold mb-4">Your Cart 🛒</h2>
      <div v-if="cart.items.length === 0" class="text-gray-500">Your cart is empty.</div>
      <div v-for="item in cart.items" :key="item.id" class="flex justify-between items-center mb-3">
        <div>
          <p class="font-medium">{{ item.name }}</p>
          <p class="text-sm text-gray-500">x{{ item.qty }} — ${{ (item.price * item.qty).toFixed(2) }}</p>
        </div>
        <button @click="cart.removeItem(item.id)" class="text-red-400 hover:text-red-600">✕</button>
      </div>
      <div class="mt-auto border-t pt-4">
        <p class="font-bold text-lg">Total: ${{ cart.total.toFixed(2) }}</p>
        <RouterLink to="/checkout" @click="$emit('close')"
          class="block mt-3 bg-rose-500 text-white text-center py-2 rounded-full hover:bg-rose-600">
          Checkout
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
defineProps({ open: Boolean })
defineEmits(['close'])
</script>