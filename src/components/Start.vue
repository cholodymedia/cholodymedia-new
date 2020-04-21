<template>
  <div class="startWrapper">
    <nav class="nav">
      <div class="left">
        <img :src="logo" alt="Logo" data-aos="fade-right">
      </div>
      <div class="right">
        <div class="socialBox" data-aos="fade-left">
        <a href="mailto:cholodymedia@gmail.com">
          <font-awesome-icon
            :icon="['far','envelope']"
            title="email"
          />
        </a>
      </div>
      <div class="socialBox" data-aos="fade-left">
        <a href="https://github.com/cholodymedia" target="blank">
          <font-awesome-icon
            :icon="['fab','github']"
            title="github"
          />
        </a>
      </div>
      <!-- <div class="socialBox" data-aos="fade-left">
        <a href="https://www.instagram.com/cholodymedia/" target="blank">
          <font-awesome-icon
            :icon="['fab','instagram']"
            title="instagram"
          />
        </a>
      </div> -->
      <div class="socialBox" data-aos="fade-left">
        <a href="https://cholodymedia.pl/blog">
          <span class="blog">blog</span>
        </a>
      </div>
      <div class="socialspace">
        
      </div>
      </div>
    </nav>
    <div class="main">
      <p class="title" data-aos="zoom-in" data-aos-duration="1000">cholodymedia</p>
      <p class="subtitle" data-aos="zoom-in-up">
        <span class="lang">#Vue</span>
        <span class="lang">#JavaScript</span>
        <span class="lang">#NodeJS</span>
      </p>
    </div>
    <div class="buttom" data-aos="fade-up">
      <div class="title">Check my projects</div>
      <div class="arrow-box">
        <font-awesome-icon
          :icon="['fas','angle-double-down']"
          class="arrow"
          @click="scroll"
        />
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png'

export default {
  name: 'Start',
  data() {
    return {
      link: true,
      show: false,
      hide: false,
      logo: logo
    };
  },
  methods: {
    handleClick() {
      if (this.link) {
        this.link = false;
        this.show = true;
        setTimeout(this.hideShow, 500);
      } else {
        this.link = true;
        this.hide = true;
        setTimeout(this.hideHide, 500);
      }
    },
    hideShow() {
      this.show = false;
    },
    hideHide() {
      this.hide = false;
    },
    scroll() {
      document.getElementsByClassName('projects-wrapper')[0].scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Iceland&display=swap');
  .startWrapper {
    width: 100vw;
    height: 100vh;
    min-height: 500px;
    background: #161c22;
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
      height: 90vh;
    }
    .nav {
      flex: 1.8;
      display: flex;
      flex-direction: row;
      .left {
        flex: 1;
        display: flex;
        align-items: center;

        img {
          width: 4.5rem;
          margin-left: 2rem;
          @media (max-width: 700px) {
            width: 3rem;
            margin-left: 1rem;
          }
        }
      }
      .right {
        flex: 3;
        display: flex;
        justify-content: flex-end;
      }
      .socialBox {
        width: 20vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        color: #FAFAFA;

        .blog {
          font-family: 'Iceland';
          font-size: 2rem;
        }
        a {
          text-decoration: none;
          color: #FAFAFA;
          transition: 0.3s;
          &:hover {
            color: #00b7e2;
          }
        }
        @media (min-width: 768px) {
          font-size: 2rem;
          .blog {
            font-family: 'Iceland';
            font-size: 2.5rem;
          }
        }
        @media (min-width: 1200px) {
          width: 8vw;
          font-size: 1.8rem;
          :last-of-type {
            margin-right: 0vw;
          }
          .blog {
            font-family: 'Iceland';
            font-size: 2.5rem;
          }
        }
      }
      .socialspace {
        width: 3vw;
        height: 100%;
      }
    }

    .main {
      flex: 8;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .title {
        font-size: 2.2rem;
        color: #FAFAFA;
        letter-spacing: 1.5px;
      }
      .subtitle {
        font-size: 1.3rem;
        margin-top: 15px;
        letter-spacing: 1px;
        .lang {
          margin-left: 4px;
          margin-right: 4px;
        }
        .lang:first-of-type {
          color: #41b85f;
        }
        .lang:nth-of-type(3) {
          color: rgb(1, 189, 180);
        }
        .lang:nth-of-type(2) {
          color: rgb(231, 209, 7);
        }
      }
      @media (min-width: 768px) {
        .title {
          font-size: 4rem;
        }
        .subtitle {
          font-size: 2rem;
          margin-top: 20px;
          letter-spacing: 2px;
        }
      }
    }

    .buttom {
      flex: 4;
      display: flex;
      flex-direction: column;
      .title {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        color: #9E9E9E;
      }
      .arrow-box {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: #9E9E9E;
        .arrow {
          animation: updown 1.2s ease-out infinite;
          padding: 10px;
        }
        :hover {
          cursor: pointer;
          color: rgb(216, 216, 216);
        }
      }
      @keyframes updown {
        0% {
          transform: translateY(-10px);
        }
        50% {
          transform: translateY(10px);
        }
        100% {
          transform: translateY(-10px);
        }
      }
      @media (min-width: 768px) {
        .title {
          font-size: 2rem;
        }
        .arrow-box {
          font-size: 3rem;
        }
      }
      @media (min-width: 1200px) {
        flex: 2.5;
        .title {
          font-size: 1.8rem;
        }
        .arrow-box {
          font-size: 1.8rem;
        }
      }
    }
  }
</style>
