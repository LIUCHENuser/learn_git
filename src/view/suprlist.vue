<template>
	<div class="suprlsit-warp">
		<!--供货商列表-->
		<div class="sou">
			<h2 style="font-weight: bold;">供货商信息</h2>
			<div class="sou-input">
				<input type="text" name="sou" id="sou" value="" v-model="sou" placeholder="请按服务站名称搜索服务站"/><button @click="souSuo()">搜索</button>
			</div>
		</div>
		<div style="width: 100%; border-bottom: solid 2px black; margin-top: 5px;"></div>
		<table class="layui-table">
			<thead>
				<tr>
					<th>营业执照</th>
					<th>企业类型</th>
					<th>企业地址</th>
					<th>企业电话</th>
					<th>法人身份证</th>
					<th>法人电话</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in superlist">
					<td>{{item.business_license}}</td>
					<td>{{item.Business_Type}}</td>
					<td>{{item.Business_address}}</td>
					<td>{{item.business_phone}}</td>
					<td>{{item.Corp_id}}</td>
					<td>{{item.Corp_phone}}</td>
					<td>
						删除
					</td>
				</tr>
			</tbody>
		</table>
		<!--分页-->
		<div id="superlistfen"></div>
	</div>
</template>

<script>
	import {supplierinfo} from "@/api"
	export default{
		name: "sslist",
		data() {
			return {
				superlist:[],
				sou:"",
			}
		},
		created() {
			supplierinfo().then((res)=>{
				let leng=res.data.length;
				this.superlist=res.data;
				this.$nextTick(()=>{
					layui.use('laypage', function(){
					  var laypage = layui.laypage;
					  //执行一个laypage实例
					  laypage.render({
					    elem: 'superlistfen', //注意，这里的 test1 是 ID，不用加 # 号
					    count:leng//数据总数，从服务端得到
					  });
					});
				})
			})
		},
	}
</script>

<style>
</style>