<template>
  <v-container class="container top-categories">
    <div class="wrap_title">
      <h3>Top<span>Selling Products 2023</span></h3>
      <div class="products-arrivals">
        <NuxtLink to="/products">
          View All Products
          <span><v-icon icon="mdi-chevron-right"></v-icon></span
        ></NuxtLink>
      </div>
    </div>
    <swiper
      :slidesPerView="1"
      :spaceBetween="8"
      :autoplay="{
        delay: 2500,
      }"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="card" v-for="index in productSize" :key="index">
        <ProductBox :product="products[index - 1]" />
      </swiper-slide>
    </swiper>
  </v-container>
</template>
<script setup>
const { products } = defineProps(["products"]);
const productSize = Math.min(12, products.length);
</script>
<style scoped lang="scss">
.container {
  max-width: 1490px;
}
.top-categories {
  margin-bottom: 50px;
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
  .card:hover {
    .overlay {
      top: 0;
    }
    .tool-box {
      right: 5px;
    }
    .cart {
      opacity: 1;
    }
  }
}
.card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>