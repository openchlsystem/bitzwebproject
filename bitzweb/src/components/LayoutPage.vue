<template>
    <div class="container">
        <header class="header">
            <!-- First header content goes here -->
        </header>
        <header class="header">
            <!-- Second header content goes here -->
            <NavBar />
        </header>
        <div class="body">
            <!-- Body content goes here -->
            <router-view />
        </div>
        <footer class="footer">
            <!-- Footer content goes here -->
        </footer>
    </div>
  </template>

  <script>
    import NavBar from "@/components/NavBar.vue";
    import FooterItem from "@/components/FooterItem.vue";
  
    export default {
      components: {
        NavBar,
        FooterItem,
      },
    };
  </script>

  <style>

</style>

