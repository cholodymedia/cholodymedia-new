<template>
  <div>
  <div class="project-wrapper">
    <div class="image" :style="{background: bgcolor}">
      <img :src="img">
    </div>
    <div class="text">
      <div class="top">
        <div class="title">{{title}}</div>
        <div class="socials">
          <div class="social-box">
            <a v-if='github != "none"' :href="github" target="blank">
              <font-awesome-icon
              :icon="['fab','github']"
              class="active"
              title="project github"
              />
            </a>
            <font-awesome-icon
            v-else
            :icon="['fab','github']"
            class="no-active"
            title="private project"
            />
          </div>
          <div class="social-box">
            <a v-if='website != "none"' :href="website" target="blank">
              <font-awesome-icon
              :icon="['fas','globe-americas']"
              class="active"
              title="website"
              />
            </a>
            <font-awesome-icon
            v-else
            :icon="['fas','globe-americas']"
            class="no-active"
            title="private website"
            />
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>{{description}}</p>
      </div>
      <div class="tags">
        <Tag v-for="(tag, index) in tags" :key="index" :language="tag.language" :color="tag.color.hex"/>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Tag from '@/components/Tag'

export default {
  name: 'SingleProject',
  props: [
    'bgcolor',
    'title',
    'description',
    'img',
    'github',
    'website',
    'tags'
  ],
  components: {
    Tag
  }
};
</script>

<style lang="scss" scoped>
  .project-wrapper {
    -webkit-box-shadow: 0px 10px 14px 0px rgba(0, 0, 0, 0.527);
    -moz-box-shadow: 0px 10px 14px 0px rgba(0, 0, 0, 0.527);
    box-shadow: 0px 10px 14px 0px rgba(0, 0, 0, 0.527);
    background: #161c22;
    border-radius: 10px;
    width: 80vw;
    max-width: 20rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .image {
      flex: 2.5;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 55%;
        height: auto;
      }
    }
    .text {
      flex: 2;
      display: flex;
      flex-direction: column;
      .top {
        flex: 1.8;
        display: flex;
        .title {
          flex: 4;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 5vw;
          color: #DFDEDF;
          font-weight: 500;
          font-size: 1rem;
          @media (min-width: 1200px) {
            font-size: 1.2rem;
            padding-left: 3vw;
          }
        }
        .socials {
          flex: 2.1;
          display: flex;
          .social-box {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.3rem;
            .active {
              color: #DFDEDF;
              cursor: pointer;
            }
            .no-active {
              color: #565858;
            }
          }
        }
      }
      .bottom {
        flex: 3;
        padding-top: 5px;
        color: rgb(167, 165, 167);
        font-weight: 300;
        padding-left: 5vw;
        padding-right: 5vw;
        text-align: justify;
        line-height: 1.5rem;
        @media (min-width: 1200px) {
          font-size: 1.1rem;
          padding-left: 3vw;
          padding-right: 3vw;
          line-height: 2rem;
        }
      }
    }
    @media (min-width: 35rem) {
      height: 28rem;
      width: 90%;
      max-width: 90%;
    }
    @media (min-width: 50rem) {
      height: 40rem;
      width: 85%;
      max-width: 85%;
    }
    @media (min-width: 1200px) {
      height: 85%;
      width: 24rem;
      max-width: 24rem;
    }
    @media (min-width: 1800px) {
      height: 85%;
      width: 28rem;
      max-width: 28rem;
    }
  }

  .tags {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
  }
</style>
