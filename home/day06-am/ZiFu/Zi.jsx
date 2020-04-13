import React from "react"
class Zi extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 123456
        }
    }
    chuan = () => {
        // console.log(this.state.a)
        this.props.zichuan(this.state.a)
    }
    render() {
        return (
            < div >
                <h1>值:{this.state.a}</h1>
                <button onClick={this.chuan}>点击传值</button>
            </div >

        )
    }
}

export default Zi
