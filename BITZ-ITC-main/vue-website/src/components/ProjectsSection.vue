<template>
  <section id="projects" class="w-full py-12 md:py-24 bg-white dark:bg-navy-900 animate-fade-in">
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="space-y-2">
          <span class="inline-block bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white">Our Projects</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Explore Our Projects
          </h2>
          <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-[900px] mx-auto">
            Discover how we've helped businesses across various industries achieve their technology goals
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div class="border-0 shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div class="aspect-video relative bg-gray-100">
            <img
              src="/placeholder.svg"
              alt="OpenCHS Project"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-8">
            <div class="mb-3">
              <span class="inline-block bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm">Child Protection</span>
            </div>
            <h3 class="text-2xl font-bold mb-3">Transforming Child Protection with OpenCHS</h3>
            <p class="text-lg text-gray-500 dark:text-gray-400 mb-6">
              Seamless transition to cloud infrastructure resulting in 30% cost reduction and improved security.
            </p>
            <a href="/projects/openchs" class="text-navy dark:text-white flex items-center font-semibold text-lg">
              Read more <span class="material-icons ml-2 text-base">arrow_right_alt</span>
            </a>
          </div>
        </div>
        <div class="border-0 shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div class="aspect-video relative bg-gray-100">
            <img
              src="/placeholder.svg"
              alt="Manufacturing Project"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-8">
            <div class="mb-3">
              <span class="inline-block bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm">Manufacturing</span>
            </div>
            <h3 class="text-2xl font-bold mb-3">Digital Transformation for Manufacturing Company</h3>
            <p class="text-lg text-gray-500 dark:text-gray-400 mb-6">
              How we helped a leading manufacturer streamline operations and increase efficiency by 40%.
            </p>
            <a href="/projects/manufacturing-digital-transformation" class="text-navy dark:text-white flex items-center font-semibold text-lg">
              Read more <span class="material-icons ml-2 text-base">arrow_right_alt</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static section
</script> 