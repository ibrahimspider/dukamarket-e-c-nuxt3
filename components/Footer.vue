<template>
  <footer>
    <div>
      <!-- Start Footer Carousel -->
      <FooterCarousel />
      <!-- end Footer Carousel -->
      <v-container class="container">
        <v-row no-gutters>
          <v-col cols="12" lg="2" md="6">
            <h3 class="widget-title">Help &amp; Customer Care</h3>
            <ul class="menu">
              <li class="menu-item" v-for="menu in menus" :key="menu">
                <a href="/">{{ menu }}</a>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" lg="2" md="6">
            <h3 class="widget-title">My Account</h3>
            <ul class="menu">
              <li class="menu-item" v-for="item in items" :key="item">
                <a href="/">{{ item }}</a>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" lg="3" md="6">
            <div class="contact">
              <h3 class="widget-title">Looking For Dukamarket?</h3>
              <p><a href="tel:+201013317307">+201013317307</a></p>
              <p>Alexandria Egypt</p>
              <p>ibrahimspider11@gmail.com</p>
            </div>
          </v-col>
          <v-col cols="12" lg="4" md="6">
            <div class="contact">
              <h3 class="widget-title">About Dukamarket Store</h3>
              <p>
                Dukamarket is a premium template theme with advanced admin
                module. It's extremely easy to use and fully responsive and
                retina.
              </p>
              <img src="/images/payment.png" alt="" />
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- start Footer Note -->
      <FooterNote />
      <!-- end Footer Note -->
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Search",
        "Product Support",
        "Checkout",
        "Shopping Cart",
        "Wishlist",
        "New Arrivals",
      ],
      menus: [
        "Laptop &amp; Computer (17) ",
        "Speaker &amp; Audio (8)",
        "Cellphone (11)",
        "Video Game (18)",
        "Accessories (12)",
        "Delivery &amp; Dispatch ",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1430px;
  padding-top: 60px;
  padding-bottom: 60px;
}
footer {
  .widget-title {
    color: #666666;
    padding: 0 0 25px;
  }
  .menu {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      line-height: 1;
      margin-bottom: 11px;
      a {
        color: #666666;
        text-decoration: none;
        position: relative;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
  .contact {
    a {
      color: #666666;
      text-decoration: none;
      font-size: 14px;
      margin-bottom: 11px;
      display: inline-block;
    }
    p {
      color: #666666;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 11px;
    }
  }
}
</style>