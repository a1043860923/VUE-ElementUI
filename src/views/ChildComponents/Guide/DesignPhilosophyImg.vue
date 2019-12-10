<template>
  <section class="design-philosophy-img">
	<slot></slot>
	<p class="text">{{text}}</p>
	<p class="english">{{english}}</p>
  </section>
</template>

<script>

export default {
  name: 'DesignPhilosophyImg',
  props: {
    text:String,
	english:String
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
.design-philosophy-img
	background #fbfcfd
	height 204px
	padding 0 7%
	margin-right 15px
	margin-top 30px
	text-align center
	line-height 20px
	img
		width 80px
		height 80px
		margin 30px auto
	.text
		font-size 18px
		color #1f2d3d
		font-weight 400
	.english
		font-size 14px
		color #99a9bf


</style>
