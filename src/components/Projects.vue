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
              }
            }
          `
        }
      });
      this.allProjects = result.data.data.allProjects.reverse();
    } catch (error) {
      this.error = error;
    }
  }
}
</script>

<style lang="scss" scoped>
  .projects-wrapper {
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100vw;
    height: auto;
    background: #262727;
    display: grid;
    grid-template-rows: repeat(6, 70vh);
    grid-template-columns: 1fr;
    grid-gap: 40px;
    justify-content: space-evenly;
    .single-project{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70vh;
    }
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, 55vh);
      grid-gap: 0px;
      .single-project{
        height: 55vh;
      }
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(2, 90vh);
      .single-project{
        height: 90vh;
      }
    }
  }
</style>
