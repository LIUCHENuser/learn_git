<template>
	<div class="home-warp">
		<div class="layui-layout layui-layout-admin">
			<div class="layui-header" style="height: ">
				<div class="layui-logo" @click="dian(0)">德美斯智慧物流管理系统</div>
				<!-- 头部区域（可配合layui已有的水平导航） -->
				<ul class="layui-nav layui-layout-left">
					<li class="layui-nav-item">
						<a class="left-nav-font" href="">数据展示</a>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" href="userList.html" target="frame">信息滚动</a>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" href="">待办事项</a>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" href="javascript:;">系统设置</a>
						<dl class="layui-nav-child">
							<dd>
								<a href="">管理员设置</a>
							</dd>
							<dd>
								<a href="">积分设置</a>
							</dd>
							<dd>
								<a href="">信息发布</a>
							</dd>
						</dl>
					</li>
				</ul>
				<ul class="layui-nav layui-layout-right">
					<li class="layui-nav-item">
						<a href="javascript:;"><img src="img/admin.jpg" class="layui-nav-img">Jerry</a>
						<dl class="layui-nav-child">
							<dd>
								<a href="">基本资料</a>
							</dd>
							<dd>
								<a href="">安全设置</a>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a href="login.html">退出</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="layui-side layui-bg-black">
			<div class="layui-side-scroll">
				<!-- 左侧导航区域（可配合layui已有的垂直导航） -->
				<ul class="layui-nav layui-nav-tree" lay-filter="test">
					<li class="layui-nav-item" style="margin-top: 20px">
						<a class="" href="javascript:;">DLP屏幕管理</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame">DLP信息列表</a>
							</dd>
							<dd>
								<a target="frame">DLP信息添加</a>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" href="javascript:;">服务站</a>
						<dl class="layui-nav-child">
							<dd>
								<a @click="dian(11)" target="frame">服务站列表</a>
								<dl class="layui-nav-child">
									<dd>
										<a @click="dian(111)">服务站添加</a>
									</dd>
								</dl>
							</dd>
							<dd>
								<a target="frame">入住商家</a>
								<dl class="layui-nav-child">
									<dd>
										<a target="frame">超市</a>
									</dd>
									<dd>
										<a target="frame">餐厅</a>
									</dd>
									<dd>
										<a target="frame">住宿</a>
									</dd>
									<dd>
										<a target="frame">维修</a>
									</dd>
									<dd>
										<a target="frame">加油</a>
									</dd>
								</dl>
							</dd>
							<dd>
								<a target="frame">金额统计</a>
							</dd>
							<dd>
								<a target="frame">停车场</a>
								<dl class="layui-nav-child">
									<dd>
										<a @click="dian(141)" target="frame">停车场信息</a>
									</dd>
									<dd>
										<a target="frame">车辆列表</a>
									</dd>
								</dl>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a @click="dian(2)" class="left-nav-font" href="javascript:;">供货商</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame">待审核供货商列表</a>
							</dd>
							<dd>
								<a target="frame">货源列表</a>
							</dd>
							<dd>
								<a target="frame">发布订单</a>
							</dd>
							<dd>
								<a target="frame">完成订单</a>
							</dd>
							<dd>
								<a target="frame">金额统计</a>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a @click="dian(3)" class="left-nav-font" href="javascript:;">用户</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame">全部用户</a>
							</dd>
							<dd>
								<a target="frame">待审核</a>
							</dd>
							<dd>
								<a target="frame">数据统计</a>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" href="javascript:;">车辆</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame" @click="dian(41)">车辆列表</a>
							</dd>
							<dd>
								<a target="frame">待审核</a>
							</dd>
							<dd>
								<a target="frame">车辆统计</a>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" href="javascript:;">票据</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame">管理员列表</a>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</div>
		<div class="layui-body">
		    <!-- 内容主体区域 -->
		    <div style="padding: 71px 10px 0 10px;">
		    	<homehome v-if="isshow==0" @send="getData"></homehome>
		    	<sslist v-if="isshow==11"></sslist>
		    	<ssadd v-if="isshow==111"></ssadd>
		    	<carlist v-if="isshow==141"></carlist>
		    	<suprlist v-if="isshow==2"></suprlist>
		    	<userlist v-if="isshow==3"></userlist>
		    	<carinfo v-if="isshow==41"></carinfo>
		    </div>
		</div>	
	</div>

</template>

<script>
	import {car} from "@/api"
	import homehome from "../view/home-home"
	import ssadd from "../view/ssadd"
	import sslist from "../view/sslist"
	import carlist from "../view/carlist"
	import suprlist from "../view/suprlist"
	import userlist from "../view/userlist"
	import carinfo from "../view/carinfo"
	import {getItem} from "@/util/cookie";
	export default {
		data() {
			return {
				isshow:0,
			}
		},
		created() {
			this.getid()
		},
		mounted() {
			layui.use('element', function() {
				var element = layui.element;
			})
		},
		methods: {
			dian(num){
				this.isshow=num
			},
			getData(num){
				this.isshow=num
			},
			getid(){
				if(!getItem("id")){
					console.log("嘿嘿嘿")
				}
			},
		},
		components:{
			homehome,
			sslist,
			ssadd,
			carlist,
			suprlist,
			userlist,
			carinfo,
		}
	}
</script>
<style>
	.left-nav-font {
		font-size: 16px;
		font-weight: bold;
	}
	a{
		cursor: pointer;
	}
	.layui-body{
		min-width: 1366px;
	}
</style>