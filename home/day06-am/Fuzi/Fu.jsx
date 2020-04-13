import Zi from "./Zi.jsx"
import React from "react"
function Fu() {
    let a = 123;
    return (
        <div>
            父组件：{a}
            <Zi chuan={a} x="ss"></Zi>
        </div>
    )
}

export default Fu;