<template>
  <div style="min-height:85vh;display:flex;align-items:center;justify-content:center;background:var(--light);">
    <div style="background:white;padding:3.5rem;border-radius:8px;box-shadow:0 4px 28px rgba(107,45,15,0.1);width:100%;max-width:440px;">
      <h2 style="font-family:'Playfair Display',serif;color:var(--brown);margin-bottom:0.4rem;font-size:2.2rem;">Join the Glow</h2>
      <p style="color:#999;margin-bottom:2rem;font-size:0.9rem;">Create your Cinnamon Glow account</p>
      <input v-model="name" type="text" placeholder="Full name" style="width:100%;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
      <input v-model="email" type="email" placeholder="Email address" style="width:100%;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
      <input v-model="password" type="password" placeholder="Password" style="width:100%;border:1px solid #e8d5c4;border-radius:4px;padding:0.85rem 1rem;margin-bottom:1rem;font-size:0.95rem;outline:none;background:var(--cream);" />
      <button @click="handleSignup" style="width:100%;background:var(--brown);color:white;border:none;padding:1rem;font-size:0.9rem;cursor:pointer;letter-spacing:0.15em;text-transform:uppercase;margin-top:0.5rem;">Create Account</button>
      <p style="text-align:center;margin-top:1.5rem;font-size:0.85rem;color:#999;">
        Have an account? <RouterLink to="/login" style="color:var(--brown);font-weight:500;">Sign in</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
const name = ref(''), email = ref(''), password = ref('')
const auth = useAuthStore(), router = useRouter()
function handleSignup() {
  auth.signup(email.value, password.value)
  router.push('/')
}
</script>