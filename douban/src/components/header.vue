<template>
	<div class="headerWrap" :class="{bgColor:bgColor}">
		<p class="title">{{title}}</p>
		<slot name= 'leftImg' ></slot>
		<slot name= 'rightImg' ></slot>
		<slot name= 'search'></slot>
	</div>
	
</template>

<script>
	export default{
		props:['title','bgColor'],
		
		
	}
</script>

<style lang="less" scoped>
 
	
	.headerWrap{
		background: #f7f7f7;
		text-align: center;
		height: 50/68rem;
		border-bottom: 1px solid #ccc;
		position: relative;
	}
	.bgColor{
		background:#48bd5a;
	}
	.headerWrap .title{
		line-height: 50/68rem;
		font-weight: 700;
		font-size: 25/68rem;
	}
	.headerWrap img{
		width: 30/68rem;
		top:10/68rem;
		position: absolute;
	}
	.leftImg{
		right: 70/68rem;
	}
	.rightImg{
		right: 20/68rem;
	}
	.search{
		width: 80%;
		position: absolute;
		top: 8/68rem;
		left:10/68rem;
	}
	.search .icon-search{
		position: absolute;
		left: 1/68rem;
		top:5/68rem;
		width: 25/68rem;
	}
	.search .icon-scan{
		position: absolute;
		right: 4/68rem;
		top:5/68rem;
		width: 25/68rem;
	}
	.search input{
		position: absolute;
		transform: translateX(-50%);
		top: 0;
		padding-right: 2em;
		box-sizing: border-box;
		font-size: 16/68rem;
		border:none;
		text-indent: 2em;
		border-radius: 5/68rem;
		height: 35/68rem;
		width: 100%;
	}
</style>
