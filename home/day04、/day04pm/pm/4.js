let data = {
    name: "gao",
    num: 1,
    price: 2
}
// <p>{{name}}</p>  <h1>{{name}}</h1> <input v-model="name" />
// 劫持对象 。。监听对象中每一个属性的变化
function observer(obj) {
    Object.keys(obj).forEach(function (key) {
        defineReactive(obj, key, obj[key])
    })
}
function defineReactive(obj, key, val) {
    let dep = new Dep()
    Object.defineProperty(obj, key, {
        get: function () {
            // 添加到订阅者
            if (Dep.target) {
                dep.addSub(Dep.target)
            }
            console.log("取值了。")
            return val
        },
        set: function (newVal) {
            console.log("改变值了", newVal)
            val = newVal
            // 通知 视图发生变化 。。。发布者
        }
    })
}
// observer(data)
//订阅者
function Dep() {
    this.subs = []
}
Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub)
    }
}

// //设置
// data.name = "wwwww"
// // 获取
// console.log(data.name)