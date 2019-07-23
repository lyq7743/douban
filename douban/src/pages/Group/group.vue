<template>
  <div>
    <Header title='小组'>
		 <img class='leftImg' src="../../assets/images/ic_actionbar_search_icon.png" slot='leftImg' alt="">
		 <img class='rightImg' src="../../assets/images/ic_chat_green.png" slot='rightImg' alt="">
	</Header>
	
	<div v-for="(item,index) in shuju" :key='index' class="body-title">
		<h3>{{item.title}}</h3>
		<grouplist v-for="(item,index) in item.group_list" :people='item.group_member' :title='item.group_name'  :key='index'>
			<img :src="item.img_url" alt="" slot='group-img'>
			<p class="group-content" slot='group-content'>{{item.topic_title}}</p>
		</grouplist>
	</div>
	
    
  </div>
</template>

<script>
	import Header from '../../components/header.vue'
	import grouplist from '../../components/group/groupList.vue'
	export default{
		
		components:{
			Header,grouplist
		},
		data(){
			return{
				shuju:[],
			}
		},
		mounted() {
			this.$Axios.get('../../../static/groupData/groupData.json')
			.then(res=>{
				// console.log(res.data.group);
				// console.log(res.data.group.item.	group_list.group_name)
				this.shuju=res.data.group
			})
		}
		
	}
</script>

<style lang="less" scoped>
	
</style>
