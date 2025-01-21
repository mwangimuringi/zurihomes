<template>
<div class="container">
<div class="cards">
<div class="col-md-3">
    <div class="cardss card1">
      <h2 style="font-family: 'Argrandir',Arial, sans-serif; font-size: 30px;">BRONZE</h2>
      <hr class="yellow-line">
<br>
      <p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px;color:white;">1 Tenant Search</p>
      
      <p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px; color:white">Unlimited Free Rental</p>
      
      <p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px; color:white;">Free input of tenants rentals history from your landlord<p>
      <h1 style="font-family: 'Argrandir',Arial, sans-serif; font-size: 35px; color:white;">$23.99</h1>
<button class="btn btn-primary" @click="initiateOneSearchPayment">Subscribe</button>
       <div :id="buttonId"></div>
     </div>
    </div>
<div class="col-md-3">
    <div class="cardss card2">
      <h2 style="font-family: 'gl', sans-serif; font-size: 30px; src: url('fonts/gl.otf');">PLATINUM</h2>
      <hr class="yellow-line">

      <p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px;color:white;">UPTO 4 SEARCHES PER MONTH</p>
      
      <p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px;color:white;">FREE TENANT APPLICATION</p>
      
      <p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px;color:white;">FREE STANDARD PROVISON/STATE LEASE AGREEMENT AUTO FILL(COMING SOON)<p>
      
      <p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px;color:white;">FREE INPUT OF TENANT RENTAL HISTORY FROM YOU AS THE LANDLORDS</h3>
      <h1 style="font-family: 'Argrandir',Arial, sans-serif; font-size: 35px;color:white;">$75</h1>
	        <button class="btn btn-primary" @click="initiateFourSearchesPayment">Subscribe</button>    
</div>
</div>
<div class="col-md-3">
    <div class="cardss card3">
      <h2>GOLD</h2>
      <hr class="yellow-line">
<p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px;color:white;">unlimited free rental listing<p>

<p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px;color:white;">Free tenant application</p>

<p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px;color:white;">Free standard provision / state lease agreement Autpo fill (coming soon)</p>
<p style="font-family: 'Argrandir',Arial, sans-serif; font-size: 14px;color:white;">Free use of WA Tenant Bureau Logo to place on your site</p>
<h1 style="font-family: 'Argrandir',Arial, sans-serif; font-size: 35px;color:white;">$175</h1>
        <button class="btn btn-primary" @click="initiateUnlimitedSearchesPayment">Subscribe</button>   
 </div>
  </div>
</div>


