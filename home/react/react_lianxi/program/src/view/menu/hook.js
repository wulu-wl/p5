//hook    函数名一定要带大写  不然会报错·   3

import React , {useState}from 'react'
function Hook() { 

    //useState()括号里的数值为c的初始值
    const [c, jia] = useState(3)
//[]   第一个是state的值  第二个是改变state的方法
    return (
        <div>
            <h1>{c}</h1>
            <button onClick={()=>{jia(c+2)}}>++++</button>
        </div>
    )
 }
 export default Hook