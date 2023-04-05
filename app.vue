<template>
  <NuxtLayout>
    <NuxtPage :categories="categories" :products="products"/>
  </NuxtLayout>
</template>

<script setup>
const { data: categories } = await useFetch(
  "https://limitless-lake-55070.herokuapp.com/category/"
);
const { data: products } = await useFetch(
  "https://limitless-lake-55070.herokuapp.com/product/"
);
definePageMeta({
  key: (route) => route.fullPath,
});
</script>

<style lang="scss" scoped>
</style>