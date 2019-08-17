<template>
	<div class="carlist-warp">
		<h2 style="font-weight: bold;">停车场信息</h2>
		<div style="width: 100%; border-bottom: solid 2px black; margin-top: 5px;"></div>
		<table class="layui-table">
			<thead>
				<tr>
					<th>车牌号</th>
					<th>入场时间</th>
					<th>出场时间</th>
					<th>预交金额</th>
					<th>是否入住</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in carlist">
					<td>{{item.plate_Number}}</td>
					<td>{{item.appear_time}}</td>
					<td>{{item.entry_time}}</td>
					<td>{{item.prepay}}</td>
					<td>
						<p v-if="item.is_check=='False'">否</p>
						<p v-if="item.is_check=='True'">是</p>
					</td>
					<td>
						删除
					</td>
				</tr>
			</tbody>
		</table>
		<!--分页-->
		<div id="carlistfen"></div>
	</div>
</template>

<script>
	import {parkinfo} from "@/api"
	export default {
		name: "sslist",
		data() {
			return {
				carlist:[],
			}
		},
		created() {
			parkinfo().then((res)=>{
				let leng=res.data.length;
				this.carlist=res.data;
				this.$nextTick(()=>{
					layui.use('laypage', function(){
					  var laypage = layui.laypage;
					  //执行一个laypage实例
					  laypage.render({
					    elem: 'carlistfen', //注意，这里的 test1 是 ID，不用加 # 号
					    count:leng//数据总数，从服务端得到
					  });
					});
				})
			})
		},
		mounted() {
		},
		methods: {

		}
	}
</script>

<style>
</style>