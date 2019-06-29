<template>
<div class="home-main-container">
  <div class="home-view-container flex flex-dir-col">
    <div class="heading-1">Our Free Test Package</div>
    <div class="heading-2">Choose Your Size</div>
    <div class="nav">
      <router-link to="/one">
        <div class="flex flex-dir-col align-item">
          <div>1</div>
          <div>(2-3) KG</div>
        </div>
      </router-link>
      <router-link to="/two">
        <div class="flex flex-dir-col align-item">
          <div>2</div>
          <div>(3-4) KG</div>
        </div>
      </router-link>
      <router-link to="/three">
        <div class="flex flex-dir-col align-item">
          <div>3</div>
          <div>(4-7) KG</div>
        </div>
      </router-link>
      <router-link to="/four">
        <div class="flex flex-dir-col align-item">
          <div>4</div>
          <div>(7-10) KG</div>
        </div>
      </router-link>
      <router-link to="/five">
        <div class="flex flex-dir-col align-item">
          <div>5</div>
          <div>(10-12) KG</div>
        </div>
      </router-link>
    </div>
  </div>
  <div>
    <router-view/>
  </div>
</div>
</template>

<script>
require('@/css/home.scss')
require('@/css/style.scss')
export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" >
#nav {

}
</style>
