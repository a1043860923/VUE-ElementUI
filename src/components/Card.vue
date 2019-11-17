<template>
  <div class="container">
      <div class="time_icom">
          <p class="month">{{month}}月</p>
          <p class="day">{{day}}</p>
      </div>
      <div class="title">
          <h1>{{title}}</h1>
      </div>
      <div class="tag">
        <div class="tag_item">
            <span class="iconfont icon-yanjing tag_item_icon"></span><p class="bold">{{tag1}}</p>
        </div>
        <div class="tag_item">
            <span class="iconfont icon-icon tag_item_icon"></span><p class="bold">{{tag2}}</p> 
        </div>
      </div>
      <div class="content">
          <img :src="img">
      </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    title:String,
    tag1:String,
    tag2:String,
    img:String,
    month:String,
    day:String
  },
  data(){
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.container
    position relative
    background rgba(253, 254, 254, 0.86)
    font-size: 12px
    padding 19px
    margin: 40px 0
    border-radius: 4px;
    box-shadow: 0px 0px 8px black;
    transition all 0.5s 
    &:hover
        background rgba(255,255,255,0.9);
        box-shadow: 0px 0px 50px black;
        transition all 0.5s 
.content
    font-size: 12px
    padding 19px
    margin: 30px 0
    border-radius: 4px;
    box-shadow: 0px 0px 8px black;
    transition all 0.5s 
    &:hover
        box-shadow: 0px 0px 50px black;
        transition all 0.5s 
    
.time_icom
    position absolute
    top -25px
    left -25px
    width 70px
    height 70px
    background rgb(107,105,214)
    border-radius 50%
    display flex
    flex-direction column
    color white
.bold
    font-weight bold
.month 
    margin-top 12px
.day
    font-size 30px
    font-weight bolder
    margin-top 5px
.title
    background skyblue 
    cursor pointer
    display inline-block
    padding 5px
    font-size 30px
    color white
.tag
    margin-top 20px
    display flex
    justify-content center
    
.tag_item
    background rgba(0,0,0,0.7)
    border-radius: 4px;
    cursor pointer
    padding 3px 5px 3px 5px
    color white
    display flex
    &:nth-child(n+2)
        margin-left 15px
.tag_item_icon
    margin-right 2px
    
p
    margin-top 1px
@media screen and (min-width:1200px) 
    .container
        width 750px
    .content
        img
          width 100%
@media screen and (min-width:992px) and (max-width:1200px) 
    .container
        width 616px
    .content
        img
          width 100%  

@media screen and (min-width:768px) and (max-width:992px) 
    .container
        width 720px
        margin-left  auto
        margin-right  auto
    .content
        img
          width 100%
@media screen and (min-width:0px) and (max-width:768px) 
    .container
        width 80%
        margin-left  auto
        margin-right  auto
    .content
        img
          width 100%
</style>
