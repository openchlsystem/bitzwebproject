<template>
  <h1> About Us Page</h1>
    <div class="row">
      <div class="col-md-6">
        <img v-bind:src="MissionsData[0].Image" alt="This is an image " height="400" with="300">
      </div>
      <div class="col-md-6">
        <h2> {{  MissionsData[0].title}} </h2>
        <p>{{  MissionsData[0].description}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
     
          <h2> {{ MissionsData[1].title }}</h2>
        <p >{{ MissionsData[1].description}}</p>

      </div>
   
      <div class="col-md-6">
        <img v-bind:src="MissionsData[1].Image" alt="This is an image " height="400" with="300">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <img :src="MissionsData[2].Image" alt="This is an image " height="400" with="300">
      </div>
      <div class="col-md-6">
        <h2> {{ MissionsData[2].title}} </h2>
        <p >{{MissionsData[2].description}}</p>
      </div>
    </div>
  <h2>What we are doing </h2>
  <div class="row" >
    <div class="column" v-for="project in ProjectsData" :key="project.id">
      <div class="card">
        <img class="card-img-top" :src="project.Image" alt="Card image cap">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
  

  
</template>



<script>
import  { MissionsData } from "@/utils/MissionsData"
import { ProjectsData } from "@/utils/ProjectsData"


export default {
  setup(){
    return {
      MissionsData,
      ProjectsData,
    }
  },

}

</script>
