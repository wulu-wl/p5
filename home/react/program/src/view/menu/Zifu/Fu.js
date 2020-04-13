import React from 'react'
import Zi from './Zi.js'
class Fu extends React.Component{
    constructor(){
        super()
        this.state={
            num:null
        }
    }
    shou=(res)=>{
        console.log(res)
    }
    render(){
        return (<div>
            <h1>父组件{this.state.num}</h1>
            <Zi zichuan={this.shou}></Zi>
        </div>)
    }
}
//将子元素在父元素中注册   注册时添加属性   名字={接收事件}
// 子组件中在点击事件中传值  this.props.名字（要传的值）
export default Fu