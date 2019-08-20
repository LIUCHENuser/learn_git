<template>
	<div class="ssadd-warp">
		<!--服务站添加-->
		<h2 style="font-weight: bold;">服务站添加</h2>
		<div style="width: 100%; border-bottom: solid 2px black; margin-top: 5px;"></div>
		<div class="ssadd-from">
			<!--<form>-->
				<ul>
					<li>
						<span>服务站名字:</span>
						<input type="text" name="s_name" id="s_name" class="layui-input" value="" placeholder="服务站名字" v-model="s_name"/>
					</li>
					<li>
						<span>所在省:</span>
						<input type="text" name="s_omit" id="s_omit" class="layui-input" value="" placeholder="所在省" v-model="s_omit"/>
					</li>
					<li>
						<span>所在市:</span>
						<input type="text" name="s_cantonal" id="s_cantonal" class="layui-input" value="" placeholder="所在市" v-model="s_cantonal"/>
					</li>
					<li>
						<span>所在县:</span>
						<input type="text" name="s_county" id="s_county" class="layui-input" value="" placeholder="所在县" v-model="s_county"/>
					</li>
					<li>
						<span>详细地址:</span>
						<input type="text" name="s_address" id="s_address" class="layui-input" value="" placeholder="详细地址" v-model="s_address"/>
					</li>
					<li>
						<span>经度:</span>
						<input type="text" name="s_long" id="s_long" class="layui-input" value="" placeholder="经度" v-model="s_long"/>
					</li>
					<li>
						<span>维度:</span>
						<input type="text" name="s_dime" id="s_dime" class="layui-input" value="" placeholder="维度" v-model="s_dime"/>
					</li>
					<li>
						<span>服务站账号:</span>
						<input type="text" name="s_account" id="s_account" class="layui-input" value="" placeholder="服务站账号" v-model="s_account"/></li>
					<li>
						<span>服务站密码:</span>
						<input type="text" name="s_pwd" id="s_pwd" class="layui-input" value="" placeholder="服务站密码" v-model="s_pwd"/>
					</li>
					<li>
						<span>负责人:</span>
						<input type="text" name="leader" id="leader" class="layui-input" value="" placeholder="负责人" v-model="leader"/>
					</li>
					<li>
						<span>电话:</span>
						<input type="text" name="s_phone" id="s_phone" class="layui-input" value="" placeholder="电话" v-model="s_phone"/>
					</li>
					<li>
						<span>负责人身份证:</span>
						<button type="button" class="layui-btn" id="test1">
							<i class="layui-icon">&#xe67c;</i>上传图片
						</button>
					</li>
				</ul>
				<div class="but-warp"><button class="layui-btn" @click="ssaddfn()">添加服务站</button></div>
			<!--</form>-->
		</div>
	</div>
</template>
<script type="text/javascript" src="./static/layui/layui.js"></script>
<script>
	import {ssadd} from "@/api"
	export default{
		name:"ssadd",
		data(){
			return{
				s_name:"",
				s_omit:"",
				s_cantonal:"",
				s_county:"",
				s_address:"",
				s_long:"",
				s_dime:"",
				s_account:"",
				s_pwd:"",
				leader:"",
				s_phone:"",
				s_ID_card:"",
			}
		},
		mounted() {
			layui.use('upload', function(){
				var upload = layui.upload;
				//执行实例
				var uploadInst = upload.render({
					elem: '#test1', //绑定元素
					url: 'http://192.168.1.106:8000/uploatest',//上传接口
					done: function(res){
						alert("上传成功")
						console.log(res)
					},
					error: function(){
						//请求异常回调
						alert("上传失败")
					}
				});
			});
		},
		methods:{
			ssaddfn(){
				ssadd({
					s_name:this.s_name,
					s_omit:this.s_omit,
					s_cantonal:this.s_cantonal,
					s_county:this.s_county,
					s_address:this.s_address,
					s_long:this.s_long,
					s_dime:this.s_dime,
					s_account:this.s_account,
					s_pwd:this.s_pwd,
					leader:this.leader,
					s_phone:this.s_phone,
					s_ID_card:this.s_ID_card,
				}).then((res)=>{
					console.log(res)
				})
			},
		}
	}
</script>

<style>
	.ssadd-warp{
		width: 100%;
		box-sizing: border-box;
		/*padding: 15px 10px 0 10px;*/
	}
	.ssadd-from{
		width: 100%;
		margin-top: 10px;
	}
	.ssadd-from ul{
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.ssadd-from ul li{
		width: 49%;
		display: flex;
		margin-top: 5px;
		margin-bottom: 10px;
		align-items: center;
		/*justify-content: flex-end;*/
	}
	.ssadd-from ul li span{
		width: 114px;
		font-size: 18px;
		text-align: right;
		margin-right: 5px;
	}
	.ssadd-from ul li input{
		flex: 1;
	}
	.but-warp{
		width: 100%;
		display: flex;
		justify-content:flex-end;
	}
</style>