<template>
	<div class="container">
		<div class="content">
			<div class="title">
				<div class="routes" v-for="item in lists" >
					<el-link :underline="false" @click="router.push(item.url)">{{ item.name }}</el-link>
			 	</div>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router'
	
	const router = useRouter()
	const lists = ref([
		{name:'关注',url:'/index/interest'},
		{name:'推荐',url:'/index/recommend'},
		{name:'热榜',url:'/index/hot'},
		{name:'视频',url:'/index/video'}
	])
</script>

<style lang="less" scoped>
	.container{
		.content{
			width:650px;
			background-color: white;
			border-radius: 2px;
			box-shadow: 0 1px 3px #ddd;
			box-sizing: border-box;
			overflow: hidden;
			// .el-menu{
			// 	margin-bottom: 20px;
			// }
			.title{
				border-bottom: 1px solid #ddd;
				display: flex;
				.routes{
					.el-link{
						margin: 10px;
						font-size: 18px;
					}
				}
			}
		}
	}
</style>