<template>
  <footer class="bg-navy text-white py-6 mt-12">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div class="flex items-center gap-2 mb-2 md:mb-0">
        <img src="/Bitz logo.png" alt="Bitz ITC Logo" class="h-6 w-auto" />
        <span class="font-bold">BITZ ITC</span>
      </div>
      <div class="text-sm text-gray-300">&copy; {{ new Date().getFullYear() }} BITZ IT Consulting. All rights reserved.</div>
    </div>
  </footer>
</template>

<script setup>
// No logic needed for static footer
</script> 