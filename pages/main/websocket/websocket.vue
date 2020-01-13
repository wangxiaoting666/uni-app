<template>
	<view>
		
		
		<view class="cu-card dynamic" v-for="(item,index) in productList" :key="index" >
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar comment solids-top">
					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90);"></view>
						<view class="content">
							<view class="text-grey">补卡申请</view>
							<view class="text-gray text-content text-df">
								<view class="text-content">
								   补卡时间： {{item.beginTime}}
								</view>
								<view class="text-content">
								   补卡理由： {{item.endTime}}
								</view>
								<view class="text-content">
								    审批人：{{item.total}}
								</view>
							</view>
							
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df"> {{item.beginTime}}</view>
								<view  style="color: #2AA986;">
									{{item.stats}}
								</view>
							</view>
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
				productList: [{
				      
				        name: '李俊飞',
				        date: '2019-12-31',
				        beginTime: '2019-12-31   9:30',
				        endTime: '开会',
				        total: '王喜悦',
				        stats: '审批通过'
				    },
				    {
				       
				        name: '罗西西',
				        date: '2019-12-31',
				        beginTime: '2019-12-09   9:00',
				        endTime: '开会',
				        total: '李俊飞',
				        stats: '审批通过'
				    },
				    {
				        
				        name: '小金龙',
				        date: '2019-12-31',
				        beginTime: '2019-12-11   9:30',
				       endTime: '开会',
				        total: '力矩费',
				        stats: '审批拒绝'
				    }
				],
			};
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
