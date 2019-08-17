<template>
	<div class="hh-warp">
		<!--主页主页面-->
		<div class="hh-list">
			<ul>
				<li><button @click="dian()">123</button></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {ssadd} from "@/api"
	export default{
		name:"home_home",
		methods:{
			dian(){
			}
		}
	}
</script>

<style>
	.hh-warp{
		width: 100%;
	}
	.hh-list{
		width: 100%;
	}
	.hh-list ul{
		width: 100%;
		display: flex;
	}
	.hh-list ul li{
		width: 33.33%;
		box-sizing: border-box;
		border: solid 1px black;
	}
</style>