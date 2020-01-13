<template>
    <view>
        <uni-calendar :insert="true" :lunar="false" :selected="selected" :start-date="'2019-3-2'" :end-date="'2019-5-20'"
         @change="change"></uni-calendar>
		 
		 <view class="centent">
		     <view class="cu-card case" v-for="(item,index) in productList" :key="index">
		     	<view class="cu-item shadow">
		     		<view class="cu-list menu-avatar">
		     			<view class="cu-item">
		     				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
		     				<view class="content flex-sub">
		     					<view class="text-grey">打卡时间：{{item.beginTime}}</view>
		     					
		     				</view>
		     			</view>
		     		</view>
		     	</view>
		     </view>
		</view>
    </view>
</template>
<script>
    import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
    export default {
        components: {
            uniCalendar
        },
        data() {
            return {
                selected: [{
		"date": '2019-12-1'
	}, {
		"date": '2019-12-3'
	}, {
		"date": '2019-12-4'
	}, {
		"date": '2019-12-6'
	}],
	
	productList: [{
			image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
			
			
			beginTime: '2019-12-31   9:30',
			
		},
		{
			image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
			
			
			beginTime: '2019-12-09   9:00',
			
			
		},
		
	],
            };
        },
        onLoad() {
            this.getList();
        },
        methods: {
            getList() {
                /* uni.request({
                    url: 'http://localhost:3000/data3',
                    success: (res) => {
                        console.log(res.data);
                        this.selected = res.data.selected;
                    }
                }); */
            },
            change(e) {
                console.log(e);
            },
        }
    };
</script>

<style>
	.uni-list{
		margin-top: 130upx;
	}
	.centent{
		margin-top: 40px;
	}
	.cu-card>.cu-item {
	    margin: 3px 14px;
	}
</style>