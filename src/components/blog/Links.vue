<template>
  <div class="wrapper">
    <div class="title">
      <span>Helpfull Links</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links'
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
  }
</style>