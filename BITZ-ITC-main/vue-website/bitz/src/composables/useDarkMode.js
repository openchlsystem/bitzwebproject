import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
  }

  const applyTheme = () => {
    if (typeof window !== 'undefined') {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    isDark.value = savedTheme === 'dark'
    applyTheme()
  })

  watch(isDark, applyTheme)

  return {
    isDark,
    toggleDarkMode
  }
}