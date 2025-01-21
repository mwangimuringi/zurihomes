<template>
  <div class="container mt-5 px-2">
    <div class="mb-2 d-flex justify-content-between align-items-center">
      <div class="position-relative">
        <input v-model="searchQuery" @keyup.enter="searchByPhone" class="form-control" placeholder="Search by phone" />
        <span class="position-absolute search">
          <i class="fa fa-search" @click="searchByPhone"></i>
        </span>
      </div>
     <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#formModal">
      Add New
    </button>
    
       
  </div>
    <div class="table-responsive">
      <table class="table table-responsive table-border table-striped">
        <thead>
          <tr class="bg-light">
            <th scope="col" width="20%">Title</th>
            <th scope="col" width="20%">Address</th>
            <th scope="col" width="20%">City</th>
            <th scope="col" width="20%">Province</th>
            <th scope="col" width="20%">Phone</th>
            <th scope="col" width="20%">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="property in filteredProperties" :key="property.id">
            <td>{{ property.title }}</td>
            <td>{{ property.address }}</td>
            <td>{{ property.city }}</td>
            <td>{{ property.province }}</td>
            <td>{{ property.phone }}</td>
            <td>{{ property.email }}</td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-between align-items-center">
        <div class="text-start">Page {{ currentPage }} of {{ totalPages }}</div>
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-end mb-0">
            <!-- mb-0 to remove margin-bottom -->
            <li class="page-item" :class="{ disabled: currentPage <= 1 }">
              <a class="page-link" href="#" @click.prevent="changePage(-1)">Previous</a>
            </li>
            <li
              v-for="page in visiblePages"
              :key="page"
              class="page-item"
              :class="{ active: page === currentPage }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="changePage(page - currentPage)"
                >{{ page }}</a
              >
            </li>
            <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
              <a class="page-link" href="#" @click.prevent="changePage(1)">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProperties } from "./propertyService"; 

export default {
  data() {
    return {
      properties: [],
      currentPage: 1,
      totalPages: 0,
      searchQuery: "",
      loading: false,
	showModal: false   
 };
  },

 components: {
    
  },
  computed: {
    filteredProperties() {
      if (!this.searchQuery) return this.properties;
      return this.properties.filter((property) =>
        property.phone.includes(this.searchQuery)
      );
    },
    visiblePages() {
      let pages = [];
      const pagesToShow = 3; // Adjust based on how many pages you want to show
      let startPage = Math.max(this.currentPage - Math.floor(pagesToShow / 2), 1);
      let endPage = startPage + pagesToShow - 1;

      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = Math.max(endPage - pagesToShow + 1, 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    },
  },
  methods: {
    async fetchPropertiesData() {
      const { properties, currentPage, totalPages } = await fetchProperties(
        this.currentPage,
        this.searchQuery.trim()
      );
      this.properties = properties;
      this.currentPage = currentPage;
      this.totalPages = totalPages;
    },
    changePage(amount) {
      this.currentPage += amount;
      this.fetchPropertiesData();
    },
    async searchByPhone() {
      this.loading = true;
      // Reset current page to 1 to start search from the first page
      this.currentPage = 1;

      try {
        const { properties, currentPage, totalPages, totalRecords } = await fetchProperties(this.currentPage, this.searchQuery.trim());
        this.properties = properties;
        this.currentPage = currentPage;
        this.totalPages = totalPages;
        // Optionally handle totalRecords if needed for pagination or info
      } catch (error) {
        console.error('Error searching properties:', error);
        // Reset properties if search fails or no results found
        this.properties = [];
      } finally {
        this.loading = false;
      }
    },
      },
      mounted() {
        this.fetchPropertiesData();
      },
    };
</script>

<style scoped>
.search {
  top: 6px;
  left: 10px;
  color: blue;
}
.search:hover {
  cursor: pointer;
  color: black;
}

.form-control {
  border: none;
  padding-left: 32px;
}

.form-control:focus {
  border: none;
  box-shadow: none;
}

.table-responsive {
  padding: 0 10px 10px 10px;
}

th {
  color: blue;
}
</style>

