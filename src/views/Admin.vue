<template>
  <div class="wrapper">
    <div class="home-button">
      <img :src="logo" data-aos="fade-right" @click="goHome">
    </div>
    <div class="logo" data-aos="zoom-in-down">
      <img :src="logo">
    </div>
    <div class="box" data-aos="zoom-in">
      <div class="input-box">
        <input type="text" placeholder="login" v-model="login" name="login">
      </div>
      <div class="input-box">
        <input type="password" placeholder="hasło" v-model="password" @keypress.enter="loginIn" name="password">
      </div>
      <div class="input-box">
        <button @click="loginIn">Zaloguj</button>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/logo.png"
import axios from "axios"

export default {
  name: 'Admin',
  data() {
    return {
      logo,
      login: "",
      password: "",
      error: null
    }
  },
  methods: {
    loginIn() {
      if(this.login && this.password) {
        axios.post("https://cholodymedia-analytics.herokuapp.com/login", {
          login: this.login,
          password: this.password
        }).then(data => {
          localStorage.setItem("token", data.data.token)
          this.$router.push("dashboard")
        }).catch(() => {
          this.error = true;
        })
      }else {
        alert('Wypełnij pola!')
      }
    },
    goHome() {
      this.$router.push("/")
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}
.wrapper {
  font-family: 'Montserrat';
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1d242c;
  align-items: center;
  justify-content: center;
}
.box {
  width: 25rem;
  height: 19rem;
  border-radius: 1rem;
  background: #161c22;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    width: 19rem;
    height: 15rem;
  }
}
.logo {
  img {
    width: 5rem;
    margin-top: -0.5rem;
    @media (max-width: 768px) {
      width: 4rem;
      margin-top: -0.5rem;
    }
  }
  width: 6rem;
  height: 6rem;
  background: #242d36;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  margin-bottom: -3rem;
  z-index: 10;
  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
}
.input-box {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 4rem;
  }

  input {
    width: 16rem;
    height: 2.5rem;
    background: #242d36;
    border: 1.4px solid #131313;
    border-radius: 0.5rem;
    outline: none;
    color: rgba(255, 255, 255, 0.644);
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: 0.2s;
    @media (max-width: 768px) {
      width: 11rem;
      height: 2.2rem;
      font-size: 1.1rem;
    }

    &:focus {
      border-color: #2D98B8;
    }
  }
}
button {
  width: 18rem;
  height: 2.5rem;
  background-color: #2D98B8;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  color: white;
  font-size: 1.2rem;
  transition: 0.2s;
  @media (max-width: 768px) {
    width: 13rem;
    height: 2.2rem;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: rgb(42, 139, 168);
    cursor: pointer;
  }
}
.home-button {
  position: absolute;
  left: 2rem;
  top: 1rem;

  img {
    width: 4rem;
    cursor: pointer;
  }
}
</style>