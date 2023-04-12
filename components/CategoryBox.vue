<template>
  <div
    data-aos="zoom-in"
    data-aos-offset="300"
    data-aos-easing="ease-in-out"
  >
    <div class="img-box">
      <img :src="`${categorie.imageUrl}`" alt="" @error="loadDefaultImage" />
      <div class="overlay"></div>
    </div>
    <h4>
      <NuxtLink
        v-if="categorie.categoryName === ''"
        :to="`/categories/${categorie.id}`"
        >{{ defaultName }}</NuxtLink
      >
      <NuxtLink v-else :to="`/categories/${categorie.id}`">{{
        categorie.categoryName
      }}</NuxtLink>
    </h4>
    <div class="cart-div">
      <NuxtLink :to="`/categories/${categorie.id}`" class="cart"
        >SHOW Products</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const { categorie } = defineProps(["categorie"]);
const defaultImageUrl = ref("/images/Images-icon.png");
const defaultName = ref("Categories Name");
function loadDefaultImage(event) {
  event.target.src = defaultImageUrl.value;
}
</script>

<style scoped lang="scss">
.top-categories {
  margin-bottom: 100px;
  .card {
    img {
      width: 100%;
    }
    .img {
      width: 50%;
    }
    h4 {
      font-size: 18px;
      line-height: 20px;
      letter-spacing: 0em;
      margin: 0;
      margin-bottom: 40px;
      a {
        transition: all 300ms ease-in-out;
        color: var(--color-name-product);
        font-size: 14px;
        line-height: 16px;
        width: 100%;
        display: flex;
        text-transform: uppercase;
        text-decoration: none;
      }
      a:hover {
        color: #fa5d2a;
      }
    }
    .img-box {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      padding: 20px;
      .overlay {
        transition: all 400ms ease-in-out;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.226);
        top: 100%;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
    .cart {
      display: block;
      text-align: center;
      transition: all 500ms ease-in-out;
      background-color: #fa5d2a;
      padding: 8px;
      color: #fff;
      font-weight: bold;
      width: 90%;
      opacity: 0;
      text-decoration: none;
    }
    .cart:hover {
      background-color: #fd3f00;
    }
  }
  .card:hover {
    .overlay {
      top: 0;
    }
    .cart {
      opacity: 1;
    }
  }
}
</style>