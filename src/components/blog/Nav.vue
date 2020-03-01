<template>
  <nav>
    <div class="left">
      <div class="logo">
        <img :src="logo" alt="Logo">
      </div>
      <div class="name">
        <a class="home" href="http://cholodymedia.pl/">cholodymedia</a><span class="blog">blog</span>
      </div>
    </div>
    <div class="right" @click="goHome" v-if="!isMobile">portfolio</div>
  </nav>
</template>

<script>
import logo from '@/assets/logo.png'
import { isMobile } from 'mobile-device-detect';

export default {
  name: 'Nav',
  data() {
    return {
      logo: logo,
      isMobile: isMobile
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

    @media (max-width: 1200px) {
      height: 7rem;
    }
    @media (max-width: 767px) {
      height: 5rem;
    }

    .left {
      width: 25rem;
      height: 100%;
      display: flex;

      @media (max-width: 1200px) {
        width: 100%;
      }

      .logo {
        width: 5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 1200px) {
          width: 7rem;
        }
        @media (max-width: 767px) {
          width: 4rem;
        }


        img {
          width: 3rem;
          @media (max-width: 1200px) {
            width: 4rem;
          }
          @media (max-width: 767px) {
            width: 3rem;
          }
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

        @media (max-width: 1200px) {
          font-size: 2rem;
        }
        @media (max-width: 767px) {
          font-size: 1.3rem;
        }

        .home {
          text-decoration: none;
          color: white;
          &:hover {
            cursor: pointer;
          }
          &:visited {
            text-decoration: none;
            color: white;
          }
        }

        .blog {
          margin-left: 0.6rem;
          font-family: 'Iceland';
          font-size: 1.7rem;
          color: #3993aa;
          @media (max-width: 1200px) {
            font-size: 3rem;
          }
          @media (max-width: 767px) {
          font-size: 2.1rem;
        }
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