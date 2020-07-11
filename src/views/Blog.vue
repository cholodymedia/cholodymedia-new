<template>
  <div class="wrapper">
    <Nav/>
    <div class="main-desktop" v-if="!isMobile">
      <Info/>
      <Links/>
    </div>
    <div class="main-mobile" v-if="isMobile">
      <div class="menu">
        <div class="info" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">
          <div :class="{ button: true, active: isInfo, noactive: !isInfo }" @click="buttonClick('info')">
            <font-awesome-icon :icon="['fas','info-circle']" />
          </div>
        </div>
        <div class="links" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
          <div :class="{ button: true, noactive: isInfo, active: !isInfo }" @click="buttonClick('links')">
            <font-awesome-icon :icon="['fas','link']" />
          </div>
        </div>
      </div>
      <Info v-if="isInfo"/>
      <Links v-if="!isInfo"/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/blog/Nav'
import Info from '@/components/blog/Info'
import Links from '@/components/blog/Links'
import { isMobile } from 'mobile-device-detect';

export default {
  name: 'Blog',
  components: {
    Nav,
    Info,
    Links
  },
  data() {
    return {
      isMobile: isMobile,
      isInfo: true,
    }
  },
  methods: {
    buttonClick(button) {
      if(button == "info") {
        if(!this.isInfo) {
          this.isInfo = true;
        }
      }
      if(button == "links") {
        if(this.isInfo) {
          this.isInfo = false;
        }
      }
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

body {
  background-color: #29303a;
}

.wrapper {
  font-family: 'Montserrat';
  max-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #29303a;

  @media (max-width: 1200px) {
    min-height: 100vh;
    overflow-x: hidden;
  }

  .active {
    -webkit-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);
    box-shadow: inset 0px 0px 24px 0px rgba(0,0,0,0.75);
    color: #00b4e1b4;
  }

  .noactive {
    -webkit-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.75);
  }

  .menu {
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;

    @media (max-width: 767px) {
      margin-top: 0.5rem;
      height: 5rem;
      margin-bottom: 1.5rem;
    }

    .info {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a2aab4;
      font-size: 2.5rem;
      @media (max-width: 767px) {
        font-size: 1.9rem;
      }

      .button {
        width: 80%;
        height: 70%;
        border-radius: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .links {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a2aab4;
      font-size: 2.5rem;
      @media (max-width: 767px) {
        font-size: 1.9rem;
      }

      .button {
        width: 80%;
        height: 70%;
        border-radius: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .main-desktop {
    width: 100%;
    flex: 1;
    min-height: calc(100vh - 4rem);
    display: flex;
    flex-direction: row;
  }
  .main-mobile {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>