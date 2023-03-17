<template>
  <div class="text-center">
    <h1
      class="lg:text-5xl md:text-5xl sm:4xl mb-5 mt-10 green uppercase font-bold"
    >
      My Repositories
    </h1>
    <div v-for="repo in responseData" :key="repo.id" class="shadow-2xl mb-10">
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
          class="border my-3 w-2/4 py-3 rounded text-center text-white uppercase font-bold"
        >
          View More
        </button>
      </router-link>
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
    };
  },
  methods: {
    getData() {
      axios
        .get("https://api.github.com/users/dannyswagg/repos")
        .then((response) => {
          this.responseData = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped></style>
