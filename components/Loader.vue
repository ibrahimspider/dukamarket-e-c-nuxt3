<template>
  <div class="body">
    <div class="loader">Loading...</div>
  </div>
</template>
<style scoped lang="scss">
$color-background: #eaecfa;
$color-loader: #ce4233;

.body {
  background: $color-background;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99999;
}

.loader {
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: helvetica, arial, sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  color: $color-loader;
  letter-spacing: 0.2em;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: $color-loader;
    position: absolute;
    animation: load 0.7s infinite alternate ease-in-out;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
}

@keyframes load {
  0% {
    left: 0;
    height: 30px;
    width: 15px;
  }
  50% {
    height: 8px;
    width: 40px;
  }
  100% {
    left: 235px;
    height: 30px;
    width: 15px;
  }
}
</style>