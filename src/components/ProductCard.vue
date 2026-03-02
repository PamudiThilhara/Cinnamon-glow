<template>
  <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col">
    <img :src="product.image" :alt="product.name" class="rounded-xl h-48 object-cover mb-3" />
    <h3 class="font-semibold text-gray-800">{{ product.name }}</h3>
    <p class="text-gray-500 text-sm mb-2">{{ product.category }}</p>
    <div class="flex justify-between items-center mt-auto">
      <span class="text-rose-500 font-bold">${{ product.price }}</span>
      <button @click="cart.addItem(product)"
        class="bg-rose-500 text-white px-3 py-1 rounded-full text-sm hover:bg-rose-600">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
defineProps({ product: Object })
</script>