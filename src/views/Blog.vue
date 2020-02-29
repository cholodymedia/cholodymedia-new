<template>
  <div class="wrapper">Blog</div>
</template>

<script>
export default {
  name: 'Blog'
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
.wrapper {
  font-family: 'Montserrat';
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  background-color: #242736;
  color: #68caa3;
  font-weight: bold;
}
</style>