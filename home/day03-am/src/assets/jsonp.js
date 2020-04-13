export default function jsonp({ url, params, callback }) {
    return new Promise((resolve, reject) => {
        window[callback] = function (res) {
            resolve(res);
            document.body.removeChild(scriptdom);
        };

        //  
        let scriptdom = document.createElement("script");
        // src 地址
        //1、拼接 query
        let query = { ...params, callback }; //{num:1,page:2,callback:a}
        let arr = [];
        for (let key in query) {
            arr.push(`${key}=${query[key]}`);
        }
        // arr=["num=1","page=2","callback=a"]
        let querystr = arr.join("&");
        let src = url + "?" + querystr;
        scriptdom.src = src;

        // 插入 body
        document.body.appendChild(scriptdom);
    });
}