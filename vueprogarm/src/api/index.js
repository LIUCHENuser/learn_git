import axios from "axios";
import qs from "qs";
import {getItem} from "@/util/cookie";
import router from "@/router";
const base = ""
const header = {"content-type":"application/x-www-form-urlencoded"};
axios.interceptors.request.use(config=>{
	console.log(config.url);
	if(config.url==base+"/login"){
		return config;
	}else{
		//cors跨域不允许在请求头中携带tokenID;
		config.headers.authorization = getItem("tokenID");
		return config;
	}
// return config
})

axios.interceptors.response.use((data)=>{
	return data;
},(err)=>{
	if(err.toString().includes("401")){
		// location.href="http://localhost:8080/#/login"
		router.push("/login");
	}
})
// axios.interceptors.use.response((data)=>{
// 	
// },(err)=>{
// 	401
// 	location.href="/login";
// 	log
// })
export let login = (data)=>{
	return axios({
		method:"post",
		// baseUrl:base,
		url:"http://192.168.2.161:8000/userctrl/login",
		data:qs.stringify(data),
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let order = ()=>{
	return axios({
		method:"get",
		url:base+"/order",
		params:{uid:getItem("uid")}
	})
}

export let type = ()=>{
	return axios({
		method:"get",
		url:"/type"
	})
}
export let shop =()=>{
	return axios({
		method:"get",
		url:"/shop",
	})
}
export let zhao=((obj1,obj2)=>{
	return axios({
		method: 'get',
		url: base+'/zhao',
		params:{
			username:obj1,
			password:ogj2,
		}
	})
})
export let goodsMenu = (data)=>axios({method:"get",params:data,url:"/goods"})
//添加购物测
export let car = (data)=>axios({method:"post",data:qs.stringify(data),header,url:"/car"})
//获取购物车
export let carList = (data)=>axios({method:"post",data:qs.stringify(data),header,url:"/carList"})