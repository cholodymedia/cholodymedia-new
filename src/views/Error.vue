<template>
  <div class="wrapper">
    <div class="sign">404</div>
    <div class="text">Page Not Found</div>
  </div>
</template>

<script>
export default {
  name: 'Error'
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
  background-color: #212121;
  align-items: center;
  justify-content: center;
  
  .sign {
    font-size: 20rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.137);
  }
  .text {
    font-size: 3rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.137);
  }

  @media (max-width: 760px) {
    justify-content: flex-start;
    padding-top: 5rem;

    .sign {
      font-size: 8rem;
    }
    .text {
      font-size: 2rem;
    }
  }
}
</style>