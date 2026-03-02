<template>
  <div class="max-w-xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Checkout 💳</h2>
    <div class="bg-white rounded-2xl shadow p-6 mb-6">
      <h3 class="font-semibold text-lg mb-4">Order Summary</h3>
      <div v-for="item in cart.items" :key="item.id" class="flex justify-between text-gray-700 mb-2">
        <span>{{ item.name }} x{{ item.qty }}</span>
        <span>${{ (item.price * item.qty).toFixed(2) }}</span>
      </div>
      <div class="border-t pt-3 mt-3 font-bold text-rose-500 flex justify-between">
        <span>Total</span><span>${{ cart.total.toFixed(2) }}</span>
      </div>
    </div>
    <div class="bg-white rounded-2xl shadow p-6">
      <h3 class="font-semibold text-lg mb-4">Payment Details</h3>
      <input placeholder="Name on card" class="w-full border rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
      <input placeholder="Card number" class="w-full border rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-rose-300" />
      <div class="flex gap-3">
        <input placeholder="MM/YY" class="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
        <input placeholder="CVV" class="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" />
      </div>
      <button @click="placeOrder" class="w-full bg-rose-500 text-white py-3 rounded-full mt-5 hover:bg-rose-600">
        Place Order
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'
const cart = useCartStore(), router = useRouter()
function placeOrder() {
  alert('🎉 Order placed successfully!')
  cart.clearCart()
  router.push('/')
}
</script>