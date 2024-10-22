<template>
	<div class="container">
		<div class="left">
			<Left />
		</div>
		<div class="right">
			<Rights />
		</div>
	</div>
</template>

<script setup>
	import Left from '../../components/index-left.vue'
	import Rights from '../../components/index-rights.vue'
</script>

<style lang="less" scoped>
	.container{
		display: flex;
		margin: 0 auto;
		overflow: hidden;
		.left{
			margin:0 5px 0 360px;
		}
		.right{
			
		}
	}
</style>