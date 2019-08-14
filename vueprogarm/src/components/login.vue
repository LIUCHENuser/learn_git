<template>
	<div class="login-warp">
		<!--登录块-->
		<div class="login-contents">
			<div class="login-left">
				<ul>
					<li></li>
					<li>
						<p>德美斯智慧物流园管理系统</p>
					</li>
				</ul>
				<div><img src="../assets/wachnum.png"/></div>
			</div>
			<div class="login-right">
				<ul>
					<li>登录</li>
					<li><input type="text" name="username" id="" value="" placeholder="账 号:" v-model="username" /></li>
					<li><input type="password" name="pasw" id="" value="" placeholder="密 码:" v-model="pasw"/></li>
					<li><button>登录</button></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"login",
	    data(){
	    	return{
	    		username:"",
	    		pasw:"",
	    	}
	    },
	}
</script>

<style>
	@font-face {
		font-family: "SourceHanSansCN-Regular";
		src: url(../assets/fonts/CN-Regular.otf);
	}
	@font-face {
		font-family: "SourceHanSansCN-Normal";
		src: url(../assets/fonts/CN-Normal.otf);
	}
	@font-face {
		font-family: "SourceHanSansCN-Medium";
		src: url(../assets/fonts/CN-Medium.otf);
	}
	.login-warp{
		width: 100vw;
		height: 100vh;
		background: url(../assets/loginbg.png) no-repeat;
		background-size: 100vw,100vh;
		position: relative;
	}
	.login-contents{
		width: 950px;
		height: 547px;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		display: flex;
	}
	.login-left{
		width: 600px;
		height: 100%;
	}
	.login-left ul{
		width: 100%;
		height: 80px;
		display: flex;
	}
	.login-left ul li:first-of-type{
		width: 60px;
		height: 61px;
		margin-top: 8px;
		background: url(../assets/logo.png) no-repeat;
		background-size: 60px,61px;
	}
	.login-left ul li:last-of-type{
		box-sizing: border-box;
		padding-left: 20px;
		font-size: 32px;
		color: #fff;
		font-family: SourceHanSansCN-Regular;
	}
	.login-left ul li:last-of-type p{
		padding-top: 20px;
	}
	.login-right{
		width: 350px;
		height: 547px;
	}
	.login-right ul{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-top: 95px;
		padding-left: 60px;
		background: white;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		border-bottom-right-radius: 15px;
	}
	.login-right ul li:first-of-type{
		display: inline-block;
		font-size: 32px;
		font-family: SourceHanSansCN-Regular;
		color: #096acb;
		margin-left: 83px;
	}
	.login-right ul li:nth-of-type(2){
		width: 240px;
		margin-top: 70px;
	}
	.login-right ul li:nth-of-type(2) input{
		border: none;
		width: 240px;
		font-size: 20px;
		padding-bottom: 6px;
		border-bottom: solid 2px #666666;
		font-family: SourceHanSansCN-Normal;
	}
	.login-right ul li:nth-of-type(2) input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
	    color:    #096acb;
	}
	.login-right ul li:nth-of-type(2) input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	   color:    #096acb;
	}
	.login-right ul li:nth-of-type(2) input::-moz-placeholder { /* Mozilla Firefox 19+ */
	   color:    #096acb;
	}
	.login-right ul li:nth-of-type(2) input:-ms-input-placeholder { /* Internet Explorer 10-11 */
	   color:    #096acb;
	}
	.login-right ul li:nth-of-type(3){
		width: 240px;
		margin-top: 70px;
	}
	.login-right ul li:nth-of-type(3) input{
		border: none;
		width: 240px;
		font-size: 20px;
		padding-bottom: 6px;
		border-bottom: solid 2px #666666;
		font-family: SourceHanSansCN-Normal;
	}
	.login-right ul li:nth-of-type(3) input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
	    color:    #096acb;
	}
	.login-right ul li:nth-of-type(3) input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	   color:    #096acb;
	}
	.login-right ul li:nth-of-type(3) input::-moz-placeholder { /* Mozilla Firefox 19+ */
	   color:    #096acb;
	}
	.login-right ul li:nth-of-type(3) input:-ms-input-placeholder { /* Internet Explorer 10-11 */
	   color:    #096acb;
	}
	
	.login-right ul li:last-of-type{
		width: 220px;
		height: 48px;
		margin-top: 87px;
		border-radius:24px;
		overflow: hidden;
	}
	.login-right ul li:last-of-type button{
		width: 100%;
		height: 100%;
		font-size: 22px;
		color: #FFF;
		background: #096acb;
		border: none;
		font-family: SourceHanSansCN-Medium;
	}
</style>