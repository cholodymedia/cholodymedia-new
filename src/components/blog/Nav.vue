<template>
  <nav>
    <div class="left">
      <div class="logo">
        <img :src="logo" alt="Logo">
      </div>
      <div class="name">
        cholodymedia<span class="blog">blog</span>
      </div>
    </div>
    <div class="right" @click="goHome">portfolio</div>
  </nav>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
  name: 'Nav',
  data() {
    return {
      logo: logo
    }
  },
  methods: {
    goHome() {
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Iceland&display=swap');
  nav {
    width: 100%;
    height: 4rem;
    background-color: #161c22;
    display: flex;
    flex-direction: row;

    .left {
      width: 25rem;
      height: 100%;
      display: flex;

      .logo {
        width: 5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 3rem;
        }
      }

      .name {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: white;
        font-size: 1.2rem;
        font-weight: 400;

        .blog {
          margin-left: 0.6rem;
          font-family: 'Iceland';
          font-size: 1.7rem;
          color: #3993aa;
        }
      }
    }

    .right {
      width: 12rem;
      height: 100%;
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.3rem;
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        background-color: #00b5e1;
      }
    }
  }
</style>