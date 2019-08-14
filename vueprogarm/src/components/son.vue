<template>
	<div class="son-warp">
		<h2>儿子</h2>
		<h3>{{data}}</h3>
		<div class="son-tofather">
			<router-link to="/father">
				father
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:"son",
		data(){
			return{
				sondata:"654321",
			}
		},
		props:["data"],
		created(){
			this.$emit("dian",this.sondata)
		}
	}
</script>

<style>
</style>