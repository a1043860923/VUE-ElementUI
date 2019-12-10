<template>
	<div class="footer-item">
		<h4>{{title}}</h4>
		<a :href="item.url" v-for="item in itemList" :key="item.text" target="_blank">
			{{item.text}}
		</a>
	</div>
</template>

<script>

export default {
  name: 'FooterItem',
  props: {
    title:String,
	itemList:Array
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
.footer-item
	float left
	display flex
	flex-direction column
	width 200px
	h4
		font-size 18px
		color #333
		line-height 1
		margin 0 0 15px
		font-weight 400
	a
		line-height 2
		font-size 14px
		color #666
		text-decoration none
		&:hover
			color #333
</style>
