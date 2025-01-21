<template>



<div>Your payment history table</div>


</template>
<script>
import axios from 'axios';
export default {
  mounted() {
    // Function to extract parameters from the URL
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Extract parameters from the URL
    var userLoginId = getParameterByName('user_login_id');
    var paymentId = getParameterByName('paymentId');
    var token = getParameterByName('token');
    var payerId = getParameterByName('PayerID');

    // Construct the API URL
    var apiUrl = 'https://api.watenantbureau.com/api/paypal/success?user_login_id=' + userLoginId + '&paymentId=' + paymentId + '&token=' + token + '&PayerID=' + payerId;

    // Function to make API call using Axios
    function callApi(url) {
      axios.get(url)
        .then(function (response) {
          // Handle successful response here
        })
        .catch(function (error) {
          console.error('There was a problem with the axios operation:', error);
        });
    }

    // Call the API when the component is mounted
    callApi(apiUrl);
  }
}



</script>
