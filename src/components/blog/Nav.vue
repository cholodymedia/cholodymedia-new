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
    <div class="right"></div>
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
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Sniglet&display=swap');
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
          font-family: 'Sniglet';
        }
      }
    }
  }
</style>