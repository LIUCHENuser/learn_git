<template>
	<div class="father-warp">
		<h1>他爹</h1>
		<son @dian="fn" :data="fadata"></son>
		<div class="father-toson">
			<router-link to="/son">
				son
			</router-link>
		</div>
	</div>
</template>

<script>
	import son from "@/components/son"
	export default{
		name:"father",
		components:{son},
		data(){
			return{
				fadata:"123456"
			}
		},
		methods:{
			fn(data){
				console.log(data)
			}
		}
	}
</script>

<style>
</style>