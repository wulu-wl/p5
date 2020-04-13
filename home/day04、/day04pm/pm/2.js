let obj = { "age": 89 };
//value
Object.defineProperty(obj, "newval", {
    value: "gao",// 没有 undefined
    writable: true,// 是否可重写 true 可以 false 不可以
    enumerable: false,// 是否可枚举 -- 循环遍历 for in //Object.keys()
    configurable: false //是否可删除 
})
// delete obj.newval;
// console.log(obj.newval)
// console.log(obj.newval);//undefined  // gao
// obj.newval = "wang";
// console.log(obj.newval)

// for (let key in obj) {
//     console.log(key)
// }
// console.log(Object.keys(obj)) // 属性名对象["age","newval"]
// Object.keys(obj).forEach(function (v, i) {
//     console.log(v, i)
// })


