//https://www.jianshu.com/p/ed19b36bc324

function Vue(opthions) {
    this.data = opthions.data;
    var data = this.data;
    //数据监听
    //一个是数据模型data，一个是vue的实例vm。
    observer(data, this);
    var id = opthions.el;
    //模版编译
    //识别模板里面的vue指令进行相应的处理，处理之后的template插入到挂载目标元素里。
    var dom = nodeToFragment(document.getElementById(id), this)
    document.getElementById(id).appendChild(dom)
}


function observer(obj, vm) {
    Object.keys(obj).forEach(function (key) {
        defineReactive(vm, key, obj[key])
    })
}
function defineReactive(obj, key, val) {
    var dep = new Dep();
    Object.defineProperty(obj, key, {
        get: function () {
            // console.log("取值")
            //添加订阅者
            if (Dep.target)
                dep.addSub(Dep.target)
            return val;
        },
        set: function (newVal) {
            // console.log("获取值")
            val = newVal;
            //发布消息；
            pub.publish(dep);
        }
    })
}
var pub = {
    publish: function (dep) {
        // console.log(dep)
        dep.notify();
    }
}

function Dep() {
    this.subs = [];
    // console.log(this.subs)
}
Dep.prototype = {
    addSub: function (sub) {
        // console.log(sub)
        this.subs.push(sub)
    },
    // 通知
    notify: function () {
        // console.log(this.subs)
        this.subs.forEach(function (sub) {
            console.log(sub)
            sub.update();
        })
    }
}


function nodeToFragment(node, vm) {
    var flag = document.createDocumentFragment();
    var child;
    while (child = node.firstChild) {
        compile(child, vm)
        flag.append(child);
    }
    return flag;
}

function compile(node, vm) {
    var reg = /\{\{(.*)\}\}/;
    if (node.nodeType === 1) {
        var attr = node.attributes;
        for (var i = 0; i < attr.length; i++) {
            var name = attr[i].nodeValue;
            node.addEventListener("input", function (e) {
                vm[name] = e.target.value;
            })
            node.value = vm[name];
            node.removeAttribute("v-model");
        }
    }
    if (node.nodeType === 3) {

        if (reg.test(node.nodeValue)) {
            console.log(RegExp.$1)
            var name = RegExp.$1;
            name = name.trim();
            new Watcher(vm, node, name)
        }
    }
}
Watcher.prototype = {
    update: function () {
        // console.log("-------")
        this.get();
        this.node.nodeValue = this.value;
    },
    get: function () {
        this.value = this.vm[this.name]
    }
}
function Watcher(vm, node, name) {
    Dep.target = this;
    this.name = name;
    this.node = node;
    this.vm = vm;
    this.update();
    Dep.target = null;
}
