<template>
  <div class="customers">
    <div class="content">
      <v-container class="container">
        <v-row no-gutters>
          <v-col cols="12" md="6">
            <div class="cusromer-comment">
              <v-timeline side="end">
                <v-timeline-item
                  v-for="item in items"
                  :key="item.id"
                  :dot-color="item.color"
                  size="small"
                >
                  <v-alert :value="true" :color="item.color" :icon="item.icon">
                    “ I really liked working with this theme, first time I
                    worked with a new there and there were no bugs Iclould see
                    ..."
                  </v-alert>
                </v-timeline-item>
              </v-timeline>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="customer-info">
              <img src="/images/customer-icon.png" alt="" />
              <h3 class="section-title-testi">Customers Are Satisfied</h3>
              <h3 class="section-title-testi section-title-testi2">
                With Our <span>Perfect &amp; Friendly</span> Service
              </h3>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat
              </p>
              <button>Discover Now</button>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        color: "white",
        icon: "mdi-account-heart",
      },
      {
        id: 2,
        color: "grey-lighten-2",
        icon: "mdi-account-heart",
      },
      {
        id: 1,
        color: "white",
        icon: "mdi-account-heart",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.customers {
  position: relative;
  .content {
    background-color: #f3f5f6;
    margin-bottom: 50px;
  }
  .cusromer-comment {
    padding: 0 20px;
    margin-bottom: 20px;
  }
  .customer-info {
    background: url("/images/customer-info.png") center no-repeat;
    background-size: cover;
    padding: 20px;
    img {
      margin-bottom: 20px;
    }
    h3 {
      font-size: 25px;
      margin: 0;
      color: #222;
    }
    p {
      font-size: 14px;
      color: #666666;
      margin-top: 25px;
      line-height: 30px;
    }
    button {
      transition: all 300ms ease-in-out;
      margin-top: 50px;
      padding: 0 50px;
      line-height: 50px;
      background-color: #fa5d2a;
      font-weight: bold;
      color: #fff;
    }
    button:hover {
      background-color: #fd3f00;
    }
  }
}
.customers::after {
  position: absolute;
  content: "";
  top: -4.4rem;
  bottom: 8rem;
  left: 0;
  right: 0;
  background-color: #f3f5f6;
  -webkit-transform-origin: center center;
  -moz-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  -webkit-transform: skew(0deg, 3deg);
  -moz-transform: skew(0deg, 3deg);
  -ms-transform: skew(0deg, 3deg);
  transform: skew(0deg, 3deg);
  z-index: -1;
}
.customers::before {
  position: absolute;
  content: "";
  top: -4.4rem;
  bottom: 8rem;
  left: 0;
  right: 0;
  -webkit-transform-origin: center center;
  -moz-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  -webkit-transform: skew(0deg, -3deg);
  -moz-transform: skew(0deg, -3deg);
  -ms-transform: skew(0deg, -3deg);
  transform: skew(0deg, -3deg);
  background-color: #eceef2;
  z-index: -2;
}
.container {
  max-width: 1490px;
}
</style>