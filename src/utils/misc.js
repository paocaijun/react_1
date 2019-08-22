const utils = {
	formatYearOne(date) {
		return utils.dateFormatMethod(date, 'yyyy-MM-dd')
	},
	formatFullDate(date) {
		return utils.dateFormatMethod(date, 'yyyy/MM/dd HH:mm:ss')
	},
	formatFullDateAnother(date) {
		return utils.dateFormatMethod(date, 'yyyy-MM-dd HH:mm:ss')
	},
	/*
	 * yyyy/MM/dd HH:mm:ss
	 * yyyy-MM-dd HH:mm:ss
	 */
	//  时间格式化
	dateFormatMethod(date, format = 'yyyy-MM-dd') {
		if (typeof date === 'string') return date
		if (date !== undefined && date != null && date !== '') {
			date = typeof date === 'string' ? Number(date) : date
			date = new Date(date)
			var map = {
				'M+': date.getMonth() + 1, // 月份
				'd+': date.getDate(), // 日
				'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
				'H+': date.getHours(), // 小时
				'm+': date.getMinutes(), // 分
				's+': date.getSeconds(), // 秒
				'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
				S: date.getMilliseconds() // 毫秒
			}
			var week = {
				'0': '/u65e5',
				'1': '/u4e00',
				'2': '/u4e8c',
				'3': '/u4e09',
				'4': '/u56db',
				'5': '/u4e94',
				'6': '/u516d'
			}
			if (/(y+)/.test(format)) {
				format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
			}
			if (/(E+)/.test(format)) {
				format = format.replace(
					RegExp.$1,
					(RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[date.getDay() + '']
				)
			}
			for (var k in map) {
				if (new RegExp('(' + k + ')').test(format)) {
					format = format.replace(
						RegExp.$1,
						RegExp.$1.length === 1 ? map[k] : ('00' + map[k]).substr(('' + map[k]).length)
					)
				}
			}
		} else {
			format = ''
		}
		return format
	},
	isEmpty(val) {
		return typeof val === 'undefined' || val === null
	}
}
export default utils
