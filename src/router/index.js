import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Guide = () => import(/* webpackChunkName: "about" */ '../views/Guide.vue')
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const Component = () => import(/* webpackChunkName: "about" */ '../views/Component.vue')
const DesignPhilosophy = () => import(/* webpackChunkName: "about" */ '../views/ChildComponents/Guide/DesignPhilosophy.vue')
const GuideNav = () => import(/* webpackChunkName: "about" */ '../views/ChildComponents/Guide/GuideNav.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
	meta:{
		title:'主页|Element'
	},
    chilldren:[
      {
        path: 'menu1',
        component: About,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
	meta:{
		title:'关于 | Element'
	}
  },
  {
	path: '/component',
	name: 'component',
	component: Component,
	meta:{
		title:'组件 | Element'
	}
  },
  {
	path: '/guide',
	name: 'guide',
	component: Guide,
	meta:{
		title:'指南 | Element'
	},
	children: [
		{
			// 当 /user/:id/profile 匹配成功，
			// UserProfile 会被渲染在 User 的 <router-view> 中
			path: 'designPhilosophy',
			component: DesignPhilosophy,
			meta:{
				title:'指南 | Element'
			}
		},
		{
			// 当 /user/:id/posts 匹配成功
			// UserPosts 会被渲染在 User 的 <router-view> 中
			path: 'guideNav',
			component: GuideNav,
			meta:{
				title:'指南 | Element'
			}
		},
		{ path: '', redirect:'designPhilosophy', },
	]
  },
  {
	path: '/c',
	name: 'c',
	component: About,
	meta:{
		title:'主题 | Element'
	}
  },
  {
	path: '/d',
	name: 'd',
	component: About,
	meta:{
		title:'资源 | Element'
	}
  },
  {
    path: '/',
	redirect:'/guide',
	
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to,from,next)=>{
	console.log(to)
	document.title = to.meta.title;
	next();
})
export default router
