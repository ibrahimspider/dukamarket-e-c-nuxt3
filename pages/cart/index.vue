<template>
  <v-container class="container cart">
    <div class="wrap_title">
      <h3>Cart</h3>
    </div>
    <v-row no-gutters>
      <v-col cols="12" lg="8" md="12" sm="12" class="pa-2">
        <div class="cart-box">
          <v-row no-gutters>
            <v-col cols="12" lg="6" md="4" sm="12" class="box"
              ><h4>PRODUCT</h4></v-col
            >
            <v-col cols="12" lg="2" md="2" sm="12" class="box"
              ><h4>Price</h4></v-col
            >
            <v-col cols="12" lg="2" md="2" sm="12" class="box"
              ><h4>QUANTITY</h4></v-col
            >
            <v-col cols="12" lg="2" md="2" sm="12" class="box"
              ><h4>Total</h4></v-col
            >
          </v-row>
        </div>
        <div class="cart-box" v-for="item in cartItems" :key="item.id">
          <v-row no-gutters>
            <v-col cols="12" lg="1" md="1" sm="12" class="box"
              ><v-btn
                class="nav-icon"
                variant="text"
                icon="mdi-delete"
                @click="deleteItem(item.id)"
              ></v-btn
            ></v-col>
            <v-col cols="12" lg="1" md="1" sm="12" class="box"
              ><img :src="item.product.imageURL" @error="loadDefaultImage"
            /></v-col>
            <v-col cols="12" lg="4" md="4" sm="12" class="box"
              ><h4>
                <NuxtLink :to="`/products/${item.product.id}`">{{
                  item.product.name
                }}</NuxtLink>
              </h4></v-col
            >
            <v-col cols="12" lg="2" md="2" sm="12" class="box"
              ><h4>$ {{ item.product.price }}</h4></v-col
            >
            <v-col cols="12" lg="2" md="2" sm="12" class="box"
              ><div class="cart-input">
                <input type="number" v-model="item.quantity" />
                <button @click="item.quantity++" class="plus">
                  <v-icon color="green"> mdi-plus </v-icon>
                </button>
                <button
                  @click="item.quantity > 1 ? item.quantity-- : false"
                  class="minus"
                >
                  <v-icon color="red"> mdi-minus </v-icon>
                </button>
              </div></v-col
            >
            <v-col cols="12" lg="2" md="2" sm="12" class="box"
              ><h4>${{ item.product.price * item.quantity }}</h4></v-col
            >
          </v-row>
        </div></v-col
      >
      <v-col cols="12" lg="4" md="12" sm="12" class="pa-2">
        <div class="catr-total">
          <h3>Cart totals</h3>
          <div class="info-checkout">
            <span class="text">Subtotal </span
            ><span class="money">$ {{ totalCost }}</span>
          </div>
          <div class="info-checkout">
            <span class="text">Total </span
            ><span class="money">$ {{ totalCost }}</span>
          </div>
          <div class="info-checkout">
            <p>Taxes and shipping calculated at checkout</p>
          </div>
          <button>Check Out</button>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      axios: useNuxtApp().$axios,
      baseUrl: "https://limitless-lake-55070.herokuapp.com/",
      cartItems: [],
      token: null,
      totalCost: 0,
      defaultImageUrl: "/images/Images-icon.png",
    };
  },
  methods: {
    loadDefaultImage(event) {
      event.target.src = this.defaultImageUrl;
    },
    // fetch all items in cart
    ListCartItems() {
      this.axios
        .get(`${this.baseUrl}cart/?token=${this.token}`)
        .then((res) => {
          const result = res.data;
          this.cartItems = result.cartItems;
          this.totalCost = result.totalCost;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    // delete item from cart
    deleteItem(itemId) {
      this.axios
        .delete(`${this.baseUrl}cart/delete/${itemId}/?token=${this.token}`)
        .then((res) => {
          if (res.status == 200) {
            this.$router.go(0);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.ListCartItems();
    console.log("token", this.token);
  },
};
</script>
<style lang="scss" scoped>
.cart {
  max-width: 1490px;
  margin: 40px auto;
  .wrap_title {
    margin-bottom: 50px;
    display: flex;
    border-bottom: 1px solid #ebebeb;
    position: relative;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    h3 {
      color: #222;
      margin: 0;
      justify-content: center;
      align-items: center;
      display: flex;
      position: relative;
      text-align: center;
      font-size: 34px;
      padding-bottom: 15px;
      text-transform: capitalize;
      letter-spacing: -0.5px;
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
  .cart-box {
    border-bottom: 1px solid #e5e5e5;
    text-align: center;

    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px 0;
      a {
        color: #0068c7;
        text-decoration: none;
      }
      img {
        max-width: 70px;
      }
      .cart-input {
        position: relative;
        input {
          width: 100%;
          border: 1px solid #ebebeb;
          padding: 0 14px;
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
  }
  .catr-total {
    padding: 30px;
    background-color: #f6f6f6;
    position: relative;
    h3 {
      font-size: 24px;
      color: #222;
      margin: 0 0 30px;
      display: flex;
      justify-content: space-between;
    }
    .info-checkout {
      font-size: 16px;
      color: #222;
      margin-bottom: 15px;
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 15px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      p {
        font-size: 15px;
        width: 100%;
        font-weight: 300;
        text-align: center;
      }
    }
    button {
      margin: 20px 0;
      width: 100%;
      background-color: #fa5d2a;
      color: #fff;
      font-weight: bold;
      padding: 0 30px;
      line-height: 50px;
    }
  }
}
</style>