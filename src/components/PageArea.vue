<template>
  <div class="container">
       <Page v-for="(item,index) in 13" :key="index"
       :index="index+1" :currentNum="currentNum" @click.native="pageClick(index+1)"></Page>
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
export default {
  name: 'PageArea',
    components: {
     Page
  },
  props: {
    
  },
  data(){
    return {
        currentNum:1,
    }
  },
  methods: {
      pageClick(index){
        this.currentNum=index;
        this.$emit("changePage",index);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.container
    display flex
    text-align center
    flex-direction row
@media screen and (min-width:1200px) 
    .container
        width 788px
        margin-top 20px
        
@media screen and (min-width:992px) and (max-width:1200px) 
    .container
        width 654px
        margin-top 20px

@media screen and (min-width:768px) and (max-width:992px) 
    .container
        margin-top 20px
        margin-left  auto
        margin-right  auto
@media screen and (min-width:0px) and (max-width:768px) 
    .container
        width 100%
        flex-wrap wrap

        justify-content flex-start
</style>
