  <template>
  <v-container class="container bg-white">
    <div class="container-div">
      <v-row no-gutters justify="center">
        <v-col
          class="box"
          v-for="header in headers"
          :key="header"
          cols="12"
          md="4"
          xs="12"
        >
          <figure>
            <v-img class="col" :src="`/images/${header}.png`" cover></v-img>
          </figure>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      headers: ["header-1", "header-2", "header-3"],
    };
  },
};
</script>
<style scoped>
.container {
  max-width: 1490px;
  margin-top: -120px;
}
.container-div {
  margin-bottom: 80px;
  padding-top: 3%;
  padding-right: 2%;
  padding-bottom: 0;
  padding-left: 2%;
  background-color: #fff;
  position: relative;
  z-index: 2;
}
.col {
  margin: 0 4%;
  margin-bottom: 20px;
}
/* Shine */
.box {
  overflow: hidden;
}
figure {
  position: relative;
  width: 100%;
  height: 100%;
}
figure::before {
  position: absolute;
  top: 0;
  left: -75%;
  z-index: 2;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
}
figure:hover::before {
  -webkit-animation: shine 0.75s;
  animation: shine 0.75s;
}
@-webkit-keyframes shine {
  100% {
    left: 125%;
  }
}
@keyframes shine {
  100% {
    left: 125%;
  }
}

@media (max-width: 991px) {
}
</style>