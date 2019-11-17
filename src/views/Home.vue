<template>
  <div class="home">
    <Tip></Tip>
    <Card v-for="item in list" :key="item.title" 
      :title="item.title"
      :tag1="item.tag1"
      :tag2="item.tag2"
      :img="item.img"
      :month="item.month+''"
      :day="item.day+''">
    </Card>
    <PageArea @changePage="changePage"></PageArea>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Tip from '@/components/Tip.vue'
import Card from '@/components/Card.vue'
import PageArea from '@/components/PageArea.vue'
import Footer from '@/components/Footer.vue'
import img1 from '../../public/img/bg1.jpg'
import img2 from '../../public/img/bg2.jpeg'
import img3 from '../../public/img/bg3.png'
import Mock from 'mockjs'
import request from '../assets/js/axios'
export default {
  name: 'Home',
  components: {
    Tip,
    Card,
    Footer,
    PageArea
  },
  data(){
    return{
      list:[
      {
        title:'标题一',
        tag1:'691,170°C',
        tag2:'1739',
        img:img2,
        month:11,
        day:14
      },
      {
        title:'这是标题二',
        tag1:'764,423',
        tag2:'3739',
        img:img3,
        month:9,
        day:4
      },
      {
        title:'这是标题三',
        tag1:'434,423',
        tag2:'1239',
        img:img1,
        month:9,
        day:1
      }
      ]
    }
  },
  methods:{
    changePage(index){
      //axios访问模拟接口
      request({
         method:"POST",
         url:'/home/'+index,
      }).then(res => {
         //给小于10的月份和日期前面加上0
        let nList = [];
        for(let i of res.data.list){
          i.month=i.month.toString().padStart(2,'0');
          i.day=i.day.toString().padStart(2,'0');
          nList.push(i);
        }
        res.data.list = nList;
        //页面响应
        this.list=res.data.list
      })
    }
  },
  created(){  
    //使用mock模拟数据
    var data = Mock.mock('http://0.0.0.0:8080/home/1','post',{
      // 属性 list 的值是一个数组，其中含有  10 个元素
    'list|3': [{
        'title':/这是标题\w+/, //'这是标题三'
        'tag1':/\d{3},\d{3}/,
        'tag2':/\d{4}/,
        'img':img1,
        'month':/\d|1[0-2]/,
        'day':/\d|[1-2]\d|3[0-1]/
      }]
    });
    Mock.mock('http://0.0.0.0:8080/home/2','post',{
      // 属性 list 的值是一个数组，其中含有  10 个元素
    'list|3': [{
        'title':/这是第二页的标题\w+/, //'这是标题三'
        'tag1':/\d{3},\d{3}/,
        'tag2':/\d{4}/,
        'img':img2,
        'month':/\d|1[0-2]/,
        'day':/\d|[1-2]\d|3[0-1]/
      }]
    });
    Mock.mock('http://0.0.0.0:8080/home/3','post',{
      // 属性 list 的值是一个数组，其中含有  10 个元素
    'list|3': [{
        'title':/这是第三页的标题\w+/, //'这是标题三'
        'tag1':/\d{3},\d{3}/,
        'tag2':/\d{4}/,
        'img':img3,
        'month':/\d|1[0-2]/,
        'day':/\d|[1-2]\d|3[0-1]/
      }]
    });
    console.log(JSON.stringify(data, null, 4))
    //axios访问模拟接口
      request({
         method:"POST",
         url:'/home/1',
      }).then(res => {
         //给小于10的月份和日期前面加上0
        let nList = [];
        for(let i of res.data.list){
          i.month=i.month.toString().padStart(2,'0');
          i.day=i.day.toString().padStart(2,'0');
          nList.push(i);
        }
        res.data.list = nList;
        //页面响应
        this.list=res.data.list
      })
   
  }

}
</script>

<style lang="stylus">

@media screen and (min-width:1200px) 
    .home
      width 1200px
      margin 0 auto

@media screen and (min-width:992px) and (max-width:1200px) 
    .home
      width 992px
      margin 0 auto

@media screen and (min-width:768px) and (max-width:992px) 
    .container
        width 768px

@media screen and (min-width:0px) and (max-width:768px) 
    .container
        width 768px

</style>