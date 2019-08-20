import axios from "axios";
import qs from "qs";
import {getItem} from "@/util/cookie";
import router from "@/router";
const base = "";
const shuoguo="http://192.168.31.222:8000"
const xuanbo="http://192.168.31.109:8000";
const yuequn="http://192.168.31.101:8000";
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
		url:"http://192.168.31.222:8000/login",
		data:qs.stringify(data),
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let captchanum = ()=>{
	return axios({
		method:"post",
		// baseUrl:base,
		url:"http://192.168.31.222:8000/captcha",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let captcha = ()=>{
	return axios({
		method:"post",
		// baseUrl:base,
		url:"http://192.168.31.222:8000/captcha",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}

export let ssadd = (data)=>{
	return axios({
		method:"post",
		// baseUrl:base,
		data:qs.stringify(data),
		url:xuanbo+"/add",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let stainfo = ()=>{
	return axios({
		method:"post",
		// baseUrl:base,
		url:xuanbo+"/stainfo",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let parkinfo = ()=>{
	return axios({
		method:"post",
		// baseUrl:base,
		url:xuanbo+"/parkinfo",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let supplierinfo = ()=>{
	return axios({
		method:"post",
		// baseUrl:base,
		url:xuanbo+"/supplierinfo",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let userinfo = ()=>{
	return axios({
		method:"post",
		// baseUrl:base,
		url:xuanbo+"/userinfo",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let stafind = (data)=>{
	return axios({
		method:"post",
		// baseUrl:base,
		data:qs.stringify(data),
		url:xuanbo+"/stafind",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let supplier = (data)=>{
	return axios({
		method:"post",
		// baseUrl:base,
		data:qs.stringify(data),
		url:yuequn+"/supplier",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let carinfo = ()=>{
	return axios({
		method:"post",
		// baseUrl:base,
		url:xuanbo+"/carinfo",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}

export let carfind = (data)=>{
	return axios({
		method:"post",
		// baseUrl:base,
		data:qs.stringify(data),
		url:xuanbo+"/carfind",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let del_sta = (data)=>{
	return axios({
		method:"post",
		// baseUrl:base,
		data:qs.stringify(data),
		url:xuanbo+"/del_sta",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}
export let stax = (data)=>{
	return axios({
		method:"post",
		// baseUrl:base,
		data:qs.stringify(data),
		url:xuanbo+"/stax",
		headers:{
			"content-type":"application/x-www-form-urlencoded"
		}
	})
}


//export let type = ()=>{
//	return axios({
//		method:"get",
//		url:"/type"
//	})
//}
