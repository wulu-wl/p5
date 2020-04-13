import React, { Component } from 'react'
import Zi1 from './Zi1'
import Zi2 from './Zi2'
export default class Fu extends Component {
    render() {
        return (
            <div>
                父组件
                <Zi1></Zi1>
                <Zi2></Zi2>
            </div>
        )
    }
}

//父组件中注册两个子组件  无操作
//子组件1向子组件二中传值  需要用过bus中转站进行传值
//子组件1中通过点击事件进行传值   
//先引入emitter from 'bus'
//通过emitter.emit()方法进行传值
//emitter.emit("名字",要传的值)
//子组件2中在挂在后进行接收
//引入emitter from 'bus'
// componentDidmount中使用emitter.addListener()方法进行接收数据
// emitter.addListener("名字"，回调函数)