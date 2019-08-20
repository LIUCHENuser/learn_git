<template>
	<div class="sslist-warp">
		<div>
 			<p style="font-weight: bold; margin-left: 5px">服务站列表</p >
		</div>
		<hr style="margin-top: 5px; height: 2px; background: red">
		<div class="sou-input">
			<input type="text" name="sou" id="sou" value="" v-model="sou" placeholder="请按服务站名称搜索服务站"/><button @click="souSuo()">搜索</button>
		</div>
		<el-table style="width: 100%;" border :data="ssInformation.slice((currentPage-1)*pagesize,currentPage*pagesize)">
            <el-table-column label="服务站名称" prop="s_name">
            </el-table-column>    
            <el-table-column label="所在省" prop="s_omit">
            </el-table-column>    
            <el-table-column label="所在市" prop="s_cantonal">
            </el-table-column>    
            <el-table-column label="所在县" prop="s_county">
            </el-table-column>    
            <el-table-column label="详细地址" prop="s_address">
            </el-table-column>    
            <el-table-column label="经度" prop="s_long">
            </el-table-column>    
            <el-table-column label="维度" prop="s_dime">
            </el-table-column>    
            <el-table-column label="负责人" prop="leader">
            </el-table-column>    
            <el-table-column label="电话" prop="s_phone">
            </el-table-column>    
            <el-table-column
		    fixed="right"
		    label="操作"
		    width="120">
			    <template slot-scope="scope">
				    <el-button @click.native.prevent="deleteRow(scope.$index, ssInformation)" type="text" size="small">
						移除
				    </el-button>
				    <el-button @click.native.prevent="xiang(scope.$index, ssInformation)" type="text" size="small">
						详情
				    </el-button>
			    </template>
		    </el-table-column>
		</el-table>
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"        
            layout="total, prev, pager, next, jumper"
            :total="ssInformation.length">
        </el-pagination>
	</div>
</template>

<script>
	import {stainfo} from "@/api"
	import {stafind} from "@/api"
	import {del_sta} from "@/api"
	import {stax} from "@/api"
	import {getItem} from "@/util/cookie";
	import {Pagination,Table} from 'element-ui';
	export default {
		name: "sslist",
		data() {
			return {
				ssInformation:[],
				sou:"",
				currentPage:1,
				pagesize:10,
			}
		},
		created() {
			this.getid()
			stainfo().then((res)=>{
				this.ssInformation=res.data;
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
			deleteRow(a, b){
				let Id=b[a].id;
				del_sta({id:Id}).then((res)=>{
					stainfo().then((res)=>{
						this.ssInformation=res.data;
					})
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
			xiang(a,b){
				let Id=b[a].id;
				stax({id:Id}).then((res)=>{
					console.log(res)
				})
			}
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