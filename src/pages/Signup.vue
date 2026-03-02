<template>
  <div class="min-h-screen flex items-center justify-center bg-rose-50">
    <div class="bg-white p-8 rounded-2xl shadow w-full max-w-md">
      <h2 class="text-2xl font-bold text-rose-500 mb-6">Create Account ✨</h2>
      <input v-model="email" type="email" placeholder="Email"
        class="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-rose-300" />
      <input v-model="password" type="password" placeholder="Password"
        class="w-full border rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-rose-300" />
      <button @click="handleSignup"
        class="w-full bg-rose-500 text-white py-2 rounded-full hover:bg-rose-600">Sign Up</button>
      <p class="text-center text-sm text-gray-500 mt-4">
        Have an account? <RouterLink to="/login" class="text-rose-500">Login</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
const email = ref(''), password = ref('')
const auth = useAuthStore(), router = useRouter()
function handleSignup() {
  auth.signup(email.value, password.value)
  router.push('/')
}
</script>