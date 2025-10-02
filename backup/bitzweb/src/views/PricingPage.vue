<template>
  <section id="pricing_content">

<form @submit.prevent="saveQuote">
    <h3>Request For  a Quotation</h3>
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
  <div class="col-25">
    <label for="subject">Write your Enquiry</label>
  </div>
      <div class="col-75">
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px" v-model="quote"></textarea>
  </div>

    </div>

  



<div>
<input  type="submit" value="submit" >
  </div>
   
  </form>
</section>

  

</template>
<script>
import axios from 'axios';
export default{
  data() {
    return {
      api: 'http://127.0.0.1:8000/api/',
      fname: "",
      lname: "",
      phone: "",
      email: "",
      country: "",
      subject: "",
      quote: ""
    }
  },
  methods:{
    async saveQuote() {

const formData ={
  fname: this.fname,
  lname: this.lname,
  phone: this.phone,
  email: this.email,
  country: this.country,
  subject: this.subject,
  quote: this.quote
};
try {
  const response = await axios.post('http://127.0.0.1:8000/api/Clients/', formData);
console.log(response.data);
   // Clear the form data after successful submission



} catch (error) {
  console.error(error);             
  
}
          this.fname = "";
          this.lname = "";
          this.phone = "";
          this.email = "";
          this.country = "";
          this.subject = "";
          this.quote = "";
// const response = await axios.post('http://127.0.0.1:8000/api/Clients/', formData);
// console.log(response.data);
alert('Your submission has been submitted successfully!');
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
  cursor: pointer;
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