</div>
</template>
<script>
export default{
//import axios from 'axios';
//  layout: 'auth',
  middleware: 'auth',
 data() {
    return {
      loading:false,
      buttonId: `paypal-button-container-P-0YR47022KF8562521MQXUSWA`,    
};
  },


mounted(){
function getUrlParameter(name) {
      name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
      const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      const results = regex.exec(window.location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    const user_login_id = getUrlParameter('user_login_id');
    const paymentId = getUrlParameter('paymentId');
    const token = getUrlParameter('token');
    const PayerID = getUrlParameter('PayerID');

    // Construct request data
    const requestData = {
      user_login_id: user_login_id,
      paymentId: paymentId,
      token: token,
      PayerID: PayerID
    };

    // Make the API request
    this.$axios.$get('https://api.watenantbureau.com/api/paypal/success', requestData)
      .then(response => {
        // Handle success response
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });


	    console.log('test auth:',this.$auth.user)
    const script = document.createElement('script');
    script.setAttribute('src', 'https://www.paypal.com/sdk/js?client-id=AfHFyEVLXjwHWoh8Q2fQhvgg_GnAS2uBKmEAAgmtcqRgpTm8H15t5Du9niD3nYva1G8DSmPyvctab_qevault=true&intent=subscription');
    script.setAttribute('data-sdk-integration-source', 'button-factory');

    script.setAttribute('data-sdk-integration-source', 'button-factory');
    script.onload = () => {
      paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'blue',
          layout: 'vertical',
          label: 'subscribe'
        },
        createSubscription: function(data, actions) {
          return actions.subscription.create({
            /* Creates the subscription */
            payment_type: 'one_search'
          });
        },
        onApprove: (data, actions)=> {
          this.subscribePlan(data)
        }
      }).render(`#${this.buttonId}`);
    };
    document.head.appendChild(script);

},


  methods: {
	


 initiateOneSearchPayment() {
      this.initiatePayment('one_search');
    },
    initiateFourSearchesPayment() {
      this.initiatePayment('four_searches');
    },
    initiateUnlimitedSearchesPayment() {
      this.initiatePayment('unlimitied_searches');
    },

	
async subscribePlan(data){
      let obj={
        plan_type:'one_search',
        user_login_id:this.$auth.user.user_id,
        ...data
      }
      this.loading=true
      try{
        let response= await this.$axios.$post('/paypal/success',obj)
        if(response){
          this.loading=false
          if(response.status=='success'){
            this.$toast.success(response.message,{duration:2000,fitToScreen:true});
            this.$router.push('/landlord/tenant-search')
          }
        }
      }catch(error){
        this.loading=false
        this.$toast.error(error.response.data,{duration:5000,fitToScreen:true});
      }
    },	

    initiatePayment(subscriptionType) {
      // Replace with the actual endpoint URL for subscription initiation
      const apiEndpoint = 'https:///createNewPayment';
		
      // Replace with the actual success URL
      const successUrl = 'https://portal.watenantbureau.com/landlord/payments-history';
const user_login_id=this.$auth.user.user_login_id;
      // Replace with the necessary data for the API request based on the subscription type
      const requestData = {
        payment_type: subscriptionType,
	success_url: successUrl,
        user_login_id:user_login_id,
      };

      // Make the API request using Axios
      this.$axios.$post('/paypal/pay',requestData)
        .then(response => {
          // Handle the response from the server
          console.log(response);	
	const paypalPaymentLink = response.payment_link;

          // Redirect the user to the PayPal sandbox checkout page
          window.location.href = paypalPaymentLink;	
		
          //this.SuccessURL();
      //window.location.href = `https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=${paypalToken}`;         

        })
        .catch(error => {
          // Handle errors
          console.error('Error making API request:', error);
        });
    },
 handleSuccessURL() {
      const hashParams = window.location.hash.substring(1);
      const urlParams = new URLSearchParams(hashParams);

      // Extract parameters from the hash fragment
      const payerID = urlParams.get('PayerID');
      const paymentID = urlParams.get('paymentId');
      const token = urlParams.get('token');
      const userLoginID = this.$auth.user.user_login_id;

      // Make the API request to /api/success with the extracted parameters
      this.$axios
        .get(`/api/success?PayerID=${payerID}&paymentId=${paymentID}&token=${token}&login_user_id=${userLoginID}`)
        .then(response => {
          console.log('Successfully hit /api/success on the backend:', response.data);
          // Handle any further actions based on the response
        })
        .catch(error => {
          console.error('Error hitting /api/success on the backend:', error);
        });
    },

 subscribe(subscriptionID, orderID, facilitatorAccessToken, price, type) {
      const requestBody = {
        subscriptionID,
        orderID,
        facilitatorAccessToken,
        paymentSource: 'paypal',
        login_user_id: '$auth_login_id',
        // Add other required parameters based on your API
      };

      // Make an API call with Axios
      this.$axios.$post('/paypal/subscribe', requestBody)
        .then(response => {
          console.log('Subscription successful:', response.data);
		const paypalPaymentLink = response.payment_link;
          window.location.href = paypalPaymentLink;          
// Handle success, e.g., show a success message to the user
        })
        .catch(error => {
          console.error('Subscription failed:', error);
          // Handle error, e.g., show an error message to the user
        });
    },
  
	generateRandomString() {
      // Function to generate a random string
      const length = 16;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    },

 
  }
};
</script>
<style>

.container {
  max-width: 100%;
  padding: 0 20px; /* Add some padding to the sides */
}


.cards {
  display: flex;
   justify-content: center;
  

}

.cardss {
  


  padding: 20px;
  border: 1.5px solid yellow;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 10px;
  height: 100%;
  position: relative;
  background: rgb(0, 212, 255);
  background: rgb(0, 212, 255);
  background: linear-gradient(180deg, rgba(0, 212, 255, 1) 0%, rgba(121, 121, 138, 1) 0%, rgba(0, 0, 0, 1) 100%);
  color: white;
  font-size: 13px;
}

.card h2 {
  font-size: 22px;
  color: yellow;
}

.card1 {
  
  
  background-color: red;
  text-align: center;
  z-index: "";
  
}

.card2 {
  text-align: center;
  
  padding: 30px;
  
  z-index: 1;

}

.card3 {
  
  background-color: red;
  text-align: center;
  z-index: 0;
  
}

.yellow-line {
  margin-top: 10px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid yellow;
  width: 100%;
}

@media(max-width:767px) {


  .cards {
    flex-direction: column;
	align-items:center;    

  }
.cardss {
    width: calc(100% - 20px); /* Adjust width for mobile */
  }

}

</style>
