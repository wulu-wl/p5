import React from 'react'
import Info  from './view/Info'
import {BrowserRouter,Link,Route} from 'react-router-dom'
//第一种params传值
// class App extends React.Component{
//   render(){
//     return (
//       <BrowserRouter>
//       <div className="App">
//         <ul>
//           <li><Link to="/1">第一件商品</Link></li>
//           <li><Link to="/2">第二件商品</Link></li>
//           <li><Link to="/3">第三件商品</Link></li>
//         </ul>
//         <hr>
//         </hr>
//         {/*详情信息展示 */}
//         <Route path="/:id" component={Info}></Route>  
//       </div>
//       </BrowserRouter>
//     )
//   }
// }
//




//第二种query传参    不能刷新   刷新后值消失了
// class App extends React.Component{
//   render (){
//     return (
//       <BrowserRouter>
//       <div className="App">
//          <ul>
//            <li><Link to={{pathname:"/xq",query:{id:1}}}>第一件商品</Link></li>
//            <li><Link to={{pathname:"/xq",query:{id:2}}}>第二件商品</Link></li>
//            <li><Link to={{pathname:"/xq",query:{id:3}}}>第三件商品</Link></li>
//          </ul>
//          <hr>
//          </hr>
//          {/*详情信息展示 */}
//          <Route path="/xq" component={Info}></Route>  
//        </div>
//        </BrowserRouter>
//     )
// }
// }


//第三种query
class App extends React.Component{
  render (){
    return (
      <BrowserRouter>
      <div className="App">
         <ul>
           <li><Link to={{pathname:"/xq",state:{id:1}}}>第一件商品</Link></li>
           <li><Link to={{pathname:"/xq",state:{id:2}}}>第二件商品</Link></li>
           <li><Link to={{pathname:"/xq",state:{id:3}}}>第三件商品</Link></li>
         </ul>
         <hr>
         </hr>
         {/*详情信息展示 */}
         <Route path="/xq" component={Info}></Route>  
       </div>
       </BrowserRouter>
    )
}
}
export default App