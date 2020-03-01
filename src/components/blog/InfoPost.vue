<template>
  <div class="box">
    <div class="title" :style="backgroundColor">
      <div class="text">{{ title }}</div>
      <div class="date">
        <font-awesome-icon :icon="['fas','calendar']" />
        <span class="day">{{ date }}</span>
      </div>
    </div>
    <div class="main">
      <div class="text-box">
        <pre>
          {{ body }}
        </pre>
      </div>
      <a class="link" v-if="link != ''" :href="link" target="_blank">
        <div class="icon">
          <font-awesome-icon :icon="['fas','link']" />
        </div>
        <div class="link-title">{{ linkName }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoPost',
  props: {
    title: String,
    date: String,
    body: String,
    link: String,
    linkName: String,
    blue: Boolean,
    pink: Boolean,
    yellow: Boolean,
  },
  computed: {
    backgroundColor() {
      let color = '#00b5e1';
      if(this.pink) {color = '#dd3ab1'}
      if(this.yellow) {color = '#ffc751'}
      return {'background-color': color};
    }
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 35rem;
    min-height: 11rem;
    background-color: #28303a;
    -webkit-box-shadow: 0px 0px 30px 0px rgb(39, 42, 44);
    -moz-box-shadow: 0px 0px 30px 0px rgba(48,56,66,1);
    box-shadow: 0px 0px 30px 0px rgba(5, 5, 5, 0.336);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 1200px) {
      width: 90%;
    }

    .title {
      width: 100%;
      height: 3rem;
      background-color: #00b5e1;
      color: white;
      display: flex;
      @media (max-width: 1200px) {
        height: 4rem;
      }

      .text {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        font-weight: 500;
        padding-left: 2rem;
        @media (max-width: 1200px) {
          font-size: 1.5rem;
        }
      }
      .date {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 1.2rem;
        font-size: 1rem;
        font-weight: 500;
        @media (max-width: 1200px) {
          font-size: 1.2rem;
        }

        .day {
          padding-left: 0.6rem;
        }
      }
    }

    .main {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;

      .text-box {
        width: 85%;
        align-self: center;
        color: #a2aab4;
        padding-top: 1.5rem;
        padding-bottom: 2rem;
        
        pre {
          word-wrap: break-word;
          white-space: pre-line;
          line-height: 1.5rem;
          font-size: 1.2rem;
          @media (max-width: 1200px) {
            font-size: 1.5rem;
            line-height: 1.8rem;
          }
        }
      }

      .link {
        align-self: center;
        text-decoration: none;
        min-width: 13rem;
        height: 3rem;
        background-color: #dd3ab1;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: row;
        transition: 0.2s;
        &:hover {
          cursor: pointer;
          background-color: #be3199;
        }
        &:visited {
          text-decoration: none;
        }
        @media (max-width: 1200px) {
          min-width: 15rem;
        }

        .icon {
          width: 3rem;
          height: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 1.1rem;
        }

        .link-title {
          flex: 1;
          display: flex;
          align-items: center;
          padding-left: 1rem;
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
          @media (max-width: 1200px) {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
</style>