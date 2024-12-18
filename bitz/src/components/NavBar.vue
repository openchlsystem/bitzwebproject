<template>
    <nav>
        <div>
            <img src="../assets/logo1.png" alt="Logo" class="logo" />
        </div>
        <ul :class="{ active: menuActive }" class="menu">
            <li><a href="/">Community</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/resources">Resources</a></li>
            <li class="dropdown">
                <a href="#" @click.stop="toggleDropdown"> <i class="bi bi-globe"></i> </a>
                <ul v-if="dropdownActive" class="dropdown-content">
                    <li><a href="#"><img src="../assets/images/Flag_of_Kenya_Flat_Round-128x128.png" alt="Kenya Flag" />
                            Kenya</a></li>
                    <li><a href="#"><img src="../assets/images/Flag_of_Tanzania_Flat_Round-128x128.png"
                                alt="Tanzania Flag" /> Tanzania</a></li>
                    <li><a href="#"><img src="../assets/images/Flag_of_Zambia_Flat_Round-128x128.png"
                                alt="Zambia Flag" /> Zambia</a></li>
                    <li><a href="#"><img src="../assets/images/Flag_of_Eswatini_Flat_Round-128x128.png"
                                alt="Eswatini Flag" /> Eswatini</a></li>
                </ul>
            </li>
        </ul>
        <ul :class="{ active: menuActive }" class="menu">
            <li><a href="#" @click="$router.push('/contactus')">Support</a></li>
        </ul>
        <div class="menu-icon" @click="toggleMenu">
            &#9776; <!-- Hamburger icon -->
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue';

    const menuActive = ref(false);
    const dropdownActive = ref(false);

    const toggleMenu = () => {
        menuActive.value = !menuActive.value;
    };

    const toggleDropdown = () => {
        dropdownActive.value = !dropdownActive.value;
    };
</script>

<style scoped>
    
</style>
