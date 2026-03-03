<template>
  <nav style="display:flex;justify-content:space-between;align-items:center;padding:0.8rem 3rem;background:#6b2d0f;position:sticky;top:0;z-index:100;width:100%;">
    
    <!-- LEFT - empty for balance -->
    <div style="flex:1;"></div>

    <!-- CENTER - LOGO -->
    <RouterLink to="/" style="text-decoration:none;flex:1;display:flex;justify-content:center;">
      <img src="/hero66.png" style="height:65px;object-fit:contain;" alt="Cinnamon Glow Logo" />
    </RouterLink>

    <!-- RIGHT - NAV LINKS -->
    <div style="flex:1;display:flex;justify-content:flex-end;gap:2rem;align-items:center;">
      <RouterLink to="/products" style="color:#e8d5c4;text-decoration:none;font-size:0.85rem;letter-spacing:0.1em;text-transform:uppercase;">Shop</RouterLink>
      <RouterLink to="/" style="color:#e8d5c4;text-decoration:none;font-size:0.85rem;letter-spacing:0.1em;text-transform:uppercase;">About</RouterLink>
      <RouterLink to="/login" style="color:#e8d5c4;text-decoration:none;font-size:0.85rem;letter-spacing:0.1em;text-transform:uppercase;">Account</RouterLink>
      <button @click="$emit('toggle-cart')" style="background:transparent;color:#e8d5c4;border:1px solid #e8d5c4;border-radius:50px;padding:0.5rem 1.2rem;cursor:pointer;font-size:0.85rem;display:flex;align-items:center;gap:0.5rem;">
        🛒 Cart
        <span style="background:#c9a84c;color:#6b2d0f;border-radius:50%;width:20px;height:20px;font-size:0.75rem;display:inline-flex;align-items:center;justify-content:center;font-weight:700;">{{ cart.count }}</span>
      </button>
    </div>

  </nav>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
defineEmits(['toggle-cart'])
</script>