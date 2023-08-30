<template>
  <footer id="footer" class="bd-footer py-4 py-md-5 text-black d-flex-column text-center fixed-bottom">
  <hr class="mt-0">
  <!--Social buttons-->
  <div class="text-center">
    <h4>Contact us at</h4>
    <ul class="list-unstyled list-inline">
      <li class="list-inline-item">
        <router-link to="#!" class="sbtn btn-large mx-1" title="Facebook">
          <i class="bi bi-facebook-square bi-2x"></i>
        </router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="#!" class="sbtn btn-large mx-1" title="Linkedin">
          <i class="bi bi-linkedin bi-2x"></i>
        </router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="#!" class="sbtn btn-large mx-1" title="Twitter">
          <i class="bi bi-twitter-square bi-2x"></i>
        </router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="#!" class="sbtn btn-large mx-1" title="Youtube">
          <i class="bi bi-youtube-square bi-2x"></i>
        </router-link>
      </li>
    </ul>
  </div>
  <!--/.Social buttons-->
  <hr class="mb-0">
  <!--Footer Links-->
  <div class="container text-left text-md-center">
    <div class="row">
      <!--First column-->
      <div class="col-md-3 mx-auto shfooter">
        <h5 class="my-2 font-weight-bold d-none d-md-block">Product</h5>
        <div class="d-md-none title" data-target="#Product" data-toggle="collapse">
          <div class="mt-3 font-weight-bold">Product
            <div class="float-right navbar-toggler">
              <i class="fas fa-angle-down"></i>
              <i class="fas fa-angle-up"></i>
            </div>
          </div>
        </div>
        <ul class="list-unstyled collapse" id="Product">
          <li><router-link to="/Product">Create Websites</router-link></li>
          <li><router-link  to="/Product">Secure Cloud Hosting</router-link></li>
          <li><router-link to="/Product">Engage Your Audience</router-link></li>
          <li><router-link  to="/Product">Website Support</router-link></li>
        </ul>
      </div>
      <!--/.First column-->
      <hr class="clearfix w-100 d-md-none mb-0">
      <!--Second column-->
      <div class="col-md-3 mx-auto shfooter">
        <h5 class="my-2 font-weight-bold d-none d-md-block">Company</h5>
        <div class="d-md-none title" data-target="#Company" data-toggle="collapse">
          <div class="mt-3 font-weight-bold">Company
            <div class="float-right navbar-toggler">
              <i class="fas fa-angle-down"></i>
              <i class="fas fa-angle-up"></i>
            </div>
          </div>
        </div>
        <ul class="list-unstyled collapse" id="Company">
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/careers">Careers</router-link></li>
          <li><router-link  to="/contact">Contact</router-link></li>
          <li><router-link  to="/pricing">Pricing</router-link></li>
          <li><router-link  to="#">FAQ</router-link></li>
        </ul>
      </div>
      <!--/.Second column-->
      <hr class="clearfix w-100 d-md-none mb-0">
      <!--Third column-->
      <div class="col-md-3 mx-auto shfooter">
        <h5 class="my-2 font-weight-bold d-none d-md-block">Resources</h5>
        <div class="d-md-none title" data-target="#Resources" data-toggle="collapse">
          <div class="mt-3 font-weight-bold">Resources
            <div class="float-right navbar-toggler">
              <i class="fas fa-angle-down"></i>
              <i class="fas fa-angle-up"></i>
            </div>
          </div>
        </div>
        <ul class="list-unstyled collapse" id="Resources">
          <li><router-link to="#">Blog</router-link></li>
          
        </ul>
      </div>
      <!--/.Third column-->
      <hr class="clearfix w-100 d-md-none mb-0">
      <!--Fourth column-->

      <!--/.Fourth column-->
    </div>
  </div>
  <!--/.Footer Links-->
  <hr class="mb-0">
  <div>
      &copy; {{ new Date().getFullYear() }} Bitz Website
    </div>
  </footer>



</template>
<script>
export default{

}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Rubik');
footer {
  background: slateblue;
  position:fixed-bottom;
}

h5 {
    font-size: 1rem;
    line-height: 1.375;
  font-family: Rubik,Arial,sans-serif;
    font-weight: 500;
    color: #030929;
}

router-link {
  color: white;
  font-weight: 500;
  text-decoration: none;
  background-color: transparent;
}

router-link:hover {
  color: #007bff;
  text-decoration: none;
}



</style>