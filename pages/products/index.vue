<template>
  <v-container class="container top-categories">
    <div class="wrap_title">
      <h3>All<span>Products</span></h3>
    </div>
    <v-row no-gutters>
      <v-col
        cols="12"
        lg="2"
        md="3"
        sm="4"
        v-for="product in products"
        :key="product.id"
        ><div class="card">
          <ProductBox :product="product" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const { products } = defineProps(["products"]);
useHead({
  title: " dukamarket - Products",
  meta: [{ name: "dukamarket", content: `dukamarket ${products}` }],
});
</script>
  <style scoped lang="scss">
.container {
  max-width: 1490px;
}
.top-categories {
  margin: 40px auto;
  .wrap_title {
    margin-bottom: 10px;
    display: flex;
    border-bottom: 1px solid #ebebeb;
    position: relative;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    .products-arrivals {
      position: absolute;
      right: 0;
      top: 2px;
      a {
        color: #878c8e;
        display: inline-flex;
        font-weight: 400;
        font-size: 14px;
        text-transform: capitalize;
        transition: all 300ms ease-in-out;
        text-decoration: none;
      }
      a:hover {
        color: #fa5d2a;
      }
    }
    h3 {
      color: #fa5d2a;
      margin: 0;
      justify-content: center;
      align-items: center;
      display: flex;
      position: relative;
      text-align: center;
      font-size: 24px;
      padding-bottom: 15px;
      text-transform: capitalize;
      letter-spacing: -0.5px;
      span {
        font-weight: 300;
        margin-left: 10px;
        color: #111;
      }
    }
    h3::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      border-bottom: 2px solid #fa5d2a;
    }
  }

  .card {
    transition: all 300ms ease-in-out;
    position: relative;
    margin-bottom: 20px;
    padding: 20px;
    overflow: hidden;
  }
}
.card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>