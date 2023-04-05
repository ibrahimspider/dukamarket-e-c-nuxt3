<template>
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
    <NuxtLink v-if="product.name === null " :to="`/products/${product.id}`">{{ defaultName }}</NuxtLink>
    <NuxtLink v-else :to="`/products/${product.id}`">{{ product.name }}</NuxtLink>
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
    <button class="cart">ADD TO CART</button>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
const defaultImageUrl = ref("/images/Images-icon.png");
const defaultName = ref("Product Name");
function loadDefaultImage(event) {
  event.target.src = defaultImageUrl.value;
}
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
}
.card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>