<template>
	<div>
		<Header title="广播">
			<img class="leftImg" src="../../assets/images/ic_status_search_user.png" slot="leftImg" alt="" />
			<img class="rightImg" src="../../assets/images/ic_chat_green.png" slot="rightImg" alt="" />
		</Header>
		<div class="broadcast-login">
			<span><img src="../../assets/images/ic_tab_profile_normal.png" alt="" /></span>
			<span>登录发广播</span>
		</div>

		<div>
			<Broadcast-list v-for="(item, index) in shuju" :author="item.name" :talking="item.leave_number" :good="item.like_number" :Share="item.send_number">
				<img :src="item.img" alt="" slot="broadTop-img" />
				<p slot="time">{{ item.time }}</p>
				<p slot="author-talk">{{ item.publish }}</p>
				<p slot="other-title">{{ item.title }}</p>
				<p slot="other-content">{{ item.detail }}</p>
			</Broadcast-list>
		</div>
	</div>
</template>

<script>
import Header from '../../components/header.vue';
import BroadcastList from '../../components/broadcast/broadcastList.vue';
export default {
	data: function() {
		return {
			shuju: []
		};
	},
	components: {
		Header,
		BroadcastList
	},
	mounted() {
		this.$Axios.get('../../../static/Broadcast/broadcastData.json').then(res => {
			console.log(res.data.data);
			this.shuju = res.data.data;
		});
	}
};
</script>

<style lang="less">
body {
	font-size: 16px;
}
.broadcast-login {
	height: 80/68rem;
	line-height: 80/68rem;
	border-bottom: 1px solid #ccc;
	position: relative;
	span:first-child {
		position: absolute;
		top: 50%;
		left: 20/68rem;
		transform: translateY(-50%);
		width: 50/68rem;
		height: 50/68rem;
		display: inline-block;
		border-radius: 50%;
		border: 1px solid #ddd;
		background: #ddd;

		img {
			width: 100%;
			height: 100%;
		}
	}
	span:last-child {
		margin-left: 90/68rem;
		color: #aaa;
	}
}
.broadcastList-content{
	
	margin: 20/68rem 15/68rem;
	&:last-child{
		margin-bottom: 90/68rem;
	}
	
	.broadTop {
		display: flex;
		.broadTop-left {
			img {
				width: 60/68rem;
				height: 60/68rem;
				border-radius: 50%;
			}
		}
		.broadTop-right{
			margin-left: 15/68rem;
			color: #ccc;
			.author-name{
				color: black;
				margin-right:10/68rem; 
			}
		}
	}
	.broadBottom{
		width: 80%;
		margin-left: 65/68rem;
		.talking-box{
			background-color: #eee;
			margin-top: 15/68rem;
			border-radius: 8/68rem;
			padding: 15/68rem;
			margin-bottom: 20/68rem;
		}
		.broadBottom-bottom{
			
			span{
				position: relative;
				height: 20/68rem;
				line-height: 20/68rem;
				margin-left: 25/68rem;
				color: #aaa;
				&:last-child {
					right: -170/68rem;
				}
				img{
					position: absolute;
					top: 50%;
					left: -25/68rem;
					transform: translateY(-50%);
					
				}
			}
		}
	}
}

</style>
