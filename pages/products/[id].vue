<template>
  <div>
    <ShowDetails :products="products" />
  </div>
</template>

<script setup>
const { products } = defineProps(["products"]);
</script>
<style>
</style>