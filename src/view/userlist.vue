<template>
	<div class="userlsit-warp">
		<!--用户列表-->
		<div class="sou">
			<h2 style="font-weight: bold;">用户列表</h2>
			<div class="sou-input">
				<input type="text" name="sou" id="sou" value="" v-model="sou" placeholder="请按服务站名称搜索服务站"/><button @click="souSuo()">搜索</button>
			</div>
		</div>
		<div style="width: 100%; border-bottom: solid 2px black; margin-top: 5px;"></div>
		<table class="layui-table">
			<thead>
				<tr>
					<th>普通用户昵称</th>
					<th>真实姓名</th>
					<th>用户手机号</th>
					<th>用户性别</th>
					<th>用户年龄</th>
					<th>用户居住地</th>
					<th>用户身份证</th>
					<th>用户头像</th>
					<th>积分</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in userlist">
					<td>{{item.u_name}}</td>
					<td>{{item.u_TrueName}}</td>
					<td>{{item.u_phone}}</td>
					<td>{{item.u_gener}}</td>
					<td>{{item.u_age}}</td>
					<td>{{item.u_address}}</td>
					<td>{{item.u_ID_card}}</td>
					<td>{{item.u_user_img}}</td>
					<td>{{item.u_integral}}</td>
					<td>
						删除
					</td>
				</tr>
			</tbody>
		</table>
		<!--分页-->
		<div id="userlistfen"></div>
	</div>
</template>

<script>
	import {userinfo} from "@/api"
	export default{
		name: "sslist",
		data() {
			return {
				userlist:[],
				sou:"",
			}
		},
		created() {
			userinfo().then((res)=>{
				let leng=res.data.length;
				this.userlist=res.data;
				this.$nextTick(()=>{
					layui.use('laypage', function(){
					  var laypage = layui.laypage;
					  //执行一个laypage实例
					  laypage.render({
//					  	limit:[10],
					    elem: 'userlistfen', //注意，这里的 test1 是 ID，不用加 # 号
					    count:leng,//数据总数，从服务端得到
					  });
					});
				})
			})
		},
	}
</script>

<style>
</style>