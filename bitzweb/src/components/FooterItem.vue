<template>
  <footer
    class="footer"><!--footer content goes here-->
    <hr class="mb-0" />
    <div>&copy; {{ new Date().getFullYear() }} Bitz Website</div>
  </footer>
</template>

<script>
export default {};
</script>

<style>

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
