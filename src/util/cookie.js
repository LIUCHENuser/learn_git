export let setItem=(key,value,time)=>{
	document.cookie=key+"="+value+"; expires="+time;
}
export let getItem=(key)=>{
	let cookie=document.cookie;
	let arr=cookie.split("; ");
	for (let i=0;i<arr.length;i++) {
		let arr2=arr[i].split("=");
		if(arr2[0]==key){
			return arr2[1];
		}
	}
}
