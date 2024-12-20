<template>
  <div class="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-all p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
    <!-- Main Product Image -->
    <img
      :src="product.imageUrl"
      :alt="product.menu_name"
      class="w-full object-cover rounded-t-lg aspect-[16/9] sm:aspect-auto h-64 sm:h-80 lg:h-96"
    />

    <div class="p-4">
      <h3 class="text-xl font-semibold text-gray-900">{{ product.menu_name }}</h3>
      <p class="text-sm text-gray-600 mt-2">{{ product.menu_description }}</p>

      <!-- Features Section -->
      <div v-if="product.features && product.features.length" class="mt-6">
        <h4 class="text-md font-semibold text-gray-800">Key Features</h4>
        <ul class="mt-4 space-y-4">
          <li
            v-for="(feature, index) in product.features"
            :key="index"
            class="flex items-center space-x-4 hover:bg-gray-50 transition-all rounded-lg p-2"
          >
            <!-- Feature Icon Image -->
            <img
              :src="feature.imageUrl"
              :alt="feature.Feature"
              class="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full border p-2 bg-gray-100"
            />
            <div>
              <p class="text-sm font-semibold text-gray-900">{{ feature.Feature }}</p>
              <p class="text-sm text-gray-600">{{ feature.Description }}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Learn More Link -->
      <div class="mt-6">
        <a href="#" class="text-blue-600 font-medium hover:underline">
          Learn More
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Card Styling */
.bg-white {
  background-color: #ffffff;
}

.shadow-lg {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.hover\:shadow-xl:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .max-w-xs {
    max-width: 100%;
  }
  .p-6 {
    padding: 1.5rem;
  }
}

.hover\:bg-gray-50:hover {
  background-color: #f9fafb;
}

/* Icon Styling */
.w-8.h-8 {
  width: 2rem;
  height: 2rem;
}

.sm\:w-10.sm\:h-10 {
  width: 2.5rem;
  height: 2.5rem;
}

.object-contain {
  object-fit: contain;
}

.bg-gray-100 {
  background-color: #f7fafc;
}

.border {
  border: 2px solid #e2e8f0;
}

.p-2 {
  padding: 0.5rem;
}
</style>
