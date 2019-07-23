 <template>
	<div class="news-Header">
		<div class="news-left">
			
			<p class="title">{{title}}</p>
			<p class="content">{{content}}</p>
			<p class="author">作者:{{author}}</p>
		</div>
		<div class="news-right">
			
			<slot name='news-right'></slot>
		</div>
	</div>
</template>

<script>
	export default{
		props:['title','content','author'],
	}
</script>

<style lang="less">
	body{
		font-size: 16px
	}
	.news-Header{
		display: flex;
		height: 180/68rem;
		border-bottom: 1px solid #ccc; 
		padding: 10px;
		
		.news-left{
			margin-top: 20px;
			box-sizing: border-box;
			width: 70%;
			// overflow: hidden;
			.title{
				color: #555;
				font-weight: 700;
				padding-bottom: 10/68rem ;
			}
			.content{
				color: #888;
				height: 80/68rem;
				overflow: hidden;
				padding-bottom: 10/68rem ;
			}
			.author{
				font-size: 14/68rem;
				color: #ccc
			}
		}
		.news-right{
			box-sizing: border-box;
			width: 30%;
			position: relative;
			img{
				position: absolute;
				top: 50%;
				transform: translateY(-60%);
				width: 100%;
				// height: 100%
			}
		}
	}
	
	
</style>
