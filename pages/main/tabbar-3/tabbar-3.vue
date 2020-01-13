<template>
	<view>
		<scroll-view scroll-x class="bg-white nav text-center fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<block v-if="TabCur==0">
			<view class="cu-card dynamic" v-for="(item,index) in productList" :key="index">
			    <view class="cu-item shadow">
			        <view class="cu-list menu-avatar">
			            <view class="cu-item">
			                <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
			                <view class="content flex-sub">
			                    <view>{{item.name1}}</view>
			                    <view class="text-gray text-sm flex justify-between">
			                        {{item.date}}
			                    </view>
			                </view>
			            </view>
			        </view>
			        <view class="text-content">
			            开始时间：{{item.endTime}}
			        </view>
			        <view class="text-content">
			            结束时间：  {{item.beginTime}}
			        </view>
			        <view class="text-content">
			            加班时长：{{item.total}}
			        </view>
			        <view class="text-gray text-sm text-right padding">
			            <text class="cuIcon-attentionfill margin-lr-xs"></text> {{item.stats}}
			        </view>
			    </view>
			</view>
			
			
			
			
			
			
		</block>
		<block v-if="TabCur==1">
			<view class="cu-card dynamic" v-for="(item,index) in productList" :key="index">
			    <view class="cu-item shadow">
			        <view class="cu-list menu-avatar">
			            <view class="cu-item">
			                <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
			                <view class="content flex-sub">
			                    <view>{{item.name}}</view>
			                    <view class="text-gray text-sm flex justify-between">
			                        {{item.date}}
			                    </view>
			                </view>
			            </view>
			        </view>
			        <view class="text-content">
			            开始时间： {{item.beginTime}}
			        </view>
			        <view class="text-content">
			            结束时间： {{item.endTime}}
			        </view>
			        <view class="text-content">
			            加班时长：{{item.total}}
			        </view>
			        <view class="text-gray text-sm text-right padding">
			            <text class="cuIcon-attentionfill margin-lr-xs"></text> {{item.stats}}
			        </view>
			    </view>
			</view>
		</block>
		<block v-if="TabCur==2">
			<view class="cu-card dynamic" v-for="(item,index) in productList" :key="index">
			    <view class="cu-item shadow">
			        <view class="cu-list menu-avatar">
			            <view class="cu-item">
			                <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
			                <view class="content flex-sub">
			                    <view>{{item.name1}}</view>
			                    <view class="text-gray text-sm flex justify-between">
			                        {{item.date}}
			                    </view>
			                </view>
			            </view>
			        </view>
			        <view class="text-content">
			            开始时间： {{item.beginTime}}
			        </view>
			        <view class="text-content">
			            结束时间： {{item.endTime}}
			        </view>
			        <view class="text-content">
			            加班时长：{{item.total}}
			        </view>
			        <view class="text-gray text-sm text-right padding">
			            <text class="cuIcon-attentionfill margin-lr-xs"></text> {{item.stats}}
			        </view>
			    </view>
			</view>
			
			
			
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				TabCur: 0,
				avatar:['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg','https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'],
				tabNav: ['已发起', '未处理', '已处理'],
				productList: [{
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
				        name: '李俊飞',
						 name1: '肖战',
				        date: '2019-12-31',
				        beginTime: '2019-12-31   9:30',
				        endTime: '2019-12-31   9:30',
				        total: '3小时',
				        stats: '已同意'
				    },
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
				        name: '罗西西',
						name1: '肖一战',
				        date: '2019-12-31',
				        beginTime: '2019-12-09   9:00',
				        endTime: '2019-12-10   15:35',
				        total: '5小时',
				        stats: '已同意'
				    },
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
				        name: '小金龙',
						name1: '王一博',
				        date: '2019-12-31',
				        beginTime: '2019-12-11   9:30',
				        endTime: '2019-12-31   17:22',
				        total: '6小时',
				        stats: '已拒绝'
				    }
				],
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
	page {
		padding-top: 45px;
	}
	.cu-bar.fixed, .nav.fixed {
	    
	    top: 43px;
	   
	}
</style>
