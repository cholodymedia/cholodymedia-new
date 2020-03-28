<template>
  <div class="box">
    <div class="flag">
      <img src="https://ipgeolocation.io/static/flags/pl_64.png">
    </div>
    <div class="country">{{ country }}</div>
    <div class="city">{{ city }}</div>
    <div class="date">{{date.split('T')[1].split('.')[0].split(':').slice(0, 2).join(':')+' | '+date.split('T')[0]}}</div>
  </div>
</template>

<script>
export default {
  name: 'SingleVisitor',
  props: {
    date: String,
    country: String,
    city: String,
    flag: String,
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 4rem;
  border-bottom: 1px dashed #0d1114;
  display: flex;
  flex-direction: row;
}

.flag {
  width: 8rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 3rem;
  }
  img {
    width: 3rem;
    opacity: 0.8;
    @media (max-width: 768px) {
      width: 1.5rem;
    }
  }
}

.country {
  width: 8rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.466);
  font-weight: bold;
  @media (max-width: 768px) {
    width: 4rem;
    font-size: 0.6rem;
  }
}

.city {
  width: 8rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.466);
  font-weight: bold;
  @media (max-width: 768px) {
    width: 4rem;
    font-size: 0.6rem;
  }
}

.date {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.466);
  font-weight: bold;
  letter-spacing: 0.1rem;
  @media (max-width: 768px) {
    width: 6rem;
    font-size: 0.6rem;
  }
}
</style>