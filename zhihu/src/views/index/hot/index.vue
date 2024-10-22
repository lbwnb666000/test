<template>
	<div class="container">
		<div class="title">
				<el-carousel height="40px" direction="vertical" :autoplay="true">
					<el-carousel-item v-for="item in swipers" :key="item.id">
						<el-button size="small" round type="danger">{{ item.type }}</el-button>
						<span>{{ item.content }}</span>
					</el-carousel-item>
				</el-carousel>
		</div>
		<div class="content" v-for="item in hotNews" :key="item.id">
			<div class="item">
				<div class="left">
					<div class="number" :class="item.Nothree ? 'Nothree' : ''">{{ item.id }}</div>
					<el-button size="small" type="warning" v-if="item.new"/>
				</div>
				<div class="right">
					<div class="new">
						<div class="right-all">
							<div class="right-title">
								{{ item.title }}
							</div>
							<P>{{ item.content }}</P>
							<div class="tool">
								<i class="iconfont icon-fire-fill">
									{{ item.hot }}热度
								</i>
								<i class="iconfont icon-fasong">
									分享
								</i>
							</div>	
						</div>
						<div>
							<el-image :fit="contain" src="../../../../public/下载.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

import { ref } from 'vue';

const swipers = ref([
	{ id:1,type:"辟谣",content:"辟谣专区" },
	{ id:2,type:"关注",content:"公安网安:造谣「呼和浩特当街杀人」,罚！" }
])
const hotNews = ref([
	{id:1,title:"十分漫长开发票威威。现场缴费了哇哦，十分漫长开发票威威。现场缴费了哇哦",content:"孙大发感慨，打开v哦显露出怕",url:"*",hot:"14万",new:true,Nothree:true},
	{id:2,title:"十分漫长开发票威威。现场缴费了哇哦",content:"孙大发感慨，打开v哦显露出怕",url:"*",hot:"14万",new:false,Nothree:true},
	{id:3,title:"十分漫长开发票威威。现场缴费了哇哦",content:"孙大发感慨，打开v哦显露出怕",url:"*",hot:"14万",new:true,Nothree:true},
	{id:4,title:"十分漫长开发票威威。现场缴费了哇哦",content:"孙大发感慨，打开v哦显露出怕",url:"*",hot:"14万",new:false,Nothree:false}
])
</script>

<style lang="less" scoped>
.container{
	.title{
		height: 40px;
		.el-carousel{
			.el-button{
				margin: 8px;
			}
			span{

			}
		}
	}
	.content{
		border-top: 1px solid lightslategrey;
		margin: 10px;
		.item{
			margin-top: 10px;
			display: flex;
			.left{
				.number{
					margin:2px 0 0 5px;
				}
				.Nothree{
					color: lightcoral;
				}
				.el-button{
					margin-top:5px;
				}
			}
			.right{
				.new{
					display: flex;
					justify-content: space-between;
					.right-all{
						flex-grow: 2;
						height: 140px;
						margin: 0 20px;
						position: relative;
						.right-title{
							font-weight: 800;
							font-size: 18px;
						}
						p{
							margin: 10px 0;
							font-size: 16px;
						}
						.tool{
							position: absolute;
							bottom: 5px;
								i{
									margin: 0 10px;
									color: lightslategray;
								}
						}
					}
					p{
						flex-grow: 1;
						.el-image{
						width: 160px;
						height: 120px;
						}
					}	
				}
			}
		}
	}
}
</style>