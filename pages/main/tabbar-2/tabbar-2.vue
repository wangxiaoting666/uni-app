<template>
	<view class="uni-padding-wrap uni-common-pb">
		
		<view class="uni-card" v-for="(list,index) in lists" :key="index">
			<view class="uni-list">
				<view class="uni-list-cell uni-collapse">
					<view class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover" :class="list.open ? 'uni-active' : ''"
					 @click="triggerCollapse(index)">
						{{list.name}}
					</view>
					<view class="uni-list uni-collapse" :class="list.open ? 'uni-active' : ''">
						<view class="uni-list">
							<navigator url="../signdetails/signdetails" hover-class="navigator-hover">
							<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in list1" :key="key">
								<view class="uni-list-cell-navigate uni-navigate-right uni-media-list ">
									<view class="uni-media-list-logo">
										<image v-if="showImg" :src="value.img"></image>
									</view>
									<view class="uni-media-list-body">
										<view class="uni-media-list-text-top">{{value.title}}</view>
										<view class="uni-media-list-text-bottom uni-ellipsis">{{value.content}}</view>
									</view>
								</view>
							</view>
							</navigator>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				lists: [
					{
							id: 'view',
							name: '一教室考勤',
							open: false,
							showImg: false,
							pages: [
								'view',
								'scroll-view',
								'swiper'
								// #ifndef MP-TOUTIAO
								,
								'movable-view',
								'cover-view'
								// #endif
							]
						}, {
							id: 'content',
							name: '二教室考勤',
							open: false,
							
							pages: ['text', 'rich-text', 'progress']
						}, {
							id: 'form',
							name: '三教室考勤',
							open: false,
							pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio',
								'slider',
								'switch', 'textarea',
								// #ifdef APP-PLUS || MP-WEIXIN
								'editor',
								// #endif
							]
						}, {
							id: 'nav',
							name: '四教室考勤',
							open: false,
							pages: ['navigator']
						}, {
							id: 'media',
							name: '五教室考勤',
							open: false,
							pages: [
								'image',
								// #ifndef MP-ALIPAY
								'video',
								// #endif
								// #ifndef MP-ALIPAY || MP-TOUTIAO
								'audio',
								// #endif
							],
						},
				],
				list1: [
					{
							title: "马云",
							content: "值班老师",
							img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90"
						},
						{
							title: "常晓宇",
							content: "普通老师",
							img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90"
						},
						{
							title: "王小婷",
							content: "值班老师",
							img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
						}
				]
			}
		},
		
		onLoad() {
			setTimeout(() => {
				this.showImg = true;
			}, 400)
			
			 this.getList();
		},
		methods: {
			 getList() {
			               /* uni.request({
			                    url: 'http://localhost:3000/list',
			                    success: (res) => {
			                        console.log(res.data);
			                        this.lists = res.data.list;
									this.list1 = res.data.list1;
			                    }
			                }); */
			            },
						
			triggerCollapse(e) {
				if (!this.lists[e].pages) {
					this.goDetailPage(this.lists[e].url);
					return;
				}
				for (var i = 0; i < this.lists.length; ++i) {
					if (e === i) {
						this.lists[i].open = !this.lists[e].open;
					} else {
						this.lists[i].open = false;
					}
				}
			},
			
		}
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
	}
.uni-padding-wrap {
    width: 360px;
    
}
	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}
	.uni-media-list-logo uni-image {
	    
	    border-radius: 20px;
	}
</style>
