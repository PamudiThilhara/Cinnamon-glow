<template>
  <div style="max-width:680px;margin:0 auto;padding:4rem 2rem;">
    <h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:var(--brown);margin-bottom:2rem;">Checkout</h2>

    <div style="background:white;border-radius:8px;box-shadow:0 2px 16px rgba(107,45,15,0.08);padding:2.5rem;margin-bottom:1.5rem;">
      <h3 style="font-family:'Playfair Display',serif;color:var(--brown);margin-bottom:1.5rem;font-size:1.4rem;">Order Summary</h3>
      <div v-for="item in cart.items" :key="item.id" style="display:flex;justify-content:space-between;padding:0.7rem 0;color:#555;font-size:0.9rem;border-bottom:1px solid #f0e4d7;">
        <span>{{ item.name }} x{{ item.qty }}</span>
        <span>${{ (item.price * item.qty).toFixed(2) }}</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-weight:700;color:var(--brown);font-size:1.1rem;padding-top:1rem;margin-top:0.5rem;">
        <span>Total</span><span>${{ cart.total.toFixed(2) }}</span>
      </div>
    </div>

    <div style="background:white;border-radius:8px;box-shadow:0 2px 16px rgba(107,45,15,0.08);padding:2.5rem;margin-bottom:1.5rem;">
      <h3 style="font-family:'Playfair Display',serif;color:var(--brown);margin-bottom:1.5rem;font-size:1.4rem;">Shipping Details</h3>
      <input placeholder="Full name" style="width:100%;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
      <input placeholder="Address" style="width:100%;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
      <div style="display:flex;gap:1rem;">
        <input placeholder="City" style="flex:1;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
        <input placeholder="Postal code" style="flex:1;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
      </div>
    </div>

    <div style="background:white;border-radius:8px;box-shadow:0 2px 16px rgba(107,45,15,0.08);padding:2.5rem;">
      <h3 style="font-family:'Playfair Display',serif;color:var(--brown);margin-bottom:1.5rem;font-size:1.4rem;">Payment Details</h3>
      <input placeholder="Name on card" style="width:100%;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
      <input placeholder="Card number" style="width:100%;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
      <div style="display:flex;gap:1rem;">
        <input placeholder="MM/YY" style="flex:1;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
        <input placeholder="CVV" style="flex:1;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
      </div>
      <button @click="placeOrder" style="width:100%;background:var(--brown);color:white;border:none;padding:1rem;font-size:0.9rem;cursor:pointer;letter-spacing:0.15em;text-transform:uppercase;margin-top:0.5rem;">Place Order</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'
const cart = useCartStore()
const router = useRouter()
function placeOrder() {
  cart.clearCart()
  alert('🎉 Order placed! Thank you for shopping with Cinnamon Glow!')
  router.push('/')
}
</script>
```

---

Now copy your photos to the **`public`** folder:
```
public/
├── hero1.jpg  ← your hero1.png renamed
├── hero2.jpg  ← your hero2.png renamed  
└── hero3.jpg  ← your hero3.png renamed