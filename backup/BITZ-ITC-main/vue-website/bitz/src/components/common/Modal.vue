<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <Icon v-if="icon && iconPosition === 'left'" :name="icon" :size="iconSize" />
    <span v-if="$slots.default"><slot /></span>
    <Icon v-if="icon && iconPosition === 'right'" :name="icon" :size="iconSize" />
    <div v-if="loading" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import Icon from './Icon.vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  tag: {
    type: String,
    default: 'button'
  },
  to: {
    type: [String, Object],
    default: null
  },
  href: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: null
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },
  iconSize: {
    type: Number,
    default: 16
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  ]

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  }

  // Variant classes
  const variantClasses = {
    primary: 'bg-[#1F1E5C] hover:bg-[#1F1E5C] text-white focus:ring-[#1F1E5C]',
    secondary: 'bg-[#1F1E5C] hover:bg-[#1F1E5C] text-white focus:ring-[#1F1E5C]',
    outline: 'border-2 border-[#1F1E5C] text-[#1F1E5C] hover:bg-[#1F1E5C] hover:text-white focus:ring-[#1F1E5C]',
    ghost: 'text-[#1F1E5C] hover:bg-[#1F1E5C] hover:text-white focus:ring-[#1F1E5C]',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
  }

  const classes = [
    ...baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant]
  ]

  if (props.fullWidth) {
    classes.push('w-full')
  }

  return classes.join(' ')
})

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>