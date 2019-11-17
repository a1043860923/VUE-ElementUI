<template>
  <div class="container" v-if="tipShow">
    <p>官方Q群：280648831</p>
    
    <p class="bold">禁止直接复制粘贴或直接盗用本人百度盘链接在站外分享，请自己转存后自己创建分享链接</p>

    <p class="bold">浏览网站卡顿请使用官方Chrome浏览器或切换主题</p>
    
    <p>本站原域名mygalgame.com已被墙和停用，已更换启用新域名为mmgal.com</p>

    <p class="close" @click="close">X</p>
  </div>
  
</template>

<script>

export default {
  name: 'Tip',
  props: {
    
  },
  data(){
    return {
      tipShow:true
    }
  },
  methods: {
    close(){
      this.tipShow=false;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.container
    position relative
    background rgba(253, 254, 254, 0.86)
    width 750px
    font-size: 12px
    padding 19px
    margin: 30px 0
    border-radius: 4px;
    box-shadow: 0px 0px 8px black;
    transition all 0.5s 
    &:hover
        background rgba(255,255,255,0.9);
        box-shadow: 0px 0px 50px black;
        transition all 0.5s 
    
p
    text-align left
    &:nth-child(n+2)
        margin-top 19px
.bold
    font-weight bold
.close
    position absolute
    top 0
    right 19px
    cursor pointer
    &:hover
        color red
        transition all 0.5s 
@media screen and (min-width:1200px) 
    .container
        width 750px

@media screen and (min-width:992px) and (max-width:1200px) 
    .container
        width 616px

@media screen and (min-width:768px) and (max-width:992px) 
    .container
        width 720px
        margin-left  auto
        margin-right  auto
@media screen and (min-width:0px) and (max-width:768px) 
    .container
        width 80%
        margin-left  auto
        margin-right  auto
</style>
