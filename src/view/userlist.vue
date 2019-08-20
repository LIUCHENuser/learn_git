<template>
	<div class="userlsit-warp">
		<!--用户列表-->
		<div>
			<p style="font-weight: bold; margin-left: 5px">用户列表</p >
		</div>
		<hr style="margin-top: 5px; height: 2px; background: red">
		<div class="sou-input">
			<input type="text" name="sou" id="sou" value="" v-model="sou" placeholder="请按服务站名称搜索服务站"/><button @click="souSuo()">搜索</button>
		</div>
		<div style="width: 100%; border-bottom: solid 2px black; margin-top: 5px;"></div>
		<el-table style="width: 100%;" border :data="userlist.slice((currentPage-1)*pagesize,currentPage*pagesize)">
            <el-table-column label="普通用户昵称" prop="u_name">
            </el-table-column>    
            <el-table-column label="真实姓名" prop="u_TrueName">
            </el-table-column>    
            <el-table-column label="用户手机号" prop="u_phone">
            </el-table-column>    
            <el-table-column label="用户性别" prop="u_gener">
            </el-table-column>    
            <el-table-column label="用户年龄" prop="u_age">
            </el-table-column>    
            <el-table-column label="用户居住地" prop="u_address">
            </el-table-column>    
            <el-table-column label="用户身份证" prop="u_ID_card">
            </el-table-column>    
            <el-table-column label="用户头像" prop="u_user_img">
            </el-table-column>    
            <el-table-column label="积分" prop="u_integral">
            </el-table-column>    
            <el-table-column label="操作">
            	<button>修改</button>
            	<button>删除</button>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"        
            layout="total, prev, pager, next, jumper"
            :total="userlist.length">
        </el-pagination>
	</div>
</template>

<script>
	import {userinfo} from "@/api"
	import {getItem} from "@/util/cookie";
	export default{
		name: "sslist",
		data() {
			return {
				userlist:[],
				sou:"",
				currentPage:1,
				pagesize:10,
			}
		},
		created() {
			this.getid()
			userinfo().then((res)=>{
				this.userlist=res.data;
			})
		},
		methods: {
			souSuo(){
//				carfind({
//					plate_Number:this.sou
//				}).then((res)=>{
//					this.carlist=res.data;
//				})
			},
			// 初始页currentPage、初始每页数据数pagesize和数据data
	        handleSizeChange: function (size) {
	                this.pagesize = size;
	        },
	        handleCurrentChange: function(currentPage){
	                this.currentPage = currentPage;
	        },
	        getid(){
				if(!getItem("id")){
					alert("您的身份信息已过期,请重新登录")
					this.$router.push("/login")
				}
			},
		}
	}
</script>

<style>
</style>