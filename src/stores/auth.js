import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null')
  }),
  getters: {
    isLoggedIn: (state) => !!state.user
  },
  actions: {
    login(email, password) {
      this.user = { email }
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    signup(email, password) {
      this.user = { email }
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    }
  }
})