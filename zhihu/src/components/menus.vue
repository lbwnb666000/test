<template>
    <div class="container">
        <el-menu
	    :default-active="$route.path"
	    class="el-menu-demo"
	    mode="horizontal"
        :ellipsis=false
		router
	    >
            <el-menu-item v-for="item in lists" :key="item.url" :index="item.url" >
                <span>{{ item.name }}</span>
            </el-menu-item>
	    </el-menu>
        <input type="text">
        <el-button type="primary" @click="askOne">提问</el-button>
        <el-icon class="searchIcon"><Search /></el-icon>
        <div class="right">
                <div class="icon" @click="openMessage">
                    <i class="iconfont icon-notification-fill"></i>
                    <p>消息</p>
                </div>
                <div class="icon" @click="openMyMessage">
                    <el-icon><Comment /></el-icon>
                    <p>私信</p>
                </div>
                <div class="dropdown">
                    <el-dropdown trigger="click">
                        <el-image src="../../public/vite.svg"/>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item :icon="User" @click="myIndex">我的主页</el-dropdown-item>
                                <el-dropdown-item :icon="Star" @click="veryEasy">无障碍</el-dropdown-item>
                                <el-dropdown-item :icon="Coordinate" @click="loveOfmodel">关怀版</el-dropdown-item>
                                <el-dropdown-item :icon="Warning" @click="setting">设置</el-dropdown-item>
                                <el-dropdown-item :icon="SwitchButton" @click="quit">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                </el-dropdown>
                </div>
        </div>
    </div>
</template>

<script setup>
	import { ref } from 'vue';
    import { useRouter } from 'vue-router'
    import { Comment,User,Star,Coordinate,SwitchButton, Warning,Search } from '@element-plus/icons-vue'

    
    const router = useRouter()
	const lists = ref([
		{name:'首页',url:'/index'},
		{name:'知乎知学堂',url:'/education'},
		{name:'发现',url:'/explore'},
		{name:'等你来答',url:'/waiting'}
	])

    //提问
    function askOne(){

    }

    //消息
    function openMessage(){

    }

    //私信
    function openMyMessage(){

    }

    //我的主页
    function myIndex(){

    }

    //无障碍
    function veryEasy(){

    }

    //关怀版
    function loveOfmodel(){

    }

    //设置
    function setting(){

    }

    //退出
    function quit(){

    }
</script>

<style lang="less" scoped>
    .container{
        input{
            margin: 10px;
            height: 30px;
            width: 360px;
            padding-left: 10px;
            border-radius: 40px;
            position: relative;
            outline:none;
            background-color: #eee;
            border: 1px solid #ddd;
        }
        .el-button{
            margin: 10px 0;
            border-radius: 40px;
        }
        .searchIcon{
            display: inline-block;
            top: 18px;
            right: 100px;
            color: lightslategray;
        }
        .right{
            margin: 0 260px 5px 30px;
            display: flex;
            .icon{
                cursor: pointer;
                color: lightslategray;
                margin: 10px 15px;
                font-size: 15px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p{
                    margin: 0;
                }
                .iconfont{
                    font-size: 15px;
                }
            }
            .dropdown{
                cursor: pointer;
                margin: 10px ;
            }
        }
    }
</style>