<template>
	<div class="box">
		<Header title="书影音">
			<img class="leftImg" src="../../assets/images/ic_actionbar_search_icon.png" slot="leftImg" alt="" />
			<img class="rightImg" src="../../assets/images/ic_chat_green.png" slot="rightImg" alt="" />
		</Header>
		<div class="audio-model">
			<span class="box" @click='currIndex=1'>
				<router-link :class="{bgcolor:currIndex==1}"  to="/audio/film" >电影</router-link>
			</span>
			<span class="box" @click='currIndex=2'>
				<router-link :class="{bgcolor:currIndex==2}"  to="/audio/ready" >读书</router-link>
			</span>
			<span class="box" @click='currIndex=3'>
				<router-link :class="{bgcolor:currIndex==3}" to="/audio/tv">电视</router-link>
			</span>
			<span class="box" @click='currIndex=4'>
				<router-link :class="{bgcolor:currIndex==4}" to="/audio/city">同城</router-link>
			</span>
			<span class="box" @click='currIndex=5'>
				<router-link :class="{bgcolor:currIndex==5}"  to="/audio/music" >音乐</router-link>
			</span>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '../../components/header.vue';

export default {
	data(){
		return{
			currIndex:1,
		}
	},
	mounted:function(){

		this.$router.push('/audio/film')
	},
	// props:['mark'],
	components: {
		Header
	}
};
</script>

<style lang="less" scoped>
.audio-model {
	
	border-bottom: 1px solid #ccc;
	
	display: flex;
	.box {
		line-height: 60/68rem;
		height: 60/68rem;
		font-size: 25/68rem;
		text-align: center;
		display:block;
		width: 20%;
		box-sizing: border-box;
		a{
			width: 100%;
			display: inline-block;
			height: 100%;
			color: #111;
			text-decoration: none;
		}
	}
	.bgcolor{
		background-color: #07d614;
		color: white!important;
		
	}
}

</style>
