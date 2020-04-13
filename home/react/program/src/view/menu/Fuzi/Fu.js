import React, { Component } from 'react'
import Zi from './Zi'
export default class Fu extends Component {
    constructor(){
        super()
        this.state={
            num:123
        }
    }
    render() {
        return (
            <div>
                <h1>父组件{this.state.num}</h1>
                <Zi chuan={this.state.num}></Zi>
            </div>
        )
    }
}

//父传子
//父组件中注册子组件  添加属性  名字={要传的值}

//子组件中  
// class语法糖 
// this.props.名字   接收传过来的值
//函数
// 形参接收传值    res.名字 接收传过来传值