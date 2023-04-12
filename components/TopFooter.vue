<template>
  <div class="top-section">
    <v-container class="container">
      <img src="/images/img-newletter.png" alt="" />
      <h3>Sign Up To Newsletter</h3>
      <div class="content">
        Subscribe to the Dukamarket store mailing list to receive updates on new
        arrivals, <br />
        special offers and other discount information.
      </div>
      <v-responsive class="mx-auto input-box" max-width="600" >
        <v-text-field
          class="email"
          hide-details="auto"
          label="Your email address..."
          placeholder="johndoe@gmail.com"
          type="email"
        ></v-text-field>
        <button>Subscribe</button>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-section {
  background-color: #fff;
  padding: 70px 0;
  margin-bottom: 50px;
  .container {
    max-width: 1490px;
    text-align: center;
    img {
      margin-bottom: 25px;
    }
    h3 {
      margin: 0 0 20px;
      font-size: 24px;
      color: #222;
      line-height: 1;
      letter-spacing: -0.5px;
    }
    .content {
      font-size: 14px;
      color: #666;
      margin-bottom: 35px;
    }
    .email {
      background-color: #fff;
    }
    .input-box {
      position: relative;
      button {
        position: absolute;
        right: 6px;
        top: 6px;
        background-color: #fa5d2a;
        color: #fff;
        line-height: 44px;
        border-radius: 3px;
        padding: 0 15px;
        font-weight: bold;
        min-width: 140px;
        font-size: 13px;
        text-transform: uppercase;
      }
    }
  }
}
</style>