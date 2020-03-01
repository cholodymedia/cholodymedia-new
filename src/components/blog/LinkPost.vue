<template>
  <div class="box">
    <div class="top" :style="backgroundColor">
      <div class="title">{{title}}</div>
      <div class="link-box">
        <a :href="link" target="_blank">
          <font-awesome-icon :icon="['fas','link']" class="link"/>
        </a>
      </div>
    </div>
    <div class="description" v-if="description">
      <pre>
        {{ description }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkPost',
  props: {
    title: String,
    description: String,
    link: String,
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
    min-height: 4rem;
    background-color: #28303a;
    -webkit-box-shadow: 0px 0px 30px 0px rgb(39, 42, 44);
    -moz-box-shadow: 0px 0px 30px 0px rgba(48,56,66,1);
    box-shadow: 0px 0px 30px 0px rgba(5, 5, 5, 0.336);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .top {
      width: 100%;
      height: 4rem;
      display: flex;

      .title {
        width: 50%;
        height: 100%;
        color: white;
        font-size: 1.3rem;
        font-weight: 500;
        padding-left: 2rem;
        display: flex;
        align-items: center;
      }
      .link-box {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 1.5rem;
        font-weight: 500;
        padding-right: 2rem;
        color: #28303a;

        a {
          text-decoration: none;
          color: #28303a;
        }

        .link {
          transition: 0.3s;

          &:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
        }
      }
    }

    .description {
      width: 100%;
      min-height: 4rem;
      display: flex;
      justify-content: center;

      pre {
        word-wrap: break-word;
        white-space: pre-line;
        line-height: 1.5rem;
        font-size: 1.2rem;
        color: #a2aab4;
        width: 88%;
        height: 100%;
        padding-top: 1.2rem;
        padding-bottom: 1rem;
      }
    }
    
  }
</style>