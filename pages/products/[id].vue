<template>
  <div>
    <ShowDetails :products="products" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
// fetch the product
const { data: products } = await useFetch(
  "https://limitless-lake-55070.herokuapp.com/product/"
);
</script>
<style>
</style>