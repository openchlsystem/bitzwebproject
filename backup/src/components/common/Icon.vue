<template>
  <component :is="iconComponent" :size="size" :class="className" />
</template>

<script setup>
import { computed } from 'vue'
import * as LucideIcons from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 24
  },
  className: {
    type: String,
    default: ''
  }
})

const iconComponent = computed(() => {
  return LucideIcons[props.name] || LucideIcons.HelpCircle
})
</script>