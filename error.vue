<template>
  <div class="error">
    <div>
      <h2 class="oops">OoPS !</h2>
      <h2 class="error-status">{{ error.statusCode }}</h2>
      <h3>{{ error.message }}</h3>
      <button class="btn my-7" @click="handleClearError">Go Home...</button>
    </div>
  </div>
</template>
  <script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>
  <style scoped lang="scss">
.error {
  width: 100%;
  height: 100vh;
  background: #02182e;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h2 {
    font-size: 50px;
    margin: 0;
    padding: 0;
  }
  .oops {
    color: #fa5d2a;
  }
  .error-status {
    color: #fff;
  }
  h3 {
    font-size: 30px;
    margin: 10px 0;
    color: #fff;
  }
  button {
    margin-top: 10px;
    padding: 0;
    border: 2px solid #fa5d2a;
    color: #fff;
    font-weight: bold;
    background-color: #fa5d2a;
    padding: 10px 50px;
    border-radius: 5px;
    transition: all 300ms ease-in-out;
  }
  button:hover {
    background-color: #02182e;
    color: #fa5d2a;
  }
}
</style>
  