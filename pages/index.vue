<template>
  <div>
    <Carousel />
    <Header />
    <TopProduct :products="products" />
    <Banner />
    <TopCategories :categories="categories" />
    <Customers />
    <TopFooter />
  </div>
</template>
<script setup>
const { data: products } = await useFetch(
  "https://limitless-lake-55070.herokuapp.com/product/"
);

const { data: categories } = await useFetch(
  "https://limitless-lake-55070.herokuapp.com/category/"
);

useHead({
  title: " dukamarket - Home",
  meta: [{ name: "dukamarket", content: `dukamarket ecommerce` }],
});
</script>
