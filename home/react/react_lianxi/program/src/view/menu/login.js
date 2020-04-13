import React, { Component } from 'react'
// 非受控组件  ----ref
export default class login extends Component {
    constructor(){
        super()
        //createref是一个方法
        this.xx=React.createRef()
    }
    add=()=>{
        // alert("111")
        // 获取input框当前的值
        console.log(this.xx.current.value)
    }
    render() {
        return (
            <div>
                <hr></hr>
                {/* ref绑定上面的this.xx */}
                {/* defaultValue默认值 */}
                <input type="text" ref={this.xx} defaultValue="gao"></input>
                <button onClick={this.add}>提交</button>
            </div>
        )
    }
}
