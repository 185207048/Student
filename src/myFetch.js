const API_PREFIX = "http://www.lszjx.com:8081/";
export default API_PREFIX;
export function postService(path, body, callback) {
  fetch(path, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    cache: 'default',
    body: JSON.stringify(body),
  }).then(function (response) {
    if (response.status === 200) {
      response.json().then((json) => {    
          return callback && callback(json);
      });
    } else {
      return callback(response.status);
    }
    return response.json().then((json) => {
      callback && callback(json);
    });
  }).catch((error) => {
    console.log(error);
  });
}

export function putService(path, body, callback) {
  fetch(path, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    cache: 'default',
    body: JSON.stringify(body),
  }).then(function (response) {
    return response.json().then((json) => {
      callback && callback(json);

    });
  }).catch((error) => {
    console.log(error);
  });
}

export function getService(path, callback) {
  fetch(path, {
    method: 'GET',
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Credentials" : true,
    headers: {
        'Content-Type': 'application/json'
    },
  }).then(function (response) {
    if (response.status === 200) {
      response.json().then((json) => {
          return callback && callback(json);
      });
    }else {
      return callback(response.status);
    }
  }).catch((error) => {
    console.log(error);
  });
}

export function deleteService(path, callback) {
  fetch(path, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include',
    cache: 'default',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function (response) {
    return response.json().then((json) => {
      callback && callback(json);
    });
  }).catch((error) => {
    // loading();
    console.log(error);
  });
}

//正则匹配地址携带的参数  接收url地址和要匹配的参数
export function GetQueryString(_URL, names) {
  let URL = _URL.split('?')[1];
  let queryResult = {};
  let reg = '';
  if (URL && names instanceof Array) {
    names.map(function (v, k) {
      reg = new RegExp('(^|&)' + v + '=([^&]*)(&|$)');
      let r = URL.match(reg);
      if (r != null) {
        queryResult[v] = r[2];
      }
    });
  } else {
  }
  return queryResult;
}

//格式化日期：yyyy-MM-dd
export function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  return (year);
}
//获取日期所在周次(201738)
export function getWeek(nowDate) {

  let year = nowDate.getFullYear();
  let ndate = new Date(year, nowDate.getMonth(), nowDate.getDate());
  //定义截取规则（当年1月1日所处周几）
  let firstDay = new Date(year, 0, 1);
  let firstWeekId = firstDay.getDay();
  //定义截取规则（当年12月31日所处周几）
  let lastDay = new Date(year, 11, 31);
  let lastWeekId = lastDay.getDay();

  //定义截取规则（前一年1月1日所处周几）
  let nextfirstDay = new Date(year - 1, 0, 1);
  let nextfirstWeekId = nextfirstDay.getDay();
  //定义截取规则（前一年12月31日所处周几）
  let nextlastDay = new Date(year - 1, 11, 31);


  let type = -1;

  //判断日期是否属于年头年尾
  if (parseInt(Math.abs(ndate - firstDay) / 86400000) + firstWeekId <= 6) {
    type = 0;
  } else if (parseInt(Math.abs(lastDay - ndate) / 86400000) <= lastWeekId) {
    type = 1;
  } else {
    type = 2;
  }

  switch (type) {
    case 0: if (firstWeekId < 4) {//周日~周三，划归本年
      return year + '01';
    } else {
      if (nextfirstWeekId < 4) {
        return (year - 1).toString() + nowWeek(nextlastDay, nextfirstWeekId);
      } else {
        return (year - 1).toString() + nowWeek(nextlastDay, (nextfirstWeekId - 7));
      }
    }
      break;//年头
    case 1: if (lastWeekId > 3) {//周三~周六，划归本年
      if (firstWeekId < 4) {//周日~周三，划归本年
        return year.toString() + nowWeek(ndate, firstWeekId);
      } else {//周四~周六，划归去年
        return year.toString() + nowWeek(ndate, (firstWeekId - 7));
      }
    } else {//周日~周二，划归本年
      return (year + 1).toString() + '01';
    }
      break;//年尾
    case 2: if (firstWeekId < 4) {//周日~周三，划归本年
      let weeks = nowWeek(ndate, firstWeekId);
      if (weeks < 10) {
        return year + '0' + weeks;
      } else {
        return year.toString() + weeks;
      }
    } else {
      let weeks = nowWeek(ndate, (firstWeekId - 7));
      if (weeks < 10) {
        return year + '0' + weeks;
      } else {
        return year.toString() + weeks;
      }
    }

      break;//年中
    default:

  }

}

//获取当前日期在当前年第几周函数封装,dValue为差值
function nowWeek(date, dValue) {
  let totalDays = 0;
  let years = date.getYear();
  let curMonth = date.getMonth();
  let curDate = date.getDate();
  if (years < 1000) {
    years += 1900;
  }

  const months = new Array(12);
  months[0] = 31;
  months[2] = 31;
  months[3] = 30;
  months[4] = 31;
  months[5] = 30;
  months[6] = 31;
  months[7] = 31;
  months[8] = 30;
  months[9] = 31;
  months[10] = 30;
  months[11] = 31;

  //判断是否为闰年，针对2月的天数进行计算
  if (Math.round(years / 4) == years / 4) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }

  if (curMonth == 0) {
    totalDays = totalDays + curDate;
  } else {
    for (let count = 1; count <= curMonth; count++) {
      totalDays = totalDays + months[count - 1];
    }
    totalDays = totalDays + curDate;
  }
  //得到第几周
  let week = Math.ceil((totalDays + dValue) / 7);//原代码使用的是round
  return week;
}

//判断数组中是否包含某元素
export function contains(arr, obj) {
  let i = arr.length;
  while (i--) {
    if (arr[i] === obj) {
      return true;
    }
  }
  return false;
}


//获得当前日期月前7个月
export function getMonthStartDate(date) {
  let nowYear = date.getFullYear();
  let nowMonth = date.getMonth() + 1;
  switch (nowMonth) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      nowMonth += 7;
      nowYear--;
      break;
    default:
      nowMonth -= 7;
      break;
  }
  let monthStartDate = new Date(nowYear, nowMonth);
  return monthStartDate;
}

//获取系统上线日期时间戳-20171023
export function sysDate() {
  let d = new Date();
  d.setFullYear(2017, 9, 22);
  return Date.parse(d);
}

export function getPast5years() {
  const currentYear = (new Date()).getFullYear();
  let arr = [];
  for (let i = 4; i >= 0; i--) {
    arr.push((currentYear - i));
  }
  return arr;
}

/**
 * 
 * @param {array} array 原数组
 * @param {string} valueKey 给cascade用的value对用的key值
 * @param {string} labelKey 给cascade用的label对应的key值
 * @param {string} childrenKey 给cascade用的children对应的key值
 */
export function arrayForCascade(array, valueKey, labelKey, childrenKey) {
  const cloneArray = [...array];
  cloneArray.forEach((ele) => {
    ele.value = ele[valueKey] + '';
    ele.label = ele[labelKey];
    if (ele[childrenKey] && ele[childrenKey].length > 0) {
      ele.children = ele[childrenKey];
      arrayForCascade(ele[childrenKey], valueKey, labelKey, childrenKey);
    }
  });
  return cloneArray;
}
