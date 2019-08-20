// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Echarts from 'echarts'
import Md5 from 'js-md5'
import ElementUI from 'element-ui';
import {setItem,getItem} from "./util/cookie";
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$echarts=Echarts;
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
router.beforeEach((to,from,next)=>{
	if(getItem('id')){
	    next()
	}else{
	    if(to.path == '/login'){
	      next()
	    }else{
	      next({
	        replace:true,
	        name:'login',
	      })
	    }
	}
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
