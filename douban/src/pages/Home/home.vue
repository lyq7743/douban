<template>
	<div>
		<Header bgColor='true'>
			<div class="search" slot='search'>
				<input type="text" placeholder="影视,图书,唱片,小组等">
				<img class="icon-search" src="../../assets/images/ic_group_search_small.png" alt="">
				<img class="icon-scan" src="../../assets/images/ic_scan_gray.png" alt="">
			</div>
			<img class="rightImg" slot='rightImg' src="../../assets/images/ic_chat_white.png" alt="">
		</Header>
		
		<Swiper swiperID="Swiper1" :isshow="false" effect='coverflow'>
			<div slot='swiper-cont' class="swiper-slide">
				<img src="../../assets/banner/01.jpg" alt="">
			</div>
			<div slot='swiper-cont' class="swiper-slide">
				<img src="../../assets/banner/02.jpg" alt="">
			</div>
			<div slot='swiper-cont' class="swiper-slide">
				<img src="../../assets/banner/03.jpg" alt="">
			</div>
		</Swiper>
	
		
		<!-- <Swiper swiperID="Swiper2" effect='coverflow'>
			<div slot='swiper-cont' class="swiper-slide">
				<img src="../../assets/banner/03.jpg" alt="">
			</div>
			<div slot='swiper-cont' class="swiper-slide">
				<img src="../../assets/banner/01.jpg" alt="">
			</div>
			<div slot='swiper-cont' class="swiper-slide">
				<img src="../../assets/banner/02.jpg" alt="">
			</div>
		</Swiper> -->
		
		<news-list v-for="(item,index) in shuju" :title='item.title' :content='item.target.desc' :author='item.target.author.name' class='newList'>
			<img :src="item.target.cover_url" alt="" slot='news-right'>
		</news-list>
		
		
		
	</div>
</template>

<script>
	import Swiper from '../../components/bannerWrap.vue'
	import Header from '../../components/header.vue'
	import newsList from '../../components/home/newsList.vue'
	
	export default {
		data:function(){
			return{
				shuju:[],
			}
		},
		components: {
			Header,
			Swiper,
			newsList
		},
		mounted(){
			/* 这句注释看main.js */
			this.$Axios.get('../../../static/homeData/homeData.json')
			.then(res=>{
				console.log(res.data.recommend_feeds);
				this.shuju = res.data.recommend_feeds
			})
		}

	}
</script>

<style lang="less">
	.newList:last-child{
		margin-bottom: 50/68rem;
	}
</style>
