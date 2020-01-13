<template>
    <view class="page">
        
        <view class="uni-list">
            <block v-for="(item,index) in lists" :key="index">
                <view class="uni-list-cell" hover-class="uni-list-cell-hover">
                    <view class="uni-triplex-row">
                        <view class="uni-triplex-left">
                            <text class="uni-title uni-ellipsis">{{item.title}}</text>
                            <text class="uni-text">{{item.content}}</text>
                            <text class="uni-text-small uni-ellipsis">{{item.content}}</text>
                        </view>
                        <view class="uni-triplex-right">
                            <text class="uni-h5">{{item.content}}</text>
                        </view>
                    </view>
                </view>
            </block>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
              
                lists: []
            }
        },
       
		
		methods: {
			
			 getList() {
			                        uni.request({
			                            url: 'http://localhost:3000/card',
			                            success: (res) => {
			                                console.log(res.data);
			                                this.lists = res.data.card;
			                            }
			                        });
			                    },
		},
		onLoad() {
		    this.getList();
		}
    }
</script>

<style>
	.uni-list-cell{
		border:1px  solid #f0f0f0;
		margin:10upx 20upx;
		}
</style>