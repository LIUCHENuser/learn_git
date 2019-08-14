// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Echarts from 'echarts'
import Md5 from 'js-md5'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to,from,next)=>{
	next()
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
