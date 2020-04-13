import React from "react"
import emitter from "./bus.js"
class Zi1 extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 12345678
        }
    }
    // componentDidMount() {
    //     emitter.emit("chuanzhi", this.state.a)
    // }
    chuan = () => {
        emitter.emit("chuanzhi", this.state.a)
    }
    render() {
        return (
            <div>
                <h1>我是 子1 组件 -- {this.state.a}</h1>
                <button onClick={this.chuan}>点击</button>
            </div>
        )
    }
}

export default Zi1

