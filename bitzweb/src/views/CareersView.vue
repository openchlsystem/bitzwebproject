<template>
<section id="careersview">

  <form @submit.prevent="sendEmail">
      <h3>Welcome to Application Page</h3>
      <div class="row">
        <div class="col-25">
          <label for="fname">First Name</label>
        </div>
        <div class="col-75">
          <input type="text" name="text" id ="fname"  placeholder="Enter Your First Name" v-model="fname">
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="fname">Last Name</label>
        </div>
        <div class="col-75">
          <input type="text" name="text" id ="lname" placeholder="Enter Your Last Name" v-model="lname">
        </div>
        
      </div>
      <div class = "row">
        <div class="col-25"><label for="country">Country</label></div>
        <div class="col-75">
          <select id="country" name="country" v-model="country">
        <option value="Kenya">Kenya</option>
        <option value="Uganda">Uganda </option>
        <option value="Tanzania">Tanzania</option>
        <option value="Rwanda">Rwanda</option>
      </select>
        </div>
      </div>
      <div class="row">
        <div class="col-25"><label for="Programming_ Language"> Select your most preferred programming Language</label></div>
        <div class="col-75"> <select id="language" name="language" v-model="language">
        <option value="PHP">PHP</option>
        <option value="Javascript">Javascript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
      </select></div>
      </div>
      <div class="row">
        <div class="col-25"><label for="Experience">How many Years of Experience have you had with the programming Language?</label></div>
        <div class="col-75">
          <input type="text" name="text" id ="Experience"  placeholder="Experience">
        </div>
      </div>
        <div class="row">
    <div class="col-25">
      <label for="subject">Write a Cover Letter</label>
    </div>
        <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px" v-model="coverletter"></textarea>
    </div>
  
      </div>
      <div class="card">
    <h3>Upload Files</h3>
    <div class="drop_box">
      <header>
        <h4>Select File here</h4>
      </header>
      <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
      <input type="file"  ref="file" hidden accept=".doc,.docx,.pdf" id="fileID" style="display:none;" @change="handleFileUpload">
      <button class="btn" @click="$refs.file.click()">Choose File</button>
  
      <div id="PatoFile">
        <p v-if="file">{{ file.name }}</p>
      </div>
    </div>
    </div>
      



      
      <br>
  <div>
  <input  type="submit" value="submit" >
    </div>
     
    </form>
</section>

    


</template>
<script>

// const querystring=require("querystring");
// import Email from 'smtpjs';
import Email from '../assets/smtp/smtp.js';
export default{

  data(){
    return{
      fname:'',
      lname:'',
      coverletter:'',
      country:'',
      experience:'',
      language:'',
      file:"",
   

     
  
      
    }

  },
  methods:{
    handleFileUpload: function () {

        const allowedFileTypes= ['.pdf','.doc', '.docx'];
              const selectedFile = this.$refs.file.files[0];
              if (selectedFile){
                const FileExtension=selectedFile.name.toLowerCase().substr(selectedFile.name.lastIndexOf('.'));
                if(!allowedFileTypes.includes(FileExtension)){
                  alert('Please select a valid file format: PDF, TEXT, DOC, or DOCX.');
                  this.file=null;

                  
                }
                  
                  
                
                else{
                  this.file=selectedFile;
                }
              }
                
            //  //alert ("heloo"+this.file.name)  
             
             // el.innerHTML = this.file.name;
             
            


             
            },
    handleSubmit() {
      // alert("Your Application has been submitted successfully!");
      // Handle form submission here
  
      // You can send the form data to your server or perform other actions
    
   const formData={
        fname: this.fname,
        lname: this.lname,
        coverletter: this.coverletter,
        country: this.country,
        experience: this.experience,
        language: this.language,
        file:  null // Include the file name if a file is selected // Include the file in your form submission
      };
      console.log('Form data:', formData);
    },
   sendEmail(){

    Email.send({
    Host : "smtp.gmail.com",
    Username : "kabaupaatrick@gmail.com",
    Password : "ktsnnfvguysvvsjj",
    To : 'kabaupatrick@gmail.com',
    From : "kabaupaatrick@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);












  }

  }
}
</script>
<style>

* {
  box-sizing: border-box;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer
}

input[type=submit]:hover {
  background-color: #45a049;
}



.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: right;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  display: table;
  clear: both;
}

.drop_box {
  margin: 10px 0px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px dotted #a3a3a3;
  border-radius: 5px;

}

.drop_box h4 {
  font-size: 16px;
  font-weight: 400;
  color: #2e2e2e;
}

.drop_box p {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #a3a3a3;
}

.btn {
  text-decoration: none;
  background-color: #005af0;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  outline: none;
  transition: 0.3s;
}

.btn:hover{
  text-decoration: none;
  background-color: #ffffff;
  color: #005af0;
  padding: 10px 20px;
  border: none;
  outline: 1px solid #010101;
}
card {
  border-radius: 10px;
  
  width: 400px;
  height: 260px;
  background-color: #ffffff;
  padding: 10px 30px 40px;
  float:right;
}

.card h3 {
  font-size: 22px;
  font-weight: 600;
  
}


</style>