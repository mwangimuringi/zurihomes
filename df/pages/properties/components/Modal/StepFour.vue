<template>
  <div>
    <h4>Review Your Information</h4>
    <div class="review-section">
      <!-- Basic and Location Details -->
      <div class="card mb-3">
        <div class="card-header bg-light">Basic and Location Details</div>
        <div class="card-body">
          <!-- Row for Title and Status -->
          <div class="row mb-3">
            <div class="col-md-6 border-bottom">
              <label for="title" class="form-label fw-bold">Title</label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="title"
                :value="formData.title"
              />
            </div>
            <div class="col-md-6 border-bottom">
              <label for="status" class="form-label fw-bold">Status</label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="status"
                :value="formData.status"
              />
            </div>
          </div>
          <!-- Single Row for Address -->
          <div class="row mb-3">
            <div class="col-12 border-bottom">
              <label for="address" class="form-label fw-bold">Address</label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="address"
                :value="formData.address"
              />
            </div>
          </div>
          <!-- Row for Unit, City, Province -->
          <div class="row mb-3">
            <div class="col-md-4 border-bottom">
              <label for="unit" class="form-label fw-bold">Unit</label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="unit"
                :value="formData.addressUnit"
              />
            </div>
            <div class="col-md-4 border-bottom">
              <label for="city" class="form-label fw-bold">City</label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="city"
                :value="formData.city"
              />
            </div>
            <div class="col-md-4 border-bottom">
              <label for="province" class="form-label fw-bold">Province</label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="province"
                :value="formData.province"
              />
            </div>
          </div>
          <!-- Row for ZIP and Community -->
          <div class="row">
            <div class="col-md-4 border-bottom">
              <label for="zip" class="form-label fw-bold">ZIP</label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="zip"
                :value="formData.zip"
              />
            </div>
            <div class="col-md-8 border-bottom">
              <label for="community" class="form-label fw-bold">Community</label>
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="community"
                :value="formData.community"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <!-- Contact Information Section -->
      <div class="card mb-3">
        <div class="card-header bg-light">Contact Information</div>
        <div class="card-body">
          <!-- Row for Phone and Email -->
          <div class="row g-3">
            <div class="col-md-6">
              <label for="phone" class="form-label fw-bold">Phone:</label>
              <input
                type="text"
                class="form-control-plaintext"
                id="phone"
                :value="formData.phone"
                readonly
              />
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label fw-bold">Email:</label>
              <input
                type="email"
                class="form-control-plaintext"
                id="email"
                :value="formData.email"
                readonly
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Property and Additional Details Section -->
      <div class="card mb-3">
        <div class="card-header bg-light">Property and Additional Details</div>
        <div class="card-body">
          <!-- Description -->
          <div class="row mb-3 border-bottom">
            <label for="description" class="col-sm-3 col-form-label fw-bold"
              >Description:</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="description"
                :value="formData.description"
              />
            </div>
          </div>
          <!-- Parking -->
          <div class="row mb-3 border-bottom">
            <label for="parking" class="col-sm-3 col-form-label fw-bold">Parking:</label>
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="parking"
                :value="formData.parking"
              />
            </div>
          </div>
          <!-- Pets Policy -->
          <div class="row mb-3 border-bottom">
            <label for="petsPolicy" class="col-sm-3 col-form-label fw-bold"
              >Pets Dogs:</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="petsDogs"
                :value="petsDogsString"
              />
            </div>
          </div>
          <!-- Smoking Policy -->
          <div class="row mb-3">
            <label for="smokingPolicy" class="col-sm-3 col-form-label fw-bold"
              >Smoking Policy:</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="smokingPolicy"
                :value="formData.smokingPolicy"
              />
            </div>
          </div>
          <!-- More fields can be added following the same structure -->
        </div>
      </div>

      <!-- Features and Amenities Section -->
      <div class="card mb-3">
        <div class="card-header bg-light">Features and Amenities</div>
        <div class="card-body">
          <!-- Features -->
          <div class="row mb-3 border-bottom">
            <label for="features" class="col-sm-3 col-form-label fw-bold"
              >Features:</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="features"
                :value="featuresString"
              />
            </div>
          </div>
          <!-- Utilities Included -->
          <div class="row mb-3 border-bottom">
            <label for="utilitiesIncluded" class="col-sm-3 col-form-label fw-bold"
              >Utilities Included:</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="utilitiesIncluded"
                :value="utilitiesIncludedString"
              />
            </div>
          </div>
          <!-- Building Amenities -->
          <div class="row mb-3 border-bottom">
            <label for="buildingAmenities" class="col-sm-3 col-form-label fw-bold"
              >Building Amenities:</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="buildingAmenities"
                :value="buildingAmenitiesString"
              />
            </div>
          </div>
          <!-- Community Features -->
          <div class="row mb-3 border-bottom">
            <label for="communityFeatures" class="col-sm-3 col-form-label fw-bold"
              >Community Features:</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="communityFeatures"
                :value="selectedCommunityFeaturesString"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="type" class="col-sm-3 col-form-label fw-bold">Type:</label>
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="type"
                :value="selectedTypesString"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Photos -->
      <div class="card">
        <div class="card-header">Photos</div>
        <div class="card-body">
          <div class="photo-preview d-flex flex-wrap">
            <img
              v-for="(photo, index) in photoPreviews"
              :key="index"
              :src="photo"
              class="img-thumbnail m-2"
              alt="Photo preview"
              style="width: 100px; height: auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["formData"]),
    petsDogsString() {
      return this.formData.petsDogs;
    },
    selectedTypesString() {
      if (!this.formData.type || !Array.isArray(this.formData.type)) return "";
      return this.formData.type.join(", ");
    },
    featuresString() {
      if (!this.formData.features || !Array.isArray(this.formData.features)) return "";
      return this.formData.features.join(", ");
    },
    utilitiesIncludedString() {
      // Assuming this.formData.utilities is an array of strings like ["Electricity", "Water"]
      if (!this.formData.utilities || !Array.isArray(this.formData.utilities)) return "";
      return this.formData.utilities.join(", ");
    },

    buildingAmenitiesString() {
      if (!this.formData.building || !Array.isArray(this.formData.building)) return "";
      return this.formData.building.join(", ");
    },
    selectedCommunityFeaturesString() {
      // Ensure communityFeatures is defined and is an array
      if (
        !this.formData.communityFeatures ||
        !Array.isArray(this.formData.communityFeatures)
      )
        return "";
      return this.formData.communityFeatures.join(", ");
    },

    photoPreviews() {
      const previews = this.formData.photos.map((photo) => {
        if (typeof photo === "string") {
          return photo;
        } else {
          return URL.createObjectURL(photo);
        }
      });
      return previews;
    },
  },
  watch: {
    photoPreviews(newVal, oldVal) {
      // Cleanup old blob URLs
      oldVal.forEach(URL.revokeObjectURL);
    },
  },
  beforeUnmount() {
    // Cleanup all blob URLs when component is destroyed
    this.photoPreviews.forEach(URL.revokeObjectURL);
  },
  methods: {
    ...mapActions(["submitProperty"]), // Ensure this action is correctly mapped from Vuex
    submitFormHandler() {
      this.submitProperty()
        .then(() => {
          alert("Property and photos submitted successfully!");
          // Additional success handling, like redirecting or closing the modal
        })
        .catch((error) => {
          // console.error("Submission failed:", error);
          alert("Failed to submit property and photos.");
          // Additional error handling
        });
    },
    formatCheckboxObjectToString(obj) {
      if (!obj) return ""; // Handle null or undefined objects
      return Object.entries(obj)
        .filter(([key, value]) => value)
        .map(([key]) => this.camelCaseToTitleCase(key))
        .join(", ");
    },
    camelCaseToTitleCase(camelCase) {
      if (camelCase) {
        const result = camelCase.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
      }
      return "";
    },
  },
};
</script>

<style scoped>
.review-section {
  border: 1px solid #dee2e6;
  padding: 15px;
  margin-bottom: 20px;
}
.photo-preview img {
  width: 100px; /* Adjust based on your UI requirements */
  height: auto; /* Maintain aspect ratio */
  margin-right: 5px; /* Add some space between images */
}
</style>
