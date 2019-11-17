<template>
  <div class="container">
    <div class="nav">
      <a class="logo" href="http://localhost:8080/">
        
      </a>
      <div :class="['nav_list',navShow?'nav_list_display':'nav_list_display_none']">
        <slot></slot>
      </div>
    </div>
    <div class="book" @click="bookClick">
      <span class="iconfont icon-shu1-copy book_font" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  props: {
    
  },
  data(){
    return {
      navShow : false
    }
  },
  methods: {
    bookClick(){
      this.navShow = !this.navShow;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hidden
  display inline-flex
.nav
  margin 0 auto
  display flex
  flex-direction row
.nav_list_display
  display inline-flex
.nav_list_display_none
  display inline-flex
.nav_list
  flex-wrap wrap
  justify-content center
.container
  background rgba(10,10,0,0.7)
  width 100%
.logo
  width 200px
  height 50px
  background url('data:image/png;base64,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') 
.book
  display none
  position absolute
  right 10px
  top 10px
  color white
  .book_font
    font-size 30px
    cursor pointer
@media screen and (min-width:1200px) 
  .nav
    width 1200px

@media screen and (min-width:992px) and (max-width:1200px) 
  .nav
    width 990px

@media screen and (min-width:768px) and (max-width:992px) 
  .nav
    width 690px
  .nav_list
    width 450px

@media screen and (min-width:0px) and (max-width:768px) 
  .book
    display block
  .nav
    flex-direction column
  .nav_list_display
    display inline-flex
  .nav_list_display_none
    display none
  .nav_list  
    margin-top 5px
    padding-top 10px
    border-top 1px solid gray
    max-height 295px
    overflow-y scroll
    &::-webkit-scrollbar 
      width: 6px;
      height: 6px;
      background-color: rgb(245, 245, 245);
    &::-webkit-scrollbar-thumb 
      box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 6px inset;
      background-color: rgb(1, 142, 232);
      border-radius: 10px;
    &::-webkit-scrollbar-track 
      box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 6px inset;
      background-color: rgb(245, 245, 245);
      border-radius: 10px;

</style>
