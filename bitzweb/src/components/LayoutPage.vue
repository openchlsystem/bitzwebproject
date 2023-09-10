
<template>
    <div class="container">
        <header class="header">
            <!-- First header content goes here -->
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
        </footer>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroPage from "@/components/HeroPage.vue";

export default {
    components: {
        NavBar,
        HeroPage,
    },
};

</script>

<style></style>