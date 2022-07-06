### 时间格式化模块



##### 时间格式化
date(format = 'Y-m-d H:i:s', timestamp = '')

根据format的格式，输出格式化的日期，格式限定特殊字符为（年【Y】、月【m】、日【d】、时【H】、分【i】、秒【s】）

timestamp 不传，则为当前时间戳

例子：

```javascript
console.log(AmeiData.date()) // 2022-07-06 17:35:07
console.log(AmeiData.date('Y-m-d')) // 2022-07-06
console.log(AmeiData.date('Ymd')) // 20220706

```



##### 获取当前时间戳

time()

获取当前系统的时间戳

例子：

```javascript
console.log(AmeiData.time()) // 1657100107
```



##### 日期转时间戳
strtotime(time = '', now = '')

time 为带（hour、hours、day、days、week、weeks、month、months、year、years）的特殊字符串，或为日期

now不传，则为当前时间戳

```javascript
console.log(AmeiData.strtotime()) // 1657100107
console.log(AmeiData.strtotime('now')) // 1657100107
console.log(AmeiData.strtotime('2022-02-18')) // 1645113600
console.log(AmeiData.strtotime('+1 day', AmeiData.strtotime('2022-02-18'))) // 1645200000

```



##### 综合案例：

```javascript
// 当前时间+3小时+2天+1周
console.log(AmeiData.date('Y-m-d H:i:s', AmeiData.strtotime('+3 hours +2 days +1 week'))) // 2022-07-15 20:35:07
// 当前时间+2年
console.log(AmeiData.date('Y-m-d H:i:s', AmeiData.strtotime('+2 years'))) // 2024-07-06 17:35:07

// 临界时间处理start
console.log(AmeiData.date('Y-m-d H:i:s', AmeiData.strtotime('+1 month', AmeiData.strtotime('2022-03-31')))) // 2022-05-01 00:00:00
console.log(AmeiData.date('Y-m-d H:i:s', AmeiData.strtotime('+10 month', AmeiData.strtotime('2022-03-31')))) // 2023-01-31 00:00:00
console.log(AmeiData.date('Y-m-d H:i:s', AmeiData.strtotime('-1 month', AmeiData.strtotime('2022-03-31')))) // 2022-03-03 00:00:00
console.log(AmeiData.date('Y-m-d H:i:s', AmeiData.strtotime('-3 month', AmeiData.strtotime('2022-03-31')))) // 2021-12-31 00:00:00
console.log(AmeiData.date('Y-m-d H:i:s', AmeiData.strtotime('+1 year', AmeiData.strtotime('2020-02-29')))) // 2021-03-01 00:00:00
// 临界时间处理end
```



