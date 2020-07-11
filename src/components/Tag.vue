<template>
  <div class="tag" :style="{ color }">#{{ language }}</div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    language: String,
    color: String
  }
}
</script>

<style lang="scss" scoped>
  .tag {
    height: 2rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    opacity: 0.9;
    font-size: 1rem;
    font-weight: 500;
  }
</style>