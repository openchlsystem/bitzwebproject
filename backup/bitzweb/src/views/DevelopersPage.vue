<template>
  <div id="development">
    <h2>Development Team</h2>
    <h3>Responsibilities:</h3>
    <ul>
      <li>Collaboratively planning and estimating work</li>
      <li>Developing, testing, and delivering high-quality product increments</li>
      <li>Collaborating with the Product Owner</li>
      <li>Embracing self-organization and continuous improvement</li>
    </ul>
    <h3>Requirements:</h3>
    <ul>
      <li>Technical expertise and skills relevant to the project</li>
      <li>Proficiency in relevant technologies, tools, and frameworks</li>
      <li>Collaborative mindset and ability to work well in a team</li>
      <li>Self-organization and time management abilities</li>
      <li>Quality-focused approach and attention to detail</li>
      <li>Continuous learning and improvement mindset</li>
      <li>Effective communication and active listening skills</li>
      <li>Adaptability and flexibility</li>
    </ul>
    <button @click="apply">Apply</button>
  </div>
</template>

<script>
export default {
  methods: {
    apply() {
      if (this.$route.path === "/developers") {
        this.$router.push("/careers");
       }
      // Handle apply logic
      console.log('Applied for Development Team role.');
    }
  }
 
};
</script>
