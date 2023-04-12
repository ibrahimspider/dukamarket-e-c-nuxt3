<template>
  <Loader v-if="loading" />
  <div>
    <v-card>
      <v-layout>
        <v-app-bar color="white" prominent>
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-toolbar-title>
            <NuxtLink to="/"> <img src="/images/logo.png" alt="" /></NuxtLink>
          </v-toolbar-title>
          <!-- start logout -->
          <NuxtLink v-if="isAuthenticated" class="nav-icon">
            <v-btn
              @click="signout"
              class="nav-icon"
              variant="text"
              icon="mdi-logout"
            ></v-btn>
          </NuxtLink>
          <!-- end logout -->
          <!-- start login -->
          <NuxtLink v-else to="/login" class="nav-icon">
            <v-btn
              class="nav-icon"
              variant="text"
              icon="mdi-account-outline"
            ></v-btn>
          </NuxtLink>
          <!-- end login -->
          <NuxtLink to="/wishlist" class="nav-icon">
            <v-btn variant="text" icon="mdi-cards-heart-outline"></v-btn>
            <span class="vlaue orange">{{ wishCount }}</span>
          </NuxtLink>
          <NuxtLink to="/cart" class="nav-icon">
            <v-btn variant="text" icon="mdi-cart-outline"></v-btn>
            <span class="vlaue orange">{{ cartCount }}</span>
          </NuxtLink>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          location="bottom"
          temporary
          class="list"
        >
          <v-list>
            <v-list-item class="list" v-for="item in items" :key="item">
              <NuxtLink :to="`${item.value}`">{{ item.title }}</NuxtLink>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <slot></slot>
          <!-- here nuxt will replacee page content -->
          <Footer />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    isAuthenticated: false,
    cartCount: 0,
    wishCount: 0,
    baseUrl: "https://limitless-lake-55070.herokuapp.com/",
    axios: useNuxtApp().$axios,

    items: [
      {
        title: "Home",
        value: "/",
      },
      {
        title: "Products",
        value: "/products",
      },
      {
        title: "Categories",
        value: "/categories",
      },
      {
        title: "Login",
        value: "/login",
      },
      {
        title: "Admin",
        value: "/",
      },
    ],
  }),
  methods: {
    fetchData() {
      setInterval(() => {
        if (this.token) {
          this.isAuthenticated = true;
          this.axios
            .get(`${this.baseUrl}cart/?token=${this.token}`)
            .then((res) => {
              const result = res.data;
              this.cartCount = result.cartItems.length;
            })
            .catch((err) => {
              console.log("err", err);
            });
          this.axios
            .get(`${this.baseUrl}wishlist/${this.token}`)
            .then((res) => {
              const result = res.data;
              this.wishCount = result.length;
            })
            .catch((err) => {
              console.log("err", err);
            });
        }
      }, 3000);
    },
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      this.cartCount = 0;
      this.wishCount = 0;
      this.isAuthenticated = false;
      navigateTo("/");
    },
  },
  mounted() {
    setInterval(() => {
      this.token = localStorage.getItem("token");
    }, 3000);
    this.fetchData();
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
<style scoped lang="scss">
.nav-icon {
  text-decoration: none;
  color: #000;
  position: relative;
}
.vlaue {
  position: absolute;
  left: 5px;
  top: 3px;
  width: 17px;
  height: 17px;
  text-align: center;
  border-radius: 50%;
  line-height: 17px;
  font-size: 11px;
  color: #fff;
  font-weight: 400;
}
.user {
  position: absolute;
  left: 11px;
  top: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.orange {
  background: #ff9100;
  color: #fff;
}
.list {
  a {
    display: inline-block;
    text-decoration: none;
    color: #222;
    transition: all 300ms ease-in-out;
    width: 100%;
    height: 100%;
    padding: 5px;
  }
  a:hover {
    color: #fff;
    background-color: #ff9100;
  }
}
</style>