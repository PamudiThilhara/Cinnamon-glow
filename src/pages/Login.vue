<template>
  <div style="min-height:100vh;display:flex;align-items:stretch;">

    <!-- LEFT - IMAGE SIDE -->
    <div style="flex:1;position:relative;overflow:hidden;display:none;" class="login-left">
      <img src="/hero3.jpg" style="width:100%;height:100%;object-fit:cover;object-position:top;" alt="Login" />
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(61,31,10,0.3),rgba(61,31,10,0.7));"></div>
      <div style="position:absolute;bottom:3rem;left:3rem;color:white;">
        <h2 style="font-family:'Playfair Display',serif;font-size:2.5rem;font-style:italic;color:#c9a84c;margin-bottom:0.5rem;">Welcome Back</h2>
        <p style="color:#e8d5c4;font-size:1rem;line-height:1.7;">Your glow awaits.<br/>Sign in to continue your journey.</p>
      </div>
    </div>

    <!-- RIGHT - FORM SIDE -->
    <div style="flex:1;background:#fdf8f3;display:flex;align-items:center;justify-content:center;padding:3rem 2rem;position:relative;">

      <!-- DECORATIVE TOP -->
      <div style="position:absolute;top:0;left:0;right:0;height:6px;background:linear-gradient(to right,#6b2d0f,#c9a84c,#6b2d0f);"></div>

      <div style="width:100%;max-width:420px;">

        <!-- LOGO -->
        <!-- <div style="text-align:center;margin-bottom:2.5rem;">
          <img src="/hero66.png" style="height:80px;object-fit:contain;" alt="Logo" />
        </div> -->

        <!-- TITLE -->
        <h2 style="font-family:'Playfair Display',serif;font-size:2rem;color:#6b2d0f;margin-bottom:0.3rem;text-align:center;">Welcome Back</h2>
        <p style="color:#999;margin-bottom:2.5rem;font-size:0.9rem;text-align:center;">Sign in to your Cinnamon Glow account</p>

        <!-- EMAIL -->
        <div style="margin-bottom:1.2rem;">
          <label style="display:block;font-size:0.8rem;color:#6b2d0f;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.5rem;">Email Address</label>
          <input v-model="email" type="email" placeholder="you@example.com"
            style="width:100%;border:1.5px solid #e8d5c4;border-radius:4px;padding:0.9rem 1rem;font-size:0.95rem;outline:none;background:white;transition:border 0.2s;"
            @focus="e => e.target.style.borderColor='#c9a84c'"
            @blur="e => e.target.style.borderColor='#e8d5c4'" />
        </div>

        <!-- PASSWORD -->
        <div style="margin-bottom:0.8rem;">
          <label style="display:block;font-size:0.8rem;color:#6b2d0f;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.5rem;">Password</label>
          <input v-model="password" type="password" placeholder="••••••••"
            style="width:100%;border:1.5px solid #e8d5c4;border-radius:4px;padding:0.9rem 1rem;font-size:0.95rem;outline:none;background:white;transition:border 0.2s;"
            @focus="e => e.target.style.borderColor='#c9a84c'"
            @blur="e => e.target.style.borderColor='#e8d5c4'" />
        </div>

        <!-- FORGOT -->
        <div style="text-align:right;margin-bottom:2rem;">
          <a href="#" style="font-size:0.82rem;color:#c17f3a;text-decoration:none;">Forgot password?</a>
        </div>

        <!-- SIGN IN BUTTON -->
        <button @click="handleLogin"
          style="width:100%;background:linear-gradient(135deg,#6b2d0f,#8b4513);color:white;border:none;padding:1rem;font-size:0.9rem;cursor:pointer;letter-spacing:0.2em;text-transform:uppercase;border-radius:4px;transition:opacity 0.2s;margin-bottom:1.5rem;">
          Sign In →
        </button>

        <!-- DIVIDER -->
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
          <div style="flex:1;height:1px;background:#e8d5c4;"></div>
          <span style="color:#999;font-size:0.8rem;">or</span>
          <div style="flex:1;height:1px;background:#e8d5c4;"></div>
        </div>

        <!-- CREATE ACCOUNT -->
        <p style="text-align:center;font-size:0.88rem;color:#999;">
          New here?
          <RouterLink to="/signup" style="color:#6b2d0f;font-weight:600;text-decoration:none;">Create an account →</RouterLink>
        </p>

      </div>

      <!-- DECORATIVE BOTTOM -->
      <div style="position:absolute;bottom:0;left:0;right:0;height:6px;background:linear-gradient(to right,#6b2d0f,#c9a84c,#6b2d0f);"></div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const auth = useAuthStore()
const router = useRouter()
function handleLogin() {
  auth.login(email.value, password.value)
  router.push('/')
}
</script>

<style scoped>
@media (min-width: 768px) {
  .login-left {
    display: block !important;
  }
}
</style>