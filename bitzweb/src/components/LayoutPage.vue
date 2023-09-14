
<template>
    <div class="container">
        <header class="header">
            <!-- First header content goes here -->
        <div v-if="showChatWidget">
          <div ref="chatWidget">

          </div>
        </div>
        </header>
        <header class="header">
            <!-- Second header content goes here -->


            <NavBar />
        </header>
        <header class="header">
            <!-- Third header content goes here -->
            <HeroPage />
        </header>
        <div class="body">
            <!-- Body content goes here -->
            <router-view />
        </div>
        <footer class="footer">
            <!-- Footer content goes here -->
            <Footer />
        </footer>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroPage from "@/components/HeroPage.vue";
import Footer from "@/components/FooterPage.vue";

export default {
    components: {
        NavBar,
    HeroPage,
    Footer,
    },
    data() {
      return {
        showChatWidget: false,
      };

},
mounted() {
      
      this.loadTawkToWidget();
    },
    methods: {
      loadTawkToWidget() {
        if (typeof Tawk_API === "undefined") {
          // Tawk.to script not loaded, dynamically load it
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src =
            "https://embed.tawk.to/64ca9f36cc26a871b02cdf13/1h6rnrrt8";
         
          script.setAttribute("crossorigin", "*");
  
          // Append script to the second header
          const secondHeader = this.$el.querySelectorAll(".header")[1];
          secondHeader.appendChild(script);
  
          // Set a flag to show the chat widget
          this.showChatWidget = true;
        }
    }


}
};
</script>

<style></style>