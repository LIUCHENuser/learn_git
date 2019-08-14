<template>
	<div class="ispc-warp">
		
	</div>
</template>

<script>
	export default{
		name:"ispc",
		data(){
			return{
				
			}
		},
		methods:{
			IsPC() {
			    var userAgentInfo = navigator.userAgent;
			    var Agents = ["Android", "iPhone",
			                "SymbianOS", "Windows Phone",
			                "iPad", "iPod"];
			    let flag = true;
			    for (var v = 0; v < Agents.length; v++) {
			        if (userAgentInfo.indexOf(Agents[v]) > 0) {
			            flag = false;
			            break;
			        }
			    }
			    if(flag==true){
			    	this.$router.push("/homePc")
			    }
			}
		},
		created(){
			this.IsPC()
		}
	}
</script>

<style>
	.ispc-warp{
		width: 100vx;
		height: 100vx;
	}
</style>