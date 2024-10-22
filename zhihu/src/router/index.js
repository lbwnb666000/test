import { createRouter,createWebHashHistory } from 'vue-router'

const routes = [
	{ path:'/login',name:'login',component:() =>import('../views/login/index.vue') },
	{ path:'/',name:'layout',component:() =>import('../views/HOME.vue'),  //布局页
	children:[
		{ path:'/index',name:'index',redirect:'/index/interest',component:() =>import('../views/index/index.vue'),  //首页
		  children:[
				{ path:'interest',name:'interest',component:() =>import('../views/index/interest/index.vue') },  //关注
				{ path:'hot',name:'hot',component:() =>import('../views/index/hot/index.vue') },
				{ path:'recommend',name:'recommend',component:() =>import('../views/index/recommend/index.vue') },
				{ path:'video',name:'video',component:() =>import('../views/index/video/index.vue') }
			],
		},
		{ path:'/detail',name:'detail',component:() =>import('../views/detail/index.vue') },
		{ path:'/education',name:'education',component:() =>import('../views/education/index.vue') },
		{ path:'/explore',name:'explore',component:() =>import('../views/explore/index.vue') },
		{ path:'/waiting',name:'waiting',component:() =>import('../views/waiting/index.vue') },
		],
	},

]

const router = createRouter({
	history:createWebHashHistory(),
	routes
})

export default router