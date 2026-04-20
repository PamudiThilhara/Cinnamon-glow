<template>
  <div class="login-page">

    <!-- LEFT - decorative panel -->
    <div class="left-panel">
      <img src="/hero3.jpg" class="left-img" alt="" />
      <div class="left-overlay"></div>
      <div class="left-text">
        <p class="left-eyebrow">✦ Cinnaman Glow</p>
        <h2>Your Beauty<br/><em>Ritual Awaits</em></h2>
        <p class="left-desc">Sign in to explore your personalized beauty collection.</p>
      </div>
    </div>

    <!-- RIGHT - form -->
    <div class="right-panel">

      <div class="form-wrap">

        <div class="form-logo">
          <span>Cinnaman</span><em>Glow</em>
        </div>

        <h1 class="form-heading">Sign In</h1>
        <p class="form-sub">Welcome back, gorgeous ✦</p>

        <!-- Social -->
        <div class="social-btns">
          <button class="s-btn" @click="handleSocial">
            <svg width="17" height="17" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
              <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
              <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
              <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
            </svg>
            Continue with Google
          </button>
          <button class="s-btn" @click="handleSocial">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.273h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z"/>
            </svg>
            Continue with Facebook
          </button>
        </div>

        <div class="or-row"><span>or continue with email</span></div>

        <!-- Email -->
        <div class="field">
          <label>Email Address</label>
          <input
            v-model="email" type="email"
            placeholder="you@example.com"
            :class="{ 'is-error': errors.email }"
            @blur="validateEmail" @input="errors.email = ''"
          />
          <span class="err-msg" v-if="errors.email">{{ errors.email }}</span>
        </div>

        <!-- Password -->
        <div class="field">
          <div class="label-row">
            <label>Password</label>
            <a href="#" class="forgot-link">Forgot password?</a>
          </div>
          <div class="pw-field" :class="{ 'is-error': errors.password }">
            <input
              v-model="password"
              :type="showPass ? 'text' : 'password'"
              placeholder="Enter your password"
              @blur="validatePassword" @input="errors.password = ''"
            />
            <button type="button" class="eye" @click="showPass = !showPass">
              <span v-if="showPass">🙈</span><span v-else>👁️</span>
            </button>
          </div>
          <span class="err-msg" v-if="errors.password">{{ errors.password }}</span>
        </div>

        <!-- CTA -->
        <button class="cta-btn" @click="handleLogin" :disabled="isLoading">
          <span v-if="!isLoading">Sign In →</span>
          <span v-else class="spin"></span>
        </button>

        <p class="success-msg" v-if="loginSuccess">✦ Welcome back! Redirecting you now...</p>

        <p class="register-row">
          New to Cinnaman Glow?
          <RouterLink to="/signup">Create account</RouterLink>
        </p>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const email    = ref('')
const password = ref('')
const showPass = ref(false)
const isLoading   = ref(false)
const loginSuccess = ref(false)
const errors = ref({ email: '', password: '' })
const auth   = useAuthStore()
const router = useRouter()

function validateEmail() {
  if (!email.value) { errors.value.email = 'Please enter your email.'; return }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { errors.value.email = 'Enter a valid email address.'; return }
  errors.value.email = ''
}
function validatePassword() {
  if (!password.value) { errors.value.password = 'Please enter your password.'; return }
  if (password.value.length < 6) { errors.value.password = 'Password must be at least 6 characters.'; return }
  errors.value.password = ''
}
async function handleLogin() {
  validateEmail(); validatePassword()
  if (errors.value.email || errors.value.password) return
  isLoading.value = true
  await new Promise(r => setTimeout(r, 1200))
  isLoading.value = false
  loginSuccess.value = true
  auth.login(email.value, password.value)
  setTimeout(() => router.push('/'), 1000)
}
function handleSocial() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false; loginSuccess.value = true
    setTimeout(() => router.push('/'), 1000)
  }, 1200)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

/* ── CSS VARIABLES - Light Mode ── */
.login-page {
  --bg-page:        #fdf8f3;
  --bg-input:       #ffffff;
  --bg-social:      #ffffff;
  --bg-social-hover:#fff9f4;
  --text-heading:   #3d1f0a;
  --text-body:      #3d1f0a;
  --text-muted:     #b8926a;
  --text-label:     #6b2d0f;
  --text-sub:       #c17f3a;
  --text-placeholder: #c9a496;
  --border-input:   #e2c9b3;
  --border-social:  #e8d5c4;
  --border-divider: #d4b896;
  --text-divider:   #b8926a;
  --link-color:     #6b2d0f;
  --link-forgot:    #c17f3a;
  --link-forgot-hover: #8b4513;
  --success-color:  #8b4513;

  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'DM Sans', sans-serif;
  background: var(--bg-page);
}

/* ── CSS VARIABLES - Dark Mode ── */
@media (prefers-color-scheme: dark) {
  .login-page {
    --bg-page:        #1a0f0a;
    --bg-input:       #2a1810;
    --bg-social:      #2a1810;
    --bg-social-hover:#3a2318;
    --text-heading:   #f0e0d0;
    --text-body:      #f0e0d0;
    --text-muted:     #7a5a48;
    --text-label:     #c9a84c;
    --text-sub:       #c17f3a;
    --text-placeholder: #7a5a48;
    --border-input:   #4a2e1e;
    --border-social:  #4a2e1e;
    --border-divider: #4a2e1e;
    --text-divider:   #7a5a48;
    --link-color:     #c9a84c;
    --link-forgot:    #c9a84c;
    --link-forgot-hover: #f0d080;
    --success-color:  #c9a84c;
  }
}

