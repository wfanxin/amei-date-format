export const AmeiData = {
    date(format = 'Y-m-d H:i:s', time){ // 时间格式化
    	if (time === undefined) {
    		time = this.time()
    	}

    	const date = new Date(time * 1000)
    	let year = date.getFullYear()
    	let month = date.getMonth() + 1
    	let day = date.getDate()
    	let hour = date.getHours()
    	let minute = date.getMinutes()
    	let second = date.getSeconds()

    	let formatDate = format.replace(/(^\s*)|(\s*$)/g, '') // 去除字符串两边空格
    	formatDate = formatDate.replace(/Y/, year) // 年
    	formatDate = formatDate.replace(/m/, this.paddingzero(month, 2)) // 月
    	formatDate = formatDate.replace(/d/, this.paddingzero(day, 2)) // 日
    	formatDate = formatDate.replace(/H/, this.paddingzero(hour, 2)) // 时
    	formatDate = formatDate.replace(/i/, this.paddingzero(minute, 2)) // 分
    	formatDate = formatDate.replace(/s/, this.paddingzero(second, 2)) // 秒

    	return formatDate
    	
    },
    time(){ // 当前时间戳
        return parseInt(new Date().getTime() / 1000)
    },
    strtotime(date){ // 日期转时间戳
        return parseInt(new Date(date).getTime() / 1000)
    },
    paddingzero(value, length = 2){ // 补0
    	return (Array(length).join('0') + value).slice(-length)
    }
}
