import React from 'react';
import './App.css';
// import Home from './view/menu/home.js'
//父传子传值
// import Fu from '../src/view/menu/Fuzi/Fu'

//子传父传值
// import Fu from '../src/view/menu/Zifu/Fu'

//非父子传值
// import Fu from '../src/view/menu/Feifuzi/Fu'

// function App() {
//   return (
//     <div className="App">
//         <h1>999</h1>
//         <p>我是react</p>
//     </div>
//   );
// }
// class Mycom extends React.Component{
//   render(){
//     return (
//       <p>我是新建的mycom</p>
//     )
//   }
// }
class App extends React.Component{
  render(){
    return (
      <div>
        {/* <h1>999</h1> */}
       {/* <Mycom> </Mycom> */}
       {/* <Home></Home> */}

       {/* 父传子 */}
       {/* <Fu></Fu> */}

       {/* 子传父 */}
       {/* <Fu></Fu> */}

       {/* 非父子 */}
       {/* <Fu></Fu> */}
      </div>
      )
  }
}
// qs  转化post数据格式  
export default App;
