<template>
  
    <h1>Our  Clients</h1>
    <div class="marquee-container">
   <div  class="client -container">
    <ul>

      <li class="home" v-for="partner  in PartnersData" :key="partner.title">

       <div class="row">
        <div class="col-xs-4">
        <img :src="partner.imageUrl" alt="">
      <h3>{{ partner.title }}</h3>
      <p>{{ partner .description }}</p>


    </div>
    </div>
   </li>
  </ul>

   </div>



   </div>
    


 
</template>

<script>
import { PartnersData } from '@/utils/Partners';

export default {
setup(){
  return{
    PartnersData
  }
  
}
  
};
</script>
<style>

</style>
