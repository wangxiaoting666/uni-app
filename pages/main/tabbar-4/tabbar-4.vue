<template>
	<view class=" bg-white" style=''>
		
			<view class="cu-card case  bg-white" >
				<view class="qiun-charts3">
					<!-- <canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" :style="{'width':cWidth3*pixelRatio+'px','height':cHeight3*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':cWidth3*2-cWidth3*(pixelRatio-1)/2+'px','margin-top':-cHeight3*(pixelRatio-1)/2+'px'}"></canvas>   -->
					<canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" style="margin-left: 130px;"></canvas>
				</view>
				
				<view class="flex  p-xs margin-bottom-sm mb-sm">
					<view class="flex-treble  padding-sm margin-xs radius">
						<view class="name">20</view>
						<view class="manager">迟到</view>
					</view>
					<view class="flex-treble  padding-sm margin-xs radius">
						<view class="name">22</view>
						<view class="manager">早退</view>
					</view>
					<view class="flex-treble  padding-sm margin-xs radius">
						<view class="name">1</view>
						<view class="manager">缺勤</view>
					</view>
				</view>
			</view>

			


		<view class="cu-card case  bg-white"  style="margin-top: 50px;">
			<view class="qiun-title-bar" style="">
				<view class="qiun-title-dot-light">考勤统计</view>
			</view>
			<view class="qiun-charts" style="">
				<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"></canvas>
			</view>
		</view>
	</view>
</template>
<script>
	import uCharts from '../../../components/u-charts/u-charts.js';

	var _self;
	var canvaColumn = null;
	var canvaLineA = null;
	var canvaLineB = null;
	var canvaArea = null;
	var canvaGauge = null;
	var canvaCandle = null;
	var canvaMix = null;
	var canvaColumnMeter = null;


	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',


				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致


				pixelRatio: 1,
				serverData: '',

				sliderMax: 50
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);


			this.cWidth3 = uni.upx2px(250);
			this.cHeight3 = uni.upx2px(250);
			this.arcbarWidth = uni.upx2px(24);


			//this.fillData(Data);
		},
		onReady() {
			this.getServerData();
		},
		methods: {
			getServerData() {
				uni.showLoading({
					title: "正在加载数据..."
				})
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
					data: {},
					success: function(res) {
						_self.fillData(res.data);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
					complete() {
						uni.hideLoading();
					}
				});
			},
			fillData(data) {

				this.serverData = data;
				let Column = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Column.categories = data.Column.categories;
				//这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
				Column.series = data.Column.series;
				this.showColumn("canvasColumn", Column);


				let Arcbar3 = {
					series: []
				};


				Arcbar3.series = data.Arcbar3.series;
				this.showArcbar3("canvasArcbar3", Arcbar3);



			},

			showArcbar3(canvasId, chartData) {
				new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.series[0].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'circle', //整圆类型进度条图
							width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
							startAngle: 0.5 //整圆类型只需配置起始角度即可
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
				});

			},
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					//  background: '#E5FDC3',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						}
					}
				});
			},


		}
	}
</script>

<style>
	/* 通用样式 */
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.padding-sm {

		text-align: center;
	}
</style>
