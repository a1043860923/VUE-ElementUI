<template>
  <div id="app">
    <Nav>
      <NavItem to="" :navContent="{title:'首页',content:['菜单一','菜单二','菜单三']}" navIcon="shouye-copy"></NavItem>
      <NavItem to="china" :navContent="{title:'汉化硬盘版',content:['菜单一','菜单二','菜单三']}" navIcon="xingxing"></NavItem>
      <NavItem to="about" :navContent="{title:'新人必读',content:['菜单一','菜单二','菜单三']}" navIcon="shu1-copy"></NavItem>
      <NavItem to="a" :navContent="{title:'收藏夹',content:['菜单一','菜单二','菜单三']}" navIcon="aixin"></NavItem>
      <NavItem to="b" :navContent="{title:'主题切换',content:['菜单一','菜单二','菜单三']}" navIcon="shezhi" rotateAnime></NavItem>
      <NavItem to="c" :navContent="{title:'音乐阁',content:['菜单一','菜单二','菜单三']}" navIcon="yinyue-copy"></NavItem>
      <NavItem to="d" :navContent="{title:'留言板',content:['菜单一','菜单二','菜单三']}" navIcon="jurassic_message1"></NavItem>
      <NavItem to="e" :navContent="{title:'滚滚球',content:['菜单一','菜单二','菜单三']}" navIcon="shoucang"></NavItem>
    </Nav>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import NavItem from '@/components/NavItem.vue'
export default {
  name: 'home',
  components: {
    Nav,
    NavItem
  }
}
</script>

<style lang="stylus">
@import url('./assets/css/reset.css');
@import url('./assets/font_icon/iconfont.css');
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  background url('../public/img/bg3.png') no-repeat fixed

</style>
