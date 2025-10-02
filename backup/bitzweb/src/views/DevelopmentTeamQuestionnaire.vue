<template>
  <div class="developer-form">
    <h2>Development Team Questionnaire</h2>

    <h3>Questionnaire:</h3>
    <ol>
      <!-- Question 1 -->
      <li>
        <p>
          Which programming language is known for its use in machine learning
          and data science?
        </p>
        <ul>
          <li><input type="radio" name="q1" value="a" /> Python</li>
          <li><input type="radio" name="q1" value="b" /> JavaScript</li>
          <li><input type="radio" name="q1" value="c" /> C++</li>
          <li><input type="radio" name="q1" value="d" /> Java</li>
        </ul>
      </li>

      <!-- Question 2 -->
      <li>
        <p>What does the acronym "HTTP" stand for in web development?</p>
        <ul>
          <li>
            <input type="radio" name="q2" value="a" /> HyperText Transport
            Protocol
          </li>
          <li>
            <input type="radio" name="q2" value="b" /> HyperText Transfer
            Protocol
          </li>
          <li>
            <input type="radio" name="q2" value="c" /> HyperTransfer Text
            Protocol
          </li>
          <li>
            <input type="radio" name="q2" value="d" /> HyperTransport Text
            Protocol
          </li>
        </ul>
      </li>

      <!-- Question 3 -->
      <li>
        <p>
          What is the purpose of a CSS framework like Bootstrap or Foundation?
        </p>
        <ul>
          <li>
            <input type="radio" name="q3" value="a" /> Simplify JavaScript
            coding
          </li>
          <li>
            <input type="radio" name="q3" value="b" /> Optimize database queries
          </li>
          <li>
            <input type="radio" name="q3" value="c" /> Enhance code
            maintainability
          </li>
          <li>
            <input type="radio" name="q3" value="d" /> Standardize server
            configuration
          </li>
        </ul>
      </li>

      <!-- Question 4 -->
      <li>
        <p>What is the purpose of a CSS preprocessor like Sass or Less?</p>
        <ul>
          <li><input type="radio" name="q4" value="a" /> Minimize file size</li>
          <li>
            <input type="radio" name="q4" value="b" /> Enhance cross-browser
            compatibility
          </li>
          <li>
            <input type="radio" name="q4" value="c" /> Improve code
            maintainability
          </li>
          <li>
            <input type="radio" name="q4" value="d" /> Optimize database queries
          </li>
        </ul>
      </li>

      <!-- Question 5 -->
      <li>
        <p>What is a responsive web design?</p>
        <ul>
          <li>
            <input type="radio" name="q5" value="a" /> Designing for people with
            disabilities
          </li>
          <li>
            <input type="radio" name="q5" value="b" /> Designing websites for
            mobile devices
          </li>
          <li>
            <input type="radio" name="q5" value="c" /> Designing interactive web
            applications
          </li>
          <li>
            <input type="radio" name="q5" value="d" /> Designing websites with
            animation effects
          </li>
        </ul>
      </li>

      <!-- Question 6 -->
      <li>
        <p>What is a JavaScript framework?</p>
        <ul>
          <li>
            <input type="radio" name="q6" value="a" /> A collection of
            pre-styled HTML elements
          </li>
          <li>
            <input type="radio" name="q6" value="b" /> A set of reusable
            functions and features to simplify development
          </li>
          <li>
            <input type="radio" name="q6" value="c" /> A database management
            system
          </li>
          <li>
            <input type="radio" name="q6" value="d" /> A version control system
          </li>
        </ul>
      </li>

      <!-- Question 7 -->
      <li>
        <p>What is the purpose of AJAX in web development?</p>
        <ul>
          <li>
            <input type="radio" name="q7" value="a" /> Asynchronous JavaScript
            and XML
          </li>
          <li>
            <input type="radio" name="q7" value="b" /> A type of web server
          </li>
          <li>
            <input type="radio" name="q7" value="c" /> A file compression
            algorithm
          </li>
          <li><input type="radio" name="q7" value="d" /> A new type of CSS</li>
        </ul>
      </li>

      <!-- Question 8 -->
      <li>
        <p>What is the purpose of the 'this' keyword in JavaScript?</p>
        <ul>
          <li>
            <input type="radio" name="q8" value="a" /> Refers to the current
            HTML element
          </li>
          <li>
            <input type="radio" name="q8" value="b" /> Refers to the current
            JavaScript file
          </li>
          <li>
            <input type="radio" name="q8" value="c" /> Refers to the current
            class or object
          </li>
          <li>
            <input type="radio" name="q8" value="d" /> Refers to the root HTML
            element
          </li>
        </ul>
      </li>

      <!-- Question 9 -->
      <li>
        <p>
          What is the purpose of a package manager like npm or Yarn in web
          development?
        </p>
        <ul>
          <li>
            <input type="radio" name="q9" value="a" /> Manage software licenses
          </li>
          <li>
            <input type="radio" name="q9" value="b" /> Manage project build
            configurations
          </li>
          <li>
            <input type="radio" name="q9" value="c" /> Manage and share project
            dependencies
          </li>
          <li>
            <input type="radio" name="q9" value="d" /> Manage project
            documentation
          </li>
        </ul>
      </li>

      <!-- Question 10 -->
      <li>
        <p>What is the purpose of unit testing in software development?</p>
        <ul>
          <li>
            <input type="radio" name="q10" value="a" /> To test the entire
            application
          </li>
          <li>
            <input type="radio" name="q10" value="b" /> To test individual units
            or functions of the code
          </li>
          <li>
            <input type="radio" name="q10" value="c" /> To test user interfaces
          </li>
          <li>
            <input type="radio" name="q10" value="d" /> To test database
            connections
          </li>
        </ul>
      </li>

      <!-- ... Add more questions as needed ... -->
    </ol>

    <h3>Submit Questionnaire</h3>
    <button @click="submitQuestionnaire">Submit Questionnaire</button>
  </div>
</template>

<script>
export default {
  methods: {
    submitQuestionnaire() {
      const answers = {
        question1: this.getAnswerForQuestion("q1"),
        question2: this.getAnswerForQuestion("q2"),
        question3: this.getAnswerForQuestion("q3"),
        question4: this.getAnswerForQuestion("q4"),
        question5: this.getAnswerForQuestion("q5"),
        question6: this.getAnswerForQuestion("q6"),
        question7: this.getAnswerForQuestion("q7"),
        question8: this.getAnswerForQuestion("q8"),
        question9: this.getAnswerForQuestion("q9"),
        question10: this.getAnswerForQuestion("q10"),
      };
      console.log(
        "Questionnaire submitted for Development Team role.",
        answers
      );
    },
    getAnswerForQuestion(questionName) {
      const selectedInput = this.$el.querySelector(
        `input[name=${questionName}]:checked`
      );
      return selectedInput ? selectedInput.value : null;
    },
  },
};
</script>
