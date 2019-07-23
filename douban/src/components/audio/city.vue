<template>
	<div >
		
		
		
		<div  class="bigBox" v-for="(item,index) in shuju">
			<p class="title">{{item.title}}</p>
			<div class="smallBox" v-for="(item,index) in item.city_list" >
				<img :src="item.img_url" alt="">
				
				<p class="num">演出名字:{{item.group_name}}</p>
				<p class="time">演出时间:{{item.group_time}}</p>
				<p class="num">演出地址:{{item.group_address}}</p>
			</div>
		</div>
		
		<!-- <p class="title">即将上映的电视</p>
		<div  class="bigBox">
			<div class="smallBox" v-for="(item,index) in shuju" v-show="item.is_new" >
				<img :src="item.cover" alt="">
				<p class="film-title">{{item.title}}</p>
				<p class="num">评分:{{item.rate}}</p>
			</div>
		</div> -->
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
			this.$Axios.get('../../../static/audioData/city.json')
			.then(res=>{
				console.log(res.data.city);
			
				this.shuju = res.data.city;
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
		width: 100%;
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
			// height: 380/68rem;
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