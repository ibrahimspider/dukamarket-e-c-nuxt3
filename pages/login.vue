<template>
  <Head>
    <Title>Dukamarket - Login</Title>
  </Head>
  <div class="login">
    <div class="box">
      <h2>Login</h2>
      <v-alert
        @click="closeAlert"
        v-if="loginError"
        class="alert"
        density="compact"
        type="error"
        title="Error"
        text="Invalid email or password. Please try again."
      ></v-alert>
      <v-form @submit.prevent="signin" v-model="valid">
        <v-text-field
          class="input"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          class="input"
          v-model="password"
          :readonly="loading"
          :rules="[rules.required]"
          required
          :type="'password'"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>
        <button class="btn" type="submit">Login</button>
        <p class="or"><span>or</span></p>
        <NuxtLink to="/register" class="btn"> Create New Account </NuxtLink>
      </v-form>
      <p class="text">
        By providing your email address, you agree to our <br />
        Privacy Policy and Terms of Service.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginError: false,
      valid: false,
      emailRules: [
        (value) => {
          if (value) return true;

          return "E-mail is requred.";
        },
        (value) => {
          if (/.+@.+\..+/.test(value)) return true;

          return "E-mail must be valid.";
        },
      ],
      rules: {
        required: (value) => !!value || "Required.",
      },
      axios: useNuxtApp().$axios,
      email: null,
      password: null,
      baseUrl: "https://limitless-lake-55070.herokuapp.com/",
    };
  },
  methods: {
    closeAlert() {
      this.loginError = false;
    },
    async signin() {
      const body = {
        email: this.email,
        password: this.password,
      };
      await this.axios
        .post(`${this.baseUrl}user/signIn`, body)
        .then((res) => {
          if (res.status == 200) {
            this.loginError = false;
            localStorage.setItem("token", res.data.token);
            navigateTo("/");
          }
        })
        .catch((err) => console.log("err", err));
      this.loginError = true;
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  padding: 20px;
  background-color: #f7f6f6;
  min-height: 700px;
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 20px auto;
    background-color: #fff;
    max-width: 500px;
    padding: 20px;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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
  .input {
    margin-bottom: 10px;
  }
  .alert {
    width: 100%;
    margin-bottom: 20px;
    cursor: pointer;
  }
}
</style>