<template>
  
    <h1>Our  Clients</h1>
 <div class="partner__container">
    <div class="partners_profile">
      <img :src="PartnersData[0].imageUrl" alt="" />
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
  .partner__container{

    justify-content: space-between;
    align-items:center;
    margin:0 auto;
  }
  .partner_profile{
    background:white;
    border-radius:50px;
    padding:1.5em 1.75em;
    margin:2 em auto;
    max-width:330px;
    box-shadow:0px 3px 136px 0px rgba(88,87,119,0.21);




  }

</style>
