<template>
  <footer
    id="footer"
    class="bd-footer py-4 py-md-5 text-black d-flex-column text-center fixed-bottom"
  >
    <hr class="mt-0" />
    <!--Social buttons-->
    <div class="text-center">
      <h4>Contact us at</h4>
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item">
          <a href="#" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
    <!--/.Social buttons-->
    <hr class="mb-0" />
    <!--Footer Links-->
    <div class="container text-left text-md-center">
      <!-- Existing code for columns -->
    </div>
    <!--/.Footer Links-->
    <hr class="mb-0" />
    <div>&copy; {{ new Date().getFullYear() }} Bitz Website</div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
#footer{
  background-color: slateblue;
}
/* Existing styles */

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
 
  color: white;
}

.social-icon i {
  font-size: 20px;
}

/* Additional styles for social buttons */
</style>
