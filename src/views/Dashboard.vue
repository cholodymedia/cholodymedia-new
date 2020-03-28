<template>
  <div class="wrapper">
    <div class="logoutButton" @click="logOut" data-aos="fade-left">Wyloguj</div>
    <div class="title" data-aos="zoom-in">Wyświetlenia strony</div>
    <div class="visitors-list" data-aos="zoom-in">
      <SingleVisitor
      v-for="(visitor, index) in visitors"
      :key="index"
      :date="visitor.date"
      :country="visitor.country"
      :city="visitor.city"
      :flag="visitor.flag"
      data-aos="fade-up"
      />
    </div>
  </div>
</template>

<script>
import SingleVisitor from '../components/SingleVisitor'
import axios from 'axios'

export default {
  name: "Dashboard",
  data() {
    return {
      visitors: []
    }
  },
  components: {
    SingleVisitor
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.$router.push("/")
    }
  },
  mounted() {
    axios.post('https://cholodymedia-analytics.herokuapp.com/getvisitors', {
      token: localStorage.getItem("token")
    }).then(response => {
      this.visitors = response.data.visitors;
    }).catch(() => {
      console.log("ERROR");
    })
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1d242c;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    min-height: 110vh;
  }
}
.logoutButton {
  width: 8rem;
  height: 2.5rem;
  background-color: #2D98B8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  border-radius: 0.5rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
  @media (max-width: 768px) {
    right: none;
    top: 1rem;
  }

  &:hover {
    background-color: rgb(40, 131, 158);
    cursor: pointer;
  }
}
.title {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  letter-spacing: 0.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
}
.visitors-list {
  width: 40rem;
  min-height: 25rem;
  overflow-y: auto;
  border-radius: 0.5rem;
  background: #161c22;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 90%;
  }
}
</style>