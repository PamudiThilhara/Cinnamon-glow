<template>
  <div v-if="open" style="position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:200;display:flex;justify-content:flex-end;" @click="$emit('close')">
    <div style="background:var(--cream);width:370px;padding:2rem;display:flex;flex-direction:column;box-shadow:-4px 0 32px rgba(0,0,0,0.18);" @click.stop>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;border-bottom:1px solid #e8d5c4;padding-bottom:1rem;">
        <h2 style="font-family:'Playfair Display',serif;font-size:1.4rem;color:var(--brown);">Your Cart</h2>
        <button @click="$emit('close')" style="background:none;border:none;font-size:1.4rem;cursor:pointer;color:var(--brown);">✕</button>
      </div>

      <div style="flex:1;overflow-y:auto;">
        <p v-if="cart.items.length === 0" style="color:#aaa;text-align:center;padding:3rem 0;">Your cart is empty</p>
        <div v-for="item in cart.items" :key="item.id" style="display:flex;justify-content:space-between;align-items:center;padding:0.9rem 0;border-bottom:1px solid #f0e4d7;">
          <div>
            <div style="font-size:0.9rem;color:var(--brown);font-weight:500;">{{ item.name }}</div>
            <div style="font-size:0.82rem;color:#999;">x{{ item.qty }} — ${{ (item.price * item.qty).toFixed(2) }}</div>
          </div>
          <button @click="cart.removeItem(item.id)" style="background:none;border:none;color:var(--warm);cursor:pointer;font-size:1.1rem;">✕</button>
        </div>
      </div>

      <div style="margin-top:auto;padding-top:1.2rem;border-top:2px solid #e8d5c4;">
        <div style="display:flex;justify-content:space-between;font-weight:700;font-size:1.15rem;margin-bottom:1.2rem;color:var(--brown);">
          <span>Total</span><span>${{ cart.total.toFixed(2) }}</span>
        </div>
        <RouterLink to="/checkout" @click="$emit('close')" style="display:block;width:100%;background:var(--brown);color:white;border:none;padding:1rem;font-size:0.9rem;cursor:pointer;letter-spacing:0.15em;text-transform:uppercase;text-align:center;text-decoration:none;">
          Proceed to Checkout
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
defineProps(['open'])
defineEmits(['close'])
</script>