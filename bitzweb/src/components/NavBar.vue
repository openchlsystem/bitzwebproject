<template>
  <nav>
    <a class="navbar-brand logo-text" href="#"><img src="../assets/logo.png"></a> 
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/solutions">Solutions</router-link>
    <router-link to="/developers">Developers</router-link>
    <router-link to="/pricing">Pricing</router-link>
    <router-link to="/blog">Blog</router-link>
   
  </nav>
</template>
<router-view></router-view>

<script>
import router from "@/router";

export default {
  router: { router },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");


</style>

