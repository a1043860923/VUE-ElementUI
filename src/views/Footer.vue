<template>
  <div class="footer">
	<FooterItem title="链接" :itemList="linkList"></FooterItem>
	<FooterItem title="社区" :itemList="shequList"></FooterItem>
	<FooterSide></FooterSide>
  </div>
</template>

<script>
import FooterItem from './ChildComponents/Footer/FooterItem.vue'
import FooterSide from './ChildComponents/Footer/FooterSide.vue'
export default {
  name: 'Footer',
  props: {
    
  },
  data(){
	return {
		linkList:[{
			text:'代码仓库',
			url:'https://github.com/ElemeFE/element'
		},{
			text:'更新日志',
			url:'https://baidu.com/'
		},{
			text:'常见问题',
			url:'https://github.com/ElemeFE/element'
		},{
			text:'脚手架',
			url:'https://github.com/ElemeFE/element'
		},{
			text:'在线主题生成器',
			url:'https://github.com/ElemeFE/element'
		},{
			text:'Element-React',
			url:'https://github.com/ElemeFE/element'
		},{
			text:'Element-Angular',
			url:'https://github.com/ElemeFE/element'
		}],
		shequList:[{
			text:'在线讨论',
			url:'https://baidu.com/'
		},{
			text:'反馈建议',
			url:'https://github.com/ElemeFE/element'
		},{
			text:'贡献指南',
			url:'https://github.com/ElemeFE/element'
		},{
			text:'SegmentFault',
			url:'https://github.com/ElemeFE/element'
		},{
			text:'Awesome Element',
			url:'https://github.com/ElemeFE/element'
		}]
	}
  },
  components:{
	FooterItem,
	FooterSide
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.footer
	padding 40px 150px
	padding-bottom 80px
	background #f7fbfd
	width 100%
	overflow hidden
</style>
