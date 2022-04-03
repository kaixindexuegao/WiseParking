module.exports = {
	PID: 'A00', // 停车

	NAV_COLOR: '#ffffff',
	NAV_BG: '#009F72',

	MEET_NAME: '预约',

	MENU_ITEM: ['首页', '预约日历', '我的'], // 第1,4,5菜单

	cate2: false,

	NEWS_CATE: '1=预约规则|leftbig',
	MEET_TYPE: '1=小型车预约|leftbig2,2=大型车预约|leftbig3',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '车牌号',
			desc: '请填写您的车牌号',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}