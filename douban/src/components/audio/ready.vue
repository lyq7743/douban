<template>
	<div class="readyBox">
		<p>热门图书</p>
		<div v-for="(item,index) in shuju" class="imgPic">
			<img :src="item.cover_url" alt="">
			<p class="bookName">{{item.title}}</p>
			<p class="bookAuthor">作者：{{item.author}}</p>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				shuju: [],
			}
		},
		mounted() {
			this.$Axios.get('../../../static/audioData/read.json')
				.then(res => {
					console.log(res.data.recommend_one);

					this.shuju = res.data.recommend_one;
				})
		}


	}
</script>

<style lang="less" scoped>
	body {}

	.readyBox {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
		
		&>p{
			margin-top: 10/68rem;
			font-size: 30/68rem;
			width: 100%;
			text-align: left;
			padding: 10/68rem 0;
			background: #ccc;
			color: white;
			text-indent: 1em;
		}
		.imgPic {
			box-sizing: border-box;
			border: 10/68rem solid #fff;
			width: 50%;
			height: 260/68rem;
			// background: skyblue;
			img {
				width: 120/68rem;
				height: 80%;
			}

			.bookName {
				width: 100%;
				
				font-size: 16/68rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.bookAuthor {
				font-size: 14/68rem;
				color: black;
			}
		}
	}
</style>
