<template>
	  <div class="common-layout">
	    <el-container>
	      <el-header class="header">
			  <Header />
		  </el-header>
	      <el-main>
			  <router-view></router-view>
		  </el-main>
	    </el-container>
	  </div>
</template>

<script setup>
	import Header from '../components/headers.vue';
</script>

<style lang="less" scoped>
.common-layout{
	.el-header{
		padding: 0;
		position: fixed;
		z-index: 100;
	}
	.el-main{
		margin-top: 50px;
		background-color: aliceblue;
	}
}
</style>