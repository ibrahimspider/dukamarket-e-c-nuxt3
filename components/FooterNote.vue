<template>
  <v-container class="container">
    <div class="footer-note">
      <v-row no-gutters>
        <v-col cols="12" md="6"
          ><div class="coppy-right">
            <h3 class="content">
              Copyright © <a href="/">Dukamarket.</a> all rights reserved.
              Powered by
              <a href="https://ibrahim-moostafa.netlify.app" target="_blank"
                >Ibrahim.</a
              >
            </h3>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="social-footer-wrap">
            <h3>Social Media:</h3>
            <div class="laber-social-link socials clearfix">
              <ul class="list-socials">
                <li class="twitter" v-for="icon in icons" :key="icon">
                  <a
                    target="_blank"
                    href="https://ibrahim-moostafa.netlify.app/contact"
                    :title="`${icon}`"
                    :class="`${icon}`"
                    ><v-icon :icon="`mdi-${icon}`"></v-icon
                  ></a>
                </li>
              </ul>
            </div></div
        ></v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      icons: ["facebook", "twitter", "instagram", "youtube"],
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1430px;
  padding-top: 0;
  padding-bottom: 0 !important;
}
.footer-note {
  padding: 30px 0;
  border-top: 1px solid #ebebeb;
}
h3 {
  font-size: 14px;
  color: #666;
  line-height: 40px;
  margin: 0;
  font-weight: 400;
  a {
    color: #fa5d2a;
    text-decoration: none;
  }
}
.social-footer-wrap {
  display: flex;
  justify-content: flex-end;
  h3 {
    margin-right: 20px;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      margin-right: 10px;
    }
    a {
      display: inline-block;
      text-decoration: none;
      width: 40px;
      height: 40px;
      border-radius: 3px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      font-size: 16px;
    }
    .facebook {
      background: #3c5b9b;
    }
    .twitter {
      background: #40c1df;
    }
    .instagram {
      background: #c619b8;
    }
    .youtube {
      background: #ff0e00;
    }
  }
}
</style>