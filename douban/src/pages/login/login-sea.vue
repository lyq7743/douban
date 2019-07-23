<template>
	<div>
		<div class="login-header">
			<span class="icon-x" @click="back()">
				<i class="fa fa-remove"></i>
			</span>
			<h2>登录豆瓣</h2>
			<p>登录注册表示同意<a href="#">豆瓣使用协议、</a><a href="#">隐私协议</a></p>

		</div>
		<div class="login-center">
			<form>
				<div  class="row">
					
					<input class="phone" type="text" placeholder="手机号">
				</div>
				<div  class="row">
					<input type="text" placeholder="密码">
					
				</div>
				<input class="login" type="submit" value="登录">
			</form>
			<p class="login-other">
				<a href="#" @click="fn()">免密码登录</a>
				<a href="#">海外手机登录</a>
				<a href="#">找回密码</a>
			</p>
			
		</div>
		<div class="login-footer">
			<p>第三方登录</p>
			<p>
				<span class="">
					<i class="fa fa-weibo "></i>
				</span>
				<span class="">
					<i class="fa fa-wechat"></i>
				</span>
			</p>
		</div>


	</div>
</template>

<script>
	export default {
		methods:{
			fn(){
				this.$router.push('/login')
			},
			back(){
				this.$router.push('/login')
			}
		}
	}
</script>

<style lang='less' scoped>
	*{
		list-style: none;
		text-decoration: none;
	}
	.login-header h2{
		/* height: 20/68rem; */
		font-size: 35/68rem;
		text-align: center;
	}
	.login-header p{
		color: #999;
		text-align: center;
		font-size: 14/68rem;
	}
	.login-header p a{
		color: #39bb4a;
	}
	.login-header{
		margin-bottom: 30/68rem;
	}
	.login-center form .row{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		height: 35/68rem;
		width: 90%;
		border: 1/68rem solid #ddd;
		position: relative;
	}
	.row input,.row span{
		/* width: 10%; */
		border: none;
		height: 80%;
		line-height: 180%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.row:first-child{
		border-bottom: none!important;
	}
	.tel-quyu{
		padding: 0 10/68rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		font-weight: 700;
	}
	.row input{
		box-sizing: border-box;
		padding-left: 5/68rem;
	}
	.row .phone{
		width: 100%;
		left: 0;
	}
	.row input:last-child{
		width: 100%;
	}
	.yzm{
		
		right: 10/68rem;
		color: #39bb4a;
	}
	.login{
		margin-top: 20/68rem;
		color: white;
		border: none;
		width: 90%;
		height: 35/68rem;
		line-height: 35/68rem;
		background-color: #a0deaa;
		font-size: 15/68rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
	form{
		height: 130/68rem;
	}
	.login-other{
		font-size: 14/68rem;
		position: relative;
	}
	.login-other  a{
		color: black;
	}
	.login-other  a{
		color: #39bb4a;
	}
	.login-other  a:last-child{
		position: absolute;
		right: 0;
		color:black;
	}
	
	.login-footer{
		margin-top: 200/68rem;
		text-align: center;
	}
	.login-footer p:first-child{
		font-size: 12/68rem;
		color: #ccc;
	}
	.login-footer span{
		width: 50/68rem;
		height: 50/68rem;
		border-radius: 50%;
		display: inline-block;
		background-color: #fff;
		line-height: 50/68rem;
		box-shadow: 2/68rem 2/68rem 2/68rem #ddd;
		margin:0 10/68rem;
	}
	.login-footer span i{
		font-size: 20/68rem;
	}
	.login-footer span:first-child i{
		color: #e84b4e;
	}
	.login-footer span:last-child i{
		color: #39bb4a;
		
	}
</style>
