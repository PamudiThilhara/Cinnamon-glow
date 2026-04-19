import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  function toggleDark() {
    isDark.value = !isDark.value
    const html = document.documentElement
    const body = document.body

    if (isDark.value) {
      html.setAttribute('data-theme', 'dark')
      body.style.cssText = 'background:#1a0a00 !important;color:#e8d5c4 !important;'
      // force all page sections dark
      document.querySelectorAll('div[style]').forEach(el => {
        if (el.style.background && (
          el.style.background.includes('#fdf8f3') ||
          el.style.background.includes('#f5ede3') ||
          el.style.background.includes('white') ||
          el.style.background.includes('#ffffff')
        )) {
          el.dataset.origBg = el.style.background
          el.style.background = el.style.background
            .replace('#fdf8f3','#1a0a00')
            .replace('#f5ede3','#2a1200')
            .replace('white','#2a1200')
            .replace('#ffffff','#2a1200')
        }
        if (el.style.color && el.style.color.includes('#3d1f0a')) {
          el.dataset.origColor = el.style.color
          el.style.color = '#e8d5c4'
        }
      })
    } else {
      html.setAttribute('data-theme', 'light')
      body.style.cssText = 'background:#fdf8f3;color:#3d1f0a;'
      // restore all page sections
      document.querySelectorAll('div[style]').forEach(el => {
        if (el.dataset.origBg) {
          el.style.background = el.dataset.origBg
          delete el.dataset.origBg
        }
        if (el.dataset.origColor) {
          el.style.color = el.dataset.origColor
          delete el.dataset.origColor
        }
      })
    }
  }

  return { isDark, toggleDark }
})