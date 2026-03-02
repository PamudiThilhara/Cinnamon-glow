import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] }),
  getters: {
    total: (state) =>
      state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    count: (state) =>
      state.items.reduce((sum, i) => sum + i.qty, 0),
  },
  actions: {
    addItem(product) {
      const existing = this.items.find(i => i.id === product.id)
      if (existing) existing.qty++
      else this.items.push({ ...product, qty: 1 })
    },
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id)
    },
    clearCart() {
      this.items = []
    },
  },
})