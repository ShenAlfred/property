/**
 * Created by admin on 2017/8/8.
 */
export default {
  /**
   * 判断是否是纯数字类型
   * @param obj
   * @returns {boolean}
   */
  isInteger: function (obj) {
    return parseInt(obj, 10) === obj
  },
  /**
   * 处理时间戳
   * @param timestamp
   * @returns {{}}
   */
  handleTime: function(timestamp, format) {
    var date = new Date(timestamp),
      result = {};
    result["y+"] = date.getFullYear();
    result["M+"] = date.getMonth()+1;
    result["d+"] = date.getDate();
    result["h+"] = date.getHours();
    result["m+"] = date.getMinutes();
    result["s+"] = date.getSeconds();

    if(format)  {
      if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      for (var k in result) {
        if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length == 1
            ? result[k] : ("00" + result[k]).substr(("" + result[k]).length));
        }
      }
      return format;
    }else {
      return result;
    }
  },
  getUrlKey:function(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
  }
}
