<template>
	<div class="sslist-warp">
		<div class="sou">
			<h2 style="font-weight: bold;">服务站列表</h2>
			<div class="sou-input">
				<input type="text" name="sou" id="sou" value="" v-model="sou" placeholder="请按服务站名称搜索服务站"/><button @click="souSuo()">搜索</button>
			</div>
		</div>
		<div style="width: 100%; border-bottom: solid 2px black; margin-top: 5px;"></div>
		<table class="layui-table">
			<thead>
				<tr>
					<th>服务站名称</th>
					<th>所在省</th>
					<th>所在市</th>
					<th>所在县</th>
					<th>详细地址</th>
					<th>经度</th>
					<th>维度</th>
					<th>负责人</th>
					<th>电话</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in ssInformation">
					<td>{{item.s_name}}</td>
					<td>{{item.s_omit}}</td>
					<td>{{item.s_cantonal}}</td>
					<td>{{item.s_county}}</td>
					<td>{{item.s_address}}</td>
					<td>{{item.s_long}}</td>
					<td>{{item.s_dime}}</td>
					<td>{{item.leader}}</td>
					<td>{{item.s_phone}}</td>
					<td>
						详情
						删除
					</td>
				</tr>
			</tbody>
		</table>
		<div id="test2"></div>
	</div>
</template>

<script>
	import {stainfo} from "@/api"
	import {stafind} from "@/api"
	export default {
		name: "sslist",
		data() {
			return {
				ssInformation:[],
				sou:"",
			}
		},
		created() {
			stainfo().then((res)=>{
				let leng=res.data.length
				this.ssInformation=res.data;
				this.$nextTick(()=>{
					layui.use('laypage', function(){
					  var laypage = layui.laypage;
					  //执行一个laypage实例
					  laypage.render({
					    elem: 'test2', //注意，这里的 test1 是 ID，不用加 # 号
					    count:leng//数据总数，从服务端得到
					  });
					});
				})
			})
		},
		mounted() {
		},
		methods: {
			souSuo(){
				stafind({
					s_name:this.sou
				}).then((res)=>{
					this.ssInformation=res.data;
				})
			},
		}
	}
</script>

<style>
	.sslist-warp{
		width: 100%;
		box-sizing: border-box;
		/*padding: 15px 10px 0 10px;*/
	}
	.sou{
		width: 100%;
		display: flex;
		align-items: center;
	}
	.sou-input{
		flex: 1;
		display: flex;
		justify-content: center;
	}
	.sou-input input{
		width: 400px;
		height: 30px;
		font-size: 17px;
	}
	.sou-input button{
		width: 100px;
		height: 34px;
		font-size: 17px;
	}
</style>