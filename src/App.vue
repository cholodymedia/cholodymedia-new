<template>
  <router-view/>
</template>

<script>
import axios from 'axios'

export default {
  created() {
    if(!localStorage.getItem("visited")) {
      localStorage.setItem('visited', "yes");
      axios.post('https://cholodymedia-analytics.herokuapp.com/site/open');
    }
  }
}
</script>