<template>
  <div>
    <v-container class="container top-categories">
      <div class="wrap_title">
        <h3 class="title">
          Categorie : <span>{{ categorie.categoryName }}</span>
        </h3>
      </div>
      <h4>{{ msg }}</h4>
      <v-row no-gutters>
        <v-col
          cols="12"
          lg="2"
          md="3"
          sm="4"
          v-for="product of categorie.products"
          :key="product.id"
          ><div class="card">
            <ProductBox :product="product" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorie: {},
      id: null,
      msg: "",
    };
  },
  methods: {},
  props: ["categories"],
  mounted() {
    this.id = this.$route.params.id;
    this.categorie = this.categories.find(
      (categorie) => categorie.id == this.id
    );
    if (this.categorie.products.length == 0) {
      this.msg = "no products found";
    } else if (this.categorie.products.length == 1) {
      this.msg = "only 1 products found";
    } else {
      this.msg = this.categorie.products.length + " products found";
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1490px;
}
.top-categories {
  margin-bottom: 100px;
  min-height: 500px;
  .wrap_title {
    margin-bottom: 10px;
    display: flex;
    border-bottom: 1px solid #ebebeb;
    position: relative;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
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
  h4 {
    color: #666;
  }
  .card {
    transition: all 300ms ease-in-out;
    position: relative;
    margin-bottom: 20px;
    padding: 20px;
    overflow: hidden;
  }
}
.card:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>