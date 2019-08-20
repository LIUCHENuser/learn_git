<template>
	<div class="carlist-warp">
		<div>
			<p style="font-weight: bold; margin-left: 5px">停车场列表</p >
		</div>
		<hr style="margin-top: 5px; height: 2px; background: red">
		<el-table style="width: 100%;" border :data="carlist.slice((currentPage-1)*pagesize,currentPage*pagesize)">
            <el-table-column label="车牌号" prop="plate_Number">
            </el-table-column>    
            <el-table-column label="入场时间" prop="appear_time">
            </el-table-column>    
            <el-table-column label="出场时间" prop="entry_time">
            </el-table-column>    
            <el-table-column label="预交金额" prop="prepay">
            </el-table-column>    
            <el-table-column label="是否入住" prop="is_check">
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
	import {parkinfo} from "@/api"
	import {getItem} from "@/util/cookie";
	import {Pagination,Table} from 'element-ui';
	export default {
		name: "sslist",
		data() {
			return {
				sou:"",
				carlist:[],
				currentPage:1,
				pagesize:10,
			}
		},
		created() {
			this.getid()
			parkinfo().then((res)=>{
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