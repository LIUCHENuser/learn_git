<template>
<div class="ce-warp">
	<el-table
	:data="userlist"
	border
	style="width: 100%">
		<el-table-column
			prop="u_name"
			label="名">
		</el-table-column>
	</el-table>
		<el-pagination
			background
			layout="prev, pager, next"
			:total="userlist.length">
		</el-pagination>
	</div>
</template>

<script>
	import {Pagination} from 'element-ui';
	import {userinfo} from "@/api"
	export default{
		name:"ceshi",
		data() {
			return {
				userlist:[
				{u_name:"1"},
				{u_name:"2"},
				{u_name:"3"},
				{u_name:"4"},
				{u_name:"5"},
				{u_name:"6"},
				{u_name:"7"},
				{u_name:"8"},
				{u_name:"9"},
				{u_name:"10"},
				{u_name:"11"},
				{u_name:"12"},
				{u_name:"13"},
				{u_name:"14"},
				{u_name:"15"},
				{u_name:"16"},
				{u_name:"17"},
				{u_name:"18"},
				{u_name:"19"},
				{u_name:"20"},
				{u_name:"21"},
				{u_name:"22"},
				{u_name:"23"},
				{u_name:"24"},
				{u_name:"25"},
				{u_name:"26"},
				{u_name:"27"},
				{u_name:"28"},
				{u_name:"29"},
				{u_name:"30"},
				],
				currentPage1: 1,
				pagesize:10,    //    每页的数据
			}
		},
		created() {
		},
	    methods: {
	    },
	}
</script>

<style>
</style>