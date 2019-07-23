<template>
	<div >
		
		
		<p class="title">正在上映的电视</p>
		<div  class="bigBox">
			<div class="smallBox" v-for="(item,index) in shuju" v-show="!item.is_new" >
				<img :src="item.cover" alt="">
				<p class="film-title">{{item.title}}</p>
				<p class="num">评分:{{item.rate}}</p>
			</div>
		</div>
		
		<p class="title">即将上映的电视</p>
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
			this.$Axios.get('../../../static/audioData/tv.json')
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
		color: #fff;
		// border: 1px solid black;
		background-color: #ccc;
	}
	.bigBox{
		// display: block;
		display: flex; 
		// height: 380/68rem;
		flex-wrap: wrap;
		
		// overflow: scroll;
		font-size: 16/68rem;
		// -webkit-scrollbar {display:none}
		&:last-child{
			margin-bottom: 80/68rem;
		}
		.smallBox{
			box-sizing: border-box;
			width: 50%;
			height: 380/68rem;
			padding: 0 20/68rem;
			text-align: center;
			.film-title{
				font-size: 20/68rem;
				font-weight: 700;
				line-height: 30/68rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
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