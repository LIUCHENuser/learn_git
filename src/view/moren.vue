<template>
	<div>
		<div>
			<p style="font-weight: bold; margin-left: 5px">Demeis 智能化物流服务平台</p>
		</div>
		<hr style="margin-top: 5px; height: 2px; background: red">
		<div class="layui-fluid" style="height: 230px">
			<div class="layui-row layui-col-space10">
				<div class="layui-col-md4">
					<div class="layui-col-md12" style="background: #fff; height: 20px">
						<font style="margin-left: 10px; font-size: 14px; font-weight: bold;">快捷方式</font>
					</div>
					<div class="layui-col-md12" style="background: #fff; height: 200px">
						<div class="layui-row grid-demo">
							<div class="layui-col-md4">
								<div class="layui-col-md12 shubiao" style="height: 100px; width: 160px;" align="center">
									<img src="img/user.png" style="margin-top: 10px; height: 70px; width: 90px;">
									<p class="font-kj">供货商列表</p>
								</div>
							</div>
							<div class="layui-col-md4">
								<div class="layui-col-md12 shubiao" style="height: 100px; width: 160px" align="center">
									<img src="img/car.png" style="margin-top: 10px; height: 70px; width: 90px;">
									<p class="font-kj">车辆列表</p>
								</div>
							</div>
							<div class="layui-col-md4">
								<div class="layui-col-md12 shubiao" style="height: 100px; width: 160px" align="center">
									<img src="img/fuwu.png" style="margin-top: 10px; height: 70px; width: 90px;">
									<p class="font-kj">服务站列表</p>
								</div>
							</div>
						</div>
						<div class="layui-row grid-demo" style="margin-top: -20px">
							<div class="layui-col-md4">
								<div class="layui-col-md12 shubiao" style="height: 100px; width: 160px" align="center">
									<img src="img/piaoju.png" style="margin-top: 10px; height: 70px; width: 90px;">
									<p class="font-kj">票据列表</p>
								</div>
							</div>
							<div class="layui-col-md4">
								<div class="layui-col-md12 shubiao" style="height: 100px; width: 160px" align="center">
									<img src="img/carz.png" style="margin-top: 10px; height: 70px; width: 90px;">
									<p class="font-kj">车主列表</p>
								</div>
							</div>
							<div class="layui-col-md4">
								<div class="layui-col-md12 shubiao" style="height: 100px; width: 160px" align="center">
									<img src="img/puser.png" style="margin-top: 10px; height: 70px; width: 90px;">
									<p class="font-kj">普通用户</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="layui-col-md4">
					<div class="layui-col-md12" style="background: #F8F8FF; height: 20px">
						<font style="margin-left: 10px; font-size: 14px; font-weight: bold;">代办事项</font>
					</div>
					<div class="layui-col-md12" style="background: #fff; height: 200px">
						<div class="layui-row grid-demo">
							<div class="layui-col-md6">
								<div class="layui-col-md12" style="background: #fff;height: 100px">
									<button style="margin-top: 10px; margin-left: 10px; height: 90px; width: 225px; background: #DCDCDC">
									<p style="font-size: 16px;">待审核车辆</p>
									<p class="shenghe">221</p>
								</button>
								</div>
							</div>
							<div class="layui-col-md6">
								<div class="layui-col-md12" style="background: #fff;height: 100px">
									<button style="margin-top: 10px; margin-left: 10px; height: 90px; width: 225px; background: #DCDCDC">
									<p style="font-size: 16px;">待审核会员</p>
									<p class="shenghe">221</p>
								</button>
								</div>
							</div>
						</div>
						<div class="layui-row grid-demo">
							<div class="layui-col-md6">
								<div class="layui-col-md12" style="background: #fff;height: 100px">
									<button style="margin-top: 10px; margin-left: 10px; height: 90px; width: 225px; background: #DCDCDC">
									<p style="font-size: 16px;">待审核货单</p>
									<p class="shenghe">221</p>
								</button>
								</div>
							</div>
							<div class="layui-col-md6">
								<div class="layui-col-md12" style="background: #fff;height: 100px">
									<button style="margin-top: 10px; margin-left: 10px; height: 90px; width: 225px; background: #DCDCDC">
									<p style="font-size: 16px;">待审核票据</p>
									<p class="shenghe">221</p>
								</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="layui-col-md4">
					<div class="layui-col-md12" style="background: #fff; height: 20px">
						<font style="margin-left: 10px; font-size: 14px; font-weight: bold;">版本信息</font>
					</div>
					<div class="layui-col-md12" style="background: #F8F8FF; height: 200px">
						<table class="layui-table" style="height: 191px; background: #F8F8FF">
							<tr style="font-weight: bold;">
								<td>版本信息</td>
								<td>V1.0.0</td>
							</tr>
							<tr style="font-weight: bold;">
								<td>技术支持</td>
								<td>宁夏溯光网络科技</td>
							</tr>
							<tr style="font-weight: bold;">
								<td>主要功能</td>
								<td>数据展示及管理</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="layui-fluid" style="height: 300px; margin-top: 10px">
		<div class="layui-row layui-col-space10">
			<div class="layui-col-md8" style="height: 290px">
				<!-- 服务站柱状图 -->
				<div class="layui-col-md12" ref="fuwu" style="height:290px; margin-top: 20px; margin-left: 20px"></div>
			</div>
			<div class="layui-col-md4" style="height: 290px; margin-top: 10px">
				<div class="layui-col-md12" style="background: #fff; height: 20px">
					<font style="margin-left: 10px; font-size: 14px; font-weight: bold;">车辆统计</font>
				</div>
			<div class="layui-col-md12" style="background: #fff; height: 200px">
					<div   class="layui-row grid-demo">
						<div class="layui-col-md6">
							<div class="layui-col-md12" style="background: #fff;height: 140px">
								<button style="margin-top: 10px; margin-left: 10px; height: 125px; width: 225px; background: #fff">
									<p style="font-size: 16px;">今日入场车辆</p>
									<p class="car">221辆</p>
								</button>
							</div>
						</div>
						<div class="layui-col-md6">
							<div class="layui-col-md12" style="background: #fff;height: 140px">
								<button style="margin-top: 10px; margin-left: 10px; height: 125px; width: 225px; background: #fff">
									<p style="font-size: 16px;">今日出场车辆</p>
									<p class="car">221辆</p>
								</button>
							</div>
						</div>
					</div>
					<div class="layui-row grid-demo">
						<div class="layui-col-md6">
							<div class="layui-col-md12" style="background: #fff;height: 140px">
								<button style="margin-top: 10px; margin-left: 10px; height: 125px; width: 225px; background: #fff">
									<p style="font-size: 16px;">累计入场车辆</p>
									<p class="car">555辆</p>
								</button>
							</div>
						</div>
						<div class="layui-col-md6">
							<div class="layui-col-md12" style="background: #fff;height: 140px">
								<button style="margin-top: 10px; margin-left: 10px; height: 125px; width: 225px; background: #fff">
									<p style="font-size: 16px;">累计出场车辆</p>
									<p class="car">521辆</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		name:"moren",
		data(){
			return{
				
			}
		},
		mounted(){
			 var myChart = this.$echarts.init(this.$refs.fuwu);
			  // 指定图表的配置项和数据
	        var option = {
	            title: {
	                text: '各服务站点当日流水'
	            },
	            tooltip: {},
	            legend: {
	                data:['人民币']
	            },
	            xAxis: {
	                data: ["德美斯物流园","平罗物流园","石嘴山物流园","奥巴马物流园","贾维斯物流园","绿巨人物流园"]
	            },
	            yAxis: {},
	            series: [{
	                name: '人民币',
	                type: 'bar',
	                data: [5, 20, 36, 10, 10,50]
	            }]
	        };
	
	        // 使用刚指定的配置项和数据显示图表。
	        myChart.setOption(option);
			}
	
	}
	
</script>

<style>
	.shenghe{
  	font-style: normal;
    font-size: 30px;
    font-weight: 300;
    color: #009688;
  	}
  	.shubiao{
  		background: #F8F8FF;
  	}
  	.shubiao:HOVER{
  		background-color: #F0F8FF;
  	}
  	.font-kj{
  		font-weight: bold;
  	}
  	.car{
  		font-style: normal;
	    font-size: 25px;
	    font-weight: 300;
	    color: #FF6A6A;
  	}
</style>