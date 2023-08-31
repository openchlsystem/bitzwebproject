<template>
    <div class="container">
        <header>
            <!-- Header content goes here -->
            <NavBar />

        </header>
        <div class="body">


            <router-view />

        </div>
        <footer>
            <!-- Footer content goes here -->
        </footer>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
    components: {
        NavBar,
    },
};

</script>

<style></style>
