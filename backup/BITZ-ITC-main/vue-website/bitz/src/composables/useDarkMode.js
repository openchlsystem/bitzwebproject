import { ref, onMounted, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)
  
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
  }
  
  const applyTheme = () => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement
      
      if (isDark.value) {
        root.classList.add('dark')
        root.style.setProperty('--bg-primary', '#0f172a')
        root.style.setProperty('--bg-secondary', '#1e293b')
        root.style.setProperty('--bg-tertiary', '#334155')
        root.style.setProperty('--text-primary', '#f8fafc')
        root.style.setProperty('--text-secondary', '#cbd5e1')
        root.style.setProperty('--text-muted', '#94a3b8')
        root.style.setProperty('--border-color', '#475569')
        root.style.setProperty('--card-bg', '#1e293b')
        root.style.setProperty('--input-bg', '#334155')
        localStorage.setItem('theme', 'dark')
      } else {
        root.classList.remove('dark')
        root.style.setProperty('--bg-primary', '#ffffff')
        root.style.setProperty('--bg-secondary', '#f8fafc')
        root.style.setProperty('--bg-tertiary', '#f1f5f9')
        root.style.setProperty('--text-primary', '#0f172a')
        root.style.setProperty('--text-secondary', '#334155')
        root.style.setProperty('--text-muted', '#64748b')
        root.style.setProperty('--border-color', '#e2e8f0')
        root.style.setProperty('--card-bg', '#ffffff')
        root.style.setProperty('--input-bg', '#ffffff')
        localStorage.setItem('theme', 'light')
      }
    }
  }
  
  const initializeTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
      applyTheme()
    }
  }
  
  onMounted(() => {
    initializeTheme()
  })
  
  watch(isDark, applyTheme)
  
  return {
    isDark,
    toggleDarkMode,
    initializeTheme
  }
}
