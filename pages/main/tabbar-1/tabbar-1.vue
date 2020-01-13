<template>
    <view class="page" >
        <view class="uni-product-list">
            <view class="uni-product" v-for="(item,index) in productList" :key="index">
                <view class="image-view">
                    <image v-if="renderImage" class="uni-product-image" :src="item.image"></image>
                </view>
                <view class="uni-product-title">{{item.title}}提交的加班单子</view>
                <view class="uni-product-price">
                    <text class="uni-product-price-favour">￥{{item.originalPrice}}</text>
                    <text class="uni-product-price-original">￥{{item.favourPrice}}</text>
                    <text class="uni-product-tip">{{item.tip}}</text>
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
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
                    title: '李俊飞',
                    originalPrice: 9999,
                    favourPrice: 8888,
                    tip: '自营'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
                    title: '罗西西',
                    originalPrice: 3499,
                    favourPrice: 3399,
                    tip: '优惠'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
                    title: '小金龙',
                    originalPrice: 12999,
                    favourPrice: 10688,
                    tip: '秒杀'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
                    title: '陈雅婷',
                    originalPrice: 999,
                    favourPrice: 958,
                    tip: '秒杀'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
                    title: '王晓燕',
                    originalPrice: 8888,
                    favourPrice: 8288,
                    tip: '优惠'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
                    title: '小美人',
                    originalPrice: 2899,
                    favourPrice: 2799,
                    tip: '自营'
                }],
                renderImage: false
            };
        },
        methods: {
            getList() {
                uni.request({
                    url: 'http://localhost:3000/goods',
                    success: (res) => {
                        console.log(res.data);
                        this.productList = res.data.goodslist;
                    }
                });
            }
        },
        onLoad() {
            this.getList();
            this.renderImage = true;
        },
    };
</script>
<style>
</style>