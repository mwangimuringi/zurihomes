<template>
  <div>
    <div class="mb-3">
      <label for="photos" class="form-label">Photos</label>
      <input
        type="file"
        class="form-control"
        id="photos"
        multiple
        @change="handleFiles"
        accept="image/*"
      />
    </div>
    <div class="photo-preview d-flex flex-wrap justify-content-start">
      <div
        v-for="(photo, index) in photoFiles"
        :key="index"
        class="photo-item position-relative"
      >
        <span class="remove-icon" @click="removePhoto(index)">x</span>
        <img :src="photo.preview" class="img-thumbnail" alt="preview" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photoFiles: [],
    };
  },
  methods: {
    handleFiles(event) {
      this.photoFiles = []; // Clear existing files to reset the selection
      const files = Array.from(event.target.files);
      if (files.length > 0) {
        this.$store.commit("updateFormData", { photos: files });
      } else {
        console.log("No files selected.");
      }
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.photoFiles.push({
            file: file,
            preview: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      });
      this.$store.commit("updateFormData", { photos: files });
    },
    removePhoto(index) {
      this.photoFiles.splice(index, 1);
      // Update Vuex store after removing a photo
      const updatedFiles = this.photoFiles.map((item) => item.file);
      this.$store.commit("updateFormData", { photos: updatedFiles });
    },
  },
};
</script>

<style scoped>
.photo-preview {
  gap: 0.5rem;
}

.photo-item {
  flex-basis: calc(33.333% - 0.5rem);
  max-width: calc(33.333% - 0.5rem);
  display: flex;
  justify-content: center;
  position: relative;
}

.photo-item img {
  height: 100px;
  width: 100px;
  object-fit: cover;
}

.remove-icon {
  position: absolute;
  top: -10px;
  right: 70px;
  color: red;
  cursor: pointer;
}
</style>

