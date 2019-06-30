<template>
<div class="home-main-container">
  <div class="home-view-container flex flex-dir-col">
    <div class="heading-1">Our Free Test Package</div>
    <div class="heading-2">Choose Your Size</div>
    <div class="nav">
      <router-link to="/one">
        <div class="flex flex-dir-col align-item">
          <div>1</div>
          <div class="text-inline">(2-3) KG</div>
        </div>
      </router-link>
      <router-link to="/two">
        <div class="flex flex-dir-col align-item">
          <div>2</div>
          <div class="text-inline">(3-4) KG</div>
        </div>
      </router-link>
      <router-link to="/three">
        <div class="flex flex-dir-col align-item">
          <div>3</div>
          <div class="text-inline">(4-7) KG</div>
        </div>
      </router-link>
      <router-link to="/four">
        <div class="flex flex-dir-col align-item">
          <div>4</div>
          <div class="text-inline">(7-10) KG</div>
        </div>
      </router-link>
      <router-link to="/five">
        <div class="flex flex-dir-col align-item">
          <div>5</div>
          <div class="text-inline">(10-12) KG</div>
        </div>
      </router-link>
    </div>
    <div class="size-description-style">
      Sizes 1 and 2 contain the 99% water wipes and sizes 3 to 5 contain the sensitive wipes. All sizes contain a small pack of (10) diapers.
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
