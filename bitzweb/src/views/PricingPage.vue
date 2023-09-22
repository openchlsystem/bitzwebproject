<template>
 
  <div id="pricing_content">
    <h3>Welcome to the Pricing Page</h3>
    <!-- Pricing Page Content -->
    <div >
      <!-- Pricing details go here -->

      <!-- Button to generate and download PDF -->
      <button @click="generatePDF">Download PDF</button>
      <div id="pricing-page">
  <h1 style="color: blue; font-size: 24px;">Product Prices</h1>
  <table border="1">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>OpenCHS</td>
        <td>$500</td>
      </tr>
      <tr>
        <td>Legal Case Management</td>
        <td>$700</td>
      </tr>
      <tr>
        <td>Sacco Management</td>
        <td>$600</td>
      </tr>
    </tbody>
  </table>
   

        </div>
    </div>
  </div>
</template>

<script>

import html2pdf from 'html2pdf.js';



export default {
  methods: {
//     generatePDF() {
//   const pdf = new jsPDF();
//   const element = document.getElementById('your-html-element-id');
//   pdf.fromHTML(element, 15, 15);
//   pdf.save('document.pdf');
// },
generatePDF() {
  const element = document.getElementById('pricing-page');
  html2pdf(element);
}

  }
}
</script>

<style scoped>
/* Add your CSS styles for the pricing page */
td{
  color:black;
  
}
</style>