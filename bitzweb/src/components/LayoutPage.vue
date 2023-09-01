<template>
<<<<<<< HEAD
    <NavBar/>
   
    <FooterItem/>
    
=======
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
>>>>>>> c85ecf9f9a18085465f2ca3d32beb7f51efda327
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterItem from '@/components/FooterItem.vue';

export default {
    components: {
        NavBar,
       
        FooterItem
       
        
    },
};

</script>

<<<<<<< HEAD
<style>
</style>
=======
<style></style>
>>>>>>> c85ecf9f9a18085465f2ca3d32beb7f51efda327
