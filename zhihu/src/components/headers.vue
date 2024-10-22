<template>
    <div class="container">
        <el-image style="width: 90px;" src="../../public/images/zhihu.jpg" @click="refreash"/>
        <div class="routers">
            <Menus />
        </div>
    </div>
</template>
<script setup>
import Menus from './menus.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

//点击图片
function refreash(){

}
</script>
<style lang="css" scoped>
    .container{
        margin: 0;
        height: 60px;
        display: flex;
        background-color: white;
        box-shadow: 0 1px  0 #eee;
        .el-image{
            cursor: pointer;
            margin: 0 30px 5px 260px;
        }
    }
</style>