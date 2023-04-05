<template>
  <div class="register">
    <div class="box">
      <h2>Register</h2>
      <form action="">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="firstname"
          :rules="nameRules"
          :counter="10"
          label="First name"
          required
        ></v-text-field>
        <v-text-field
          v-model="lastname"
          :rules="nameRules"
          :counter="10"
          label="Last name"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Confirm Password"
          placeholder="Enter your password"
        ></v-text-field>
        <button class="btn" type="submit">Create New Account</button>
        <p class="or"><span>or</span></p>
        <NuxtLink to="/login" class="btn"> Login </NuxtLink>
      </form>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: " dukamarket - Register",
});
</script>
<style scoped lang="scss">
.register {
  padding: 20px;
  background-color: #f7f6f6;
  min-height: 700px;
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
    h2 {
      color: #0068c9;
      margin-bottom: 50px;
      font-size: 32px;
    }
    form {
      width: 100%;
    }
    .btn {
      font-size: 12px;
      font-weight: bold;
      line-height: 55px;
      min-width: 100%;
      padding: 0;
      display: inline-block;
      text-transform: uppercase;
      background-color: #fa5d2a;
      color: #fff;
      outline: 0;
      border-radius: 3px;
    }
    a.btn {
      text-decoration: none;
      background-color: #263c97;
      margin-bottom: 40px;
    }
    .or {
      position: relative;
      height: 30px;
      margin: 10px 0;
      span {
        display: inline-block;
        background: #fff;
        padding: 0 15px;
        position: relative;
        color: #999;
        font-size: 14px;
      }
    }
    .or::before {
      content: "";
      border-top: 1px solid #ebebeb;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
    }
    .text {
      text-align: center;
      color: #4f4f4f;
      font-size: 14px;
      margin: 0;
      margin-bottom: 20px;
    }
  }
}
</style>