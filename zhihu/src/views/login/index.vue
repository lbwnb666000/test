<template>
	<div class="login">
		<div class="login-img">
			<el-image src="../../public/vite.svg" width="128px" height='81px'/>
		</div>
		<div class="login-item">
			<div class="login-left">
				<p class="login-left-title">打开知乎App</p>
				<div class="login-left-erCode">
					<el-image src="../../public/下载.png"/>
				</div>
				<p class="login-left-content">其他扫码方式:微信</p>
				<ul>
					<li @click="download"><el-button round>下载知乎App</el-button></li>
					<li @click="organization"><el-button round>开通机构号</el-button></li>
					<li @click="noProblem"><el-button round>无障碍模式</el-button></li>
				</ul>
			</div>
			<div class="login-right">
				<el-form :model="form" ref="FormRef" :rules="rules" label-width="auto" style="max-width: 600px">
				  <el-tabs v-model="defaultActive" class="demo-tabs" @tab-click="handleClick">
				    <el-tab-pane label="验证码登录" name="one" class="login-mobile">
						<el-form-item prop="mobile">
							<el-select v-model="form.select" placeholder="中国 +86" style="width: 115px">
							  <el-option label="中国 +86" value="1" />
								  <el-option label="美国 +1" value="2" />
								  <el-option label="日本 +81" value="3" />
							</el-select>
							<el-input
							     v-model="form.mobile"
							     style="max-width: 600px"
							     placeholder="手机号"
							     class="input-with-select"
							   >
							    
							 </el-input>
						</el-form-item>
						<el-form-item prop="code">
							<el-input
								  size="large"
								  v-model="form.code"
								  style="max-width: 600px"
								  placeholder="请输入6位验证码"
								  class="input-with-select"
								>
								  <template #suffix>
									<el-link :underline="false" type="primary" @click="getCode">获取短信验证码</el-link>
								  </template>
							</el-input>
						</el-form-item>
							<el-link class="video" :underline="false" @click="getVideoCode">获取语音验证码</el-link>
							<el-button class="submit" type="primary" @click="onSubmit(FormRef)">登录</el-button>
						<div class="line">其他方式登录</div>
						<div class="others">
							<svg class="icon" aria-hidden="true">
							    <use xlink:href="#icon-wechat-" @click="wechat"></use>
							</svg>
							<svg class="icon" aria-hidden="true">
							    <use xlink:href="#icon-QQ11" @click="qq"></use>
							</svg>
							<svg class="icon" aria-hidden="true">
							    <use xlink:href="#icon-weboon" @click="weibo"></use>
							</svg>
						</div>
						<div class="content">未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》</div>
					</el-tab-pane>
				    <el-tab-pane label="密码登录" name="second">
						<el-input v-model="form.userName" placeholder="手机号或邮箱"/>
						<div class="passWord">
							<el-input v-model="form.passWord" placeholder="密码"></el-input>
							<el-icon><Lock /></el-icon>
						</div>
						<p class="special">
							<el-link :underline="false" type="primary" @click="outSea">海外手机号登录</el-link>
							<el-link :underline="false" @click="forget">忘记密码</el-link>
						</p>
						<el-button class="btn-two" type="primary" @click="onSubmit(FormRef)">登录</el-button>
						<div class="line">其他方式登录</div>
						<div class="others">
							<svg class="icon" aria-hidden="true">
							    <use xlink:href="#icon-wechat-" @click="wechat"></use>
							</svg>
							<svg class="icon" aria-hidden="true">
							    <use xlink:href="#icon-QQ11" @click="qq"></use>
							</svg>
							<svg class="icon" aria-hidden="true">
							    <use xlink:href="#icon-weboon" @click="weibo"></use>
							</svg>
						</div>
						<div class="content">未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》</div>
					</el-tab-pane>
				  </el-tabs>
				</el-form>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	
	
	
	
	<!-- <div class="login">
		<div class="login-img">
			<el-image src="../../public/vite.svg"/>
		</div>
		<div class="login-text">
			<p>网站无障碍</p>
			<p><el-icon><Comment color="orangered" size="30"/></el-icon>"登录界面"改进建议</p>
		</div>
		<div class="login-item">
			<div class="login-left">
				<p class="login-left-title">手机扫码登录</p>
				<div class="login-left-img">
					<el-image src="../../public/下载.png"/>
				</div>
				<p class="login-content">打开<el-text type="warning">淘宝APP</el-text>—点击左上角扫一扫</p>
				<p class="login-left-bottom">怎么扫码登录?</p>
			</div>
			<div class="login-right">
				<div class="login-right-top">
					<el-button class="login-right-text1">密码登录</el-button>
					<el-button class="login-right-text2">短信登录</el-button>
				</div>
				<div class="login-right-content">
					<el-form>
						<el-form-item>
							<el-input class="input" placeholder="账号名/邮箱/手机号"/>
						</el-form-item>
						<el-form-item>
							<el-input class="input" placeholder="请输入登录密码">
								<template #append>
									<el-button>忘记密码</el-button>
								</template>
							</el-input>
						</el-form-item>
					</el-form>
				</div>
				<el-button class="btn">登录</el-button>
				<div class="login-right-bottom">
					<el-link><el-icon><Eleme /></el-icon>支付宝登录</el-link>
					<el-link><el-icon><Eleme /></el-icon>钉钉登录</el-link>
					<el-link>忘记密码</el-link>
					<el-link>免费注册</el-link>
				</div>
			</div>
		</div>
	</div> -->
