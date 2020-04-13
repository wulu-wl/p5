import React, { Component } from 'react'


//第一种params传参
// export default class Info extends Component {
   
//     render() {
//         // console.log(this.props.match.params.id)  
//         return (

//             <div>
//                 <h1>这是商品详情</h1>
//                 <p>商品{this.props.match.params.id}</p>
//             </div>
//         )
//     }
// }   

 
//第二种query传值   刷新页面值消失
// export default class Info extends Component {
   
//     render() {
//         console.log(this.props.history.location.query.id)  
//         return (

//             <div>
//                 <h1>这是商品详情</h1>
//                 <p>商品</p>
//             </div>
//         )
//     }
// }   


//第三种
export default class Info extends Component {
   
    render() {
        console.log(this.props.history.location.state.id)  
        return (

            <div>
                <h1>这是商品详情</h1>
                <p>商品</p>
            </div>
        )
    }
}   