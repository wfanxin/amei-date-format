const amei = {
	// 时间格式化
	date(format = 'Y-m-d H:i:s', timestamp = '') {
		if (timestamp === '') {
			timestamp = amei.time()
		}
		const date = new Date(timestamp * 1000)
		let year = date.getFullYear()
		let month = date.getMonth() + 1
		let day = date.getDate()
		let hour = date.getHours()
		let minute = date.getMinutes()
		let second = date.getSeconds()
		let formatDate = amei.trim(format) // 去除字符串两边空格
		formatDate = formatDate.replace(/Y/, year) // 年
		formatDate = formatDate.replace(/m/, amei.paddingzero(month, 2)) // 月
		formatDate = formatDate.replace(/d/, amei.paddingzero(day, 2)) // 日
		formatDate = formatDate.replace(/H/, amei.paddingzero(hour, 2)) // 时
		formatDate = formatDate.replace(/i/, amei.paddingzero(minute, 2)) // 分
		formatDate = formatDate.replace(/s/, amei.paddingzero(second, 2)) // 秒
		return formatDate
	},
	// 获取当前时间戳
	time() {
		return parseInt(new Date().getTime() / 1000)
	},
	// 日期转时间戳
	strtotime(time = '', now = '') {
		if (time === '') {
			return amei.time()
		}

		time = amei.trim(time) // 去除字符串两边空格

		// 获取当前时间戳
		if (time.indexOf('now') != -1) {
			return amei.time()
		}

		let hour = amei.analysis(time, 'hour') // 时
		let day = amei.analysis(time, 'day') // 天
		let week = amei.analysis(time, 'week') // 周
		let month = amei.analysis(time, 'month') // 月
		let year = amei.analysis(time, 'year') // 年

		if (hour === '' && day === '' && week === '' && month === '' && year === '') {
			if (time.length === 10) {
				time += ' 00:00:00'
			}
			return parseInt(new Date(time).getTime() / 1000)
		}

		if (now === '') { // 没有传值，默认当前时间戳
			now = amei.time()
		}

		// 时偏移
		if (hour !== '') {
			now += hour * 60 * 60
		}

		// 天偏移
		if (day !== '') {
			now += day * 24 * 60 * 60
		}

		// 周偏移
		if (week !== '') {
			now += week * 7 * 24 * 60 * 60
		}

		// 月或年偏移
		if (month !== '' || year !== '') {
			let date = amei.date('Y-m-d H:i:s', now)
			let date_arr = date.split('-')
			if (month !== '') { // 月偏移
				if (parseInt(date_arr[1]) + parseInt(month) > 12) { // 大于12月，则向年进位
					date_arr[1] = parseInt(date_arr[1]) + parseInt(month) - 12
					date_arr[0] = parseInt(date_arr[0]) + 1
				} else if (parseInt(date_arr[1]) + parseInt(month) < 1) { // 小于1月，则向年借位
					date_arr[1] = parseInt(date_arr[1]) + parseInt(month) + 12
					date_arr[0] = parseInt(date_arr[0]) - 1
				} else {
					date_arr[1] = parseInt(date_arr[1]) + parseInt(month)
				}
			}
			if (year !== '') { // 年偏移
				date_arr[0] = parseInt(date_arr[0]) + parseInt(year)
			}
			
			now = amei.strtotime(date_arr.join('-'))
		}

		return now
	},
	// 补0
	paddingzero(value, length = 2) {
		return (Array(length).join('0') + value).slice(-length)
	},
	// 去除字符串两边空格
	trim(str) {
		return str.replace(/(^\s*)|(\s*$)/g, '')
	},
	// 解析关键词前面的数字
	analysis(str, word) {
		let length = str.indexOf(word)
		if (length != -1) {
			let sub_str = amei.trim(str.substring(0, length))
			return sub_str.split(' ').pop()
		} else {
			return ''
		}
	}
}

module.exports = amei
