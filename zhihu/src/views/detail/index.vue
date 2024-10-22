<template>
	详情页
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()


//拿到文章的id值
console.log(route.query);
</script>

<style lang="less" scoped>
</style>