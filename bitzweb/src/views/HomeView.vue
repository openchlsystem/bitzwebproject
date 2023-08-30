<template>
  <div>
    <span class="skeleton-loader-backgroud"></span>
    <div>
      <span class="skeleton-loader-gradient"></span>
    </div>
  </div>
  <div class="home">


  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  }
}
</script>
<style>
.skeleton-loader-backgroud {
  width:100%;
  height:15px;
  display:block;
  background:lightgray;
}
.skeleton-loader-gradient {
  width:100px;
  height:15px;
  display:block;
  background:linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),50%,
    rgba(255, 255, 255, 0)80%
  ),
  lightgray;
  background-repeat:repeat-y;
  background-size:50% 200%;
  background-position:0 0;

  
}
@keyframes shine{
  to {
    background-position:100% 0;
  }
}

</style>