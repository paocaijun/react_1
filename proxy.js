module.exports = {
	// 模拟数据，需要指明
	'/api/*': {
		// mock环境
		target: 'http://127.0.0.1:2618',
		secure: false
	},
	'/bpi/*': {
		target: 'http://localhost:3102', // 不能将localhost换成127.0.0.1,why
		secure: false,
		pathRewrite: {
			'^/bpi': ''
		}
	}
}
