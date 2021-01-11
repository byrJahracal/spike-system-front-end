<template>
  <div id="loginBox">
    <img src="~image/kawaii-dinosaur.png" id="avatar" />
    <h1>{{ title }}</h1>
    <form>
      <p>Username</p>
      <input type="text" placeholder="Enter Username" v-model="username" />
      <p>Password</p>
      <input type="password" placeholder="Enter Password" v-model="password" />
      <input type="button" value="Login" @click="login" />
      <a :href="findPasswordLink">Lost your password?</a><br />
      <a :href="createAccountLink">Don't have an account?</a>
    </form>
  </div>
</template>

<script>
export default {
  name: "HyLoginBox",
  components: {},
  props: {
    title: {
      default: "Login Here"
    },
    findPasswordLink: {
      default: "#"
    },
    createAccountLink: {
      default: "#"
    }
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    login() {
      if (this.username == "" || this.password == "") {
        this.$alert("请先输入用户名和密码！");
      } else {
        this.$emit("login", {
          username: this.username,
          password: this.password
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
#loginBox {
  width: 320px;
  height: 420px;
  background: linear-gradient(150deg, #444444c0, #002208c0);
  color: #fff;
  top: 50%;
  right: 10%;
  position: absolute;
  transform: translate(0, -50%);
  box-sizing: border-box;
  padding: 70px 30px;
  p {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
  input {
    width: 100%;
    margin-bottom: 20px;
  }
  input[type="text"],
  input[type="password"] {
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
  }
  input[type="button"] {
    border: none;
    outline: none;
    height: 40px;
    background: rgb(24, 190, 135);
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
  }
  input[type="button"]:hover {
    cursor: pointer;
    background: rgb(197, 107, 22);
  }
  a {
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    color: darkgray;
  }
  a:hover {
    color: rgb(247, 202, 54);
  }
}

#avatar {
  width: 32%;
  height: auto;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: calc(50%);
  transform: translate(-50%, 0);
}

h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 22px;
}
</style>
