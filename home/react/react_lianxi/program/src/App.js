import React from 'react';
import './App.css';
// import Home from "./view/menu/home"
// import Login from "./view/menu/login"
// import Hook from "./view/menu/hook"
// import Luyou from "./view/menu/luyou"
import One from './view/menu/one'
import Two from './view/menu/two'
import Three from './view/menu/three'
//brower后缀/路由
// import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
//哈希模式后缀路径/#/路由
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
// import Home from './view/menu/home';
function App() {
  return (
    // <BrowserRouter>
    <HashRouter>

    <div className="App">
       {/* <Home></Home>
       <Login></Login>
       <Hook></Hook>
       <Luyou></Luyou> */}
      <div className="con">
        
        <Switch>
          <Route path="/One"><One></One></Route>
          <Route path="/Two"><Two></Two></Route>
          <Route path="/Three"><Three></Three></Route>
        </Switch>
      </div>

       <ul>
         <li><Link to="one">one</Link></li>
         <li><Link to="two">two</Link></li>
         <li><Link to="three">three</Link></li>
       </ul>
    </div>
      
       {/* </BrowserRouter> */}
1       </HashRouter>

  );
}
export default App;
