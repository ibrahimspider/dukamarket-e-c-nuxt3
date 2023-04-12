<template>
  <div class="banner">
    <div class="overlay">
      <div class="info">
        <div class="content_banner" >
          <h5>Cyber Monday Sale</h5>
          <h3 class="title">50%</h3>
          <p class="text"></p>
          <h2>duka outlet 2023</h2>
          <p>Free Shipping &amp; 60-Day Free Returns</p>
          <p></p>
          <NuxtLink to="/products">Shop Now</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 50px;
  .overlay {
    padding-top: 41.6667%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/images/banner-s1.jpg") no-repeat;
    background-size: cover;
    background-position: center center;
    .info {
      position: absolute;
      top: 10px;
      left: 20%;
      right: 10px;
      bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-align: center;
      color: #fff;
      h5 {
        font-size: 18px;
        text-transform: uppercase;
        margin: 0 0 40px 0;
        display: inline-block;
      }
      h3 {
        font-size: 180px;
        margin: 0 0 20px;
        line-height: 145px;
      }
      h2 {
        font-size: 50px;
        font-weight: 400;
        text-transform: uppercase;
        margin: 0 0 40px 0;
        display: inline-block;
      }
      p {
        font-size: 18px;
        margin: 0;
        line-height: 18px;
        font-weight: 300;
      }
      a {
        transition: all 300ms ease-in-out;
        border: 2px solid #fff;
        color: #fff;
        font-size: 14px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        line-height: 46px;
        border-radius: 3px;
        padding: 0 40px;
        position: relative;
        margin-top: 80px;
        text-transform: uppercase;
        font-weight: bold;
        min-width: 196px;
        text-decoration: none;
      }
      a:hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
}
</style>