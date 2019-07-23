<template>
	<div>
		<span class="icon-left"><slot name='icon-left'></slot></span>
		<p class="title">{{title}}</p>
		<span class="mine-rightBack"><i class="color fa fa-2x fa-angle-right"></i></span>
	</div>
</template>

<script>
	import 'Font-Awesome-3.2.1/css/font-awesome.min.css'
	export default{
		props:['title']
	}
</script>

<style lang="less">
	.thebox{
		height: 60/68rem;
		border-bottom: 1px solid #ccc;
		display: flex;
		line-height:60/68rem;
		position: relative;
	}
	.mine-juli{
		margin:0 20/68rem;
		
		font-size: 25/68rem;
	}
	.icon-left{
		position: relative;
		display: block;
		height: 60/68rem;
		width: 60/68rem;
		line-height: 60/68rem;
	}
	.icon-left i{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.mine-rightBack{
		position: absolute;
		top:5/68rem;
		right: 20/68rem;
		font-size: 20/68rem;
	}
	.title{
		font-size: 20/68rem;
	}
	i{
		
	}
</style>
