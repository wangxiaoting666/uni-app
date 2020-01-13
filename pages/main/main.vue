<template>
	<view class="content">
		
		<view v-if="hasLogin" class="hello">
			<!-- <view class="title">
                您好 {{userName}}，您已成功登录。
            </view> -->

			<!-- <view class="uni-list-cell">
            		
                    <view class="uni-list-cell-left">
                        日期选择器
                    </view>
                    <view class="uni-list-cell-db">
                        <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
                            <view class="uni-input">{{date}}</view>
                        </picker>
                    </view>
            		
                </view> -->

			<view class="cu-bar bg-black search">
				<navigator url="websocket/websocket" hover-class="navigator-hover">
					<view class="cu-avatar round">
						<view class=" cuIcon-notificationfill">
							<view class="cu-tag badge">99</view>
						</view>
					</view>
				</navigator>

				<view class="content">
					{{date}}
				</view>
				<navigator url="patchcard/patchcard" hover-class="navigator-hover">
					<view class="action">
						<text>补卡</text>
					</view>
				</navigator>
			</view>


			<view class="cu-card case" v-for="(item,index) in productList" :key="index">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view> 
							 
							<view class="content flex-sub">
								<view class="text-grey">打卡时间：{{item.beginTime}}</view>
								<view class="text-gray text-sm flex justify-between">
									<text class="cuIcon-locationfill margin-lr-xs">{{item.name}}</text>
									<view class="text-gray text-sm">


										<text class="cuIcon-messagefill margin-lr-xs"></text> {{item.stats}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="cardcont">
				<view class="circle" @click="clickTest">上班打卡</view>
			</view>
		</view>
		<view v-if="!hasLogin" class="hello">
			<view class="title">
				您好 游客, 请登录.....
			</view>
			<view class=" flex-sub radius shadow-lg">
				<image src="http://img.lanrentuku.com/img/allimg/1212/5-121204193R5-50.gif" mode="aspectFit" class="gif-white response"
				 style="height:100upx"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'




	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),

		data() {
			return {
				date: new Date().toISOString().slice(0, 10),
				lists: [],

				productList: [{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
						name: '安徽未管所',
						date: '2019-12-31',
						beginTime: '2019-12-31   9:30',
						endTime: '2019-12-31   9:30',
						total: '3小时',
						stats: '正常'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
						name: '安徽未管所',
						date: '2019-12-31',
						beginTime: '2019-12-09   9:00',
						endTime: '2019-12-10   15:35',
						total: '5小时',
						stats: '正常'
					},
					{
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
						name: '安徽未管所',
						date: '2019-12-31',
						beginTime: '2019-12-11   9:30',
						endTime: '2019-12-31   17:22',
						total: '6小时',
						stats: '正常'
					}
				],
			}
		},



		bindDateChange: function(e) {
			this.date = e.target.value
		},
		// getList() {
		//                        uni.request({
		//                            url: 'http://localhost:3000/card',
		//                            success: (res) => {
		//                                console.log(res.data);
		//                                this.lists = res.data.card;
		//                            }
		//                        });
		//                    },


		onLoad() {
			// this.getList();
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}



		},
		methods: {
			clickTest: function(e) {
				console.log(e);
				console.log('click');

				let a = {
					image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
					name: '安徽未管所',
					date: '2019-12-31',
					beginTime: '2019-12-31   9:30',
					endTime: '2019-12-31   9:30',
					total: '3小时',
					stats: '正常'
				}
				this.productList.push(a)

			},



		}

	}
</script>

<style>
	.cu-tag.badge {

		top: 2px;
		left: 21px;
		width: 20px;
	}

	.cu-card>.cu-item {

		margin: 10px 14px 0px 14px;
	}

	.bg-black {
		background-color: #e0e0e0;
		color: rgb(28, 42, 134);
	}

	.cu-list.menu-avatar>.cu-item {

		height: 87px;

	}

	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul {
		font-size: 30upx;
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul>view {
		line-height: 50upx;
	}


	/* 主要内容 */
	.uni-list-cell {
		border: 1px solid #f0f0f0;
		margin: 10upx 20upx;
	}

	.cardcont {

		position: absolute;
		bottom: 12px;
		left: 35%;
	}

	.circle {

		width: 80px;
		height: 80px;
		line-height: 80px;
		border-radius: 50%;
		text-align: center;
		background-image: linear-gradient(to bottom, lightblue, darkblue);
		font-size: 17px;
		color: #ffffff;
	}
</style>
