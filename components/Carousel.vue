<template>
  <v-carousel
    height="100%"
    position="relative"
    hide-delimiters
    progress="cyan"
    relative
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet class="reat">
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            <img :src="`/images/${slide}.png`" alt="" />
            <div class="overlay">
              <v-container>
                <v-row no-gutters>
                  <v-col cols="4"  md="5" sm="10" x="12">
                    <div class="pa-2 ma-2 info">
                      <h3>Limited</h3>
                      <h3>Customise</h3>
                      <p>Discount 30% On Products</p>
                      <v-btn :rounded="0" color="primary"> Discover Now </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
  <script>
export default {
  data() {
    return {
      slides: ["slide-1", "slide-2"],
    };
  },
};
</script>
<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.info {
  text-align: right;
  color: #fff;
}
.info p {
  font-size: 18px;
  margin-top: 10px;
}
</style>