<template>
  <section id="contact" class="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-900 animate-fade-in">
    <div class="container px-4 md:px-6">
      <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
        <div class="space-y-4">
          <span class="inline-block bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm text-white">Get In Touch</span>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tighter">Contact Us</h2>
          <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400">
            Have questions or ready to start your next project? Reach out to our team.
          </p>
          <div class="grid gap-6 mt-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gray-100 dark:bg-navy/20 flex items-center justify-center">
                <span class="material-icons text-navy dark:text-white text-2xl">location_on</span>
              </div>
              <div>
                <h3 class="font-medium text-lg">Address</h3>
                <p class="text-base text-gray-500 dark:text-gray-400">
                  Prime Cartons, Mombasa Road, Kenya, next to Nice and Lovely (Dongpeng Building)
                </p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gray-100 dark:bg-navy/20 flex items-center justify-center">
                <span class="material-icons text-navy dark:text-white text-2xl">mail</span>
              </div>
              <div>
                <h3 class="font-medium text-lg">Email</h3>
                <p class="text-base text-gray-500 dark:text-gray-400">newtonbryan12428@gmail.com</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-gray-100 dark:bg-navy/20 flex items-center justify-center">
                <span class="material-icons text-navy dark:text-white text-2xl">phone</span>
              </div>
              <div>
                <h3 class="font-medium text-lg">Phone</h3>
                <p class="text-base text-gray-500 dark:text-gray-400">0110952788</p>
              </div>
            </div>
          </div>
        </div>
        <div class="border-0 shadow-lg rounded-3xl bg-white dark:bg-navy-950">
          <div class="p-8 space-y-6">
            <div class="space-y-2">
              <h3 class="text-2xl font-bold">Send us a message</h3>
              <p class="text-base text-gray-500 dark:text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <form class="grid gap-6">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label for="first-name" class="text-base font-medium">First name</label>
                  <input id="first-name" class="w-full p-3 text-base border rounded-full" placeholder="John" />
                </div>
                <div class="space-y-2">
                  <label for="last-name" class="text-base font-medium">Last name</label>
                  <input id="last-name" class="w-full p-3 text-base border rounded-full" placeholder="Smith" />
                </div>
              </div>
              <div class="space-y-2">
                <label for="email" class="text-base font-medium">Email</label>
                <input id="email" type="email" class="w-full p-3 text-base border rounded-full" placeholder="john.smith@example.com" />
              </div>
              <div class="space-y-2">
                <label for="message" class="text-base font-medium">Message</label>
                <textarea id="message" class="w-full p-4 text-base border rounded-3xl min-h-[150px]" placeholder="Tell us about your project or inquiry..."></textarea>
              </div>
              <button type="submit" class="w-full bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static section
</script> 