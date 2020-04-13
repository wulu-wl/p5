import React from 'react'
class Zi extends React.Component{
    constructor(){
        super()
        this.state={
            num:111
        }
    }
    chuan=()=>{
        this.props.zichuan(this.state.num)
    }
    render(){
        return (<div>
            <h1>子组件{this.state.num}</h1>
            <button onClick={this.chuan}>点击传值</button>
        </div>)
    }
}
export default Zi