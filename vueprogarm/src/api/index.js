import axios from "axios";
import qs from "qs";
const base="";
export let home=(()=>{
	return axios({
		method: 'post',
		url: base+'',
		
	})
})