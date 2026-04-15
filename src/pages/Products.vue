<template>
  <div style="padding:5rem 3rem;max-width:1200px;margin:0 auto;">
    <h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:var(--brown);text-align:center;margin-bottom:0.5rem;">Shop All Products</h2>
    <p style="text-align:center;color:#999;margin-bottom:2.5rem;">Beauty crafted for every shade of radiance</p>

    <!-- Category Filter -->
    <div style="display:flex;gap:0.6rem;justify-content:center;margin-bottom:2.5rem;flex-wrap:wrap;">
      <button v-for="cat in categories" :key="cat"
        @click="changeCategory(cat)"
        :style="active===cat ? 'background:var(--brown);color:white;' : 'background:transparent;color:var(--brown);'"
        style="border:1px solid var(--brown);border-radius:50px;padding:0.45rem 1.3rem;font-size:0.82rem;cursor:pointer;transition:all 0.2s;">
        {{ cat }}
      </button>
    </div>

    <!-- Loading -->
    <div v-if="loading" style="display:flex;justify-content:center;align-items:center;min-height:300px;flex-direction:column;gap:1rem;">
      <div class="loader"></div>
      <p style="color:#c17f3a;font-size:0.9rem;letter-spacing:0.08em;">Loading products...</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" style="text-align:center;padding:4rem;color:#c17f3a;">
      <p style="font-size:1.1rem;margin-bottom:1rem;">⚠ Could not load products.</p>
      <button @click="fetchProducts" style="background:var(--brown);color:white;border:none;border-radius:50px;padding:0.6rem 1.5rem;cursor:pointer;font-size:0.85rem;">Try Again</button>
    </div>

    <!-- Products Grid -->
    <div v-else style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1.5rem;">
      <div
        v-for="p in products" :key="p.id"
        class="product-card"
        style="background:white;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(107,45,15,0.08);transition:transform 0.25s,box-shadow 0.25s;"
        @mouseenter="e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(107,45,15,0.15)' }"
        @mouseleave="e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 16px rgba(107,45,15,0.08)' }"
      >
        <div style="position:relative;overflow:hidden;">
          <img
            :src="p.thumbnail"
            :alt="p.title"
            style="width:100%;height:230px;display:block;object-fit:cover;object-position:center;transition:transform 0.4s;"
            @mouseenter="e => e.target.style.transform='scale(1.05)'"
            @mouseleave="e => e.target.style.transform='scale(1)'"
          />
          <!-- Discount badge -->
          <div v-if="p.discountPercentage > 10"
            style="position:absolute;top:10px;left:10px;background:#6b2d0f;color:white;font-size:0.65rem;font-weight:700;letter-spacing:0.06em;padding:0.25rem 0.6rem;border-radius:50px;text-transform:uppercase;">
            -{{ Math.round(p.discountPercentage) }}% OFF
          </div>
          <!-- Rating badge -->
          <div style="position:absolute;top:10px;right:10px;background:rgba(253,248,243,0.92);color:#6b2d0f;font-size:0.7rem;font-weight:600;padding:0.25rem 0.6rem;border-radius:50px;display:flex;align-items:center;gap:3px;">
            ★ {{ p.rating }}
          </div>
        </div>

        <div style="padding:1.3rem;">
          <div style="font-size:0.68rem;color:var(--warm);text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.4rem;">{{ p.category }}</div>
          <div style="font-family:'Playfair Display',serif;font-size:1rem;color:var(--brown);margin-bottom:0.4rem;line-height:1.3;">{{ p.title }}</div>
          <p style="font-size:0.78rem;color:#999;line-height:1.5;margin-bottom:1rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">{{ p.description }}</p>

          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <span style="font-weight:700;color:var(--cinnamon);font-size:1.05rem;">${{ p.price }}</span>
              <span v-if="p.discountPercentage > 0" style="font-size:0.72rem;color:#bbb;text-decoration:line-through;margin-left:6px;">
                ${{ Math.round(p.price / (1 - p.discountPercentage / 100)) }}
              </span>
            </div>
            <button
              @click="cart.addItem({ id: p.id, name: p.title, price: p.price, image: p.thumbnail })"
              style="background:var(--brown);color:white;border:none;border-radius:50px;padding:0.45rem 1.1rem;font-size:0.8rem;cursor:pointer;transition:background 0.2s;"
              @mouseenter="e => e.target.style.background='#8b4513'"
              @mouseleave="e => e.target.style.background='var(--brown)'"
            >Add to Cart</button>
          </div>

          <!-- Stock indicator -->
          <div style="margin-top:0.75rem;display:flex;align-items:center;gap:0.4rem;">
            <div :style="`width:8px;height:8px;border-radius:50%;background:${p.stock > 10 ? '#4caf50' : p.stock > 0 ? '#ff9800' : '#f44336'}`"></div>
            <span style="font-size:0.7rem;color:#aaa;">
              {{ p.stock > 10 ? 'In Stock' : p.stock > 0 ? `Only ${p.stock} left` : 'Out of Stock' }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="!loading && !error && total > limit" style="display:flex;justify-content:center;align-items:center;gap:1rem;margin-top:3rem;">
      <button
        @click="prevPage"
        :disabled="skip === 0"
        style="border:1px solid var(--brown);border-radius:50px;padding:0.5rem 1.3rem;font-size:0.82rem;cursor:pointer;background:transparent;color:var(--brown);transition:all 0.2s;"
        :style="skip === 0 ? 'opacity:0.4;cursor:not-allowed;' : ''"
      >← Prev</button>
      <span style="font-size:0.82rem;color:#999;">Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="skip + limit >= total"
        style="border:1px solid var(--brown);border-radius:50px;padding:0.5rem 1.3rem;font-size:0.82rem;cursor:pointer;background:var(--brown);color:white;transition:all 0.2s;"
        :style="skip + limit >= total ? 'opacity:0.4;cursor:not-allowed;' : ''"
      >Next →</button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '../stores/cart'
const cart = useCartStore()

const categories = ['beauty', 'fragrances', 'skincare']
const active     = ref('beauty')
const products   = ref([])
const loading    = ref(false)
const error      = ref(false)
const total      = ref(0)
const skip       = ref(0)
const limit      = ref(12)

const currentPage = computed(() => Math.floor(skip.value / limit.value) + 1)
const totalPages  = computed(() => Math.ceil(total.value / limit.value))

async function fetchProducts() {
  loading.value = true
  error.value   = false
  try {
    let url = `https://dummyjson.com/products/category/${active.value}?limit=${limit.value}&skip=${skip.value}`
    const res  = await fetch(url)
    const data = await res.json()
    products.value = data.products
    total.value    = data.total
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}

function changeCategory(cat) {
  active.value = cat
  skip.value   = 0
  fetchProducts()
}

function nextPage() {
  skip.value += limit.value
  fetchProducts()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function prevPage() {
  skip.value = Math.max(0, skip.value - limit.value)
  fetchProducts()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(fetchProducts)
</script>

<style scoped>
.loader {
  width: 40px; height: 40px;
  border: 3px solid #f5ede3;
  border-top-color: #6b2d0f;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>