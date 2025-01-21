
<template>
  <div class="modal fade" id="formModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="progress" style="height: 30px">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            :style="{ width: progressWidth }"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="modal-header">
          <h5 class="modal-title">Add Property</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- Dynamically inject step component based on currentStep -->
          <component
            :is="currentStepComponent"
            @update-step="handleStepUpdate"
          ></component>
        </div>
        <div class="modal-footer">
          <button
            v-if="currentStep > 1"
            @click="prevStep"
            class="btn btn-outline-secondary"
          >
            Back
          </button>
          <button
            v-if="currentStep < totalSteps"
            @click="nextStep"
            class="btn btn-outline-primary"
          >
            Next
          </button>
          <button
            v-if="currentStep === totalSteps"
            @click="submitFormHandler"
            class="btn btn-outline-success"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import StepOne from "./StepOne.vue";
import StepTwo from "./StepTwo.vue";
import StepThree from "./StepThree.vue";
import StepFour from "./StepFour.vue";

export default {
  computed: {
    ...mapState(["formData"]),
  },
  components: {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
  },
  data() {
    return {
      currentStep: 1,
      totalSteps: 4, // Reflects the total number of steps, including the review step
    };
  },
  computed: {
    progressWidth() {
      return `${(this.currentStep / this.totalSteps) * 100}%`;
    },
    currentStepComponent() {
      switch (this.currentStep) {
        case 1:
          return "StepOne";
        case 2:
          return "StepTwo";
        case 3:
          return "StepThree";
        case 4:
          return "StepFour";
        default:
          return null;
      }
    },
  },
  methods: {
    ...mapActions(["submitProperty"]), // Assuming 'submitForm' is an action in your Vuex store
    handleStepUpdate(data) {
      // Optional: Handle step-specific updates or validations here
    },
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    // Inside methods of FormModal.vue
    async submitFormHandler() {
      // Assuming 'submitForm' in Vuex actions returns a Promise
      try {
        await this.submitProperty(); // This should be the action from Vuex
        // console.log("Form submitted successfully");
        alert("Form submitted successfully");
        // Perform any success handling here, e.g., closing the modal
      } catch (error) {
        console.error("Form submission failed", error);
        alert("Form submission failed");
        // Handle errors, e.g., displaying error messages to the user
      }
    },
  },
};
</script>

<style scoped>
/* Style adjustments as necessary */
</style>

