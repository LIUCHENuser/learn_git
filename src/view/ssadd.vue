<template>
	<div class="ssadd-warp">
		<!--服务站添加-->
		<div>
 			<p style="font-weight: bold; margin-left: 5px">服务站添加</p >
		</div>
		<hr style="margin-top: 5px; height: 2px; background: red">
		<div class="ssadd-from">
			<!--<form>-->
				<ul>
					<li>
						<span>服务站名字:</span>
						<input type="text" name="s_name" id="s_name" class="layui-input" value="" placeholder="服务站名字" v-model="s_name"/>
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
						<input type="text" name="s_phone" id="s_phone" class="layui-input" value="" placeholder="电话" />
					</li>
					<li>
						<span>请选择地址:</span>
						<select v-model="prov" class="select-style">
					    	<option v-for="(item,index) in arr1">{{item.name}}</option>
					    </select>
					    <select v-model="city" class="select-style">
					    	<option v-for="(item,index) in cityArr">{{item.name}}</option>
					    </select>
					    <select v-model="country" class="select-style">
					    	<option v-for="(item,index) in countryArr">{{item}}</option>
					    </select>
					</li>
					<li style="width: 100%;">
						<span>详细地址:</span>
						<textarea name="s_address" rows="" cols="" placeholder="详细地址" v-model="s_address" style="height: 100px; padding: 10px; flex: 1; border: solid 1px #e6e6e6;"></textarea>
					</li>
					<li style="justify-content: space-around;">
						<div class="idtu-warp">
							<span>负责人身份证正面:</span>
							<div class="idtu-tu">
								<img :src="idzheng"/>
							</div>
							<button type="button" class="layui-btn" id="test1">
								<i class="layui-icon">&#xe67c;</i>上传图片
							</button>
						</div>
						<div class="idtu-warp">
							<span>负责人身份证反面:</span>
							<div class="idtu-tu">
								<img :src="idfan"/>
							</div>
							<button type="button" class="layui-btn" id="test2">
								<i class="layui-icon">&#xe67c;</i>上传图片
							</button>
						</div>
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
	import city1 from "./city.json"
	import {getItem} from "@/util/cookie";
	export default{
		name:"ssadd",
		data(){
			return{
				s_name:"",
				s_address:"",
				s_long:"",
				s_dime:"",
				s_account:"",
				s_pwd:"",
				leader:"",
				s_phone:"",
				s_ID_card:"",
				idzheng:require('../assets/idZheng.png'),
				idfan:require('../assets/idFan.png'),
				prov: '北京',//第一次进入，updateCity()需要调用，为<省-默认值>
	            city: '',//调用updateCity()后，会改变city和country的值
	            country: '',//所以，这两个值输入也没用
	            arr1: [], //option的数据
	            cityArr: [],
	            countryArr: [],
				
			}
		},
		created(){
			this.getid()
		},
		mounted() {
			let tu=this;
			layui.use('element', function() {
				var element = layui.element;
			})
			layui.use('upload', function(){
				var upload = layui.upload;
				//执行实例
				var uploadInst = upload.render({
					elem: '#test1', //绑定元素
					url: 'http://192.168.31.222:8000/uploads',//上传接口
					done: function(res){
						alert("上传成功")
						tu.idzheng=res.url;
					},
					error: function(){
						//请求异常回调
						alert("上传失败")
					}
				});
				var uploadInst = upload.render({
					elem: '#test2', //绑定元素
					url: 'http://192.168.31.222:8000/uploads',//上传接口
					done: function(res){
						alert("上传成功")
						console.log(res)
						tu.idfan=res.url;
					},
					error: function(){
						//请求异常回调
						alert("上传失败")
					}
				});
			});
			this.updateCity()
		},
		methods:{
			ssaddfn(){
				ssadd({
					s_name:this.s_name,
					s_omit:this.prov,
					s_cantonal:this.city,
					s_county:this.country,
					s_address:this.s_address,
					s_long:this.s_long,
					s_dime:this.s_dime,
					s_account:this.s_account,
					s_pwd:this.s_pwd,
					leader:this.leader,
					s_phone:this.s_phone,
					s_ID_card_A:this.idzheng,
					s_ID_card_B:this.idfan,
				}).then((res)=>{
					console.log(res)
				})
			},
			updateCity: function () { 
	            this.arr1 = city1 //获取城市的数据
	            for (var i in this.arr1) {//遍历所有的省
	                var obj = this.arr1[i];
	                if (obj.name == this.prov) {//当选择一个省时
	                    this.cityArr = obj.city;//将这个省下的市数据注入
	                    break;
	                }
	            }
	            this.city = this.cityArr[0].name;//这里可以设置<市-默认值>
	        },
	        updateCountry: function () {
	            for (var i in this.cityArr) {
	                var obj = this.cityArr[i];
	                if (obj.name == this.city) {
	                    this.countryArr = obj.area;
	                    break;
	                }
	            }
	            this.country = this.countryArr[0];//设置<区-默认值>
	        },
	    	getid(){
				if(!getItem("id")){
					alert("您的身份信息已过期,请重新登录")
					this.$router.push("/login")
				}
			},
		},
		watch: {
	        prov: function () {//当省改变时，改变城市和区
	            this.updateCity(),
	            this.updateCountry()
	        },
	        city:function () {//当市改变的时候，改变区
	            this.updateCountry()
	        }
    	},
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
	.ssadd-from ul li:last-of-type{
		width: 100%;
	}
	.idtu-warp{
		width: 30%;
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
	.select-style{
		flex: 1;
		height: 38px;
		padding-left: 10px;
		border: solid 1px #e6e6e6;
	}
	.idtu-tu{
		width: 325px;
		height: 200px;
		overflow: hidden;
	}
</style>