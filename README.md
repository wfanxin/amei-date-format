## Time format tool package



### install

yarn add amei-date-format

npm i amei-date-format



### import

import AmeiData from 'amei-date-format'

import {date, time, strtotime} from 'amei-date-format'



### explain

#### Date format
##### date(format = 'Y-m-d H:i:s', timestamp = '')

According to the format, output the formatted date. The format is limited to special characters（year【Y】、month【m】、day【d】、hour【H】、minute【i】、second【s】）

If 【timestamp】 is not transmitted, it is the current timestamp

example:

```javascript
import AmeiData from 'amei-date-format'
console.log(AmeiData.date()) // 2022-07-06 17:35:07
console.log(AmeiData.date('Ymd')) // 20220706
console.log(AmeiData.date('Y-m-d')) // 2022-07-06
```

#### Get current timestamp

##### time()

example:

```javascript
import AmeiData from 'amei-date-format'
console.log(AmeiData.time()) // 1657100107
```

#### Date to timestamp
##### strtotime(time = '', now = '')

【time】 is a special string with (hours, hours, day, days, week, weeks, month, months, year, years), or is a date

If 【now】 is not transmitted, it is the current timestamp

```javascript
import AmeiData from 'amei-date-format'
console.log(AmeiData.strtotime()) // 1657100107
console.log(AmeiData.strtotime('2022-02-18')) // 1645113600
console.log(AmeiData.strtotime('+1 day', AmeiData.strtotime('2022-02-18'))) // 1645200000
```



### Complex examples：

```javascript
import {date, time, strtotime} from 'amei-date-format'
console.log(date('Y-m-d H:i:s', strtotime('+2 years'))) // 2024-07-06 17:35:07
console.log(date('Y-m-d H:i:s', strtotime('+3 hours +2 days +1 week'))) // 2022-07-15 20:35:07
console.log(date('Y-m-d H:i:s', strtotime('-1 month', strtotime('2022-03-31')))) // 2022-03-03 00:00:00
console.log(date('Y-m-d H:i:s', strtotime('+1 month', strtotime('2022-03-31')))) // 2022-05-01 00:00:00
console.log(date('Y-m-d H:i:s', strtotime('+10 month', strtotime('2022-03-31')))) // 2023-01-31 00:00:00
```



