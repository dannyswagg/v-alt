<template>
  <div class="shadow-2xl px-5 py-10 rounded font-bold">
    <h1 class="uppercase green text-4xl my-5">Repository Details</h1>
    <p class="font-bold">Repository ID: {{ repository.id }}</p>
    <h1>Full Name: {{ repository.full_name }}</h1>
    <h1>Language: {{ repository.language }}</h1>
    <h2>Description: {{ repository.description }}</h2>
    <h2>Visibility: {{ repository.visibility }}</h2>
    <h3>Allow Fork: {{ repository.allow_forking }}</h3>
    <h3>Size: {{ repository.size }} kb</h3>
    <button
      @click="redirectToHome"
      class="border my-3 px-4 py-2 rounded hover:bg-[#0c1f2c] hover:text-white transition duration-700 ease-in-out"
    >
      Go Home
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repository: [],
    };
  },
  created() {
    axios
      .get(
        `https://api.github.com/repos/dannyswagg/${this.$route.params.repoName}`
      )
      .then((response) => {
        this.repository = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
  mounted() {},
};
</script>
