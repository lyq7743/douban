<template>
	<div>
		<p>
			<slot name= 'leftImg'></slot>
		</p>
		<p>{{title}}</p>
		
	</div>
</template>

<script>
	export default{
		props:['title']
	}
</script>

<style lang="less">
	.first-model{
		display: flex;
		justify-content: center;
		height: 100/68rem;
		align-items: center;
		border-bottom: 2/68rem solid #eee;
	}
	.icon-size{
		font-size: 45/68rem;
		
	}
	.box p{
		font-size: 20/68rem;
	}
	.box{
		margin-top: 40/68rem;
		height: 100/68rem;
		text-align: center;
		width: 50%;
		display: block;
		flex: 1;
	}
	.color{
		margin-bottom: 10/68rem;
		color: #00CC00;
	}
	.size{
		font-size: 40/68rem;
	}
</style>
