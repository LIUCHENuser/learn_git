<template>
	<div class="liebiao">
		<div>
 <p style="font-weight: bold; margin-left: 5px">车辆管理</p >
</div>
<hr style="margin-top: 5px; height: 2px; background: red">
		 <div class="layui-form-item">
    <div class="layui-input-block">
      <input type="text" name="title" required  lay-verify="required" placeholder="请输入车牌号" autocomplete="off" class="layui-input">
    </div>
  </div>
		<table class="layui-table">
  
  <thead>
    <tr>
      <th>车牌号</th>
      <th>车主手机号</th>
      <th>入场时间</th>
      <th>出场时间</th>
      <th>缴纳费用</th>
      <th>是否入住</th>
    </tr> 
    
  </thead>
  <tbody>
    <tr v-for="(item,index) in arr">
      <td v-for="(item1,index1) in item">{{item1}}</td>
    </tr>
  </tbody>
</table> 
<div id="test1">
	
</div>
		
		<select v-model="prov">
		    	<option v-for="(item,index) in arr1">{{item.name}}</option>
		    </select>
		    <select v-model="city">
		    	<option v-for="(item,index) in cityArr">{{item.name}}</option>
		    </select>
		    <select v-model="country">
		    	<option v-for="(item,index) in countryArr">{{item}}</option>
		    </select>
		
	
	</div>
</template>

<script>
	import {s_car} from "@/api"
	import {getItem} from "@/util/cookie";
	import {parkinfo} from "@/api"
	import city1 from "./city.json"
	export default{
		name:"sercarlist",
		data(){
			return{
				arr:{},
				prov: '北京',//第一次进入，updateCity()需要调用，为<省-默认值>
	            city: '',//调用updateCity()后，会改变city和country的值
	            country: '',//所以，这两个值输入也没用
	            arr1: [], //option的数据
	            cityArr: [],
	            countryArr: []
      		};
			
		},
		created(){
			parkinfo().then((res)=>{
				this.arr = res.data
			})
			
			s_car({
				id:getItem("id")
			}).then((res)=>{
				console.log(res)
			})
		},
		mounted(){
			layui.use('laypage', function(){
  			var laypage = layui.laypage;
			  //执行一个laypage实例
			  laypage.render({
			    elem: 'test1' //注意，这里的 test1 是 ID，不用加 # 号
			    ,count: 50 //数据总数，从服务端得到
			  });
			});
			this.updateCity()
			
		},
		methods:{
			updateCity: function () { 
            this.arr1 = city1 //获取城市的数据
            for (var i in this.arr1) {//遍历所有的省
                var obj = this.arr1[i];
                if (obj.name == this.prov) {//当选择一个省时
                    this.cityArr = obj.city;//将这个省下的市数据注入
                    break;
                }
            }
            this.city = this.cityArr[0].name;//这里可以设置<市-默认值>
        },
        updateCountry: function () {
            for (var i in this.cityArr) {
                var obj = this.cityArr[i];
                if (obj.name == this.city) {
                    this.countryArr = obj.area;
                    break;
                }
            }
            this.country = this.countryArr[0];//设置<区-默认值>
        }
		},
		 watch: {
        prov: function () {//当省改变时，改变城市和区
            this.updateCity(),
            this.updateCountry()
        },
        city:function () {//当市改变的时候，改变区
            this.updateCountry()
        }
    }
	
	}
</script>

<style>
.layui-input-block{
	margin-left: 0px;
}
td{
	text-align: center;
}
</style>