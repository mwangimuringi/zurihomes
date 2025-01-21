<template>
  <div>
    <!-- Property Details and Policies -->
    <!-- Description -->
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea
        class="form-control"
        id="description"
        v-model="form.description"
        placeholder="Describe the property"
        @input="updateForm"
      ></textarea>
    </div>

    <!-- Parking -->
    <div class="mb-3">
      <label for="parking" class="form-label">Parking</label>
      <select
        class="form-select"
        id="parking"
        v-model="form.parking"
        @change="updateForm"
      >
        <option value="">Select parking type</option>
        <option value="Outdoor">Outdoor</option>
        <option value="Covered">Covered</option>
        <option value="Garage">Garage</option>
        <option value="None">None</option>
      </select>
    </div>

    <!-- Smoking Policy -->
    <div class="mb-3">
      <label for="smokingPolicy" class="form-label">Smoking Policy</label>
      <select
        class="form-select"
        id="smokingPolicy"
        v-model="form.smoking"
        @change="updateForm"
      >
        <option value="">Select smoking policy</option>
        <option value="Smoking">Smoking</option>
        <option value="Non-Smoking">Non-Smoking</option>
      </select>
    </div>

    <!-- Lease Terms -->
    <div class="mb-3">
      <label for="leaseTerms" class="form-label">Lease Terms</label>
      <select
        class="form-select"
        id="leaseTerms"
        v-model="form.lease"
        @change="updateForm"
      >
        <option value="">Select lease term</option>
        <option value="Short Term">Short Term</option>
        <option value="Long Term">Long Term</option>
        <option value="Negotiable">Negotiable</option>
      </select>
    </div>

    <!-- Deposit -->
    <div class="mb-3">
      <label for="deposit" class="form-label">Deposit</label>
      <input
        type="text"
        class="form-control"
        id="deposit"
        v-model="form.deposit"
        placeholder="Enter deposit amount"
        @input="updateForm"
      />
    </div>

    <!-- Incentives -->
    <div class="mb-3">
      <label for="incentives" class="form-label">Incentives</label>
      <input
        type="text"
        class="form-control"
        id="incentives"
        v-model="form.incentives"
        placeholder="Any incentives?"
        @input="updateForm"
      />
    </div>

    <!-- Year Built -->
    <div class="mb-3">
      <label for="yearBuilt" class="form-label">Year Built</label>
      <input
        type="text"
        class="form-control"
        id="yearBuilt"
        v-model="form.yearBuilt"
        placeholder="Year of construction"
        @input="updateForm"
      />
    </div>

    <!-- Suitable for Kids -->
    <div class="row g-3">
      <div class="col-md-6">
        <div class="p-3 border bg-light">
          <h6 class="mb-3">Kids</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="kidsAllowed"
              value="Allowed"
              v-model="form.kids"
            />
            <label class="form-check-label" for="kidsAllowed">Allowed</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="kidsNotAllowed"
              value="Not Allowed"
              v-model="form.kids"
            />
            <label class="form-check-label" for="kidsNotAllowed">Not Allowed</label>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="p-3 border bg-light">
          <h6 class="mb-3">Smoking</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="smokingAllowed"
              value="Allowed"
              v-model="form.smoking"
            />
            <label class="form-check-label" for="smokingAllowed">Allowed</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="smokingNotAllowed"
              value="Not Allowed"
              v-model="form.smoking"
            />
            <label class="form-check-label" for="smokingNotAllowed">Not Allowed</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Suitable for Kids & Pets Policy -->
    <div class="row g-3 mt-1">
      <!-- Pets Cats -->
      <div class="col-md-6">
        <div class="p-3 border bg-light">
          <h6 class="mb-3">Pets Cats</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="petsCatsNegotiable"
              value="Negotiable"
              v-model="form.petsCats"
            />
            <label class="form-check-label" for="petsCatsNegotiable">Negotiable</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="petsCatsNotAllowed"
              value="Not Allowed"
              v-model="form.petsCats"
            />
            <label class="form-check-label" for="petsCatsNotAllowed">Not Allowed</label>
          </div>
        </div>
      </div>

      <!-- Pets Dogs -->
      <div class="col-md-6">
        <div class="p-3 border bg-light">
          <h6 class="mb-3">Pets Dogs</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="petsDogsNegotiable"
              value="Negotiable"
              v-model="form.petsDogs"
            />
            <label class="form-check-label" for="petsDogsNegotiable">Negotiable</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="petsDogsNotAllowed"
              value="Not Allowed"
              v-model="form.petsDogs"
            />
            <label class="form-check-label" for="petsDogsNotAllowed">Not Allowed</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Features & Utilities Included -->
    <div class="row g-3 mt-1">
      <!-- Features -->
      <div class="col-md-6">
        <div class="p-3 border bg-light">
          <h6 class="mb-3">Features</h6>
          <div class="form-check" v-for="(feature, index) in featuresList" :key="index">
            <input
              class="form-check-input"
              type="checkbox"
              :id="feature.id"
              :value="feature.value"
              @change="updateFeatures($event, feature.value)"
            />
            <label class="form-check-label" :for="feature.id">{{ feature.label }}</label>
          </div>
        </div>
      </div>

      <!-- Utilities Included -->
      <div class="col-md-6">
        <div class="p-3 border bg-light">
          <h6 class="mb-3">Utilities Included</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="electricity"
              value="Electricity"
              @change="updateUtilities($event, 'Electricity')"
            />
            <label class="form-check-label" for="electricity">Electricity</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="water"
              value="Water"
              @change="updateUtilities($event, 'Water')"
            />
            <label class="form-check-label" for="water">Water</label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="heat"
              value="Heat"
              @change="updateUtilities($event, 'Heat')"
            />
            <label class="form-check-label" for="heat">Heat</label>
          </div>
          <!-- Add more utilities here with similar structure -->
        </div>
      </div>
    </div>

    <!-- Building Amenities & Community Features -->
    <div class="row g-3 mt-1">
      <!-- Building Amenities -->
      <div class="col-md-4">
        <div class="p-3 border bg-light">
          <h6 class="mb-3">Building Amenities</h6>
          <div
            class="form-check"
            v-for="(amenities, index) in form.amenities"
            :key="index"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :id="amenities.id"
              :value="amenities.value"
              @change="updateAmenities($event, amenities.value)"
            />
            <label class="form-check-label" :for="amenities.id">{{
              amenities.label
            }}</label>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 border bg-light">
          <h6 class="mb-3">Type</h6>
          <div class="form-check" v-for="(type, index) in typeList" :key="index">
            <input
              class="form-check-input"
              type="checkbox"
              :id="type.id"
              :value="type.value"
              @change="updateType($event, type.value)"
            />
            <label class="form-check-label" :for="type.id">{{ type.label }}</label>
          </div>
        </div>
      </div>

      <!-- Community Features -->
      <div class="col-md-4">
        <div class="p-3 border bg-light">
          <h6 class="mb-3">Community Features</h6>
          <div
            class="form-check"
            v-for="(feature, index) in communityFeaturesList"
            :key="index"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :id="feature.id"
              :value="feature.value"
              @change="updateCommunityFeatures($event, feature.value)"
            />
            <label class="form-check-label" :for="feature.id">{{ feature.label }}</label>
          </div>
        </div>
      </div>
      <!-- Test rendering of communityFeaturesList -->
      <!-- <div>{{ communityFeaturesList?.length }} community features available.</div> -->
    </div>

    <!-- Price -->
    <div class="mb-3 mt-2">
      <label for="price" class="form-label">Price</label>
      <input
        type="text"
        class="form-control"
        id="price"
        v-model="form.price"
        placeholder="Monthly rent price"
        @input="updateForm"
      />
    </div>

    <!-- Bedrooms -->
    <div class="mb-3">
      <label for="bedrooms" class="form-label">Bedrooms</label>
      <input
        type="number"
        class="form-control"
        id="bedrooms"
        v-model="form.bedrooms"
        placeholder="Number of bedrooms"
        @input="updateForm"
      />
    </div>

    <!-- Bathrooms -->
    <div class="mb-3">
      <label for="bathrooms" class="form-label">Bathrooms</label>
      <input
        type="number"
        class="form-control"
        id="bathrooms"
        v-model="form.bathrooms"
        placeholder="Number of bathrooms"
        @input="updateForm"
      />
    </div>

    <!-- Square Feet -->
    <div class="mb-3">
      <label for="squareFeet" class="form-label">Square Feet</label>
      <input
        type="number"
        class="form-control"
        id="squareFeet"
        v-model="form.squareFeet"
        placeholder="Total square footage"
        @input="updateForm"
      />
    </div>

    <!-- Furnishing -->
    <div class="mb-3">
      <label for="furnishing" class="form-label">Furnishing</label>
      <select
        class="form-select"
        id="furnishing"
        v-model="form.furnishing"
        @change="updateForm"
      >
        <option value="">Select furnishing status</option>
        <option value="Furnished">Furnished</option>
        <option value="Unfurnished">Unfurnished</option>
        <option value="Partially Furnished">Partially Furnished</option>
      </select>
    </div>

    <!-- Availability -->
    <div class="mb-3">
      <label for="availability" class="form-label">Availability</label>
      <input
        type="date"
        class="form-control"
        id="availability"
        v-model="form.availability"
        @input="updateForm"
      />
    </div>
    <div class="mb-3">
      <label for="activated" class="form-label">Activation</label>
      <input
        type="date"
        class="form-control"
        id="activated"
        v-model="form.activated"
        @input="updateForm"
      />
    </div>
    <div class="mb-3">
      <label for="expiration" class="form-label">Expiration</label>
      <input
        type="date"
        class="form-control"
        id="expiration"
        v-model="form.expiration"
        @input="updateForm"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      form: {
        description: "",
        parking: "",
        kidsPolicy: "",
        lease: "",
        smoking: "",
        petsDogs: "",
        petsCats: "",
        utilities: {
          // Initialize each utility here
          electricity: false,
          // Repeat for other utilities
        },
        building: [], // Initialize as empty array
        amenities: [
          { id: "fitnessarea", value: "Fitness Area", label: "Fitness Area" },
          { id: "elevator", value: "Elevator", label: "Elevator" },
          { id: "secureentry", value: "Secure Entry", label: "Secure Entry" },
          // Add other amenities here...
        ],
        communityFeatures: [],
        features: [],

        type: [],
      },
      communityFeaturesList: [
        { id: "bikePaths", value: "Bike Paths", label: "Bike Paths" },
        { id: "bus", value: "Bus", label: "Bus" },
        { id: "lake", value: "Lake", label: "Lake" },
        { id: "playgroundPark", value: "Playground/Park", label: "Playground/Park" },
        { id: "pool", value: "Pool", label: "Pool" },
        { id: "shoppingCenter", value: "Shopping Center", label: "Shopping Center" },
        { id: "sportsComplex", value: "Sports Complex", label: "Sports Complex" },
        { id: "tennisCourts", value: "Tennis Courts", label: "Tennis Courts" },
        { id: "trainAccess", value: "Train Access", label: "Train Access" },
        // Add other community features here...
      ],
      featuresList: [
        {
          id: "laundryInSuite",
          value: "Laundry - In Suite",
          label: "Laundry - In Suite",
        },
        { id: "dishwasher", value: "Dishwasher", label: "Dishwasher" },
        { id: "fridge", value: "Fridge", label: "Fridge" },
        // Add other features here...
      ],
      typeList: [
        { id: "mainFloor", value: "Main Floor", label: "Main Floor" },
        { id: "condoUnit", value: "Condo Unit", label: "Condo Unit" },
        { id: "roomForRent", value: "Room For Rent", label: "Room For Rent" },
        // Add other types here...
      ],
    };
  },
  methods: {
    ...mapMutations(["updateFormData"]),
    updateForm() {
      this.updateFormData({ ...this.form });
    },
    updateUtilities(event, utility) {
      const { checked } = event.target;
      // Ensure 'this.form.utilities' is treated as an array
      this.form.utilities = Array.isArray(this.form.utilities) ? this.form.utilities : [];

      if (checked && !this.form.utilities.includes(utility)) {
        this.form.utilities.push(utility);
      } else if (!checked) {
        this.form.utilities = this.form.utilities.filter((u) => u !== utility);
      }
    },

    updateAmenities(event, amenityValue) {
      const { checked } = event.target;
      if (checked && !this.form.building.includes(amenityValue)) {
        this.form.building.push(amenityValue);
      } else if (!checked) {
        this.form.building = this.form.building.filter((a) => a !== amenityValue);
      }
    },
    updateCommunityFeatures(event, featureValue) {
      const { checked } = event.target;
      if (checked && !this.form.communityFeatures.includes(featureValue)) {
        this.form.communityFeatures.push(featureValue);
      } else if (!checked) {
        this.form.communityFeatures = this.form.communityFeatures.filter(
          (f) => f !== featureValue
        );
      }
    },
    updateFeatures(event, featureValue) {
      const { checked } = event.target;
      if (checked && !this.form.features.includes(featureValue)) {
        this.form.features.push(featureValue);
      } else if (!checked) {
        this.form.features = this.form.features.filter((f) => f !== featureValue);
      }
    },
    updateType(event, typeValue) {
      const { checked } = event.target;
      if (checked && !this.form.type.includes(typeValue)) {
        this.form.type.push(typeValue);
      } else if (!checked) {
        this.form.type = this.form.type.filter((t) => t !== typeValue);
      }
    },
  },
  watch: {
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
/* Add any specific styles for StepTwo here */
</style>
