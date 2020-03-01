<template>
  <div class="wrapper" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" v-if="!isMobile">
    <div class="title">
      <span>Info Posts</span>
    </div>
    <div class="main">
      <InfoPost class="post"
        v-for="(post, index) in allPosts"
        :key="index"
        :title="post.title"
        :date="post.date"
        :body="post.body"
        :linkName="post.linkName"
        :link="post.link"
        :blue="post.blue"
        :pink="post.pink"
        :yellow="post.yellow"
      />
    </div>
  </div>

  <div class="wrapper" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" v-else>
    <div class="main">
      <InfoPost class="post"
        v-for="(post, index) in allPosts"
        :key="index"
        :title="post.title"
        :date="post.date"
        :body="post.body"
        :linkName="post.linkName"
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
import InfoPost from '@/components/blog/InfoPost'
import { isMobile } from 'mobile-device-detect';

export default {
  name: 'Info',
  components: {
    InfoPost
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
              allInfoposts {
                title
                date
                body
                linkName
                link
                blue
                pink
                yellow
              }
            }
          `
        }
      });
      this.allPosts = result.data.data.allInfoposts;
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
    border-right: 2px dashed #313842;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
      border: none;
    }

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
        margin-top: 4rem;
        place-self: center;
        &:first-of-type {
          margin-top: 1rem;
        }
        &:last-of-type {
          margin-bottom: 4rem;
        }
      }
    }
  }
</style>