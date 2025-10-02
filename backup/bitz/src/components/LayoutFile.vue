<template>
    <div class="landing-page">
        <header>
            <slot name="logo"></slot>
            <NavBar />
        </header>

        <main>
            <router-view />
        </main>

        <footer>
            <FooterPage />
        </footer>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue';
    import FooterPage from '@/components/Footer.vue';

    export default {
        components: {
            NavBar,
            FooterPage,
        },
        setup() {
            return {};
        },
    };
</script>
