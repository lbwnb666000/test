<template>
	<div class="container">
		<div class="article" v-for="item in articelDatas" :key="item.id">
			<div class="user" @click="goAuthorDetail" v-if="item.from">
				<p class="userAvarar">{{ item.userName }}</p>
				<i class="iconfont icon-check"></i>
				<p>发表了文章 ·</p>
				<p>{{ item.timeFrom }}</p>
			</div>

			<div class="user" @click="goAuthorDetail" v-else>
				<p class="userAvarar">{{ item.userName }}</p>
				<p>关注了问题</p>
			</div>
			<div class="texts">
				<h3>{{ item.title }}</h3>
				<div class="content" @click="goArticleDetail(item)">
					{{ item.content }}
					<el-link type="info" :underline = "false">
						阅读全文
						<el-icon size="large"><ArrowDown /></el-icon>
					</el-link>
				</div>
				<div class="operations">
					<div class="btns" v-if="item.from">
						<el-button type="primary">
							<el-icon size="Default"><ArrowUp /></el-icon>
							&nbsp
							赞成 {{ item.favour }}
						</el-button>
						<el-button type="primary">
							<el-icon size="large"><ArrowDown /></el-icon>
						</el-button>
						<p @click="item.comented=!item.comented" :class="item.comented ? 'comented' : ''" style="width: 80px;">
							<i class="iconfont icon-message-fill"></i>
							<span>{{ item.comented ? '收起评论' : (item.number !== 0 ? item.number+'条评论' : '添加评论') }}</span>
						</p>
						<p @click="shareArticle(item)" :class="item.share ? 'shared' : ''">
							<i class="iconfont icon-thunderbolt-fill"></i>
							<span>分享</span>
						</p>
						<p plain @click="isStore = true" :class="item.store ? 'store' : ''">
							<i class="iconfont icon-star-fill"></i>
							<span>{{ item.store ? '取消收藏' : '收藏' }}</span>
						</p>
						<p>
							<i class="iconfont icon-flag-fill"></i>
							<span>举报</span>
						</p>
					</div>

					<div class="btns" v-else>
						<el-button type="primary" plain>关注问题</el-button>
						<p @click="item.comented=!item.comented" :class="item.comented ? 'comented' : ''" style="width: 80px;">
							<i class="iconfont icon-message-fill"></i>
							<span>{{ item.comented ? '收起评论' : (item.number !== 0 ? item.number+'条评论' : '添加评论') }}</span>
						</p>
						<p @click="shareArticle(item)" :class="item.share ? 'shared' : ''">
							<i class="iconfont icon-thunderbolt-fill"></i>
							<span>分享</span>
						</p>
						<p @click="item.comented=!item.comented" :class="item.comented ? 'comented' : ''" style="width: 80px;">
							<i :class="item.number !== 0 ? 'iconfont icon-outdent' : ''"></i>
							<span>{{ item.number !== 0 ? item.number+'个回答' : ''}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	 <el-dialog v-model="isStore" title="添加到收藏夹" width="500" draggable @close="closeStore">
	    <span>请选择要添加到的收藏夹</span>
	    <template #footer>
	      <div class="dialog-footer">
	        <el-button @click="isStore = false">取消</el-button>
	        <el-button type="primary" @click="isStore = false">
	          确认
	        </el-button>
	      </div>
	    </template>
	  </el-dialog>
</template>

<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router'
	import { ArrowUp,ArrowDown } from '@element-plus/icons-vue'
	
	const router = useRouter()
	const isStore = ref(false)
	const articelDatas = ref([
		{id:1,img:'../../public/vite.svg',userName:'五毒',from:"ee",timeFrom:'45分钟前',title:"我我我我问问我我",content:"dawfsgdtrjhgyukfhdfgasfafdsadfsadfasf",favour:14,statu:true,number:431,store:false,comented:false,share:false},
		{id:2,img:'../../public/vite.svg',userName:'vvvvv',from:"ww",timeFrom:'1分钟前',title:"看v免费的路况良好",content:"dawfsgdtrjhgyukfhdfgasfafdsadfsadfasf",favour:123,statu:true,number:17,store:false,comented:false,share:false},
		{id:3,img:'../../public/vite.svg',userName:'西安颇为',timeFrom:'34分钟前',title:"咋写啊大",content:"的疯狂工人老人家幸亏我浪费法国加入手卡怎么了两方面矿山巨头十五分今日让伤口代码数据库",favour:0,statu:false,number:0,store:false,comented:false,share:false},
		{id:4,img:'../../public/vite.svg',userName:'为其揭幕亏了',timeFrom:'99分钟前',title:"Wald沟通工具啊单位提供",content:"13534764856753534636",favour:0,statu:false,number:52,store:false,comented:false,share:false},
	])
	
	//收藏
	function openStore(item){
		console.log(item);
	}
	
	//
	function closeStore(){
		
	}

	//跳转到作者主页
	function goAuthorDetail(){

	}

	//跳转到详情页
	function goArticleDetail(item){
		router.push('/detail?id=' + item.id)
		console.log(item);
	}
	
	//分享文章
	function shareArticle(item){
		item.share = true
		console.log(item.id);
	}
</script>

<style lang="less" scoped>
	.container{
		.article{
			margin: 20px 10px;
			.user{
				display: flex;
				.userAvarar{
					cursor: pointer;
				}
				.iconfont{
					margin-top: 16px;;
					margin-left: 8px;
					font-size: 18px;
					cursor: pointer;
					background-color: aqua;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					text-align: center;
				}
			}
			.texts{
				h3{
					cursor: pointer;
					margin: 0;
				}
				h3:hover{
					color: lightsteelblue;
				}
				.content{
					margin-top: 10px;
					cursor: pointer;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.content:hover{
					color: lightsteelblue;
				}
				.operations{
					display: flex;
					border-bottom: 1px solid #ddd;
					padding-bottom: 10px;
					.btns{
						margin-right: 10px;
						display: flex;
						.el-button{
							margin-top: 10px;
							}
						p{	
						width: 50px;
						cursor: pointer;
						margin: 10px;
						margin-top: 15px;
						font-size: 12px;
						.iconfont{
							font-size: 18px;
							}
						}
						p:hover{
							color: lightslategray;
						}
						p.comented{
							color: blue;
						}
						p.store{
							color: yellowgreen;
						}
						p.like{
							color: red;
						}
					}
					
				}
			}
		}
	}
</style>