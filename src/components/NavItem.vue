<template>
  <router-link class="container"  :to="'/'+to" tag="div" >
    <div style="height:42px"   @mouseenter="hover" @mouseleave="hoverEnd">
      <span :class="['iconfont','icon-'+navIcon,{'rotate-anime':rotateAnime}]" />
      <span>{{navContent.title}}</span>
        <div class="menu" v-show="menuShow">
          <!--<div class="cursor-default"></div>-->
          <p  @click.stop="menuClick('p1')">{{navContent.content[0]}}</p>
          <p  @click.stop="menuClick('p2')">{{navContent.content[1]}}</p>
          <p  @click.stop="menuClick('p3')">{{navContent.content[2]}}</p>
          <!-- <div class="cursor-default"></div>-->
        </div>
    </div>
  </router-link>
 
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    to:String,
    navContent: Object,
    navIcon:String,
    rotateAnime:Boolean
  },
  data(){
    return{
      menuShow:false
    }
  },
  methods:{
    menuClick(e){
      if(e==="p1"){
        alert('点击1,通过this.$router.push进入某页面');
        console.log(this.$route)
        this.$router.push('/某页面');
      }
      else if(e==="p2"){
        alert('点击2,通过this.$router.push进入某页面');
        this.$router.push('/某页面');
      }
      else{
        alert('点击3,通过this.$router.push进入某页面');
        this.$router.push('/某页面');
      }
      
    },
    hover(){ 
      this.menuShow=true;
    },
    hoverEnd(){
      this.menuShow=false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.container
  position relative
  width auto
  height 24px
  line-height 24px
  font-size 14px
  color white
  background rgba(0,0,0,0)
  cursor pointer
  text-align center
  &:hover
    background rgba(100,90,200,0.7)
.menu
  position absolute
  left 0
  top  54px
  background rgba(255,255,255,0.9)
  cursor pointer
  color black
  z-index 2
  p
    width 90px
    padding 10px 16px
    text-align left
    &:hover
      background red

.cursor-default 
  height 5px
  cursor default

.rotate-anime
  display inline-block
  animation rotatett 3s infinite linear
.router-link-exact-active
  background rgba(138,43,226,0.7)
  &:hover
    background rgba(138,43,226,0.7)
@keyframes rotatett {
  from {transform:rotate(0deg)}
  to {transform:rotate(360deg)}
}

@media screen and (min-width:1200px) 
  .container
    padding 15px
@media screen and (min-width:992px) and (max-width:1200px) 
  .container
    padding 15px
@media screen and (min-width:768px) and (max-width:992px) 
  .container
    padding 10px
  .menu
    margin-top -10px
@media screen and (min-width:0px) and (max-width:768px) 
  .container
    width 100%
    padding 10px
    text-align left 
  .menu
    margin-top -10px
 
</style>
