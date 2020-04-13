import React, { Component } from 'react'
import emitter from './bus'
export default class Zi1 extends Component {
    constructor(){
        super()
        this.state={
            num:'aaaa'
        }
    }
    chuan=()=>{
        emitter.emit("chuan",this.state.num)
    }
    render() {
        return (
            <div>
             子组件1
<button onClick={this.chuan}>点击进行传值</button>
            </div>
        )
    }
}
