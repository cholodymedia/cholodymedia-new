<template>
  <div class="wrapper">
    <Nav/>
    <div class="main">
      <Info/>
      <Links/>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/blog/Nav'
import Info from '@/components/blog/Info'
import Links from '@/components/blog/Links'

export default {
  name: 'Blog',
  components: {
    Nav,
    Info,
    Links
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap');
* {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}

body {
  background-color: #29303a;
}

.wrapper {
  font-family: 'Montserrat';
  width: 100vw;
  min-width: 35rem;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #29303a;

  .main {
    width: 100%;
    flex: 1;
    min-height: calc(100vh - 4rem);
    display: flex;
    flex-direction: row;
  }
}
</style>