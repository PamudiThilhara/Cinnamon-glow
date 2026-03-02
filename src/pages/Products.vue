<template>
  <div class="max-w-6xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">All Products</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'

const products = [
  { id: 1, name: 'Velvet Lipstick', category: 'Lips', price: 18, image: 'https://picsum.photos/seed/lip/400/300' },
  { id: 2, name: 'Glow Foundation', category: 'Face', price: 35, image: 'https://picsum.photos/seed/foundation/400/300' },
  { id: 3, name: 'Smoky Eyeshadow', category: 'Eyes', price: 22, image: 'https://picsum.photos/seed/eye/400/300' },
  { id: 4, name: 'Blush Palette', category: 'Face', price: 28, image: 'https://picsum.photos/seed/blush/400/300' },
  { id: 5, name: 'Mascara Pro', category: 'Eyes', price: 15, image: 'https://picsum.photos/seed/mascara/400/300' },
  { id: 6, name: 'Highlighter Stick', category: 'Face', price: 20, image: 'https://picsum.photos/seed/highlight/400/300' },
  { id: 7, name: 'Nude Lip Gloss', category: 'Lips', price: 12, image: 'https://picsum.photos/seed/gloss/400/300' },
  { id: 8, name: 'Brow Pencil', category: 'Brows', price: 10, image: 'https://picsum.photos/seed/brow/400/300' },
]
</script>