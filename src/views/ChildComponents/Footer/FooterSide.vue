<template>
  <div class="footer-side">
	<p>Element 2.1 Fullerene</p> 
	<i class="iconfont icon-weixin-copy"></i>
	<a href=""><i class="iconfont icon-github-copy"></i></a>
	<a href=""><i class="iconfont icon-weibiaoti301-copy"></i></a>
  </div>
</template>

<script>

export default {
  name: 'FooterSide',
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
.footer-side
	float right
	color #666
	font-size 18px
	font-weight 600
	text-align right
.iconfont
	opacity 0.4
	font-size 30px
	color #8d99ab
	line-height 80px
	margin-left 20px
	vertical-align middle
	text-decoration none
	transition .3s 
	&:hover
		opacity 1
		font-size 36px
</style>
