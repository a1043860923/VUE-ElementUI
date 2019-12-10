<template>
	<div class="container">
		<MainLeft :mainList="guideList"></MainLeft>
		<router-view/>
	</div>
</template>

<script>
import MainLeft from '../components/MainLeft.vue'
export default {
	components: {
		MainLeft
	},
	data(){
		return{
			guideList:[
				{
					url:'/guide/designPhilosophy',
					text:'设计原则'
				},
				{
					url:'/guide/guideNav',
					text:'导航'
				}
			]
		}
	},
}
</script>

<style scoped lang="stylus">
.container
	width 100%
	max-width 1140px
	margin 0 auto
	padding 55px 30px 95px
	overflow hidden
</style>