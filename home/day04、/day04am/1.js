// 实现 Vue 构造函数
function Vue(options) {
    this.data = options.data;
    let id = options.el;

    let dom = document.querySelector(id);

    // 内存中 识别模版里的vue 指令，处理，
    let vdom = nodeToFragment(dom, this)
    // 将节点 插入到 id==app 的div中
    dom.appendChild(vdom)
}


function nodeToFragment(node, vm) {
    // 文档碎片
    let vdom = document.createDocumentFragment();
    // vdom.append(node.firstChild)
    // vdom.append(node.firstChild)
    // vdom.append(node.firstChild)
    while (node.firstChild) {
        // 放入 内存 之前  --编译
        // v-model {{}}
        compile(node.firstChild, vm)
        vdom.append(node.firstChild)
    }
    return vdom;
}

function compile(node, vm) {
    // v-model {{}} 
    // 判断 如果是 input  v-model=a 
    // 替换为 value = “123”
    if (node.nodeType === 1) {
        var attr = node.attributes;
        for (var i = 0; i < attr.length; i++) {
            var name = attr[i].nodeValue;
            node.addEventListener("input", function (e) {
                vm[name] = e.target.value;
            })
            node.value = vm.data[name]
            // node.removeAttribute("v-model")
        }
    }

    if (node.nodeType === 3) {
        let reg = /\{\{(.*)\}\}/
        if (reg.test(node.nodeValue)) {
            let name = RegExp.$1.trim();

            node.nodeValue = vm.data[name]
        }
    }




}