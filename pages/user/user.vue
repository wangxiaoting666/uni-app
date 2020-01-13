<template>
    <view >
		<view class="uni-flex uni-row  uni-bg-blue"  v-if="hasLogin" >
		            <view class="flex-item "  style="padding:40upx 270upx;">  
		                <view class="uni-common-mt" style=" padding:20upx;">
		                    <div style="text-align:center; border-radius: 60px;">
		                        <img  style="border-radius: 60px;  width: 180upx; height: 180upx;" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90"/>
		                        </div>
		                </view>
		                <view  class="name">马小马</view>
		                <view  class="manager">教导主任</view>
		            </view>
		        </view>
        <view class="btn-row">
            <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin" >登录</button>
			 <navigator url="../login/login" hover-class="navigator-hover">
            <button v-if="hasLogin" type="default" @tap="bindLogout" class="loginout">退出登录</button>
			 </navigator>
        </view>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        computed: {
            ...mapState(['hasLogin', 'forcedLogin'])
        },
        methods: {
            ...mapMutations(['logout']),
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
                this.logout();
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../login/login',
                    });
                }
            }
        }
    }
</script>

<style>
 /* 布局 */
    .flex-item {
      
        height: 480upx;
        text-align: center;
        
        background: #1C2A86;
        
    }   
   .name{
       font-size: 40upx;
	   height: 25px;
   }
    .manager{
        color: #8F8F90;
    }
    .loginout,.primary{
         background-color:  #9E3116 ;
         margin: 100upx   20upx;
		 color: #fff;
    }
	
</style>
