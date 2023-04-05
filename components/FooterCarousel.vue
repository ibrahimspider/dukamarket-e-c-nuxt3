<template>
  <div class="footer-carousel">
    <swiper
      :slidesPerView="7"
      :spaceBetween="20"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '320': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '440': {
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
      <swiper-slide class="card" v-for="item in items" :key="item">
        <div class="box">
          <img :src="`/images/${item}`" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
  <script>
import { Pagination } from "swiper";

export default {
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      items: [
        "footer-1.jpg",
        "footer-2.jpg",
        "footer-3.jpg",
        "footer-4.jpg",
        "footer-5.jpg",
        "footer-6.jpg",
        "footer-7.jpg",
        "footer-8.jpg",
      ],
    };
  },
};
</script>
  
  <style scoped lang="scss">
.footer-carousel {
  * {
    margin: 0 !important;
    padding: 0 !important;
  }
  .box {
    width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>