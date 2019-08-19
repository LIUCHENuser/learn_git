<template>
	<div class="carinfo-warp">
		<div>
			<p style="font-weight: bold; margin-left: 5px">停车场列表</p >
		</div>
		<hr style="margin-top: 5px; height: 2px; background: red">
		<div class="sou-input">
			<input type="text" name="sou" id="sou" value="" v-model="sou" placeholder="请按服务站名称搜索服务站"/><button @click="souSuo()">搜索</button>
		</div>
		<el-table style="width: 100%;" border :data="carlist.slice((currentPage-1)*pagesize,currentPage*pagesize)">
            <el-table-column label="车牌" prop="plate_Number">
            </el-table-column>    
            <el-table-column label="载重" prop="load">
            </el-table-column>    
            <el-table-column label="行驶证" prop="Vehicle_license">
            </el-table-column>    
            <el-table-column label="所在省" prop="c_omit">
            </el-table-column>    
            <el-table-column label="所在市" prop="c_cantonal">
            </el-table-column>    
            <el-table-column label="所在县" prop="c_county">
            </el-table-column>    
            <el-table-column label="车辆登记证书" prop="vehicle_registration">
            </el-table-column>    
            <el-table-column label="停在所属 服务站" prop="s_car">
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
            :total="carlist.length">
        </el-pagination>
	</div>
</template>

<script>
	import {carinfo} from "@/api"
	import {carfind} from "@/api"
	import {getItem} from "@/util/cookie";
	import {Pagination,Table} from 'element-ui';
	export default{
		name:"carfo",
		data(){
			return{
				sou:"",
				carlist:[],
				currentPage:1,
				pagesize:10,
			}
		},
		created() {
			this.getid()
			carinfo().then((res)=>{
				this.carlist=res.data;
			})
		},
		mounted() {
		},
		methods: {
			souSuo(){
				carfind({
					plate_Number:this.sou
				}).then((res)=>{
					this.carlist=res.data;
				})
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