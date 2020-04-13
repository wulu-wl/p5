import React, { Component } from 'react'
import emitter from "./bus";
export default class Zi2 extends Component {
    componentDidMount() {
        emitter.addListener('chuan',(res)=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                子组件2
            </div>
        )
    }
}
