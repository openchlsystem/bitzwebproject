<template>
    <footer>
        <div class="copyright">
            <p>&copy; {{ currentYear }} Bitz IT Consulting Ltd.</p>
        </div>
        <div class="socials">
            <i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-linkedin"></i>
        </div>
        <div class="quick-menus">
            <ul>
                <li><a href="/">Community</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="#">Resources</a></li>
                
            </ul>
        </div>
    </footer>

</template>

<script>
export default {
    name: 'FooterPage',
    setup() {

        const currentYear = new Date().getFullYear();

        return {
            currentYear,
        };
    }
};
</script>

<style scoped></style>