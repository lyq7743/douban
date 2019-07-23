<template>
	<div class="broadcastList-content">
		<div class="broadTop">
			<div class="broadTop-left">
				<slot name='broadTop-img'></slot>
			</div>
			<div class="broadTop-right">
				<p class="author"><span class="author-name">{{author}}</span>写了日记</p>
				<slot name='time'></slot>
			</div>
		</div>
		<div class="broadBottom">
			<slot name='author-talk'></slot>
			<div class="talking-box">
				<slot name='other-title'></slot>
				<slot name='other-content'></slot>
			</div>
			<div class="broadBottom-bottom">
				<span>
					<img width="100%" :src="shuju.like_img" alt="">{{good}}
				</span>
				<span>
					<img :src="shuju.leave_img" alt="">{{talking}}
				</span>
				<span>
					<img :src="shuju.send_img" alt="">{{Share}}
				</span>
				<span>
					<img :src="shuju.else_img" alt="">
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:['author','good','talking','Share'],
		data(){
			return{
				shuju:[],
			}
		},
		mounted() {
			this.$Axios.get('../../../static/Broadcast/broadcastData.json')
			.then(res=>{
				// console.log(res.data.icon_img);
				this.shuju = res.data.icon_img
			})
		}
				
	}
</script>

<style lang="less" scoped>
	.broadBottom-bottom{
		span{
			img{
				width: 25/68rem;
				height: 25/68rem;
			}
		}
	}
</style>
