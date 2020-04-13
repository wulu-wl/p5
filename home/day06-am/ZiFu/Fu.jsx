import React from "react"
import Zi from "./Zi.jsx"
class Fu extends React.Component {
    constructor() {
        super();
        this.state = {
            b: ""
        }
    }
    shou = (res) => {
        // console.log(res)
        this.setState({
            b: res
        })
    }
    render() {
        return (
            <div>
                值是：{this.state.b}

                <Zi zichuan={this.shou}></Zi>
            </div>
        )
    }
}

export default Fu

