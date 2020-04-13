import React, { Component } from 'react'

export default class Biaodan extends Component {
    constructor(){
        super()
        this.state={
            text:999
        }
    }
    onChangetextvalue=(event)=>{
        this.setState({
            text:event.target.value
        },()=>{
            console.log(this.state.text)
        })
    }
    render() {
        return (
            <div>
                form 表单  
                <input type="text" value={this.state.text} onChange={this.onChangetextvalue}></input>
            </div>
        )
    }
}
