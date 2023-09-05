<template>
  <div class="developer">
    <h1>About the Team </h1>
    <p>{{ DevelopersData.description}}</p>
  </div>
  <div class="row">
    <div class="column" v-for="developer in TeamsData" :key="developer.id">
      <div class="card">
        <h3>{{ developer.title }}</h3>
        <img :src="developer.Image" alt="This is an image " height="400" with="300">
        <p>{{ developer.description }}</p>
       
      </div>
    </div>
  </div>
  
</template>

<script>
import { DevelopersData } from "../utils/DevelopersData";
import { TeamsData} from "../utils/TeamsData";
export default {
  setup(){
    return {
     DevelopersData,
     TeamsData,
    
  }

}
}
</script>
<style></style>
