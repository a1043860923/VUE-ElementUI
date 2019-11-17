<template>
  <div :class="['container',{'active':index==currentNum}]" >
      <span style="margin:0 auto">{{index}}</span>
  </div>
</template>

<script>

export default {
  name: 'Page',
  props: {
      index:Number,
      currentNum:Number
  },
  data(){
    return {
      isActive:false,
      
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.container
    height 32px
    flex-basis 32px
    background rgba(107,105,214,0)
    border 2px solid rgb(107,105,214)
    border-radius 4px
    transition all .3s ease
    margin-left 10px
    color white
    line-height 32px
    font-size 15px
    cursor pointer
    margin-top 20px
.active
    background rgb(107,105,214)
@media screen and (min-width:1200px) 
    .container
        margin-left 20px
@media screen and (min-width:0px) and (max-width:768px) 
    .container
        margin-left 20px
</style>
