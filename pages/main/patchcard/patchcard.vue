<template>
	<view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">补卡原因</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'出差'}}
					</view>
				</picker>
			</view>
			<!-- #endif -->
			<view class="cu-form-group">
				<view class="title">时间选择</view>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
					<view class="picker">
						{{time}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">日期选择</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">补卡事由</view>
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="多行文本输入框"></textarea>
			</view>
			<view class="uni-btn-v uni-common-mt">
				<button class="btn-submit" formType="submit" type="primary" @click="sub">提交审批</button>
			</view>
		</form>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['出差', '年休', '忘记打卡', '病假', '事假', '外勤'],
				// multiIndex: [0, 0, 0],
				time: '12:01',
				date: '2018-12-25',
				modalName: null,
				textareaBValue: ''
			};
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},

			sub() {
				uni.showToast({
					title: '上传成功',
					icon: 'success',
					duration: 1000
				})

				setTimeout(() => {
					uni.switchTab({
						url: "../main",

					});
				}, 600);
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}

	.btn-submit {
		background-color: #1C2A86;
		margin: 100upx 20upx;
		color: #fff;

	}
</style>
