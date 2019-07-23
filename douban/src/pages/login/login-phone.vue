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
					<span class="tel-quyu">+86</span>
					<input class="phone" type="text" placeholder="手机号">
				</div>
				<div  class="row">
					<input type="text" placeholder="手机验证码">
					<span class="yzm">获取验证码</span>
				</div>
				<input class="login" type="submit" value="登录">
			</form>
			<p class="login-other">
				<a href="#" @click="fn()">账号密码登录</a>
				<a href="#">验证码收不到？</a>
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
				this.$router.push('/loginSea')
			},
			back(){
				this.$router.push('/mine');
			}
		}
		
	}
</script>

<style lang="less" >
	*{
		list-style: none;
		text-decoration: none;
	}
	.login-header{
		margin-top: 100/68rem;
		// position: relative;
	}
	.login-header h2{
		// height: 20/68rem;
		font-size: 35/68rem;
		text-align: center;
	}
	.icon-x{
		position: absolute;
		top: 0;
		font-size: 30/68rem;
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
		font-size: 16/68rem;
	}
	.row input{
		box-sizing: border-box;
		padding-left: 5/68rem;
	}
	.row .phone{
		border-left: 1/68rem solid #ccc;
		
		width: 85%;
		left: 3em;
	}
	.yzm{
		font-size: 16/68rem;
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
	.login-other  a:last-child{
		position: absolute;
		right: 0;
	}
	.login-other  a:first-child{
		color: #39bb4a;
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
