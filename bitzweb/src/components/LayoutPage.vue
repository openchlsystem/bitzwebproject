<template>
    <div class="container">
        <header>
            <!-- Header content goes here -->
            <NavBar />

        </header>
        <div class="body">
            <div class="column">
                <!-- Left column content goes here -->
                <router-view />
            </div>
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

<style>
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header {
    background-color: #f0f0f0;
    padding: 20px;
}

.body {
    display: flex;
    flex: 1;
}

.column {
    flex: 1;
    padding: 20px;
}

.footer {
    background-color: #f0f0f0;
    padding: 20px;
}
</style>
