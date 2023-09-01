<template>
  
    <NavBar/>
    <router-view/> 
    <FooterItem v-if = "showFooter"/>
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterItem from "@/components/FooterItem.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    FooterItem
  },

computed:{
  showFooter(){
    return this.$route.path !=='/';
  }
}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

<<<<<<< HEAD
router-link  {
  font-weight: bold;
  color: #2c3e50;
}

router-link.router-link-exact-active {
  color: #42b983;
}
=======

>>>>>>> c85ecf9f9a18085465f2ca3d32beb7f51efda327
</style>
