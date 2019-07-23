<template>
  <div class="tabbar">
  	<itemwrap title="首页" mark = 'home' :curr = 'currIndex' @change = 'getVal'>
  		<img src="../assets/images/ic_tab_home_normal.png" alt="" slot="leftImg"/>
  		<img src="../assets/images/ic_tab_home_active.png" alt="" slot="rightImg"/>
  	</itemwrap>
  	<itemwrap title="书影音" mark = 'audio' @click='fn1()' :curr = 'currIndex' @change = 'getVal'>
  		<img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="leftImg"/>
  		<img src="../assets/images/ic_tab_subject_active.png" alt="" slot="rightImg"/>
  	</itemwrap>
  	<itemwrap title="广播" mark = 'broadcast' :curr = 'currIndex' @change = 'getVal'>
  		<img src="../assets/images/ic_tab_status_normal.png" alt="" slot="leftImg"/>
  		<img src="../assets/images/ic_tab_status_active.png" alt="" slot="rightImg"/>
  	</itemwrap>
  	<itemwrap title="小组" mark = 'group' :curr = 'currIndex' @change = 'getVal'>
  		<img src="../assets/images/ic_tab_group_normal.png" alt="" slot="leftImg"/>
  		<img src="../assets/images/ic_tab_group_active.png" alt="" slot="rightImg"/>
  	</itemwrap>
  	<itemwrap title="我的" mark = 'mine' :curr = 'currIndex' @change = 'getVal'>
  		<img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="leftImg"/>
  		<img src="../assets/images/ic_tab_profile_active.png" alt="" slot="rightImg"/>
  	</itemwrap>
  </div>
</template>

<script>
import itemwrap from './itemwrap.vue'
export default {
	
  data () {
    return {
      currIndex :'home',
    }
  },
  components:{
  	itemwrap
  },
  methods:{
  	getVal(data){
  		
  		this.currIndex = data
  	},
	fn1(){
		this.$router.push({path:'/audio/film'})
	}
  }
  
  
}
</script>


<style scoped lang="less" >
	.tabbar{
		border-top:1px solid #ccc ;
		position: fixed;
		bottom: 0;
		height: 80/68rem;
		width: 100%;
		display: flex;
		background: #fff;
	}
</style>
