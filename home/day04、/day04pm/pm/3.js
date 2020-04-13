let obj = { "name": "gao" };

Object.defineProperty(obj, "name", {
    get: function () {
        console.log("取值了")
        // return obj.name
    },
    set: function (newval) {
        console.log("修改值了。。。", newval)
        // 更新视图。。。
    }
})

// 取 name 值
obj.name;
// 设置 name 值
obj.name = "wang"