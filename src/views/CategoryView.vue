<template>
  <div class="container">
    <h1 class="category-title">{{category}}</h1>
    <div class="row">
      <div class="col-12 col-md-6">
        <BaseSelect
          label="Sort by"
          name="sort"
          :options="sortOptions"
          @change="handleSortChange"
        />
      </div>
    </div>
    <LoadingSpinner v-if="isLoading" />
    <div v-else class="container">
      <div class="row">
        <div
          v-for="product in sortedProducts"
          :key="product.id"
          class="col-xl-4 col-md-6 col-12 pt-3 d-flex justify-content-center align-items-center"
        >
          <CardItem :item="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductsInCategory } from "@/api.js";
import CardItem from "@/components/molecules/CardItem.vue";
import LoadingSpinner from "@/components/atoms/LoadingSpinner.vue";
import BaseSelect from "@/components/atoms/BaseSelect.vue";

export default {
  name: "CategoryView",
  data() {
    return {
      category: "",
      products: [],
      isLoading: false,

      sortOptions: [
        { value: "title", label: "Name" },
        { value: "price", label: "Price" },
        { value: "rating", label: "Rating" },
      ],
      sortBy: "",
    };
  },
  methods: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        const response = await getProductsInCategory();
        this.products = response.products;
        console.log(this.products[0])
        this.isLoading = false;
      } catch (err) {
        alert(err);
        this.isLoading = false;
      }
    },
    handleSortChange(event) {
      this.sortBy = event.target.value;
    },
  },
  watch: {
    $route(to) {
      this.category = to.params.selectedCategory;
      this.fetchProducts();
    },
  },
  mounted() {
    this.category = this.$route.params.selectedCategory;
    this.fetchProducts();
  },
  components: {
    CardItem,
    LoadingSpinner,
    BaseSelect,
  },
  computed: {
    sortedProducts() {
      let sortedProducts = [...this.products];

      switch (this.sortBy) {
        case "title":
          sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "price":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "rating":
          sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
          break;
      }

      return sortedProducts;
    },
  },
};
</script>

<style>
.category-title {
  text-transform: capitalize;
}

.container {
  margin: 1rem auto;
}
</style>
