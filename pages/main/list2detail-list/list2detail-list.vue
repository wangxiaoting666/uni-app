<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in listData" :key="key" @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.cover"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{ value.title }}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{ value.author_name }}</text>
							<text>{{ value.published_at }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//var dateUtils = require('../../../common/util.js').dateUtils;
	export default {
		data() {
			return {
				listData: [{
						id: "109121",
						post_id: "5279698",
						title: "「粒子狂热」：被误解成潮牌的运动穿着品牌",
						author_name: "徐子",
						cover: "https://img.36krcdn.com/20191230/v2_37635ef22df24e96aa7f26e192036c2b_img_png",
						published_at: "2019-12-30 15:20:00"
					},
					{
						id: "109121",
						post_id: "5280504",
						title: "为什么12306时不时要崩那么一下？",
						author_name: "半佛仙人",
						cover: "https://img.36krcdn.com/20191230/v2_02c342a62f91498b99c7f2b5aa22ff1c_img_png",
						published_at: "2019-12-30 15:22:00"
					},
					{
						id: "109121",
						post_id: "5280425",
						title: "「倒闭、被坑、降薪、失业，2019我为什么还在坚持",
						author_name: "燃财经",
						cover: "https://img.36krcdn.com/20191230/v2_43cbd298bed24a18bd023802258f20c8_img_png",
						published_at: "2019-12-30 15:26:00"
					},
					{
						id: "109121",
						post_id: "5280563",
						title: "钱太好花了：想存五万还差八万，今年你攒到钱了吗",
						author_name: "36氪的朋友们",
						cover: "https://img.36krcdn.com/20191230/v2_037f7f799f504a60a848b52fa913ab65_img_png",
						published_at: "2019-12-30 15:29:00"
					}
				],
			};
		},
		onLoad() {
		},
		methods: {
			goDetail: function(e) {
				// 				if (!/前|刚刚/.test(e.published_at)) {
				// 					e.published_at = dateUtils.format(e.published_at);
				// 				}
				let detail = {
					author_name: e.author_name,
					cover: e.cover,
					id: e.id,
					post_id: e.post_id,
					published_at: e.published_at,
					title: e.title
				};
				uni.navigateTo({
					url: '../list2detail-detail/list2detail-detail?detailDate=' + encodeURIComponent(JSON.stringify(detail))
				});
			},
		}
	};
</script>
<style>
	.uni-media-list-logo {
		width: 180upx;
		height: 140upx;
	}

	.uni-media-list-body {
		height: auto;
		justify-content: space-around;
	}

	.uni-media-list-text-top {
		height: 74upx;
		font-size: 28upx;
		overflow: hidden;
	}

	.uni-media-list-text-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
