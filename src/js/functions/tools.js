//cooki相关方法
const cookie = {
    //取cookie串
    get: function(name, encode) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        var j = 0;
        while (i < clen) {
            j = i + alen;
            if (document.cookie.substring(i, j) == arg) return this.getCookieVal(j, encode);
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0) break;
        }
        return null;
    },
    //取cookie串下的某个参数值
    getname: function(cookie_name, name) {
        var cookie_val = this.get(cookie_name);
        var regex = new RegExp("[?&]" + encodeURIComponent(name) + "\\=([^&#]+)");
        var value = (cookie_val.match(regex) || ["", ""])[1];
        return decodeURIComponent(value);
    },
    set: function(name, value, expires, path, domain, secure) {
        var argv = arguments;
        var argc = arguments.length;
        //        var expires = (argc > 2) ? argv[2] : null;
        var now = new Date();
        var expires = (argc > 2) ? argv[2] : new Date(now.getFullYear(), now.getMonth() + 1, now.getUTCDate());
        var path = (argc > 3) ? argv[3] : '/';
        var domain = (argc > 4) ? argv[4] : '.58corp.com';
        var secure = (argc > 5) ? argv[5] : false;
        document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
    },
    remove: function(name) {
        if (this.get(name)) this.set(name, "", new Date(1970, 1, 1));
    },
    getCookieVal: function(offset, encode) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr == -1) {
            endstr = document.cookie.length;
        }
        if (encode == false) return document.cookie.substring(offset, endstr);
        else return unescape(document.cookie.substring(offset, endstr));
    }
};


//判断数组是否重复
const isRepeat = function(arr) {
    var hash = {};
    for (var i in arr) {
        if (hash[arr[i]])
            return true;
        hash[arr[i]] = true;

    }
    return false;
}





const deepClone= function(sObj){

    if(typeof sObj !== "object"){

        return sObj;

    }

    var s = {};

    if(sObj.constructor == Array){

        s = [];

    }

    for(var i in sObj){

        s[i] = deepClone(sObj[i]);

    }

    return s;

}


const getQueryString =function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substring(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}







export {
    cookie, isRepeat,deepClone,getQueryString
}
