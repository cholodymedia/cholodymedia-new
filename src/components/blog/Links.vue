<template>
  <div class="wrapper" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" v-if="!isMobile">
    <div class="title">
      <span>Helpfull Links</span>
    </div>
    <div class="main">
      <LinkPost
      v-for="(post, index) in allPosts"
      :key="index" 
      class="post"
      :title="post.title"
      :description="post.description"
      :link="post.link"
      :blue="post.blue"
      :pink="post.pink"
      :yellow="post.yellow"
      />
    </div>
  </div>

    <div class="wrapper" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" v-else>
    <div class="main">
      <LinkPost
      v-for="(post, index) in allPosts"
      :key="index" 
      class="post"
      :title="post.title"
      :description="post.description"
      :link="post.link"
      :blue="post.blue"
      :pink="post.pink"
      :yellow="post.yellow"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LinkPost from '@/components/blog/LinkPost'
import { isMobile } from 'mobile-device-detect';

export default {
  name: 'Links',
    components: {
    LinkPost
  },
  data() {
    return {
      allPosts: [],
      error: null,
      isMobile: isMobile
    }
  },
  async mounted() {
    try {
      let result = await axios({
        method: "POST",
        url: "https://graphql.datocms.com",
        headers: {
          Authorization: 'bearer ' + '9c691e72ec078df68ac8ee1c83c079'
        },
        data: {
          query: `
            {
              allLinkposts {
                title
                description
                link
                blue
                pink
                yellow
              }
            }
          `
        }
      });
      this.allPosts = result.data.data.allLinkposts;
    } catch (error) {
      this.error = error;
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;

    .title {
      width: 100%;
      height: 7rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #3a4350;
      font-size: 1.6rem;
    }

    .main {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;

      .post {
        margin-top: 3rem;
        place-self: center;
        &:first-of-type {
          margin-top: 1rem;
          @media (max-width: 767px) {
            margin-top: 0rem
          }
        }
        &:last-of-type {
          margin-bottom: 4rem;
        }
      }
    }
  }
</style>