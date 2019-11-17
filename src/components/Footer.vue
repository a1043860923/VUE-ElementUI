<template>
  <div class="container">
      © 2019-2019 mysite .Powered by WordPress. Theme By YangJia 
  </div>
</template>

<script>

export default {
  name: 'Footer',
  props: {
    
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
    margin-top 100px
    padding-bottom 50px
    color white
    font-size 15px
@media screen and (min-width:768px) and (max-width:992px) 
    .container
        margin-left  auto
        margin-right  auto
@media screen and (min-width:0px) and (max-width:768px) 
    .container
        width 750px


</style>