</template>

<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router'
	import { Comment,Eleme,ChromeFilled,ElemeFilled,VideoCameraFilled,Lock } from '@element-plus/icons-vue'
	
	const router = useRouter()
	const FormRef = ref(null)
	const defaultActive = ref('one')
	const form = ref({
		mobile:'',
		code:'',
		select:'',
		userName:'',
		passWord:''
	})
	const rules = ref({
		mobile:[{message:'请输入手机号',trigger:'blur',required: true}],
		code:[{message:"请输入短信验证码",trigger:'blur',required: true}],
		userName:[{message:'请输入账号',trigger:'blur',required: true}],
		passWord:[{message:"请输入密码",trigger:'blur',required: true}]
	})

	//下载知乎App
	function download(){}

	//开通机构号
	function organization(){}
	
	//无障碍模式
	function noProblem(){}

	//切换登录/注册
	function handleClick(){}
	
	//获取短信验证码
	function getCode(){}
	
	//获取语音验证码
	function getVideoCode(){}
	
	//使用微信登录
	function wechat(){}
	
	//使用QQ登录
	function qq(){}
	
	//使用微博登录
	function weibo(){}
	
	//海外手机号登录
	function outSea(){}
	
	//忘记密码
	function forget(){}
	
	//登录=>提交表单
	async function onSubmit(formEl = {}){
		if(!formEl) return
		await formEl.validate((valid,fields) =>{
			if(valid){
				console.log('submit!');
				router.push('/index')
			}
			else{
				console.log('error submit!', fields);
			}
		})
	}
	
	
</script>

