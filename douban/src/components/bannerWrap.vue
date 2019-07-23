<template>
	<div class="swiper-Wrap">
		<div  class="swiper-container" :class="swiperID">
			<div class="swiper-wrapper">
				<slot name='swiper-cont'></slot>
				<!-- <div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div> -->
			</div>
			<!-- 如果需要分页器 -->
			<div :class="{'swiper-pagination':isshow}"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'					//引用插件的js文件
	import 'swiper/dist/css/swiper.min.css'   //引入插件的样式
	export default {
		props: {
			swiperID: {						
				type: String,			
				default: ""
			},
			isshow: {
				type: Boolean,				/* 当为不同的类型时,default的值就与他一致 */
				default: true,
			},
			paginationShow: {
				type: String,
				default: 'bullets',
			},
			effect: {						/* 控制轮播图切换的类型 */
				type: String,
				default: 'flip',
			}
		},

		mounted() {
			var mySwiper = new Swiper('.' + this.swiperID, {		/* 通过控制每一个id来控制不同的组件（不加这个的话，每个组件进行控制的时候都会被控制改变） */
				loop: true, // 循环模式选项

				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					type:this.paginationShow,
				},
				effect: this.effect,

			})
		}

	}
</script>

<style lang="less" scoped>
	.swiper-slide {
		height: 160px;
		width: 100%;
	}

	.swiper-slide img {
		width: 100%;
		height: 160px;
	}
</style>
