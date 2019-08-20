<template>
	<div class="home-warp">
		<div class="layui-layout layui-layout-admin">
			<div class="layui-header" style="height: ">
				<div class="layui-logo" @click="dianji(0)">德美斯智慧物流管理系统</div>
				<!-- 头部区域（可配合layui已有的水平导航） -->
				<ul class="layui-nav layui-layout-left">
					<li class="layui-nav-item">
						<a class="left-nav-font">数据展示</a>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" target="frame">信息列表</a>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" target="frame">信息滚动</a>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" target="frame">信息添加</a>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font">系统设置</a>
						<dl class="layui-nav-child">
							<dd>
								<a href="">停车场金额设置</a>
							</dd>
							<dd>
								<a href="">停车场时间设置</a>
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
				<ul class="layui-nav layui-nav-tree" lay-filter="test" style="margin-top: 80px;">
					<li class="layui-nav-item">
						<a class="left-nav-font" href="javascript:;">停车场管理</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame" @click="dianji(11)">车辆列表</a>
							</dd>
							<dd>
								<a target="frame">金额管理</a>
							</dd>
							<dd>
								<a target="frame">数据统计</a>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font">加油站管理</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame">管理者列表</a>
							</dd>
							<dd>
								<a target="frame">添加管理者</a>
							</dd>
							<dd>
								<a target="frame">数据统计</a>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" href="javascript:;">超市管理</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame">管理者列表</a>
							</dd>
							<dd>
								<a target="frame">添加管理者</a>
							</dd>
							<dd>
								<a target="frame">商品列表</a>
							</dd>
							<dd>
								<a target="frame">商品添加</a>
							</dd>
							<dd>
								<a target="frame">数据统计</a>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" href="javascript:;">餐厅管理</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame">餐厅列表</a>
							</dd>
							<dd>
								<a target="frame">添加餐厅</a>
							</dd>
							<dd>
								<a target="frame">数据统计</a>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" href="javascript:;">住宿管理</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame">酒店列表</a>
							</dd>
							<dd>
								<a target="frame">添加酒店</a>
							</dd>
							<dd>
								<a target="frame">数据统计</a>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a class="left-nav-font" href="javascript:;">维修管理</a>
						<dl class="layui-nav-child">
							<dd>
								<a target="frame">修理厂列表</a>
							</dd>
							<dd>
								<a target="frame">添加修理厂</a>
							</dd>
							<dd>
								<a target="frame">数据统计</a>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</div>
		<div class="layui-body">
		    <!-- 内容主体区域 -->
		    <div style="padding-top: 60px;">
		    	
		    	<moren v-if="isshow==0"></moren>
		    	<sercarlist v-if="isshow==11"></sercarlist>
		    </div>
		    
		    
		</div>	
	</div>

</template>

<script>
	
	import addgSa from "../view/addgSa"
	import gSa from "../view/gSa"
	import moren from "../view/moren"
	import sercarlist from "../view/sercarlist"
	export default {
		name:"service",
		data() {
			return {
				isshow:0,
				
				}
		},
		components:{
			sercarlist,
			moren,
			gSa,
			addgSa
		},
		created() {
			
		},
		mounted() {
			layui.use('element', function() {
				var element = layui.element
			})
			
		},
		methods: {
			dianji(num){
				this.isshow = num
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
    }
	}
</script>
<style>
	.left-nav-font {
		font-size: 16px;
		font-weight: bold;
	}
	
</style>