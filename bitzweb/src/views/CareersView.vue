<template>
  <div id="careersview">
    <h1>Please Select A Role To Apply:</h1>
    <select v-model="selectedRole" @change="selectRole">
      <option value="">Select Role</option>
      <option value="Development Team">Development Team</option>
     
    </select>

    <DevelopmentTeamQuestionnaire v-if="selectedRole === 'Development Team'" />
    
  </div>
</template>

<script>
import DevelopmentTeamQuestionnaire from './DevelopmentTeamQuestionnaire.vue';


export default {
  data() {
    return {
      selectedRole: ''
    };
  },
  methods: {
    selectRole() {
      // Handle role selection
      console.log('Selected Role:', this.selectedRole);
    }
  },
  components: {
    DevelopmentTeamQuestionnaire,
    
  }
};
</script>
