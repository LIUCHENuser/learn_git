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
            <el-table-column type="expand">
			    <template slot-scope="props">
			        <el-form label-position="left" inline class="demo-table-expand">
				        <el-form-item label="服务站名称">
				        	<span>{{ props.row.s_name }}</span>
				        </el-form-item>
				        <el-form-item label="所在省">
				        	<span>{{ props.row.s_omit }}</span>
				        </el-form-item>
				        <el-form-item label="所在市">
				        	<span>{{ props.row.s_cantonal }}</span>
				        </el-form-item>
				        <el-form-item label="所在县">
				        	<span>{{ props.row.s_county }}</span>
				        </el-form-item>
				        <el-form-item label="详细地址">
				        	<span>{{ props.row.s_address }}</span>
				        </el-form-item>
				        <el-form-item label="经度">
				        	<span>{{ props.row.s_long }}</span>
				        </el-form-item>
				        <el-form-item label="维度">
				        	<span>{{ props.row.s_dime }}</span>
				        </el-form-item>
				        <el-form-item label="负责人">
				        	<span>{{ props.row.leader }}</span>
				        </el-form-item>
				        <el-form-item style="width: 100% !important;" label="电话">
				        	<span>{{ props.row.s_phone }}</span>
				        </el-form-item>
				        <el-form-item label="负责人身份证正面">
				        	<img :src="props.row.s_ID_card_A" class="id_card-tu" @click="tuBig(props.row.s_ID_card_A)"/>
				        </el-form-item>
				        <el-form-item label="负责人身份证反面">
				        	<img :src="props.row.s_ID_card_B" class="id_card-tu" @click="tuBig(props.row.s_ID_card_B)"/>
				        </el-form-item>
			        </el-form>
			    </template>
    		</el-table-column>
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
		    <!--<ssdetails></ssdetails>-->
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
	import {stax} from "@/api"
	import {stainfo} from "@/api"
	import {stafind} from "@/api"
	import {del_sta} from "@/api"
	import ssdetails from "../view/ssdetails"
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
				console.log(res)
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
		},
		components:{
			ssdetails,
		},
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
	.demo-table-expand {
		font-size: 0;
	}
	.demo-table-expand label {
		width: 140px;
    	color: #99a9bf;
    	text-align: right !important;
	}
	.demo-table-expand .el-form-item {
		margin-right: 0;
	    margin-bottom: 0;
		width: 50%;
	}
	.id_card-tu{
		width: 130px;
		height: 80px;
		border: solid 1px;
	}
</style>