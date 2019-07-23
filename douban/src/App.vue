<template>
  <div >
  	<router-view></router-view>
    <tabbar v-if="$route.path !='/login'&&$route.path !='/loginSea'"></tabbar>
    
  </div>
</template>

<script>
import {obj} from '../static/js/setRem.js'					/* 将这个样式进行引入 */
import tabbar from './components/tabbar.vue'
export default {
  
  components:{
  	tabbar
  },
	mounted() {
		obj.setRem();										/* 将这个引入的变量进行调用 */
		this.$router.push({path:"/home"});					/* 页面一打开就是首页的内容 */
	},
}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
</style>
