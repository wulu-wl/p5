import React from 'react'

// export default class Zi extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>子组件{this.props.chuan}</h1>
                
//             </div>
//         )
//     }
// }
function Zi(res) { 
    return(<div>
        <h1>子组件</h1>{res.chuan}

    </div>)
 }
 export default Zi