<style lang="less" scoped>
	.login{
		position: relative;
		width: 100vw;
		height: 100vh;
		background: url('../../assets/vue.svg')no-repeat top center;
		background-size: cover;
		background-color: #B8E5F8;
		.login-img{
			text-align: center;
			padding-top: 60px;
		}
		.login-item{
			height: 420px;
			display: flex;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			.login-left{
				width: 320px;
				padding: 20px;
				text-align: center;
				background-color: aliceblue;
				border-right: 1px solid #ddd;
				.login-left-title{
					line-height: 23px;
					font-weight: 600;
					margin-top: 40px;
				}
				.login-left-erCode{
					margin-top: 10px 0;
					
				}
				.login-left-content{
					line-height: 23px;
					font-weight: 600;
				}
				ul{
					padding-left: 0;
					display: flex;
					li{
						margin-left: 5px;
						list-style: none;
					}
				}
				.el-button{
					font-size: 14px;
				}
				
			}
			.login-right{
				padding: 20px;
				width: 430px;
				background-color: aliceblue;
				.demo-tabs{
				
					.el-tab-pane{

								.video{
									display: flex;
									padding: 0 15px;
									justify-content: end;
								}
								.video:hover{
									color: gray;
								}
								.submit{
									padding: 20px;
									margin: 30px 0;
									width: 390px;
								}
								.line{
									position: relative;
									font-size: 14px;
									color: darkgrey;
								}
								.line::before{
									position: absolute;
									content: '';
									left: 10px;
									top: 8px;
									background-color: lightgrey;
									width: 140px;
									height: 1px;
								}
								.line::after{
									position: absolute;
									content: '';
									right: 10px;
									top: 8px;
									background-color: lightgrey;
									width: 140px;
									height: 1px;
								}
								.others{
									display: flex;
									padding: 0 100px;
									margin: 20px 0;
									svg{
										margin: 0 20px;
										width: 24px;
										height: 24px;
										padding: 5px;
										background-color: #f6f6f8;
										border-radius: 50%;
									}
									svg:hover{
										background-color: lightgray;
										cursor: pointer;
									}
								}
								.content{
									font-size: 14px;
									color: darkgrey;
								}
								.passWord{
									position: relative;
									.el-icon{
										position: absolute;
										right: 20px;
										top: 10px;
									}
								}
								.special{
									
									.el-link{
										padding: 0 40px;
										margin: 0 20px;
										
									}
								}
								.btn-two{
									padding: 20px;
									margin: 20px 0;
									width: 390px;
								}
					}
				}
				
			}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	// .login{
	// 	height: 100vh;
	// 	background-color: whitesmoke;
	// 	.login-img{
	// 		position: absolute;
	// 		left: 250px;
	// 	}
	// 	.login-text{
	// 		position: absolute;
	// 		right: 250px;
	// 	}
	// 	.login-item{
	// 		border-radius: 20px;
	// 		height: 420px;
	// 		display: flex;
	// 		position: absolute;
	// 		top: 50%;
	// 		left:50%;
	// 		transform: translate(-50%,-50%);
	// 		background-color: aqua;
	// 		.login-left{
	// 			border-right: 1px solid #ddd;
	// 			width: 320px;
	// 			padding: 20px;
	// 			text-align: center;
	// 			.login-left-title{
	// 				font-size: 23px;
	// 				line-height: 23px;
	// 				font-weight: 400;
	// 				margin-top: 40px;
	// 			}
	// 			.login-left-img{
	// 				margin-top: 40px;
	// 				el-icon{
	// 					color: orangered;
	// 				}
	// 			}
	// 			.login-content{
	// 				font-size: 12px;
	// 				line-height: 23px;
	// 				font-weight: 500;
	// 			}
	// 			.el-text{
	// 				font-size: 12px
	// 			}
	// 			.login-left-bottom{
	// 				line-height: 23px;
	// 				font-weight: 400;
	// 				cursor: pointer;
	// 			}
	// 			.login-left-bottom:focus{
					
	// 			}
	// 			.el-button{
	// 				font-size: 11px
	// 			}
	// 		}
	// 		.login-right{
	// 			width: 430px;
	// 			padding: 20px;
	// 			text-align: center;
	// 			.login-right-top{
	// 				display: flex;
	// 				justify-content: center;
	// 				margin-top: 30px;
	// 				.login-right-text1{
	// 					border-right: 1px solid #ddd;
	// 					font-size: 22px;
	// 					font-weight: 600;
	// 					padding: 20px;
	// 					background-color: aqua;
	// 					border: none;
	// 				}
	// 				.login-right-text2{
	// 					font-size: 22px;
	// 					font-weight: 600;
	// 					padding: 20px;
	// 					background-color: aqua;
	// 					border: none;
	// 				}
	// 			}
	// 			.btn{
	// 				width: 350px;
	// 				height: 48px;
	// 				background-color: orange;
	// 				border-radius: 10px;
	// 				border: none;
	// 				font-size: 18px;
	// 				color: aliceblue;
	// 			}
	// 			.login-right-content{
	// 				padding: 30px;
	// 				.el-input{
						
	// 					width: 350px;
	// 					height: 48px;
						
	// 				}
	// 			}
	// 			.login-right-bottom{
	// 				display: flex;
	// 				margin-top: 30px;
	// 				justify-content: center;
	// 			}
	// 			.el-link{
	// 				margin: 0 10px;
	// 				border-right: 1px solid #ddd;
	// 			}
	// 			.el-link:last-child{
	// 				border-right: none;
	// 			}
	// 		}
	// 	}
	// }
</style>