/* ── LEFT PANEL ── */
.left-panel {
  position: relative;
  overflow: hidden;
}
.left-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}
.left-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(61,31,10,0.25) 0%,
    rgba(61,31,10,0.65) 60%,
    rgba(61,31,10,0.88) 100%
  );
}
.left-text {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 3rem;
}
.left-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #c9a84c;
  margin-bottom: 1rem;
  font-weight: 600;
}
.left-text h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 3.5vw, 3rem);
  color: #fdf8f3;
  line-height: 1.15;
  margin-bottom: 1rem;
  font-weight: 500;
}
.left-text h2 em {
  font-style: italic;
  color: #c9a84c;
}
.left-desc {
  color: rgba(253,248,243,0.65);
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 320px;
}

/* ── RIGHT PANEL ── */
.right-panel {
  background: var(--bg-page);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  position: relative;
  transition: background 0.3s ease;
}

/* subtle warm texture strip on top */
.right-panel::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(to right, #6b2d0f, #c9a84c, #c17f3a, #6b2d0f);
}

.form-wrap {
  width: 100%;
  max-width: 400px;
  animation: slideIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Logo */
.form-logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: var(--text-heading);
  margin-bottom: 2.5rem;
  font-weight: 700;
  transition: color 0.3s;
}
.form-logo em { font-style: italic; color: #8b4513; }

/* Heading */
.form-heading {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: var(--text-heading);
  font-weight: 700;
  margin-bottom: 0.3rem;
  letter-spacing: -0.01em;
  transition: color 0.3s;
}
.form-sub {
  color: var(--text-sub);
  font-size: 0.88rem;
  margin-bottom: 2rem;
  font-weight: 400;
}

/* Social */
.social-btns {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}
.s-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  background: var(--bg-social);
  border: 1.5px solid var(--border-social);
  border-radius: 12px;
  color: var(--text-body);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;
}
.s-btn:hover {
  border-color: #c9a84c;
  background: var(--bg-social-hover);
  box-shadow: 0 4px 16px rgba(107,45,15,0.1);
  transform: translateY(-1px);
}

/* Or divider */
.or-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}
.or-row::before, .or-row::after {
  content: ''; flex: 1;
  height: 1px;
  background: var(--border-divider);
}
.or-row span {
  font-size: 0.72rem;
  color: var(--text-divider);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
}

/* Fields */
.field { margin-bottom: 1.1rem; }

.field label,
.label-row label {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-label);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.45rem;
}

.field input {
  width: 100%;
  background: var(--bg-input);
  border: 1.5px solid var(--border-input);
  border-radius: 12px;
  padding: 0.8rem 1.1rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.92rem;
  color: var(--text-body);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.3s, color 0.3s;
}
.field input::placeholder { color: var(--text-placeholder); }
.field input:focus {
  border-color: #c9a84c;
  box-shadow: 0 0 0 4px rgba(201,168,76,0.1);
}
.field input.is-error { border-color: #d4614f; }

/* Password */
.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.45rem;
}
.forgot-link {
  font-size: 0.75rem;
  color: var(--link-forgot);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.forgot-link:hover { color: var(--link-forgot-hover); }

.pw-field {
  display: flex;
  background: var(--bg-input);
  border: 1.5px solid var(--border-input);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.3s;
}
.pw-field:focus-within {
  border-color: #c9a84c;
  box-shadow: 0 0 0 4px rgba(201,168,76,0.1);
}
.pw-field.is-error { border-color: #d4614f; }
.pw-field input {
  flex: 1; border: none; outline: none;
  padding: 0.8rem 1.1rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.92rem;
  color: var(--text-body);
  background: transparent;
}
.pw-field input::placeholder { color: var(--text-placeholder); }
.eye {
  background: none; border: none;
  padding: 0 0.9rem;
  cursor: pointer; font-size: 0.88rem;
  color: var(--text-muted);
  transition: color 0.2s;
  display: flex; align-items: center;
}
.eye:hover { color: var(--text-label); }

.err-msg {
  display: block;
  font-size: 0.73rem;
  color: #d4614f;
  margin-top: 0.35rem;
  padding-left: 4px;
}

/* CTA button */
.cta-btn {
  width: 100%;
  margin-top: 1rem;
  padding: 0.95rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #6b2d0f 0%, #8b4513 50%, #c17f3a 100%);
  color: #fdf8f3;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  margin-bottom: 1.2rem;
  box-shadow: 0 4px 20px rgba(107,45,15,0.2);
}
.cta-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(107,45,15,0.3);
}
.cta-btn:active:not(:disabled) { transform: translateY(0); }
.cta-btn:disabled { opacity: 0.65; cursor: not-allowed; }

.spin {
  width: 18px; height: 18px;
  border: 2px solid rgba(253,248,243,0.3);
  border-top-color: #fdf8f3;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  display: inline-block;
}
@keyframes spin { to { transform: rotate(360deg); } }

.success-msg {
  text-align: center;
  color: var(--success-color);
  font-size: 0.83rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
  letter-spacing: 0.04em;
}

.register-row {
  text-align: center;
  font-size: 0.83rem;
  color: var(--text-muted);
}
.register-row a {
  color: var(--link-color);
  font-weight: 600;
  text-decoration: none;
  margin-left: 4px;
}
.register-row a:hover { text-decoration: underline; }

/* Responsive */
@media (max-width: 768px) {
  .login-page { grid-template-columns: 1fr; }
  .left-panel { display: none; }
}
</style>