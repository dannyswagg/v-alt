<template>
  <div class="text-center">
    <h1
      class="lg:text-5xl md:text-5xl sm:4xl mb-5 mt-10 green uppercase font-bold"
    >
      My Repositories
    </h1>
    <div v-if="loading" class="text-3xl animate-bounce py-20">Loading...</div>
    <div
      v-else
      v-for="repo in currentPageItems"
      :key="repo.id"
      class="shadow-2xl mb-10"
    >
      <div
        class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-5 gap-x-5 rounded px-10 mb-5 leading-8"
      >
        <div>
          <img
            class="rounded"
            :src="repo.owner.avatar_url"
            height="150"
            width="150"
          />
        </div>
        <div class="text-left font-bold">
          <h1>Name: {{ repo.name }}</h1>
          <h2>Date Created: {{ new Date(repo.created_at) }}</h2>
        </div>
      </div>
      <router-link :to="`/repos/` + repo.name">
        <button
          class="border my-3 w-2/4 py-3 rounded text-center text-white uppercase font-bold hover:bg-[#0c1f2c] transition duration-700 ease-in-out"
        >
          View More
        </button>
      </router-link>
    </div>
    <div class="py-5 font-bold">
      <button
        class="text-[#0c1f2c] uppercase border border-[#fffff] rounded px-3 hover:bg-[#0c1f2c] hover:text-white transition duration-700 ease-in-out"
        @click="currentPage--"
        :disabled="currentPage === 1"
      >
        Prev
      </button>
      <span class="font-bold text-[#0c1f2c]">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      <button
        class="ml-1 text-[#0c1f2c] uppercase border border-[#fffff] rounded px-3 hover:bg-[#0c1f2c] hover:text-white transition duration-700 ease-in-out"
        @click="currentPage++"
        :disabled="currentPage === totalPages"
        :class="{ disabled: currentPage === totalPages }"
      >
        Next
      </button>
    </div>
  </div>
  <RouterView />
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      responseData: [],
      currentPage: 1,
      perPage: 2,
      totalPages: 0,
      loading: false,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get(
          "https://api.github.com/users/dannyswagg/repos"
        );
        this.responseData = response.data;
        this.totalPages = Math.ceil(this.responseData.length / this.perPage);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    currentPageItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.responseData.slice(start, end);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped></style>
