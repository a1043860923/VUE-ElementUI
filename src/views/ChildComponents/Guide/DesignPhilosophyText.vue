<template>
  <section class="design-philosophy-text">
	<h2 class="title">{{title}}</h2>
	<ul>
		<li v-for="item in textList" :key="item.textTitle">
			<span>{{item.textTitle}}:</span>
			{{item.textContent}}
		</li>
	</ul>
  </section>
</template>

<script>
export default {
  name: 'DesignPhilosophyText',  
  components:{
	
  },	
  props: {
    title:String,
	textList:Array
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
.design-philosophy-text
	margin-top 80px
	.title
		font-weight 400
		color #1f2f3d
		font-size 22px
		margin-bottom 30px
	li
		color #99a9bf
		&::before
			content ""
			display inline-block
			width 4px
			height 4px
			border-radius 50%
			vertical-align middle
			background-color #5e6d82
			margin-right 5px
	span
		color #5e6d82
		font-weight 400
		line-height 30px
		margin-right 5px
</style>
