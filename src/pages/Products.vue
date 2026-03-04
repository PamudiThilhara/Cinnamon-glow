<template>
  <div style="padding:5rem 3rem;max-width:1200px;margin:0 auto;">
    <h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:var(--brown);text-align:center;margin-bottom:0.5rem;">Shop All Products</h2>
    <p style="text-align:center;color:#999;margin-bottom:2.5rem;">Beauty crafted for every shade of radiance</p>

    <div style="display:flex;gap:0.6rem;justify-content:center;margin-bottom:2.5rem;flex-wrap:wrap;">
      <button v-for="cat in categories" :key="cat"
        @click="active = cat"
        :style="active===cat ? 'background:var(--brown);color:white;' : 'background:transparent;color:var(--brown);'"
        style="border:1px solid var(--brown);border-radius:50px;padding:0.45rem 1.3rem;font-size:0.82rem;cursor:pointer;">
        {{ cat }}
      </button>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1.5rem;">
      <div v-for="p in filtered" :key="p.id" style="background:white;border-radius:8px;overflow:hidden;box-shadow:0 2px 16px rgba(107,45,15,0.08);">
        <img
          :src="p.image"
          :alt="p.name"
          style="width:100%;height:230px;display:block;object-fit:cover;object-position:center;"
        />
        <div style="padding:1.3rem;">
          <div style="font-size:0.7rem;color:var(--warm);text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.4rem;">{{ p.category }}</div>
          <div style="font-family:'Playfair Display',serif;font-size:1.05rem;color:var(--brown);margin-bottom:1rem;">{{ p.name }}</div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-weight:700;color:var(--cinnamon);">${{ p.price }}.00</span>
            <button @click="cart.addItem(p)" style="background:var(--brown);color:white;border:none;border-radius:50px;padding:0.45rem 1.1rem;font-size:0.8rem;cursor:pointer;">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '../stores/cart'
const cart = useCartStore()

const categories = ['All', 'Lips', 'Face', 'Eyes', 'Body']
const active = ref('All')

const products = [
  { id:1,  name:'Toasted Cinnamon Body Oil',  category:'Body', price:38, image:'/hero8.jpg' },
  { id:2,  name:'Crimson Rose Lip Stain',      category:'Lips', price:24, image:'/hero6.jpg' },
  { id:3,  name:'Melanin-Boost Serum',         category:'Face', price:52, image:'/hero7.jpg' },
  { id:4,  name:'Spiced Vanilla Blush',        category:'Face', price:28, image:'/hero9.jpg' },
  { id:5,  name:'Deep Brown Mascara',          category:'Eyes', price:18, image:'/hero25.png' },
  { id:6,  name:'Golden Hour Highlighter',     category:'Face', price:32, image:'/hero26.png' },
  { id:7,  name:'Berry Lip Gloss',             category:'Lips', price:16, image:'/hero27.png' },
  { id:8,  name:'Cinnamon Brow Pencil',        category:'Eyes', price:14, image:'/hero61.png' },
  { id:9,  name:'Rose Gold Eye Shadow',        category:'Eyes', price:26, image:'/hero29.png' },
  { id:10, name:'Warm Nude Foundation',        category:'Face', price:45, image:'/hero30.png' },
  { id:11, name:'Cinnamon Lip Liner',          category:'Lips', price:12, image:'/hero60.png' },
  { id:12, name:'Glow Body Butter',            category:'Body', price:34, image:'/hero33.png' },
]

const filtered = computed(() =>
  active.value === 'All' ? products : products.filter(p => p.category === active.value)
)
</script>