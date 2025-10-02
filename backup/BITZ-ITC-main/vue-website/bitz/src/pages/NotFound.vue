<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <div class="mb-8">
        <h1 class="text-9xl font-bold text-primary-600">404</h1>
      </div>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
      <p class="text-xl text-gray-600 mb-8 max-w-md">
        Sorry, the page you are looking for could not be found.
      </p>
      <div class="space-x-4">
        <Button variant="primary" size="lg" @click="$router.push('/')">
          Go Home
        </Button>
        <Button variant="outline" size="lg" @click="$router.go(-1)">
          Go Back
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/common/Button.vue'
</script>