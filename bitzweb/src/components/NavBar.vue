<template>
    <div class="m-4">
    <nav class="navbar navbar-expand-lg position-relative text-right navbar-fixed-top">
    <div class="container-fluid">
    <a class="navbar-brand navbar-logo" href="#">
    <img src="../assets/logo.png" height="100" alt="navbar brand">
    </a>
    <!--Toggle Collapsible Button-->
    <button class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse"
    data-bs-target="#collapsibleNavbar"
    @click="collapse = !collapse"
    >
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
    <ul class="navbar-nav">
    <li class="nav-item mr-3" >
    <router-link to="/" class="nav-link" >Home</router-link>
    </li>
    <li class="nav-item mr-3" >
    <router-link to="/about" class="nav-link" >About </router-link>
    </li>
    <li class="nav-item mr-3">
    <router-link to="/solutions" class="nav-link" >Solutions</router-link>
    </li>
    <li class="nav-item mr-3">
    <router-link to="/careers" class="nav-link" >Careers</router-link>
    </li>
    <li class="nav-item mr-3">
    <router-link to="/contact" class="nav-link" >Contact</router-link>
    </li>
    <li class="nav-item mr-3">
    <router-link to="/pricing" class="nav-link" >Pricing</router-link>
    </li>
    <li class="nav-item mr-3">
    <router-link to="/developers" class="nav-link" >Developers</router-link>
    </li>
    </ul>
    </div>
    
    
    
    
    
    
    
    </div>
    
    
    </nav>
    </div>
    
    </template>
    
    <script>
    import router from '@/router';
    
    export default {
    router:{router}
    }
    </script>
    <style>
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    
div{
    background-color:slateblue;
    }
    
    </style>
    