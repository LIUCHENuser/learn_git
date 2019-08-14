<template>
	<div class="home-warp">
		<div class="home-title">
			<h2>德美斯智慧物流</h2>
		</div>
		<div class="home-login">
			<ul>
				<li><input type="text" name="username" id="" value="" v-model="username" /></li>
				<li><input type="password" name="pasw" id="" value="" v-model="pasw"/></li>
				<li><input type="checkbox" name="jizhu" id="" value="" /></li>
				<li><button @click="log()">提交</button></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {setItem,getItem} from "@/util/cookie";
	import Md5 from 'js-md5'
	import {login} from '@/api'
	
	export default{
		name:"home",
		data(){
			return{
				username:"",
				pasw:"",
			}
		},
		methods:{
			log(){
				login({
					"username":this.username,
					"password":this.pasw
				}).then((res)=>{
					console.log(res.data);
					if(res.data==="fail"){
						alert("账号或密码有误")
					}else{
						this.$router.push("/login")
					}
				})
			}
		},
		
	}
</script>

<style>
</style>