<template>
	<main class="design-philosophy">
		<h2 class="title">设计原则</h2>
		<DesignPhilosophyImgArea></DesignPhilosophyImgArea>
		<DesignPhilosophyTextArea></DesignPhilosophyTextArea>
	</main>
</template>

<script>
import DesignPhilosophyImgArea from './DesignPhilosophyImgArea.vue'
import DesignPhilosophyTextArea from './DesignPhilosophyTextArea.vue'
export default {
  name: 'DesignPhilosophy',
  components:{
	DesignPhilosophyImgArea,
	DesignPhilosophyTextArea
  },
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
.design-philosophy
	width 80%
	float left
	padding-left 30px
	box-sizing border-box
	.title
		font-weight 400
		color #1f2f3d
		font-size 28px
		margin-bottom 10px
	article
		display flex
		section
			background #fbfcfd
			height 204px
			padding 0 60px
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
