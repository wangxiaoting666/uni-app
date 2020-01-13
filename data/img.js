
let data = {
    "list":[
    
        {
        		id: 'view',
        		name: '一监区考勤',
        		open: false,
        		showImg: false,
        		pages: [
        			'view',
        			'scroll-view',
        			'swiper'
        			// #ifndef MP-TOUTIAO
        			,
        			'movable-view',
        			'cover-view'
        			// #endif
        		]
        	}, {
        		id: 'content',
        		name: '二监区考勤',
        		open: false,
        		
        		pages: ['text', 'rich-text', 'progress']
        	}, {
        		id: 'form',
        		name: '三监区考勤',
        		open: false,
        		pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio',
        			'slider',
        			'switch', 'textarea',
        			// #ifdef APP-PLUS || MP-WEIXIN
        			'editor',
        			// #endif
        		]
        	}, {
        		id: 'nav',
        		name: '四监区考勤',
        		open: false,
        		pages: ['navigator']
        	}, {
        		id: 'media',
        		name: '五监区考勤',
        		open: false,
        		pages: [
        			'image',
        			// #ifndef MP-ALIPAY
        			'video',
        			// #endif
        			// #ifndef MP-ALIPAY || MP-TOUTIAO
        			'audio',
        			// #endif
        		],
        	},
    ],
	"list1":[
		
		{
				title: "马云",
				content: "值班民警",
				img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90"
			},
			{
				title: "常晓宇",
				content: "普通民警",
				img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90"
			},
			{
				title: "王小婷",
				content: "值班民警",
				img: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"
			}
	]
}
module.exports = {
  data: data
}