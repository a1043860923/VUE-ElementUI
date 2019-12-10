<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
	<Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/views/Nav.vue'
import Footer from '@/views/Footer.vue'
export default {
  components: {
    Nav,
	Footer
  }
}
</script>

<style lang="stylus">
@import url('./assets/css/reset.css');
@import url('./assets/font_icon/iconfont.css');
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
div
	box-sizing border-box

</style>
