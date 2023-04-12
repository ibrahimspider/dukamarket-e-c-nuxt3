<template>
  <div
    data-aos="zoom-in"
    data-aos-offset="300"
    data-aos-easing="ease-in-out"
  >
    <div class="img-box">
      <img :src="`${product.imageURL}`" @error="loadDefaultImage" alt="" />
      <div class="overlay"></div>
      <div class="tool-box">
        <button><v-icon icon="mdi-cards-heart-outline"></v-icon></button>
        <button>
          <NuxtLink :to="`/products/${product.id}`"
            ><v-icon icon="mdi-eye-outline"></v-icon
          ></NuxtLink>
        </button>
      </div>
    </div>
    <h4>
      <NuxtLink v-if="product.name === null" :to="`/products/${product.id}`">{{
        defaultName
      }}</NuxtLink>
      <NuxtLink v-else :to="`/products/${product.id}`">{{
        product.name
      }}</NuxtLink>
    </h4>
    <div>
      <v-rating
        :model-value="4"
        color="amber"
        density="compact"
        half-increments
        readonly
        size="small"
      ></v-rating>
    </div>
    <span class="mony">$ {{ product.price }}</span>
    <div class="cart-div">
      <v-btn
        :loading="loading"
        class="flex-grow-1 cart"
        height="48"
        variant="tonal"
        @click="addToCaart(product.id)"
      >
        {{ cartBtn }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultImageUrl: "/images/Images-icon.png",
      defaultName: "Product Name",
      loading: false,
      axios: useNuxtApp().$axios,
      baseUrl: "https://limitless-lake-55070.herokuapp.com/",
      cartBtn: "Add To Cart",
    };
  },
  props: ["product"],
  methods: {
    loadDefaultImage(event) {
      event.target.src = this.defaultImageUrl;
    },
    addToCaart(productIdd) {
      if (!this.token) {
        //user is not logged in
        //show some error
      }
      // add to cart
      this.axios
        .post(`${this.baseUrl}cart/add?token=${this.token}`, {
          productId: productIdd,
          quantity: 1,
        })
        .then((res) => {
          if (res.status === 201) {
            this.loading = true;
            this.cartBtn = "Added To Cart";
            setTimeout(() => (this.loading = false), 3000);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
};
</script>
<style scoped lang="scss">
.card {
  transition: all 300ms ease-in-out;
  position: relative;
  margin-bottom: 20px;
  padding: 20px;
  overflow: hidden;
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
    margin-bottom: 7px;
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
  .mony {
    font-weight: bold;
    margin-bottom: 30px;
    display: block;
  }
  .img-box {
    position: relative;
    overflow: hidden;
    min-height: 200px;
    margin-bottom: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .overlay {
      transition: all 400ms ease-in-out;
      position: absolute;
      background-color: rgba(255, 255, 255, 0.226);
      top: 100%;
      left: 0;
      height: 100%;
      width: 100%;
    }
    .tool-box {
      transition: all 400ms ease-in-out;
      position: absolute;
      top: 10px;
      right: -50px;
      button {
        transition: all 300ms ease-in-out;
        background-color: #f5f5f5;
        display: flex;
        margin-bottom: 5px;
        width: 35px;
        height: 35px;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        a {
          text-decoration: none;
          color: #111;
        }
      }
      button:hover {
        background-color: #fa5d2a;
        color: #fff;

        a {
          color: #fff;
        }
      }
    }
  }
  .cart {
    transition: all 500ms ease-in-out;
    background-color: #fa5d2a;
    padding: 8px;
    color: #fff;
    font-weight: bold;
    width: 90%;
    opacity: 0;
  }
  .cart:hover {
    background-color: #fd3f00;
  }
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
.card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>