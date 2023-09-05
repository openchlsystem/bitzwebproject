<template>
  <div class="careers">
    <h2>Front-End Developer Questionnaire</h2>
    <!--Technical Skill Questions-->
    
    <section>
      <h3>Technical Skill </h3>
      <p> Rate your Vue.js skills (1-5, with 1 being inexperienced and 5 being an expert);</p>
    <label for= "vue-experience">Vue.js vue-experience</label>
    <input type="number " id="vue-experience" v-model="vueExperience" min="1" max="5">
    </section>


    <!--Multiple Choice Questions-->
    <section>

      <h3>Multiple Choice Questions</h3>
      <!--Question 1-->
      <div>
        <p>What is Vue.js?</p>
        <label for="question1">
          <input type="radio" name="question1" id="question1" value="1" v-model="question1Answer">
          A javascript framework
        </label>
        <label for="question1">
          <input type="radio" name="question1" id="question1" value="2" v-model="question1Answer">
          A Css preprocessor
        </label>
        <label for="question1">
          <input type="radio" name="question1" id="question1" value="3" v-model="question1Answer">
          A database system
        </label>
      </div>
      <!--Question 2-->
      <div>
        <p>What is the Vue CLI used for ?</p>
        <label for="question2">
          <input type="radio" name="question2" id="question2" value="1" v-model="question2Answer">
          Managing project dependencies
        </label>
        <label for="question2">
          <input type="radio" name="question2" id="question2" value="2" v-model="question2Answer">
          Creating and managing Vue.js projects
        </label>
        <label for="question2">
          <input type="radio" name="question2" id="question2" value="3" v-model="question2Answer">
          Debugging Javascript code
        </label>
      </div>
    </section>
      <!--Coding Challange-->
      <section>
        <h3>Coding Challange</h3>
        <p>Write a Vue.js component that display a counter and allow the user to increment it by clicking a button</p>
        <textarea v-model="codeChallange" row="6" cols="50"></textarea>
      </section>
      <!--BEHAVIORAL QUESTIONS-->
      <section>
        <P>Provide an example of a challanging problem you faced while working in a development team and how you solved it.</P>
        <textarea v-model="behavioralChallange" row="6" cols="50"></textarea>
      </section>
      <!--submit Button-->
      <button @click="submit">Submit</button>
     <!--Multiple Choice Questions-->
  </div>
</template>

<script>
export default {
  setup(){
    return {
      vueExperience: 3,
      question1Answer: "",
      question2Answer: "",
      codeChallange: "",
      behavioralAnswer: "",
    };
  },


methods:{
  submit(){
    //Gather and process the candidate's responses here
    const CandidateResponses = {
      vueExperience: this.vueExperience,
      question1Answer: this.question1Answer,
      question2Answer: this.question2Answer,
      codeChallange: this.codeChallange,
      behavioralChallange: this.behavioralChallange,
    };
    //Send the candidate's responses to the server
    console.log(CandidateResponses);
  }
}
};

</script>
