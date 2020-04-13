import React from "react"
//class 组件 接受 props
// class Zi extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>值:{this.props.chuan}</h1>
//             </div>
//         )
//     }
// }

//函数组件 接受 props
// let {chuan}={chuan:123}
function Zi({ chuan }) {
    // console.log(res) // {chuan:123}
    return (
        <div>
            <h1>值：{chuan}</h1>
        </div>
    )
}

export default Zi;