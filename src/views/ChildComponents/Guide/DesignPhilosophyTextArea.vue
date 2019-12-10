<template>
  <article class="design-philosophy-text-area">
	<DesignPhilosophyText title="一致性 Consistency" :textList="textList1"></DesignPhilosophyText>
	<DesignPhilosophyText title="反馈 Feedback" :textList="textList2"></DesignPhilosophyText>
	<DesignPhilosophyText title="效率 Efficiency" :textList="textList3"></DesignPhilosophyText>
	<DesignPhilosophyText title="可控 Controllability" :textList="textList4"></DesignPhilosophyText>
  </article>
</template>

<script>
import DesignPhilosophyText from './DesignPhilosophyText.vue'
export default {
  name: 'DesignPhilosophyTextArea',  
  components:{
	DesignPhilosophyText
  },
  props: {
    
  },
  data(){
    return {
      textList1:[
			{
				textTitle:'与现实生活一致',
				textContent:'与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
			},
			{
				textTitle:'在界面中一致',
				textContent:'所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
			}
		],
	textList2:[
				{
					textTitle:'控制反馈',
					textContent:'通过界面样式和交互动效让用户可以清晰的感知自己的操作；'
				},
				{
					textTitle:'页面反馈',
					textContent:'操作后，通过页面元素的变化清晰地展现当前状态。'
				}
			],
	textList3:[
				{
					textTitle:'简化流程',
					textContent:'设计简洁直观的操作流程；'
				},
				{
					textTitle:'清晰明确',
					textContent:'语言表达清晰且表意明确，让用户快速理解进而作出决策；'
				},
				{
					textTitle:'帮助用户识别',
					textContent:'界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。'
				}
			],
	textList4:[
				{
					textTitle:'用户决策',
					textContent:'根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；'
				},
				{
					textTitle:'结果可控',
					textContent:'用户可以自由的进行操作，包括撤销、回退和终止当前操作等。'
				}
			],
    }
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.design-philosophy-text-area
	display flex
	flex-direction column
</style>
