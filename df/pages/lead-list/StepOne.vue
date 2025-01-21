<template>
  <div>
    <!-- Basic Information -->
    <div class="mb-3">
      <label for="title" class="form-label">Property Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        v-model="form.title"
        placeholder="Enter property title"
        @input="updateForm"
      />
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Status</label>
      <select class="form-select" id="status" v-model="form.status" @change="updateForm">
        <option value="">Select Status</option>
        <option value="Active">Active</option>
        <option value="Not Active">Not Active</option>
        <!-- Add more status options as needed -->
      </select>
    </div>

    <!-- Location Details -->
    <div class="mb-3">
      <label for="address" class="form-label">Address</label>
      <input
        type="text"
        class="form-control"
        id="address"
        v-model="form.address"
        placeholder="Enter address"
        @input="updateForm"
      />
    </div>
    <div class="mb-3">
      <label for="addressUnit" class="form-label">Unit (optional)</label>
      <input
        type="text"
        class="form-control"
        id="addressUnit"
        v-model="form.addressUnit"
        placeholder="Enter unit number"
        @input="updateForm"
      />
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="city" class="form-label">City</label>
        <input
          type="text"
          class="form-control"
          id="city"
          v-model="form.city"
          placeholder="Enter city"
          @input="updateForm"
        />
      </div>
      <div class="col-md-4 mb-3">
        <label for="province" class="form-label">Province</label>
        <input
          type="text"
          class="form-control"
          id="province"
          v-model="form.province"
          placeholder="Enter province"
          @input="updateForm"
        />
      </div>
      <div class="col-md-2 mb-3">
        <label for="zip" class="form-label">ZIP</label>
        <input
          type="text"
          class="form-control"
          id="zip"
          v-model="form.zip"
          placeholder="Enter ZIP code"
          @input="updateForm"
        />
      </div>
    </div>
    <div class="mb-3">
      <label for="community" class="form-label">Community</label>
      <input
        type="text"
        class="form-control"
        id="community"
        v-model="form.community"
        placeholder="Enter community"
        @input="updateForm"
      />
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="form.email"
          @input="updateForm"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input
          type="tel"
          class="form-control"
          id="phone"
          v-model="form.phone"
          @input="updateForm"
        />
      </div>
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL (Optional)</label>
      <input
        type="url"
        class="form-control"
        id="url"
        v-model="form.url"
        @input="updateForm"
      />
    </div>
    <!-- Include latitude and longitude if necessary -->
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="latitude" class="form-label">Latitude</label>
        <input
          type="number"
          class="form-control"
          id="latitude"
          v-model="form.latitude"
          @input="updateForm"
        />
      </div>
      <div class="col-md-6 mb-3">
        <label for="longitude" class="form-label">Longitude</label>
        <input
          type="number"
          class="form-control"
          id="longitude"
          v-model="form.longitude"
          @input="updateForm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      form: {
        title: "",
        status: "",
        address: "",
        addressUnit: "",
        city: "",
        province: "",
        zip: "",
        community: "",
        email: "",
        phone: "",
        url: "",
        latitude: "",
        longitude: "",
      },
    };
  },
  methods: {
    ...mapMutations(["updateFormData"]),
    updateForm() {
      this.updateFormData({ ...this.form });
    },
  },
  watch: {
    // Reactively update Vuex store when form data changes
    form: {
      handler(newVal) {
        this.updateFormData(newVal);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
/* Add any specific styles for StepOne here */
</style>

