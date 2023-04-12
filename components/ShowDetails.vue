<template>
  <Head>
    <Title>Nuxt3 - dukamarket - {{ product.name }}</Title>
  </Head>
  <div class="show-details">
    <v-container class="container">
      <v-row no-gutters>
        <v-col class="img-box" cols="12" sm="5">
          <div class="img-shadow">
            <swiper
              :pagination="{
                dynamicBullets: true,
              }"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide v-for="n in 4" :key="n"
                ><div>
                  <img :src="`${product.imageURL}`" alt="" /></div
              ></swiper-slide>
            </swiper>
          </div>
        </v-col>
        <v-col class="product-info" cols="12" sm="7">
          <div class="info">
            <h2 class="name">{{ product.name }}</h2>
            <div class="rating">
              <span
                ><v-rating
                  :model-value="4"
                  color="amber"
                  density="compact"
                  half-increments
                  readonly
                  size="small"
                ></v-rating
              ></span>
              <span>/ No reviews</span>
            </div>
            <h3 class="price">$ {{ product.price }}.00</h3>
            <p class="description">
              {{ product.description }}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quasi
              repellendus sequi tempore laborum nemo perferendis rem vitae
              numquam accusamus magni, blanditiis, fugit obcaecati deserunt
              minus minima eveniet. Velit, itaque?
            </p>
            <div class="cart">
              <div class="cart-input">
                <input type="number" v-model="quantityy" />
                <button @click="plus" class="plus">
                  <v-icon color="green"> mdi-plus </v-icon>
                </button>
                <button @click="minus" class="minus">
                  <v-icon color="red"> mdi-minus </v-icon>
                </button>
              </div>
              <v-btn
                :loading="loading"
                class="add-to-cart"
                height="48"
                variant="tonal"
                @click="addToCaart(product.id, quantityy)"
              >
                {{ cartBtn }}
              </v-btn>
            </div>
            <div class="wish">
              <button class="wish-but">
                <v-icon icon="mdi-cards-heart-outline"></v-icon>
                <span> Add To Wishlist </span>
              </button>
            </div>
            <div class="list-info">
              <span>Order in the next to get it </span>
              <ul>
                <li>Sku: N/A</li>
                <li>Barcode: 321456</li>
                <li>Product Type: Decor</li>
                <li>Availability: Many in stock</li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { Pagination } from "swiper";
const modules = ref([Pagination]);

const axios = useNuxtApp().$axios;
const { id } = useRoute().params;
const { products } = defineProps(["products"]);

const product = computed(() => products.find((product) => product.id == id));
if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

//add to cart function\
let loading = false;
let quantityy = ref(1);
let token = null;

const baseUrl = "https://limitless-lake-55070.herokuapp.com/";
let cartBtn = "Add To Cart";
function plus() {
  quantityy.value++;
}

function minus() {
  if (quantityy.value === 0) {
  } else {
    quantityy.value--;
  }
}
function addToCaart(productId, quantityy) {
  if (!token) {
    //user is not logged in
    //show some error
  }
  // add to cart
  axios
    .post(`${baseUrl}cart/add?token=${token}`, {
      productId,
      quantity: quantityy,
    })
    .then((res) => {
      if (res.status === 201) {
        loading = true;
        cartBtn = "Added To Cart";
        setTimeout(() => (loading = false), 3000);
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
}

onMounted(() => {
  token = localStorage.getItem("token");
});
</script>

<style scoped lang="scss">
.show-details {
  background: #f9f9f9;
  padding: 20px;
  .container {
    max-width: 1490px;
  }
  .img-box {
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    img {
      width: 100%;
    }
  }
  .rating {
    display: flex;
    justify-content: start;
    align-items: center;
    span {
      padding: 0 5px;
      font-size: 13px;
      color: #999;
    }
  }
  .product-info {
    padding: 0 20px;
    .info {
      background: #fff;
      padding: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      .name {
        color: #0068c9;
      }
      .price {
        font-size: 26px;
        border-bottom: 1px solid #ebebeb;
        padding-bottom: 20px;
        margin-bottom: 20px;
      }
      .description {
        color: #666;
        line-height: 25px;
        font-size: 14px;
        margin-bottom: 30px;
      }
    }
    .cart {
      display: flex;
      justify-content: start;
      align-items: center;
      .add-to-cart {
        transition: all 300ms ease-in-out;
        background-color: #fa5d2a;
        border: 1px solid #fa5d2a;
        color: #ffffff;
        width: auto;
        font-size: 13px;
        padding: 0 30px;
        line-height: 50px;
        text-align: center;
        text-transform: uppercase;
      }
      .add-to-cart:hover {
        background-color: #fd3f00;
      }
      .cart-input {
        position: relative;
        padding: 0 10px;
        input {
          border: 1px solid #ebebeb;
          padding: 0 10px;
          line-height: 50px;
          text-align: center;
          outline: none;
        }
        button {
          background: #fff;
          position: absolute;
          line-height: 50px;
          top: 1px;
        }
        .minus {
          left: 15px;
        }
        .plus {
          right: 15px;
        }
      }
    }
    .wish {
      padding: 10px;
      margin-bottom: 20px;
      button {
        transition: all 300ms ease-in-out;
        color: #666;
        font-size: 14px;
      }
      button:hover {
        color: #fa5d2a;
      }
    }
    .list-info {
      padding: 10px;
      span {
        color: #666;
      }
      ul {
        margin-left: 15px;
        padding: 0;
        li {
          line-height: 30px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>>
