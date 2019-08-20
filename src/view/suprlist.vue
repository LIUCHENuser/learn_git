<template>
	<div class="suprlsit-warp">
		<!--供货商列表-->
		<div>
		 	<p style="font-weight: bold; margin-left: 5px">供货商列表</p >
		</div>
		<hr style="margin-top: 5px; height: 2px; background: red">
		<div class="sou-input">
			<input type="text" name="sou" id="sou" value="" v-model="sou" placeholder="请按供货商名称搜索"/><button @click="souSuo()">搜索</button>
		</div>
		<div style="width: 100%; border-bottom: solid 2px black; margin-top: 5px;"></div>
		<el-table style="width: 100%;" border :data="superlist.slice((currentPage-1)*pagesize,currentPage*pagesize)">
            <el-table-column label="营业执照" prop="business_license">
            </el-table-column>    
            <el-table-column label="企业类型" prop="Business_Type">
            </el-table-column>    
            <el-table-column label="企业地址" prop="Business_address">
            </el-table-column>    
            <el-table-column label="企业电话" prop="business_phone">
            </el-table-column>    
            <el-table-column label="营业执照" prop="c_cantonal">
            </el-table-column>    
            <el-table-column label="法人身份证" prop="Corp_id">
            </el-table-column>    
            <el-table-column label="法人电话" prop="Corp_phone">
            </el-table-column>    
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
            :total="superlist.length">
        </el-pagination>
	</div>
</template>

<script>
	import {supplierinfo} from "@/api"
	import {supplier} from "@/api"
	import {getItem} from "@/util/cookie";
	import {Pagination,Table} from 'element-ui';
	export default{
		name: "sslist",
		data() {
			return {
				superlist:[],
				sou:"",
				currentPage:1,
				pagesize:10,
			}
		},
		created() {
			this.getid()
			supplierinfo().then((res)=>{
				this.superlist=res.data;
			})
		},
		methods:{
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