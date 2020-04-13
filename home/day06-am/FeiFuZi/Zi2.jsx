import React from "react"
import emitter from "./bus.js"
class Zi2 extends React.Component {
    // constructor() {
    //     super();

    // }
    componentDidMount() {
        emitter.addListener("chuanzhi", (res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <h1>我是 子2 组件</h1>

            </div>
        )
    }
}

export default Zi2

