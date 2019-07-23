<template>
  <div>
    <Header title="我的">
			
			<img @click="fn()" class='rightImg' src="../../assets/images/ic_settings.png" slot='rightImg' alt="">
			
	</Header>
	<div class="first-model">
		<minebody-top title="密码管理" class='box'>
			<i slot='leftImg' class="fa fa-lock color fa-2x icon-size" ></i>
		</minebody-top>
		<minebody-top title="银行卡管理" class='box' >
			<i slot='leftImg' class="fa fa-credit-card color fa-2x icon-size"></i>
		</minebody-top>
	</div>
	<div class="mine-content">
		<minebody-contnet title="风险承受能力评估" class='thebox '>
			<i slot='icon-left' class="fa  fa-file-text-o color mine-juli"></i>
		</minebody-contnet>
		<minebody-contnet title="安全保障" class='thebox '>
			<i slot='icon-left' class="fa  fa-shield color mine-juli"></i>
		</minebody-contnet>
		<minebody-contnet title="我的关注" class='thebox '>
			<i slot='icon-left' class="fa  fa-user-o color mine-juli"></i>
		</minebody-contnet>
		<minebody-contnet title="帮助中心" class='thebox '>
			<i slot='icon-left' class="fa  fa-question-circle-o color mine-juli"></i>
		</minebody-contnet>
		<minebody-contnet title="关于我们" class='thebox '>
			<i slot='icon-left' class="fa   fa-user-o color mine-juli"></i>
		</minebody-contnet>
		<minebody-contnet title="检查更新" class='thebox '>
			<i slot='icon-left' class="fa  fa-search color mine-juli"></i>
		</minebody-contnet>
		<minebody-contnet title="联系客服" class='thebox '>
			<i slot='icon-left' class="fa  fa-headphones color mine-juli"></i>
		</minebody-contnet>
	</div>
  </div>
</template>

<script>
	import Header from '../../components/header.vue';
	import minebodyTop from '../../components/mine/minebody-top.vue';
	import 'Font-Awesome-3.2.1/css/font-awesome.min.css';	//引入字体文件库
	import 'font-awesome-4.7.0/css/font-awesome.min.css';	//引入字体文件库
	import minebodyContnet from '../../components/mine/minebody-content.vue'
	export default{
		
		components:{
			Header,minebodyTop,minebodyContnet
		},
		methods:{
			fn(){
				this.$router.push('/login');
			}
		}
		
	}
</script>

<style lang="less">

</style>
