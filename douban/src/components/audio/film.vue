<template>
	<div >
		
		
		<p class="title">正在上映的电影</p>
		<div  class="bigBox">
			<div class="smallBox" v-for="(item,index) in shuju" v-show="!item.is_new" >
				<img :src="item.cover" alt="">
				<p class="film-title">{{item.title}}</p>
				<p class="num">评分:{{item.rate}}</p>
			</div>
		</div>
		
		<p class="title">即将上映的电影</p>
		<div  class="bigBox">
			<div class="smallBox" v-for="(item,index) in shuju" v-show="item.is_new" >
				<img :src="item.cover" alt="">
				<p class="film-title">{{item.title}}</p>
				<p class="num">评分:{{item.rate}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				shuju:[],
			}
		},
		mounted() {
			this.$Axios.get('../../../static/audioData/movie.json')
			.then(res=>{
				console.log(res.data.subjects);
			
				this.shuju = res.data.subjects;
			})
		}
		
		
		
	}
</script>

<style lang="less" scoped>
	.title{
		font-size: 25/68rem;
		font-weight: 700;
		line-height: 60/68rem;
		height: 60/68rem;
		text-indent: 1em;
		color: #999;
	}
	.bigBox{
		display: flex; 
		height: 380/68rem;
		// box-sizing: border-box;
		overflow: scroll;
		font-size: 16/68rem;
		-webkit-scrollbar {display:none}
		&:last-child{
			margin-bottom: 80/68rem;
		}
		.smallBox{
			width: 200/68rem;
			height: 300/68rem;
			padding: 0 20/68rem;
			text-align: center;
			.film-title{
				font-size: 20/68rem;
				font-weight: 700;
				line-height: 30/68rem;
			}
			img{
				width: 200/68rem;
				height: 300/68rem;
			}
			.num{
				color: #999;
				font-size: 14/68rem;
				line-height: 30/68rem;
			}
		}
	}
</style>
