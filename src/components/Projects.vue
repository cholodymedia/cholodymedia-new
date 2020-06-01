<template>
    <div class="projects-wrapper">
      <SingleProject
      v-for="(item, index) in allProjects"
      :key="index"
      :bgcolor="item.background"
      :title="item.title"
      :description="item.description"
      :img="item.image.url"
      :github="item.github"
      :website="item.website"
      :tags="item.tags"
      class="single-project"
      data-aos="zoom-in-up"
      />
    </div>
</template>

<script>
import SingleProject from '@/components/SingleProject.vue'
import axios from 'axios'

export default {
  name: 'Projects',
  components: {
    SingleProject,
  },
  data() {
    return {
      allProjects: [],
      error: null
    }
  },
  async mounted() {
    try {
      var result = await axios({
        method: "POST",
        url: "https://graphql.datocms.com",
        headers: {
          Authorization: 'bearer ' + 'bc7690fece672cf709de119127d0c1'
        },
        data: {
          query: `
            {
              allProjects {
                title
                description
                background
                image {
                  url
                }
                github
                website
                tags {
                  color {
                    hex
                  }
                  language
                }
              }
            }
          `
        }
      });
      this.allProjects = result.data.data.allProjects;
    } catch (error) {
      this.error = error;
    }
  }
}
</script>

<style lang="scss" scoped>
  .projects-wrapper {
    padding-top: 3rem;
    padding-bottom: 4rem;
    width: 100vw;
    height: auto;
    background: #1d242c;
    display: grid;
    grid-template-rows: repeat(6, 28rem);
    grid-template-columns: 1fr;
    grid-gap: 4rem;
    justify-content: space-evenly;
    .single-project{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 28rem;
    }
    @media (min-width: 35rem) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 32rem);
      grid-gap: 0px;
      .single-project{
        height: 32rem;
      }
    }
    @media (min-width: 50rem) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 45rem);
      grid-gap: 0px;
      .single-project{
        height: 45rem;
      }
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(3, 45rem);
      padding-top: 1rem;
      padding-bottom: 2rem;
      grid-gap: 0rem;
      .single-project{
        height: 45rem;
      }
    }
    @media (min-width: 1800px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(3, 50rem);
      padding-top: 1rem;
      padding-bottom: 2rem;
      grid-gap: 0rem;
      .single-project{
        height: 50rem;
      }
    }
  }
</style>
