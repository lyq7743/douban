<template>
	<div class="content">
		<div class="gronp-top">
			<slot name='group-img'></slot>
			<p class="group-title">{{title}}</p>
			<p class="group-talkPeople">{{people}}</p>
		</div>
		<div class="gronp-bottom">
			<slot name='group-content'></slot>
		</div>
	</div>
</template>

<script>
	export default{
		props:['imgSrc','title','people'],
		
	}
</script>

<style lang="less" 	>
	.body-title{
		margin: 30/68rem 0;
		
	}
	.body-title:last-child{
		margin-bottom: 80/68rem;
	}
	.content{
		padding: 20/68rem 0;
		margin:  0 20/68rem;
		border-bottom: 1px solid #ccc;
	}
	.body-title>h3{
		line-height: 60/68rem;
		font-size: 25/68rem;
		
	}
	.gronp-top{
		position: relative;
		display: flex;
		img{
			width:60/68rem;
			 height: 60/68rem;
		}
		p{
			font-size: 20/68rem;
		}
		.group-title{
			font-weight: 700;
			margin-left:10/68rem; 
		}
		.group-talkPeople{
			position: absolute;
			right: 10/68rem;
			color: #ccc;
		}
	}
	.gronp-bottom{
		p{
			font-size: 20/68rem;
		}
		.group-content{
			width: 100%;
			overflow: hidden;
			text-overflow:ellipsis;
			 white-space: nowrap;
		}
	}
</style>
